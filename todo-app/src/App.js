import "./App.css";
import HomePage from "./components/HomePage.js";
import Dashboard from "./components/Dashboard.js";
import CreateTodo from "./components/CreateTodo";
import UpdateTodo from "./components/UpdateTodo";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TodoProvider } from "./context/Index.js";

function App() {
  return (
    <TodoProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/create" element={<CreateTodo />} />
          <Route exact path="/update" element={<UpdateTodo />} />
        </Routes>
      </BrowserRouter>
    </TodoProvider>
  );
}

export default App;
