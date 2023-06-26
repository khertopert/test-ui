import './App.css';
import {useState} from "react";
import { Test } from "./Test";

function App() {
  const [value, setValue] = useState('');
  
  const handleChange: React.ChangeEventHandler = e => {
    setValue((e.target as HTMLInputElement).value);
  };

  const testTemplateCilck: React.MouseEventHandler = _ => {
    alert(value);
  }

  const myTemplate1 = (counter: number) => {
    return (<>
      <h1>test template: {counter}</h1>
      <button data-testid={'templateButton' + counter} onClick={testTemplateCilck}>Test My Template</button>
    </>)
  }
 
  return (
    <>
      <div>
        <input data-testid="input" type="text" onChange={handleChange}></input>
      </div>
      <div>
        current value is: {value}
      </div>
      <div>
        <Test myTemplate={myTemplate1}>
          <span>my caption: </span>
          <button>test</button>
        </Test>
      </div>
    </>
  )
}

export default App
