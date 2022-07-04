import "../App.css";
import { useContext } from "react";
import { UsernameContext } from "./UsernameContext.js";
import { useNavigate } from "react-router-dom";

export default function TopNav(props) {
  const username = useContext(UsernameContext);
  let navigate = useNavigate();

  function handleLogout() {
    //validation
    navigate("/");
  }

  return (
    <div className="navbar-top">
      <h3 className="titlesimple">Simple ToDo</h3>
      <h3>Username</h3>
      <button className="log-out" onClick={handleLogout}>
        Log out
      </button>
    </div>
  );
}
