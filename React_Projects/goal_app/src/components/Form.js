import React,{useState} from 'react';
import './Form.css';
const Form = (props)=>{
  const [input, setInput]=useState('');
  const inputHandler=(event)=>{
    setInput(event.target.value);
  };
  const submitHandler=(event)=>{
    event.preventDefault();
    const goal=[input];
    props.sendData(goal);
    setInput('')
  };
  return(
    <form onSubmit={submitHandler}>
      <h3>Course Goal</h3>
      <input type="text" value={input} onChange={inputHandler} required/>
      <button type='submit'>Add Goal</button>
    </form>  
  );
};
export default Form;



