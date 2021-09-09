import React from 'react';
import { FaEdit } from 'react-icons/fa';

const EditItem = ({ item, editItem }) => {
  return (
    <button
      title='Edit Item'
      onClick={() => editItem(item.id)}
      className='btn btn-block'
    >
      <FaEdit className='icon-update' />
    </button>
  );
};

export default EditItem;
