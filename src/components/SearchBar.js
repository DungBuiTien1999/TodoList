import React, { useState, useContext, useEffect } from 'react';
import AppContext from '../todoAppContext';
import TYPE from '../helper/actionType';

export default function SearchBar({ initQuery }) {
  const [term, setTerm] = useState(initQuery);

  const { dispatch } = useContext(AppContext);

  useEffect(() => {
    dispatch({
      type: TYPE.UPDATE_QUERY,
      payload: {
        query: term
      }
    })
  }, [term, dispatch]);

  const txtTerm_Changed = function (e) {
    setTerm(e.target.value);
  };

  const btnClear_Clicked = function () {
    setTerm(initQuery);
  };

  const txtTerm_KeyUp = function (e) {
    if (e.keyCode === 27) {
      btnClear_Clicked();
    }
  };

  return (
    <div>
      <label style={{ fontWeight: 'bold' }}>
        Filter tasks (by name)
        <div className="fg">
          <input
            type="text"
            value={term}
            onChange={txtTerm_Changed}
            onKeyUp={txtTerm_KeyUp}
          />
          <button type="button" onClick={btnClear_Clicked}>
            Clear
          </button>
        </div>
      </label>
    </div>
  );
}
