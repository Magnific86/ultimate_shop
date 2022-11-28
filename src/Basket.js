import React, {useContext} from 'react'
import { Context } from './Context'
import Item from './Item'
import Quantity from './Quantity'

export default function Basket() {
const {basket, userlist, handleResetBasket, handleDeleteItem, name, handleChangeBasketShop, getTotal} = useContext(Context)

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
                        <Quantity info={u}/>
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
         {getTotal() > 0 && <h1 className="text-3xl text-black dark:text-green-200 font-bold py-10"
              >Total: {getTotal()}</h1>}
              {getTotal() > 0 && <button className="mr-8 text-2xl text-black bg-slate-500 dark:bg-green-200 dark:text-slate-500 rounded-full px-4 py-2 mt-8"
               onClick={() => alert(`thanks for the purchase, ${getTotal()} dollars from you`)}>Buy</button>}
            <button onClick={() => handleResetBasket()}
            className="text-2xl bg-red-400 hover:bg-red-800 hover:underline text-white rounded-full px-4 py-2 mt-8"
            >Delete all</button> 
        </div>
      ) 
 }
}   
