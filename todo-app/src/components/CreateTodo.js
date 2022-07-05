import "../App.css";
import TopNav from "./TopNav";
import Footer from "./Footer";
import BackButton from "./BackButton";
import { useNavigate } from "react-router-dom";

export default function CreateTodo() {
  return (
    <>
      <TopNav />
      <BackButton />
      <Footer />
      <h4 className="dashboard-body">Create new Todo</h4>
      <form>
        <div className="create-todo-body">
          <h5 className="create-element">Title</h5>
          <input
            className="create-input"
            placeholder="Enter title here"
          ></input>
          <h6 className="create-error create-element">Title is required</h6>
          <h5 className="create-element">Description</h5>
          <textarea
            className="create-input create-description"
            placeholder="Enter description here"
          ></textarea>
          <button className="submit-newtodo-btn">Create</button>
        </div>
      </form>
    </>
  );
}
