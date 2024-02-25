import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0)
  let cout =0;
  const counterAdd = () =>{
    if(count<100){
    count= count + 1;
    setCount(count);}
    else{
      alert("Value Can Not Increase more then 20");
    }
  }
 
  const counterRemove = () =>{
    if(count==0){
      alert("Value Can Not Decrease less then 0");
    }
    else{
    count= count - 1;
    setCount(count);}
  }

  return (
    <>
      <h1>Counter</h1>
      <h2>{count}</h2>
      <button onClick={counterAdd}>Add Value</button>
      <button onClick={counterRemove}>Remove Value</button>
    </>
  )
}

export default App
