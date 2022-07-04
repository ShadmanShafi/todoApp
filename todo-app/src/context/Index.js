import React, { createContext, useState } from "react";

const initialState = {
  userName: null,
  todos: [],
};

const TodoContext = createContext({
  ...initialState,
});

function TodoProvider(props) {
  const [state, setState] = useState(initialState);

  const setUsername = (name) => {
    setState({
      ...state,
      userName: name,
    });
  };

  return (
    <TodoContext.Provider value={{ ...state, setUsername }}>
      {props.children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
