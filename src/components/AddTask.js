import React, { useState, useContext } from 'react';
import AppContext from '../todoAppContext';
import TYPE from '../helper/actionType';
import { axiosInstance } from '../utils';

export default function AddTask({ initValue }) {
  const [itemTitle, setItemTitle] = useState(initValue);

  const { dispatch } = useContext(AppContext);

  const btnAdd_Clicked = async function () {
    const newItem = {
      id: Math.floor(Math.random() * 100),
      title: itemTitle,
      complete: false,
    };

    const user_id = 1;
    const res = await axiosInstance.post('/tasks', {
      title: itemTitle,
      user_id,
    });

    if (res.status === 201) {
      dispatch({
        type: TYPE.ADD_ITEM,
        payload: newItem,
      });
    }
  };

  const txtItemTitle_Changed = function (e) {
    setItemTitle(e.target.value);
  };

  const txtItemTitle_KeyUp = function (e) {
    if (e.keyCode === 13) {
      btnAdd_Clicked();
    }
  };

  return (
    <div>
      <h3>Add Item</h3>
      {/* <p>{itemTitle}</p> */}
      <div className="fg">
        <input
          type="text"
          value={itemTitle}
          onChange={txtItemTitle_Changed}
          onKeyUp={txtItemTitle_KeyUp}
        />
        <button type="button" onClick={btnAdd_Clicked}>
          Add
        </button>
      </div>
    </div>
  );
}
