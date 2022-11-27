import React, {useContext} from 'react'
import { Context } from './Context'
import Item from './Item'

export default function Shop() {
 const {items, loader, handleAddItem, shop} = useContext(Context)

if(shop) {
    return (<>
    <div className="flex flex-col ">
        <h1 className="text-5xl text-black dark:text-green-200 pb-8">Shop</h1>
        <div className="flex border min-w-screen mx-2">
        <ul className="flex flex-wrap">
            {loader && <h1 className="text-5xl text-center text-red-500 font-bold">Wait!!!</h1>}
            {items && items.map(item => (
                <li className="w-1/3" key={item.id}>
                    <Item info={item} />
                    <button onClick={() => handleAddItem(item)}
                    className="text-2xl hover:underline text-black bg-slate-500 dark:bg-green-200 dark:text-slate-500 rounded-full px-4 py-2 mt-8">
                        Add to cart</button>
                </li>
            ))}
        </ul>
        </div>
    </div>
    </>)
}

}
