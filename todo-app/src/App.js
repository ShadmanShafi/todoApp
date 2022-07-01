import "./App.css";
import Login from "./components/LandingPage.js";
import Dashboard from "./components/Dashboard.js";
import CreateTodo from "./components/CreateTodo";
import UpdateTodo from "./components/UpdateTodo";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

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
      <main>
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/dashboard" element={<Dashboard />}/>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
