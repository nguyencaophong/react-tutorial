import {useState} from 'react'
import CleanUp from './components/Cleanup';
import Content from './components/Content';
import PreviewAvater from './components/PreviewAvatar';
import Timer from './components/Timer';

function App() {
  const [show, setShow] = useState(false);
  return (
    <div style={{padding:20}}>
      <button onClick={()=> setShow(!show)}>TOGGER</button>
      {show && <PreviewAvater />}
    </div>
  )
}



export default App;
