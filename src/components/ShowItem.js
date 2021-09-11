import React, { useContext } from 'react';
import EditItem from './EditItem';
import DeleteElements from './DeleteItem';
import { TaskContext } from './TodoList';

const ShowItem = () => {
  const { tasklist } = useContext(TaskContext);
  return (
    <>
      <div className='showItems'>
        {tasklist.map((task) => {
          return (
            <div
              className={
                !task.remainder ? 'eachItem' : ' eachItem eachItem-remainder'
              }
              key={task.id}
            >
              <h3>
                Task - {task.name}
                <EditItem task={task} />
                <DeleteElements task={task} />
              </h3>
              <h4>Time : {task.time}</h4>
              <h5>{task.remainder ? 'Remainder : On' : ' Remainder : Off'}</h5>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ShowItem;
