import React from 'react';
import './App.css';
import Form from './components/Form';
import Header from './components/Header';
import Table from './components/Table';
import StarWarsProvider from './context/Provider';

function App() {
  return (
    <div>
      <StarWarsProvider>
        <Header />
        <Form />
        <Table />
      </StarWarsProvider>

    </div>
  );
}

export default App;
