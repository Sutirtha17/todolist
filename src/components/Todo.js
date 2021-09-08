import React, { useState } from 'react';
import '../App.css';

const Todo = () => {
  const [inputData, setInputData] = useState('');
  const [items, setItems] = useState([]);
  const [toggleSubmit, setToggleSubmit] = useState(true);
  const [isEditItem, setIsEditItem] = useState('null'); // useStates()

  //Adding items

  const addItem = () => {
    if (!inputData) {
      alert('please enter a valid activity!');
    } else if (inputData && !toggleSubmit) {
      setItems(
        items.map((elem) => {
          if (elem.id === isEditItem) return { ...elem, name: inputData };
          return elem;
        })
      );
      setToggleSubmit(true);

      setInputData('');

      setIsEditItem(null);
    } else {
      const allInputData = {
        id: new Date().getTime().toString(),
        name: inputData,
      };
      setItems([...items, allInputData]);
      setInputData('');
    }
  };

  // delete the items

  const deleteItem = (id) => {
    const updatedItems = items.filter((elem) => {
      return elem.id !== id;
    });

    setItems(updatedItems);
  };

  // Editing Items

  const editItem = (id) => {
    let newEditItem = items.find((elem) => {
      return elem.id === id;
    });

    setToggleSubmit(false);

    setInputData(newEditItem.name);

    setIsEditItem(id);
  };

  //returning

  return (
    <>
      <div className='container'>
        <h1 className='header'>Keeper</h1>

        <div className='addItems'>
          <input
            type='text'
            placeholder='Add Activity'
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
          />
          {toggleSubmit ? (
            <button
              title='Add item'
              onClick={addItem}
              className='btn-secondary'
            >
              Add
            </button>
          ) : (
            <button
              title='Edit item'
              onClick={addItem}
              className='btn-secondary'
            >
              Edit
            </button>
          )}
        </div>

        <div className='showItems'>
          {items.map((elem) => {
            return (
              <div className='eachItem' key={elem.id}>
                <h3>{elem.name}</h3>
                <button
                  title='Update Item'
                  onClick={() => editItem(elem.id)}
                  className='btn btn-secondary'
                >
                  Update
                </button>
                <button
                  title='Delete Item'
                  onClick={() => deleteItem(elem.id)}
                  className='btn'
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Todo;
