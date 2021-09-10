import { FaTrashAlt } from 'react-icons/fa';

const DeleteItem = ({ task, tasklist, setTasklist }) => {
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
