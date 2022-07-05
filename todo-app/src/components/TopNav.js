import "../App.css";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TodoContext } from "../context/Index";

export default function TopNav() {
  let navigate = useNavigate();
  const {contextState, setContextState} = useContext(TodoContext);

  function handleLogout() {
    setContextState({...contextState, userName: ""})
    //validation
    navigate("/");
  }

  return (
    <div className="navbar-top">
      <div>
        <h3>Simple ToDo</h3>
      </div>
      <div className="navbar-side">
        <h3 className="padding-right">{contextState.userName}</h3>
        <button className="log-out" onClick={handleLogout}>
          Log out
        </button>
      </div>
    </div>
  );
}
