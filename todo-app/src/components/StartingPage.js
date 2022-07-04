import "../App.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function StartingPage() {
  const [name, setName] = useState("");
  let navigate = useNavigate();

  const formIsValid = name.trim().length > 0;
  console.log(formIsValid);

  const handleNameChange = (event) => {
    setName(event.target.value);
    console.log(name);
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
            {!formIsValid && <p id="required-alert">Name is required</p>}
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
