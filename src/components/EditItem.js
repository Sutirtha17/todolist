import React from 'react';
import { FaEdit } from 'react-icons/fa';

const EditItem = ({
  task,
  tasklist,
  setActivity,
  setTimeOfActivity,
  setRemainder,
  setToggleAddAndEdit,
  setUpdateItem,
}) => {
  const editItem = (id) => {
    let taskToBeEdited = tasklist.find((task) => {
      return task.id === id;
    });
    setToggleAddAndEdit(false);

    setActivity(taskToBeEdited.name);

    setTimeOfActivity(taskToBeEdited.time);

    setRemainder(taskToBeEdited.remainder);

    setUpdateItem(id);
  };
  return (
    <button
      title='Edit Item'
      onClick={() => editItem(task.id)}
      className='btn btn-block'
    >
      <FaEdit className='icon-update' />
    </button>
  );
};

export default EditItem;
