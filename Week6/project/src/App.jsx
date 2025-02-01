import { useMemo, useState } from "react"

function App() {
  const [count, setCount] = useState(0);
  const [inputV, setInput] = useState(1);

  function fn(){
    setCount(count+1);
  }
  let sum = useMemo(() =>{
    return inputV*(inputV+1)/2;
  }, [inputV]) ;
  function fn1(e){
    setInput(Number(e.target.value));
  }
  return <>
    <input onChange={fn1}></input><br></br><br></br>
    <p>Sum is {sum}</p>
    <button onClick={fn}>Counter {count}</button>
  
  </>
} 

export default App