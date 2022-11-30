import React, { useContext } from "react";
import { Context } from "./Context";

export default function DarkMode() {
  const { theme, handleTheme } = useContext(Context);

  return (
    <button
      className="text-2xl text-black bg-slate-500 dark:bg-green-200 dark:text-slate-500 rounded-full px-4 py-2 mt-8"
      onClick={() => handleTheme()}
    >
      {theme}
    </button>
  );
}
