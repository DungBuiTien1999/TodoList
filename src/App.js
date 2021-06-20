import React, { useEffect, useState } from 'react';

import TodoList from './components/TodoList';
import AddTask from './components/AddTask';
import SearchBar from './components/SearchBar';
import AppContext from './todoAppContext';

function App() {
  const [query, setQuery] = useState('');
  const [items, setItems] = useState([]);

  useEffect(function () {
    setTimeout(function () {
      const items_from_backend = [
        { id: 1, title: 'Pay Bills', complete: true },
        { id: 2, title: '@vue/cli vs create-react-app', complete: false },
        { id: 3, title: 'vue-router vs react-router', complete: false },
        { id: 4, title: 'redux vs vuex', complete: false },
        { id: 5, title: 'learn FBM Platform', complete: false },
      ];
      setItems(items_from_backend);
    }, 300);
  }, []);

  return (
    <div className="container">
      <AppContext.Provider value={{ items, setItems, query, setQuery }}>
        <SearchBar initQuery="" />
        <TodoList />
        <AddTask initValue="New Item Title" />
      </AppContext.Provider>
    </div>
  );
}

export default App;
