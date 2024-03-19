import { createContext } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);
const StoreContextProvider = (probs) => {
  const contextValue = {
    food_list,
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {probs.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
