import React, { useEffect, useReducer } from 'react';

import TodoList from './components/TodoList';
import AddTask from './components/AddTask';
import SearchBar from './components/SearchBar';
import AppContext from './todoAppContext';
import reducer from './todoAppReducer';
import TYPE from './helper/actionType';
// import data from './helper/data';
import { axiosInstance } from './utils';

function App() {
  const initialState = {
    query: '',
    items: [],
  };

  const [store, dispatch] = useReducer(reducer, initialState);

  useEffect(function () {

    async function loadTasks() {
      const userId = 1;
      const res = await axiosInstance.get(`/tasks/${userId}`);
        dispatch({
        type: TYPE.INIT,
        payload: {
          items: res.data,
        },
      });
    }

    loadTasks();

    // setTimeout(function () {
    //   const items_from_backend = data;
    //   dispatch({
    //     type: TYPE.INIT,
    //     payload: {
    //       items: items_from_backend,
    //     },
    //   });
    // }, 300);
  }, []);

  return (
    <div className="container">
      <AppContext.Provider value={{ store, dispatch }}>
        <SearchBar initQuery="" />
        <TodoList />
        <AddTask initValue="New Item Title" />
      </AppContext.Provider>
    </div>
  );
}

export default App;
