import React, { createContext } from "react";
import App from "./App";
export const MyContext = createContext();
export default function Root() {
  const [state, setState] = useState({
    loggedin: false,
    token: null,
    name: null,
  });

  const value = { state, setState };

  return (
    <MyContext.Provider value={value}>
      <App />
    </MyContext.Provider>
  );
}
