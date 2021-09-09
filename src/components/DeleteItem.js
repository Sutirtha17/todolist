import { FaTrashAlt } from 'react-icons/fa';

const DeleteItem = ({ item, deleteElements }) => {
  return (
    <button
      title='Delete Item'
      onClick={() => deleteElements(item.id)}
      className='btn btn-block'
    >
      <FaTrashAlt className='icon-delete' />
    </button>
  );
};

export default DeleteItem;
