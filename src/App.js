import React, { Component } from 'react';
import { Provider } from 'react-redux';

import './App.css';
import Header from './Components/header';
import { MainSection } from './Components/mainSection';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Header/>
          <MainSection/>
        </div>
      </Provider>
    );
  }
}

export default App;
