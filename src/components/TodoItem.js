import React, { useContext } from 'react';
import AppContext from '../todoAppContext';
import TYPE from '../helper/actionType';

export default function TodoItem({ item }) {
  const { dispatch } = useContext(AppContext);

  const btnDel_Clicked = function () {
    dispatch({
      type: TYPE.COMPLETE_TASK,
      payload: {
        itemId: item.id,
      },
    });
  };

  return (
    <li className={item.complete ? 'done' : ''}>
      {item.title}
      {!item.complete && <button onClick={btnDel_Clicked}>Delete</button>}
    </li>
  );
}
