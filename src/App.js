import React , {useState} from 'react';
import logo from "./logo.svg";
import "./App.css";

function App() {

  const [count,setCount] = useState(0);
  const increase =()=> setCount(count+1);
  const decrease =()=> setCount(count-1);

  return (
    <>
    <div className="whole">
      <p>Count : {count}</p>
      <button className='increase' onClick={increase}>Increament</button>
      <button className='decrease' onClick={decrease}>Decreament</button>
    </div>
    </>
  );
}

export default App;
