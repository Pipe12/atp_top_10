import React, { useState } from 'react';
import Main from './Main';
import Title from '../components/Title';
import List from '../components/List';
import Button from '../components/Button';
import '../assets/styles/App.css';

import data from '../data';

function App() {
  const  [ topTenList, setTopTenList] = useState(data)

  function clearAll() {
    setTopTenList([])
  }

  return (
    <div className='App'>
      <Main>
        <Title title={'ATP TOP 10'} />
        <List birthdayList={topTenList} />
        <Button buttonText={'Clear All'} clearAll={clearAll} />
      </Main>
    </div>
  )
}

export default App;
