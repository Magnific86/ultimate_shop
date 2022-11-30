import React, { useContext } from "react";
import { Context } from "../Context";

export default function ButtonSignOut() {
  const { handleSignOut, basket, shop } = useContext(Context);

  if (shop || basket) {
    return (
      <button
        onClick={handleSignOut}
        className="text-2xl text-black bg-slate-500 dark:bg-green-200 dark:text-slate-500 rounded-full px-4 py-2 mt-8"
      >
        SignOut
      </button>
    );
  }
}
