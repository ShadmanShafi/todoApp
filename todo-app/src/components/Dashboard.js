import "../App.css";
import TopNav from "./TopNav.js";
import Footer from "./Footer.js";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  let navigate = useNavigate();

  function handleCreateTodo() {
    navigate("/create");
  }

  function handleUpdateTodo() {
    navigate("/update");
  }

  return (
    <>
      <TopNav />
      <Footer />
      <div className="dashboard-body">
        <h4>My ToDos</h4>
        <button
          className="create-new padding-update"
          onClick={handleUpdateTodo}
        >
          Update
        </button>
        <button className="create-new" onClick={handleCreateTodo}>
          Create new
        </button>
      </div>
      <div className="dashboard-list-item">
        <p>1.</p>
        <p className="padding-text">First Todo</p>
        <p className="padding-date">Date</p>
        <p className="padding-box">Box</p>
        <button class="tick"></button>
      </div>
    </>
  );
}
