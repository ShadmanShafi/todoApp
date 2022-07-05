import "../App.css";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TodoContext } from "../context/Index";

export default function StartingPage() {
  let navigate = useNavigate();
  const { contextState, setContextState } = useContext(TodoContext);

  const formIsValid = contextState.userName.trim().length > 0;

  const handleNameChange = (e) => {
    setContextState({ ...contextState, userName: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formIsValid) navigate("/dashboard");
  };

  return (
    <>
      <div id="center-div">
        <h3>Simple ToDo</h3>
        <form onSubmit={handleSubmit}>
          <div id="starting-page-div">
            <label>
              <input
                id="input-name"
                type="text"
                name="name"
                placeholder="Your name"
                onChange={handleNameChange}
              />
            </label>
            {!formIsValid && <p className="required-alert">Name is required</p>}
          </div>
          <input
            disabled={!formIsValid}
            id="submit-button"
            type="submit"
            value="Next"
          />
        </form>
      </div>
    </>
  );
}
