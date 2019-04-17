import store from '../store';
import initialData from '../Data/initialData'
import * as types from '../Actions/types';

const initialState = initialData;

export default function(state = initialState, action){
  console.log('reducer called, State: ', state);
  console.log('action', action.column);
  switch(action.type){
    case types.TODOREORDER:
      return ({
        ...state,
        columns: {
          ...state.columns,
          [action.column.columnId]: action.column.newColumn
        }
      })
    case types.CHANGECOLUMN:
      return ({
        ...state,
        columns:action.column
      })
    default: return state;
  }
}
