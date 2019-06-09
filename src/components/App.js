import React from 'react';
import '../styles/App.css';
import Header from './Header';
import FilterForm from './FilterForm';
import EventCard from './EventCard';

export default class App extends React.Component {

  render() {
    return (
      <div className="App">
      <Header />
      <main>
        <FilterForm />
      </main>
    </div>
    );
  };
}
