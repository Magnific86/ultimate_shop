import React, {useContext} from 'react'
import { Context } from './Context'

export default function Quantity(props) {
    const {handleAddQuantity, handleSubQuantity} = useContext(Context)
    const {info} = props

  return (
    <div>
        <button onClick={() => handleAddQuantity(info.id)}
                        className="text-2xl text-black bg-slate-500 dark:bg-green-200 dark:text-slate-500 rounded-full px-4 py-2 mt-8"
                        >+</button>
                        <h1 className="text-center align-center pt-4">{info.count}</h1>
   <button onClick={() => handleSubQuantity(info.id)}
                        className="text-2xl text-black bg-slate-500 dark:bg-green-200 dark:text-slate-500 rounded-full px-4 py-2 mt-8"
                        disabled={!info.count}>-</button>
    </div>
  )
}
