
import initialData from '../Data/initialData'
import * as types from '../Actions/types';

const initialState = initialData;

export default function(state = initialState, action){

  switch(action.type){

    case types.TODOREORDER:{
      console.log('todo order');
      const newState = {
        ...state,
        columns: {
          ...state.columns,
          [action.column.columnId]: {
            ...state.columns.ToDo,
            todoIds: action.column.newColumn.todoIds.map(todoId => {return todoId})
          }
        }
      }
      return (newState);
    }

    case types.CHANGECOLUMN:{
      console.log('change column');
      return (action.newState)
    }

    case types.ADDTODO:{
      const newState = {
        ...state,
        todos:{
          ...state.todos,
          [action.newTodo.id]: action.newTodo
        },
        columns:{
          ...state.columns,
          ToDo:{
            ...state.columns.ToDo,
            todoIds: action.newTodoIds
          }
        }
      }
      return newState;
    }

    default: return state;
  }
}
