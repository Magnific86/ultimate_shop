import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const Context = createContext();

function Provider(props) {
  const [theme, setTheme] = useState("dark");
  const [login, setLogin] = useState(true);
  const [shop, setShop] = useState(false);
  const [basket, setBasket] = useState(false);
  const [loader, setLoader] = useState(true);
  const [name, setName] = useState("");
  const [items, setItems] = useState(() => {
    (async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        const d = await response.data;
        if (d) {
          setItems(d);
        }
      } catch (e) {
        setLoader(false)
        console.error(e);
      } finally {
         setLoader(false);
      }
    })();
  });
  const [userlist, setUserlist] = useState(() => {
    console.log(JSON.parse(localStorage.getItem("userlist")));
    if (!localStorage.getItem("userlist")) {
      return [];
    } else if (localStorage.getItem("userlist")) {
      console.log(JSON.parse(localStorage.getItem("userlist")));
      return JSON.parse(localStorage.getItem("userlist"));
    }
  });

  useEffect(() => {
    if (login) {
      document.title = `Welcome`;
    } else {
      document.title = `Hi, ${name && `${name},`} goods in the store: ${
        items && items.length
      }, goods in the cart:  ${userlist && userlist.length}`;
    }
  }, [login, name, items, userlist]);

  useEffect(() => {
    localStorage.setItem("userlist", JSON.stringify(userlist));
  }, [userlist]);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleChangeBasketShop() {
    setBasket(!basket);
    setShop(!shop);
  }

  function handleSignOut() {
    setShop(false);
    setBasket(false);
    setLogin(true);
    setName("");
  }

  function handleDeleteItem(id) {
    setUserlist(userlist.filter((u) => u.id !== id));
  }

  function handleResetBasket() {
    setUserlist([]);
  }

  function getTotal() {
    return userlist.reduce((acc, curr) => acc + curr.count * curr.price, 0);
  }

  function handleAddItem(item) {
    setUserlist([...userlist, { ...item, count: 1 }]);
  }

  function handleAddQuantity(id) {
    setUserlist((userlist) => {
      return userlist.map((u) => {
        if (u.id === id) {
          return { ...u, count: u.count + 1 };
        } else return u;
      });
    });
  }

  function handleSubQuantity(id) {
    setUserlist((userlist) => {
      return userlist.map((u) => {
        if (u.id === id && u.count > 0) {
          return { ...u, count: u.count - 1 };
        } else return u
      });
    });
  }

  function handleShop() {
    setLogin(!login);
    setShop(!shop);
  }

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  function handleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <>
      <Context.Provider
        value={{
          theme,
          handleTheme,
          login,
          handleShop,
          basket,
          items,
          userlist,
          handleAddItem,
          handleResetBasket,
          handleDeleteItem,
          handleChangeBasketShop,
          handleSignOut,
          name,
          handleNameChange,
          shop,
          handleAddQuantity,
          handleSubQuantity,
          getTotal,
          loader,
        }}
      >
        {props.children}
      </Context.Provider>
    </>
  );
}

export { Context, Provider };
