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
      <div>
        <h3>Simple ToDo</h3>
      </div>
      <div className="navbar-side">
        <h3 className="padding-right">Username</h3>
        <button className="log-out" onClick={handleLogout}>
          Log out
        </button>
      </div>
    </div>
  );
}
