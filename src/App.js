import React from 'react';
import './App.css';
import Header from './components/Header';
import Table from './components/Table';
import StarWarsProvider from './context/Provider';

function App() {
  return (
    <div>
      <StarWarsProvider>
        <Header />
        <Table />
      </StarWarsProvider>

    </div>
  );
}

export default App;
