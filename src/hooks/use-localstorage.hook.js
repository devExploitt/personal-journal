import { useState, useEffect } from 'react';

export function useLocalStorage(key) {
  const [data, setData] = useState();

  useEffect(() => {
    const res = JSON.parse(localStorage.getItem(key));
    if (res) {
      setData(res);
    }
  }, [key]);

  const saveData = (newDAta) => {
    localStorage.setItem('data', JSON.stringify(newDAta));
    setData(newDAta);
  };

  return [data, saveData];
}
