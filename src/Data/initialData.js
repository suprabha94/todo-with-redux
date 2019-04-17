const initialData ={
  todos: {
    'todo-1': {id:'todo-1', title:'Take out the garbage', status:'ToDo', completed:false},
    'todo-2': {id:'todo-2', title:'Watch my fav show', status:'ToDo', completed:false},
    'todo-3': {id:'todo-3', title:'Charge my phone', status:'ToDo', completed:false},
    'todo-4': {id:'todo-4', title:'Cook dinner', status:'ToDo', completed:false},
  },
  columns: {
    'ToDo': {id:'ToDo', title: 'TO DO', todoIds: ['todo-1','todo-2','todo-4','todo-3']},
    'In-progress': {id:'In-progress', title: 'TO DO', todoIds: []},
    'Done': {id:'Done', title: 'TO DO', todoIds: []},
  },
  columnOrder: ['ToDo','In-progress','Done'],
  
}

export default initialData;
