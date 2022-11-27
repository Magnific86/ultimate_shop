import React, {createContext, useState, useEffect} from "react"
import axios from "axios"

const Context = createContext()


function Provider(props) {
    const [theme, setTheme] = useState("dark")
    const [login, setLogin] = useState(true)
    const [shop, setShop] = useState(false)
    const [basket, setBasket] = useState(false)
    const [loader, setLoader] = useState(false)
    const [name, setName] = useState("")
    const [items, setItems] = useState(() => {
        (async() => {
            setLoader(true)
            try {
              const response = await axios.get("https://fakestoreapi.com/products")
              const d = await response.data
              if(d) {
                setItems(d)
              }
            } catch(e) {
                console.error(e)
            } finally {
                setLoader(false)
            }
        })()
    })
    const [userlist, setUserlist] = useState(() => {
        let value = JSON.parse(localStorage.getItem("userlist"))
       if(!value) {
        return []
       }
       return value
    })


    useEffect(() => {
        if(login === true) {
            document.title = `Welcome`
        } else {
            document.title = `Hi, ${name && `${name},`} goods in the store: ${items && items.length}, goods in the cart: ${userlist && userlist.length}`
        }
    }, [login, name, items, userlist])

    useEffect(() => {
        localStorage.setItem("userlist", JSON.stringify(userlist))
    }, [userlist])

    function handleNameChange(e) {
        setName(e.target.value)
    }
    
    function handleChangeBasketShop() {
        setBasket(!basket)
        setShop(!shop)
    }

    function handleSignOut() {
        setShop(false)
        setBasket(false)
        setLogin(true)
        setName("")
    }

    function handleDeleteItem(id) {
        setUserlist(userlist.filter(u => u.id !== id))
    }

    function handleResetBasket() {
        setUserlist([])
    }


    function handleAddItem(item) {
        if(userlist.includes(item)) {
            return null
        } else if(!userlist.includes(item)) {
            setUserlist([...userlist, item])
        }
    }

    function handleShop() {
        setLogin(!login)
        setShop(!shop)
    }

    useEffect(() => {
        if(theme === "dark") {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }
    }, [theme])

    function handleTheme() {
        setTheme(theme === "dark" ? "light" : "dark")
    }

    return (<>
    <Context.Provider
    value={{
        theme, handleTheme, login, handleShop, basket, items, userlist, handleAddItem, handleResetBasket, handleDeleteItem,
        handleChangeBasketShop, handleSignOut, name, handleNameChange, shop
    }}
    >
        {props.children}
    </Context.Provider>
    </>)
}

export {Context, Provider}