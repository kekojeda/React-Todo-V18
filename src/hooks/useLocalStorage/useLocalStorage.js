import { useEffect, useState } from "react";

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const localStorageItems = localStorage.getItem(itemName);

    let parsedItem;
    if (localStorageItems) {
      parsedItem = JSON.parse(localStorageItems);
    } else {
      parsedItem = initialValue;
      localStorage.setItem(itemName, JSON.stringify(initialValue));
    }
  }, []);

  const saveItem = (newItem) => {
    setItem(newItem);
    localStorage.setItem(itemName, JSON.stringify(newItem));
  };

  return [item, saveItem];
}

export { useLocalStorage };
