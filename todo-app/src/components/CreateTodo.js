import "../App.css";
import { useContext } from "react";
import { TodoContext } from "../context/Index";
import { useNavigate } from "react-router-dom";
import TopNav from "./TopNav";
import Footer from "./Footer";
import BackButton from "./BackButton";

export default function CreateTodo() {
  let navigate = useNavigate();
  const { contextState, setContextState } = useContext(TodoContext);

  function handleTitleChange(e) {
    setContextState({
      ...contextState,
      todos: {
        id: 1,
        title: e.target.value,
        description: "desc",
        isCompleted: "false",
        createdAt: "n0w",
      },
    });
  }

  function handleDescriptionChange(e) {
    setContextState({
      ...contextState,
      todos: {
        id: 3,
        title: "Yo",
        description: e.target.value,
        isCompleted: "false",
        createdAt: "n0w",
      },
    });
  }

  //const isTitleValid

  function handleFormSubmit(e) {
    e.preventDefault();

    //Validate
    navigate("/dashboard");
  }

  return (
    <>
      <TopNav />
      <BackButton />
      <Footer />
      <h4 className="dashboard-body">Create new Todo</h4>
      <form onSubmit={handleFormSubmit}>
        <div className="create-todo-body">
          <h5 className="create-element">Title</h5>
          <input
            className="create-input"
            placeholder="Enter title here"
            onChange={handleTitleChange}
          ></input>
          <h6 className="create-error create-element">Title is required</h6>
          <h5 className="create-element">Description</h5>
          <textarea
            className="create-input create-description"
            placeholder="Enter description here"
            onChange={handleDescriptionChange}
          ></textarea>
          <button className="submit-newtodo-btn">Create</button>
        </div>
      </form>
    </>
  );
}
