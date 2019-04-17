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

export const columnChange = (newColumns) => dispatch => {dispatch({
  type: types.CHANGECOLUMN,
  newColumns: newColumns
})}
