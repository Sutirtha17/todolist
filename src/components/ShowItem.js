import React from 'react';
import EditItem from './EditItem';
import DeleteElements from './DeleteItem';

export const ShowItem = ({ elements, deleteElements, editItem }) => {
  return (
    <>
      <div className='showItems'>
        {elements.map((item) => {
          return (
            <div
              className={
                !item.remainder ? 'eachItem' : ' eachItem eachItem-remainder'
              }
              key={item.id}
            >
              <h3>
                Task - {item.name}
                <EditItem item={item} editItem={editItem} />
                <DeleteElements item={item} deleteElements={deleteElements} />
              </h3>
              <h4>Time : {item.time}</h4>
              <h5>{item.remainder ? 'Remainder : On' : ' Remainder : Off'}</h5>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ShowItem;
