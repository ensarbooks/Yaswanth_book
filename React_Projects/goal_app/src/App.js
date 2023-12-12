import React,{useState} from 'react';
import Form from './components/Form';
import './App.css';
import Block from './components/Block';

const dummyData=[
  'Do all exercises!',
  'Finsh the Course!'
];

function App() {

  const [goals,addGoals]=useState(dummyData);

  const getData=(data)=>{
    addGoals(event=>[data,...event]);
  };

  return (
    <div>
    <div className='form' >
      <Form sendData={getData}/>
    </div>
    <Block goals={goals}/>
    </div>
  );
}

export default App;





