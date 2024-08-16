import { createContext } from "react";

export const AppContext = createContext();

const ContextProvider = (props) => {
  const phone = "+91- 9876543211";
  // const name  = "Akash"

  return (
    <AppContext.Provider value={phone}>
        {props.children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
