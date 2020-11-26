import React, { useState } from 'react';
import Main from './Main';
import Title from '../components/Title';
import List from '../components/List';
import Button from '../components/Button';
import '../assets/styles/App.css';

import data from '../data';

function App() {
  const  [ birthdayList, setBirthdayList] = useState(data)

  function clearAll() {
    setBirthdayList([])
  }

  return (
    <div className='App'>
      <Main>
        <Title title={'ATP TOP 10'} />
        <List birthdayList={birthdayList} />
        <Button buttonText={'Clear All'} clearAll={clearAll} />
      </Main>
    </div>
  )
}

export default App;
