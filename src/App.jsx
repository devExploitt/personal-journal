import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import JournalAddButton from './components/JournalAddButton/JournalAddButton.jsx';
import JournalList from './components/JournalList/JournalList.jsx';
import Body from './layout/Body/Body.jsx';
import LeftPanel from './layout/LeftPanel/LeftPanel.jsx';
import JournalForm from './components/JournalForm/JournalForm.jsx';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('data'));
    if (data) {
      setItems(
        data.map((item) => ({
          ...item,
          date: new Date(item.date)
        }))
      );
    }
  }, []);

  useEffect(() => {
    if (items.length) {
      console.log('zapis');
      console.log(JSON.parse(localStorage.getItem('data')));
      localStorage.setItem('data', JSON.stringify(items));
    }
  }, [items]);

  const addItem = (item) => {
    setItems((oldItems) => [
      ...oldItems,
      {
        id:
          oldItems.length > 0 ? Math.max(...oldItems.map((i) => i.id)) + 1 : 1,
        title: item.title,
        post: item.post,
        date: new Date(item.date)
      }
    ]);
  };

  return (
    <div className="app">
      <LeftPanel>
        <Header />
        <JournalAddButton />
        <JournalList items={items} />
      </LeftPanel>

      <Body>
        <JournalForm onSubmit={addItem} />
      </Body>
    </div>
  );
}

export default App;
