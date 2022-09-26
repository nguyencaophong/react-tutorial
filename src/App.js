import { useState, useMemo,useRef} from 'react'

function App() {
  const [name,setName] = useState('');
  const [price,setPrice] =useState('');
  const [products,setProduct] = useState([]);

  const nameRef = useRef()
  const handleSubmit = () =>{
    setProduct([...products,{
      name,
      price: parseInt(price)
    }])
    setName('')
    setPrice('')
    nameRef.current.focus()
  }
  
  // const total = products.reduce((result,prod) => {
  //   console.log('Tinh toan lai...');
  //   return result + prod.price
  // }, 0)

  const total = useMemo(()=>{
    const result = products.reduce((value,prod) =>{
      console.log('tinh toan lai...');
      return value + prod.price;
    },0)
    return result;
  },[products])

  return (
    <div style={{padding:'20px 30px'}}>
      <input 
        ref={nameRef}
        value={name}
        placeholder='Enter name...'
        onChange={e => setName(e.target.value)}
      ></input>
      <br />
      <input
        value={price}
        placeholder='Enter price...'
        onChange={e =>setPrice(e.target.value)}
      ></input>
      <br/>
      <button onClick={handleSubmit}>Add</button>
      <br />
        Total: {total}
        <ul>
          {products.map((value,index) =>(
            <li key={index}>{value.name} - {value.price}</li>
          ))}
        </ul>
    </div>
  )
}



export default App;
