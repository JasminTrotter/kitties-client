import React from 'react';
import '../styles/App.css';
import Header from './Header';
import FilterByCity from './FilterByCity/FilterByCity';
import {Provider} from 'react-redux';
import store from '../store';

export default class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
         <div className="App">
            <Header />
            <main>
              <FilterByCity />
            </main>
          </div>
      </Provider>
    );
  };
}
