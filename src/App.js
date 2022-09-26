import { useReducer} from 'react'


// ** Init state
const initState = 0

// ** Actions
const UP_ACTION = 'up'
const DOWN_ACTION = 'down'

// ** Reducer 
const Reducer = (state,action) =>{
  switch (action) {
    case UP_ACTION:
      return state+1;
    case DOWN_ACTION:
      return state-1;
    default:
      throw new Error('Invalid action')
  }
}

function App() {
  const [count,dispatch] = useReducer(Reducer,initState)
  console.log('re-render');
  return (
    <div style={{padding:'20px 30px'}}>
      <h1>{count}</h1>

      <button 
      onClick={() => dispatch(DOWN_ACTION)}
      >DOWN</button>

      <button 
      onClick={() => dispatch(UP_ACTION)}
      >UP</button>
    </div>
  )
}



export default App;
