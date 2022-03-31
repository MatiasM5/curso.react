
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';



function App() {
  return (
    <>
      <Navbar></Navbar>
      <ItemListContainer greeting="App de React"/>
    </>
  );
}

export default App;
