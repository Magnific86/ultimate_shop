import React, { useContext } from "react";
import { Context } from "./Context";
import Item from "./Item";
import {ReactComponent as ReactLogoMark} from './mark.svg';
import {ReactComponent as ReactLogoLoader} from './loader.svg';


export default function Shop() {
  const { items, loader, handleAddItem, shop, userlist } = useContext(Context);

  console.log();

  if (shop) {
    return (
      <>
        <div className="flex flex-col ">
          <h1 className="text-5xl text-black dark:text-green-200 pb-8">Shop</h1>
          <div className="flex min-w-screen mx-2">
            <ul className="flex flex-wrap">
              {loader &&  <ReactLogoLoader className="w-60"/>}
              {items &&
                items.map((item) => (
                  <li className="w-1/3" key={item.id}>
                    <Item info={item} />
                    {userlist.find((u) => {
                      if (u.id === item.id) {
                        return true;
                      } else {
                        return false;
                      }
                    }) ? (
                     <ReactLogoMark className="w-10 mx-auto py-6"/>
                    ) : (
                      <button
                        onClick={() => handleAddItem(item)}
                        className="text-2xl hover:underline text-black bg-slate-500 dark:bg-green-200
                     dark:text-slate-500 rounded-full px-4 py-2 mt-8"
                      >
                        Add to cart
                      </button>
                    )}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </>
    );
  }
}
