import { useState } from "react";
import { LocalStorageContext } from ".";

export const LocalStorageProvider = ({ children }) => {
  const LSKey = "game-posts";

  return (
    <LocalStorageContext.Provider value={{ LSKey }}>
      {children}
    </LocalStorageContext.Provider>
  );
};