import React, { useState } from 'react';
import './App.css';
import List from './List';
import Data from './Data';

function App() {

  const [people, setPeople] = useState(Data);
  return (
    <main>
      <section className='container'>
      <h2> {people.length} Birthday Today </h2>

      <List people ={people} />

      <button onClick={()=> setPeople([])} className='btn'>Clear All</button>
      </section>
    </main>
  );
}
export default App;
