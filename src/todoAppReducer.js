import TYPE from './helper/actionType';

const reducer = (state, action) => {
    // action = {type, payload}
    switch (action.type){
      case TYPE.INIT:
        return {
          ...state,
          items: action.payload.items
        }
      case TYPE.ADD_ITEM:
        return {
          ...state,
          items: [...state.items, action.payload]
        }
      case TYPE.UPDATE_QUERY:
        return {
          ...state,
          query: action.payload.query
        }
      case TYPE.COMPLETE_TASK:
        return {
          ...state,
          items: state.items.map(task => task.id === action.payload.itemId ? { ...task, complete: true } : task)
        }

      default:
        return state;
    }
  };

  export default reducer;