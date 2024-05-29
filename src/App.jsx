import React from 'react'
import { useState,useCallback } from 'react';

const App = () => {

  const [length,setLength]=useState(8);
  const [numberAllowed,setNumberAllowed]=useState(false)
  const [charAllowed,setCharAllowed]=useState(false)  
  const [password,setPassword]=useState("")

  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if(numberAllowed) str+="0123456789"
    if(charAllowed) str+="!#$%&'()*+,-./:;<=>?@[]^_`{|}~"

  }
  ,[length,numberAllowed,charAllowed,setPassword])
  return (
    <div>=
      <div className='text-4xl  text-center text-white'>
        Password Generator
      </div>
    </div>
  )
}

export default App
