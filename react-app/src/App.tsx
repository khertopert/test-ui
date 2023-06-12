import './App.css';
import {useState} from "react";
import { Test } from "./Test";

function App() {
  const [value, setValue] = useState('');
  
  const handleChange: React.ChangeEventHandler = e => {
    setValue((e.target as HTMLInputElement).value);
  };
 
  return (
    <>
      <div>
        <input type="text" onChange={handleChange}></input>
      </div>
      <div>
        current value is: {value}
      </div>
      <div>
        <Test></Test>
      </div>
    </>
  )
}

export default App
