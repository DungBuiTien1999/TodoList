import React from 'react'

import TodoItem from './TodoItem'

export default function TodoList({ list, query, onItemDeleted }) {

  // const [items, setItems] = useState([
  //   { id: 1, title: 'Pay Bills', complete: true },
  //   { id: 2, title: '@vue/cli vs create-react-app', complete: false },
  //   { id: 3, title: 'vue-router vs react-router', complete: false },
  //   { id: 4, title: 'redux vs vuex', complete: false },
  //   { id: 5, title: 'learn FBM Platform', complete: false },
  // ])

  // const btnAdd_Clicked = function () {
  //   // const item = { id: 6, title: 'New Item', complete: false };
  //   // items.push(item);
  //   // alert(JSON.stringify(items));

  //   setItems([
  //     ...items,
  //     { id: Math.floor(Math.random() * 100) + 6, title: 'New Item', complete: false }
  //   ]);
  // }

  // const btnDel_Clicked = function () {
  //   alert('item deleted');
  // }

  const onItemDeletedHandler = function (itemId) {
    onItemDeleted(itemId);
  }

  return (
    <div>
      <h3>Todo</h3>
      <ul>
        {
          list
            .filter(item => item.title.toLowerCase().includes(query.toLowerCase()))
            .map(item => <TodoItem key={item.id} item={item} onItemDeleted={onItemDeletedHandler} />)
        }
      </ul>
      {/* <ul>
        {
          list
            .filter(item => item.title.toLowerCase().includes(query.toLowerCase()))
            .map(item =>
              <li key={item.id} className={item.complete ? 'done' : ''}>
                {item.title}
                {!item.complete && <button onClick={btnDel_Clicked}>Delete</button>}
              </li>
            )
        }
      </ul> */}
      {/* <button onClick={btnAdd_Clicked}>Add</button> */}
    </div>
  )
}

