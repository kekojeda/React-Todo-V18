import { useEffect, useState } from "react";

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItems = localStorage.getItem(itemName);
        let parsedItem;
        if (localStorageItems) {
          parsedItem = JSON.parse(localStorageItems);
          setItem(parsedItem);
        } else {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        }

        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    }, 90000);
  }, []);

  const saveItem = (newItem) => {
    setItem(newItem);
    localStorage.setItem(itemName, JSON.stringify(newItem));
  };

  return {
    item,
    saveItem,
    loading,
    error,
  };
}

export { useLocalStorage };
