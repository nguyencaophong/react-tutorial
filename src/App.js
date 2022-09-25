import {useState} from 'react'
import Content from './components/Content';

function App() {
  const [show, setShow] = useState(false);
  return (
    <div style={{padding:20}}>
      <button onClick={()=> setShow(!show)}>TOGGER</button>
      {show && <Content />}
    </div>
  )
}



export default App;
