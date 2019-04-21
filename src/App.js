import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import Header from './Components/header';
import  MainSection  from './Components/mainSection';
import AddTodo from './Components/addTodo';
// import store from './store';

class App extends Component {
  render() {
    return (
       <Provider store={store}>
        <div>
          <Header/>
          <AddTodo/>
          <MainSection/>
        </div>
       </Provider>
    );
  }
}

export default App;
