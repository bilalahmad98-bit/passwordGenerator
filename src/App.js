import { useState } from 'react';
import './App.css';

function App() {
const [length,setLength]=useState(0);
const [password,setpassword]=useState('');

const generatePassword=()=>{
  const characters='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*_+';
  let pass='';
  if(length===0){
    return;
  }else{
    for(let i=1;i<=length;i++){
      const random=Math.round(Math.random()*characters.length);
      pass+=characters[random];
  
    }
    return pass;
  }
 
  
}

const onPress=(e)=>{
  e.preventDefault();
  setpassword(generatePassword(length));
}

  return (
   <div className='form'>
    <h2 style={{transform:'translateY(-30px)'}}>Random Password Generator</h2>

  <span  style={{marginBottom:'30px'}}>

  <input type='number' onChange={(e)=>{setLength(e.target.value)}} ></input>
  <button  onClick={onPress}>Generate</button> 
   </span>  

  <span className='pass'>{password}</span>
   </div>
  );
}

export default App;
