import { useReducer} from 'react'


// ** Init state
const initState = {
  job:'',
  jobs:[]
}

// ** Actions
const SET_JOB = 'set_job'
const ADD_JOB = 'add_job'
const DELETE_JOB = 'delete_job'

const setJob = payload =>{
  return {
    type:SET_JOB,
    payload: payload
  }
}

// ** Reducer 
const Reducer = (state,action) =>{
  switch (action.type) {
    case SET_JOB:
      return {
        ...state,
        job:action.payload
      }
  
    default:
      throw new Error('Invalid action.');
  }
}

function App() {
  const [state,dispatch] = useReducer(Reducer,initState)
  const {job,jobs} = state;


  return (
    <div style={{padding:'20px 30px'}}>
      <h1>TODO LIST</h1>
      <input
       value={job}
       placeholder='Enter todo...'
       onChange={e => {
        dispatch(setJob(e.target.value))
       }}
       ></input>
      <button >Add</button>

     <ul>
        {jobs.map((value,index) =>(
          <li key={index}>{value} &times;</li>
        ))}
     </ul>
    </div>
  )
}



export default App;
