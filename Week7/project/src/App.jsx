import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom, evenSelector } from "./store/atoms/count";
import { useMemo } from "react";

function App() {
  return (<>
  <RecoilRoot>
    <Count />
  </RecoilRoot>
  </>)
}

function Count(){
  return <div>
    <CountRenderer/>
    <Buttons />
  </div>
}

function CountRenderer(){
  const count = useRecoilValue(countAtom);
  return <div> 
      {count}
      <Evendetector />
    </div> 

}

function Evendetector(){

  const isEven = useRecoilValue(evenSelector);
  return <div>
    {isEven? "Even Detected": "Odd detected"}
    </div>
}

function Buttons(){
  const setCount = useSetRecoilState(countAtom);
  return <div>

    <button onClick={()=>{
      setCount(count => count+1);
    }}>Increase</button>

    <button onClick={()=>{
      setCount(count => count-1);
    }}>Decrease</button>

  </div>
}

export default App