import React, { useState } from 'react';
import Task from './Task';
import '../App.css';

const TodoList = () => {
  const [tasklist, setTasklist] = useState([]);
  return (
    <div className='container'>
      <h1 className='header'>Keeper</h1>
      <Task tasklist={tasklist} setTasklist={setTasklist} />
    </div>
  );
};

export default TodoList;
