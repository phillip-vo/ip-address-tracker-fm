import { useState } from "react";
import { createContext } from "react";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [data, setData] = useState({});
  const [requestUrl, setRequestUrl] = useState("");

  return (
    <AppContext.Provider value={{ data, setData, requestUrl, setRequestUrl }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
