import React, { useContext } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { TaskContext } from './TodoList';

const DeleteItem = ({ task }) => {
  const { tasklist, setTasklist } = useContext(TaskContext);
  const deleteElements = (id) => {
    const updatedTasklist = tasklist.filter((task) => {
      return task.id !== id;
    });

    setTasklist(updatedTasklist);
  };
  return (
    <button
      title='Delete Item'
      onClick={() => deleteElements(task.id)}
      className='btn btn-block'
    >
      <FaTrashAlt className='icon-delete' />
    </button>
  );
};

export default DeleteItem;
