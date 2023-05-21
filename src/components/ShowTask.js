import React, { useState } from "react";

const ShowTask = ({ addTask }) => {
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const [error, setError] = useState("");

  const addItem = () => {
    if (text.trim() === "" || date.trim() === "") {
      setError("please fill out this field");
      return;
    }

    // console.log(text);
    addTask(text, date);
    setText("");
    setDate("");
  };
  return (
    <>
      <div className="Task">
        <form>
          <div className="text">
            <h5>Task:</h5>

            <input
              type="text"
              placeholder="Enter Task"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            {text.trim() === "" && <div className="validationBox">{error}</div>}
          </div>
          <div className="date">
            <h5>Date:</h5>

            <input
              type="datetime-local"
              placeholder="Select date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            {date.trim() === "" && <div className="validationBox">{error}</div>}
          </div>
        </form>

        <button onClick={addItem}>Save</button>
      </div>
    </>
  );
};

export default ShowTask;