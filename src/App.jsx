import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import JournalAddButton from './components/JournalAddButton/JournalAddButton.jsx';
import JournalList from './components/JournalList/JournalList.jsx';
import Body from './layout/Body/Body.jsx';
import LeftPanel from './layout/LeftPanel/LeftPanel.jsx';
import JournalForm from './components/JournalForm/JournalForm.jsx';
import { useLocalStorage } from './hooks/use-localstorage.hook.js';
import { UserContext } from './context/user.context.jsx';
import { UserContextProvider } from './context/user.context.jsx';

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
    let mappedItems = mapItems(items);
    let nextId =
      mappedItems.length > 0
        ? Math.max(...mappedItems.map((i) => i.id)) + 1
        : 1;
    setItems([
      ...mapItems(items),
      {
        ...item,
        date: new Date(item.date),
        id: nextId
      }
    ]);
  };

  return (
    <UserContextProvider>
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
    </UserContextProvider>
  );
}

export default App;
