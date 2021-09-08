import React, { useState } from 'react';
import '../App.css';

const Todo = () => {
  const [input, setInput] = useState('');
  const [elements, setElements] = useState([]);
  const [toggleAddAndEdit, setToggleAddAndEdit] = useState(true);
  const [updateItem, setUpdateItem] = useState('null'); // useStates()

  //Adding items

  const addElements = () => {
    if (!input) {
      alert('please enter a valid activity!');
    } else if (input && !toggleAddAndEdit) {
      setElements(
        elements.map((elem) => {
          if (elem.id === updateItem) return { ...elem, name: input };
          return elem;
        })
      );
      setToggleAddAndEdit(true);

      setInput('');

      setUpdateItem(null);
    } else {
      const allInputData = {
        id: new Date().getTime().toString(),
        name: input,
      };
      setElements([...elements, allInputData]);
      setInput('');
    }
  };

  // delete the items

  const deleteElements = (id) => {
    const updatedItems = elements.filter((item) => {
      return item.id !== id;
    });

    setElements(updatedItems);
  };

  // Editing Items

  const editItem = (id) => {
    let itemToBeEdited = elements.find((item) => {
      return item.id === id;
    });

    setToggleAddAndEdit(false);

    setInput(itemToBeEdited.name);

    setUpdateItem(id);
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
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          {toggleAddAndEdit ? (
            <button
              title='Add item'
              onClick={addElements}
              className='btn-secondary'
            >
              Add
            </button>
          ) : (
            <button
              title='Edit item'
              onClick={addElements}
              className='btn-secondary'
            >
              Edit
            </button>
          )}
        </div>

        <div className='showItems'>
          {elements.map((item) => {
            return (
              <div className='eachItem' key={item.id}>
                <h3>{item.name}</h3>
                <button
                  title='Update Item'
                  onClick={() => editItem(item.id)}
                  className='btn btn-secondary'
                >
                  Update
                </button>
                <button
                  title='Delete Item'
                  onClick={() => deleteElements(item.id)}
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
