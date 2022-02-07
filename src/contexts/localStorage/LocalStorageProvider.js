import { LocalStorageContext } from ".";

// Provider do LocalStorage, utilizado para pegar a LocalStorage Key e distribuir para os componentes

export const LocalStorageProvider = ({ children }) => {
  const LSKey = "game-posts";

  return (
    <LocalStorageContext.Provider value={{ LSKey }}>
      {children}
    </LocalStorageContext.Provider>
  );
};