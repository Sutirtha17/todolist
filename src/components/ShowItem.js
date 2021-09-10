import React from 'react';
import EditItem from './EditItem';
import DeleteElements from './DeleteItem';

export const ShowItem = ({
  tasklist,
  setTasklist,
  setActivity,
  setTimeOfActivity,
  setRemainder,
  setToggleAddAndEdit,
  setUpdateItem,
}) => {
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
                <EditItem
                  task={task}
                  tasklist={tasklist}
                  setActivity={setActivity}
                  setTimeOfActivity={setTimeOfActivity}
                  setRemainder={setRemainder}
                  setToggleAddAndEdit={setToggleAddAndEdit}
                  setUpdateItem={setUpdateItem}
                />
                <DeleteElements
                  task={task}
                  tasklist={tasklist}
                  setTasklist={setTasklist}
                />
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
