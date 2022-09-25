import { useEffect, useState } from "react";



function Timer(){
    const[coutdown,setCountdown] = useState(60);

    // ** Cach 1:
    useEffect(()=>{
        const timer = setInterval(() =>{
            setCountdown(pre => pre -1);
            console.log('Countdonw',coutdown);
        } ,1000)

        return () => clearInterval(timer)
    },[])

    // ** Cach 2:
    // useEffect(()=>{
    //     setTimeout(() =>{
    //         setCountdown(pre => pre -1);
    //     } ,1000)
    // },[coutdown])

    return (
        <div>
            <h1>{coutdown}</h1>
        </div>
    )
}

export default Timer