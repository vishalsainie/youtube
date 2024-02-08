"use client";
import React, { createContext } from "react";
export const myContext = createContext();

const Context = ({ children }) => {
  const username = "Vishal Saini";
  return (
    <div>
      <myContext.Provider value={username}>{children}</myContext.Provider>
    </div>
  );
};
export default Context;
