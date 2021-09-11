import React, { useState } from 'react';
import Task from './Task';
import '../App.css';

const TaskContext = React.createContext();
const TodoList = () => {
  const [tasklist, setTasklist] = useState([]);
  return (
    <>
      <TaskContext.Provider value={{ tasklist, setTasklist }}>
        <div className='container'>
          <h1 className='header'>Keeper</h1>
          <Task tasklist={tasklist} setTasklist={setTasklist} />
        </div>
      </TaskContext.Provider>
    </>
  );
};

export default TodoList;
export { TaskContext };
