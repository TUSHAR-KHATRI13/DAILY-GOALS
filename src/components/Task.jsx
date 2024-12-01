import React from 'react';
import "../App.css";
const Task = ({title , description , index , deleteHandler}) => {
  return (
    <div className='task'>
      <div className='content'>
      <p>Title : {title}</p>
      <span>Description : {description}</span>

      </div>
      <button onClick={()=>{
        deleteHandler(index);
      }}>-</button>

   </div>
  )
}

export default Task;