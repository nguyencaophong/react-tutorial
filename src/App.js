import {useEffect, useRef,useState} from 'react'

function App() {
  const [count,setCount] = useState(60);
  const timerId = useRef();
  const preCount = useRef();

  useEffect(() =>{
    preCount.current = count;
  },[count])

  const handleStart = () =>{
    timerId.current = setInterval(()=>{
      setCount(pre=> pre - 1)
    },1000)
    console.log('Start => ',timerId.current);
  }

  const handelStop = ()=>{
    clearInterval(timerId.current);
    console.log('Stop =>',timerId.current);
  }

  console.log(count, preCount.current);

  return (
    <div style={{padding:20}}>
      <h1>{count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handelStop}>Stop</button>
    </div>
  )
}



export default App;
