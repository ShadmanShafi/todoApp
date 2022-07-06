import "../App.css";
import { useState, useContext } from "react";
import { TodoContext } from "../context/Index";
import { useNavigate } from "react-router-dom";
import TopNav from "./TopNav";
import Footer from "./Footer";
import BackButton from "./BackButton";

export default function CreateTodo() {
  let navigate = useNavigate();
  const { contextState, setContextState } = useContext(TodoContext);
  const [title, setTitle] = useState("");
  const [descripton, setDescription] = useState("");

  function handleTitleChange(e) {
    setTitle(e.target.value);
    console.log(contextState.todos);
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

    setContextState({
      ...contextState,
        
    })
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
            value={title}
            onChange={handleTitleChange}
          ></input>
          <h6 className="create-error create-element">Title is required</h6>
          <h5 className="create-element">Description</h5>
          <textarea
            className="create-input create-description"
            placeholder="Enter description here"
            onChange={handleDescriptionChange}
          ></textarea>
          <button className="submit-newtodo-btn">
            Create
          </button>
        </div>
      </form>
    </>
  );
}
