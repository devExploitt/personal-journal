import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import JournalAddButton from './components/JournalAddButton/JournalAddButton.jsx';
import JournalList from './components/JournalList/JournalList.jsx';
import Body from './layout/Body/Body.jsx';
import LeftPanel from './layout/LeftPanel/LeftPanel.jsx';
import JournalForm from './components/JournalForm/JournalForm.jsx';
import { useLocalStorage } from './hooks/use-localstorage.hook.js';

function mapItems(items) {
  if (!items) {
    return [];
  }
  return items.map((i) => ({
    ...i,
    date: new Date(i.date)
  }));
}

function App() {
  const [items, setItems] = useLocalStorage('data');

  const addItem = (item) => {
    setItems([
      ...mapItems(items),
      {
        id: items.length > 0 ? Math.max(...items.map((i) => i.id)) + 1 : 1,
        title: item.title,
        date: new Date(item.date),
        post: item.post
      }
    ]);
  };

  return (
    <div className="app">
      <LeftPanel>
        <Header />
        <JournalAddButton />
        <JournalList items={mapItems(items)} />
      </LeftPanel>

      <Body>
        <JournalForm onSubmit={addItem} />
      </Body>
    </div>
  );
}

export default App;
