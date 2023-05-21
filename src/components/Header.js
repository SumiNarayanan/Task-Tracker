import React, { useState } from "react";
import Dog from "./Dog.svg";
import ShowTask from "./ShowTask";
import ListTask from "./ListTask";


const Header = () => {
  const [showTask, SetShowTask] = useState(false);
  const [task, setTask] = useState([
    // {
    //   title:"HTML"
    // },
    // {
    //   title:"css"
    // },
    // {
    //   title:"Js"
    // },
  ]);
  const addTask = (title, date) => {
    const newTask = [...task,{ title, date }];
    setTask( newTask);
  };

 

  const removeTask = (index) => {
    const newTask = [...task];
    newTask.splice(index, 1);
    setTask(newTask);
  };
  


  const toggleTaskBar = () => {
    SetShowTask(!showTask);
  };

  return (
    <>
      <div className="Container">
        <div className="HeaderConatainer">
          <div className="HeaderMain">
            <img src={Dog} width={100} height={100} />
            <h1>Task Tracker</h1>
          </div>
          
          <div className="HeaderButton">
            {/* <button >Show Task Bar</button> */}
            <button onClick={toggleTaskBar}>
              {showTask ? "Hide Task Bar" : "Show Task Bar"}
            </button>
          </div>
        </div>

        {/* <div className="ShowtaskContainer">
  <ShowTask/>
</div> */}
        {showTask && (
          <div className="ShowtaskContainer">
            <ShowTask addTask={addTask} />
          </div>
        )}

        <div className="ListTaskContainer">
          {task.map((tasks, index) => (
            <ListTask
              key={index}
              tasks={tasks}
              removeTask={removeTask}
              index={index}
            />
          ))}
          {/* <ListTask/> */}
        </div>
      </div>
    </>
  );
};

export default Header;