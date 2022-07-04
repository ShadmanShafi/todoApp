import "./App.css";
import StartingPage from "./components/StartingPage.js";
import Dashboard from "./components/Dashboard.js";
import CreateTodo from "./components/CreateTodo";
import UpdateTodo from "./components/UpdateTodo";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UsernameProvider } from "./components/StartingPage";

function App() {
  return (
    <UsernameProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<StartingPage />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/create" element={<CreateTodo />} />
          <Route exact path="/update" element={<UpdateTodo />} />
        </Routes>
      </BrowserRouter>
    </UsernameProvider>
  );
}

export default App;
