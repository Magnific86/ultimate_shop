import React from 'react'
import { Provider } from './Context'
import DarkMode from './DarkMode'
import Login from './Login'
import Shop from './Shop'
import Basket from './Basket'
import ButtonBasket from './Buttons/ButtonBasket'
import ButtonShop from './Buttons/ButtonShop'
import ButtonSignOut from './Buttons/ButtonSignOut'


export default function App() {


  return (
    <>
    <div className="bg-green-200 dark:bg-slate-500 min-h-max flex flex-col justify-between font-mainfont">
        <Provider>
          <div className="justify-self-start flex justify-between">
            <DarkMode />
            <ButtonBasket />
            <ButtonShop />
            <ButtonSignOut />
            </div>
            <div className=" mx-auto text-center py-16 min-h-screen flex">
            <Login />
            <Shop />
            <Basket />
            </div>
        </Provider>
    </div>
    </>
  )
}
