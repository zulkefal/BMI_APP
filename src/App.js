import "./App.css";
import React, { useState } from "react";
function App() {
  // making sattes of our application
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setbmi] = useState("");
  const [message, setMessage] = useState("");
  const setWeightValue = (e) => {
    setWeight(e.target.value);
  };

  let calBmi = (e) => {
    e.preventDefault();
    if (weight === 0 || height === 0) {
      alert("Please Enter a valid weight and Height");
    } else {
      let bmi = (weight / (height * height)) * 10000;
      setbmi(bmi.toFixed(2));
      if (bmi < 18.5) {
        setMessage("You are underweight");
      } else if (bmi >= 18.5 && bmi <= 24.9) {
        setMessage("You are healthy");
      } else {
        setMessage("You are OverWeight");
      }
    }
  };

  const setHeightValue = (e) => {
    setHeight(e.target.value);
  };

  //relaod
  let reload = () => {
    window.location.reload();
  };

  return (
    <div className="App">
      <div className="container">
        <h2>BMI Calculator</h2>
        <form onSubmit={calBmi}>
          <div>
            <label htmlFor="">Height (in)</label>
            <input
              type="text"
              placeholder="Enter your Height"
              value={height}
              onChange={setHeightValue}
            />
          </div>

          <div>
            <label htmlFor="">Weight (lbs)</label>
            <input
              type="text"
              placeholder="Enter your Weight"
              value={weight}
              onChange={setWeightValue}
            />
          </div>

          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn" onClick={reload} type="submit">
              Reload
            </button>
          </div>
        </form>
        <div className="center">
          <h3>Your BMI is:{bmi} kg/m2</h3>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
