import React, {useContext} from 'react'
import { Context } from './Context'
import Item from './Item'
import useTotal from './useTotal'

export default function Basket() {
const {basket, userlist, handleResetBasket, handleDeleteItem, name, handleChangeBasketShop} = useContext(Context)
const {total, more, less} = useTotal()

 if(basket) {
    return (
        <div>
            <h1 className="text-5xl text-black dark:text-green-200 pb-8">
                Hello, {name && `${name},`}
            </h1>
            <ul>
                {userlist.length === 0 && <h1 onClick={handleChangeBasketShop} 
                className="text-5xl text-black font-bold dark:text-green-200 hover:underline">Add first item</h1>}
                {userlist && userlist.map(u => (
                    <li key={u.id}>
                        <Item info={u} />
                        <div className="flex justify-center">
                        <div className="pr-10">
                        <button onClick={() => more(total)}
                        className="text-2xl text-black bg-slate-500 dark:bg-green-200 dark:text-slate-500 rounded-full px-4 py-2 mt-8"
                        >+</button>
                        <h1 className="text-center align-center pt-4">{total}</h1>
                        <button onClick={() => less(total)}
                        className="text-2xl text-black bg-slate-500 dark:bg-green-200 dark:text-slate-500 rounded-full px-4 py-2 mt-8"
                        >-</button>
                        </div>
                        <div className="flex align-center justify-center px-0">
                    <button onClick={() => handleDeleteItem(u.id)}
                    className="text-2xl text-black bg-red-300 hover:underline dark:text-red-500 hover:text-white hover:bg-red-800 rounded-full px-4 py-2 mt-8"
                    >Delete</button>
                    </div>
                    </div>
                    </li> 
                ))}
            </ul>
            <button onClick={() => handleResetBasket()}
            className="text-2xl bg-red-400 hover:bg-red-800 hover:underline text-white rounded-full px-4 py-2 mt-8"
            >Delete all</button>
        </div>
      )
 }
}
