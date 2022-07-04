import React, { createContext } from "react";

const UsernameContext = createContext();

function UsernameProvider(props) {
  const username = "Mr. abc";

  return (
    <UsernameContext.Provider value={username}>
      {props.children}
    </UsernameContext.Provider>
  );
}

export { UsernameContext, UsernameProvider };
