import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
//import rootReducer from './Reducers';
import todoReducer from './Reducers/todoReducer';
import initialData from './Data/initialData';

const initialState = initialData;
const middleware = [thunk];
const store = createStore(todoReducer,initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
