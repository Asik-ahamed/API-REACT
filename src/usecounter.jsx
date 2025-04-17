import {useState, useCallback} from 'react'


function usecounter(initialvalue=0) {
    const [count,setcount] = useState(initialvalue)
    const increment = useCallback(()=>setcount((prev)=>prev+1),[])
    const decrement = useCallback(()=>setcount((prev)=>prev-1),[])
    const reset = useCallback(()=>setcount(initialvalue),[initialvalue])
    
  return{count, increment, decrement, reset}
}

export default usecounter;