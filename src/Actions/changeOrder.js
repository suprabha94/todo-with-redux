import * as types from './types';

export const orderChange = (newColumn,columnId) => dispatch => {
  //console.log("action creater");
  dispatch({
  type: types.TODOREORDER,
  column:{
    columnId: columnId,
    newColumn: newColumn
  }
})};

export const columnChange = (newState) => dispatch => {dispatch({
  type: types.CHANGECOLUMN,
  newState: newState
})}

export const addTodo = (newTodo, newTodoIds) => dispatch => {dispatch({
  type: types.ADDTODO,
  newTodo: newTodo,
  newTodoIds: newTodoIds
})}
