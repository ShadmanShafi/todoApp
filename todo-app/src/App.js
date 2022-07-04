import "./App.css";
import StartingPage from "./components/StartingPage.js";
import Dashboard from "./components/Dashboard.js";
import CreateTodo from "./components/CreateTodo";
import UpdateTodo from "./components/UpdateTodo";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// <nav>
//   <ul>
//     <li><Link to="/">Login</Link></li>
//     <li><Link to="/dashboard">Dashboard</Link></li>
//     <li><Link to="/create-todo">CreateTodo</Link></li>
//     <li><Link to="/update-todo">UpdateTodo</Link></li>
//   </ul>
// </nav>
// <Route path="/create-todo" element={<CreateTodo />}/>
// <Route path="/update-todo" element={<UpdateTodo />}/>
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<StartingPage />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
