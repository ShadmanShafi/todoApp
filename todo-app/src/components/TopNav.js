import "../App.css";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TodoContext } from "../context/Index";

export default function TopNav() {
  let navigate = useNavigate();
  const { contextState, setContextState } = useContext(TodoContext);

  function handleLogout() {
    setContextState({ ...contextState, userName: "" });
    navigate("/");
  }

  return (
    <div className="navbar-top">
      <div>
        <h4>Simple ToDo</h4>
      </div>
      <div className="navbar-side">
        <h4 className="padding-right">{contextState.userName}</h4>
        <button className="log-out" onClick={handleLogout}>
          Log out
        </button>
      </div>
    </div>
  );
}
