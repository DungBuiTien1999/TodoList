import React, { useContext } from 'react';
import AppContext from '../todoAppContext';

export default function TodoItem({ item }) {

  const { items, setItems } = useContext(AppContext);

  const btnDel_Clicked = function () {
    const newItems = items.map(task => task.id === item.id ? { ...task, complete: true } : task);
    setItems(newItems);
  };

  return (
    <li className={item.complete ? 'done' : ''}>
      {item.title}
      {!item.complete && <button onClick={btnDel_Clicked}>Delete</button>}
    </li>
  );
}
