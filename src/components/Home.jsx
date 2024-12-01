import React, { useEffect, useState } from "react";
import "../App.css";
import Task from "./Task";
const Home = () => {
  const initialArray = localStorage.getItem("tasks") ?  JSON.parse(localStorage.getItem("tasks")) : [];
  const[tasks , setTasks] = useState(initialArray);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  
  const titleHandler = (e) => {
    setTitle(e.target.value);
  };
  const addTask = (e)=>{
    e.preventDefault();
    if(title || description){
      setTasks([...tasks , {title , description}]);
    }
    setTitle("");
    setDescription("");
    
  }
  useEffect(()=>{
    localStorage.setItem("tasks" , JSON.stringify(tasks));
  } , [tasks]);
  const deleteTask = (index) => {
    const FilteredArr = tasks.filter((_, i) => i !== index);
    setTasks(FilteredArr);
  };
    return (
    <>
    <h1 className="dailygoals">DAILY GOALS</h1>
      <div className="container">
        <form onSubmit = {addTask}action="">
          <input
            type="text"
            value={title}
            placeholder="Task"
            onChange={titleHandler}
          />
          <textarea
            type="text"
            value={description}
            placeholder="Description"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <button type="submit">Add</button>
        </form>
        {tasks.map((item , index)=>{
            return <Task key={index} title={item.title} description={item.description} deleteHandler={deleteTask} index = {index}/>
        }) }

      </div>
    </>
  );
};

export default Home;
