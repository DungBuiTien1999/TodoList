import React, { useContext } from 'react';

import TodoItem from './TodoItem';
import AppContext from '../todoAppContext';

export default function TodoList(props) {
  
  const { items: list, query } = useContext(AppContext);

  return (
    <div>
      <h3>Todo</h3>
      <ul>
        {list
          .filter((item) =>
            item.title.toLowerCase().includes(query.toLowerCase())
          )
          .map((item) => (
            <TodoItem key={item.id} item={item} />
          ))}
      </ul>
    </div>
  );
}
