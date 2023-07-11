import { useState } from "react";
import { Test } from "../Test";
import { useDispatch } from "react-redux";
import { increase } from "../state/slice/counter-slice";

export default function FirstPage() {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  console.log("first page render");
  
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

  const addCounter = () => {
    dispatch(increase(1));
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
          <button onClick={addCounter}>test</button>
        </Test>
      </div>
    </>
  )
}