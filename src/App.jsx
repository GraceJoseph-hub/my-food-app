// import { useState } from 'react'
import './App.css'
import Header from './components/layouts/Header';
import Meals from './components/meals/Meals';

function App() {

  return (
    <>
      <Header />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App
