import "../App.css";
import { useNavigate } from "react-router-dom";

export default function TopNav() {
  let navigate = useNavigate();

  function handleLogout() {
    navigate("/");
  }

  return (
    <div className="navbar-top">
      <h3 className="titlesimple">Simple ToDo</h3>
      <h3>User Name</h3>
      <button className="log-out" onClick={handleLogout}>
        Log out
      </button>
    </div>
  );
}
