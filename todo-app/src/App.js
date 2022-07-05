import "./App.css";
import StartingPage from "./components/StartingPage.js";
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
          <Route exact path="/" element={<StartingPage />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/create" element={<CreateTodo />} />
          <Route exact path="/update" element={<UpdateTodo />} />
        </Routes>
      </BrowserRouter>
    </TodoProvider>
  );
}

export default App;
