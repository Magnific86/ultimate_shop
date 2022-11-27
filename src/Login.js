import React, {useContext, useRef, useEffect} from 'react'
import {Context} from "./Context"

export default function Login() {
    const {login, handleShop, handleNameChange} = useContext(Context)
    const inputRef = useRef()

    useEffect(() => {
      inputRef.current.focus()
  }, [])

    if(login) {
  return (
    <div className="min-h-screen flex flex-col">
      <h1 className="text-5xl text-black dark:text-green-200 font-bold py-16">Welcome</h1>
       <label htmlFor="name"
         className="text-5xl text-black dark:text-green-200 font-bold py-16"
         >Fill in name here</label>
         <input placeholder='not necessary'
         onChange={(e) => handleNameChange(e)}
         ref={inputRef} id="name" type="text" 
         className="bg-transparent text-black dark:text-green-200 outline-none border-b text-3xl mb-8 border-black"/>
        <button className="text-3xl text-black bg-slate-500 dark:bg-green-200 dark:text-slate-500 rounded-full px-6 py-3"
         onClick={() => handleShop()}>Start shopping</button>
    </div>
  )
    }
}
