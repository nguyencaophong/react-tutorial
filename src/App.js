import {useContext} from 'react'
import {ThemeContext} from './Provider/ThemeProvider'
import './App.css'

function App(){
  const value = useContext(ThemeContext);
  return (
        <div style = {{padding:20}}>
          <button onClick={value.handleClick}>Togger theme</button>
        </div>
  )
}

export default App;