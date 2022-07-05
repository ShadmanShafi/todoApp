import React, { createContext, useState } from "react";

const TodoContext = createContext({});

function TodoProvider(props) {
  const [contextState, setContextState] = useState({
    userName: "",
    todos: [],
  });

  return (
    <TodoContext.Provider value={{ contextState, setContextState }}>
      {props.children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
