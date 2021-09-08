import React, { useState } from 'react';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import '../App.css';

const Todo = () => {
  const [activity, setactivity] = useState('');
  const [timeOfActivity, setTimeOfActivity] = useState('');
  const [remainder, setRemainder] = useState(false);
  const [elements, setElements] = useState([]);
  const [toggleAddAndEdit, setToggleAddAndEdit] = useState(true);
  const [updateItem, setUpdateItem] = useState('null'); // useStates()

  //Adding items

  const addElements = () => {
    if (!activity || !timeOfActivity) {
      alert('please enter a valid activity or time!');
    } else if (activity && timeOfActivity && !toggleAddAndEdit) {
      setElements(
        elements.map((elem) => {
          if (elem.id === updateItem)
            return {
              ...elem,
              name: activity,
              time: timeOfActivity,
              remainder: remainder,
            };
          return elem;
        })
      );
      console.log(elements);
      setToggleAddAndEdit(true);

      setactivity('');

      setTimeOfActivity('');

      setRemainder(false);

      setUpdateItem(null);
    } else {
      const allInputData = {
        id: new Date().getTime().toString(),
        name: activity,
        time: timeOfActivity,
        remainder: remainder,
      };
      console.log(allInputData);
      setElements([...elements, allInputData]);
      setactivity('');
      setTimeOfActivity('');
      setRemainder(false);
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

    setactivity(itemToBeEdited.name);

    setTimeOfActivity(itemToBeEdited.time);

    setRemainder(itemToBeEdited.remainder);

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
            value={activity}
            onChange={(e) => setactivity(e.target.value)}
          />
          <input
            type='Number'
            placeholder='Set time'
            value={timeOfActivity}
            onChange={(e) => setTimeOfActivity(e.target.value)}
            checked
          />
          <div className='boxes'>
            <input
              type='checkbox'
              value={remainder}
              checked={remainder}
              id='box-1'
              onChange={(e) => setRemainder(e.currentTarget.checked)}
            />
            <label for='box-1'>Set Remainder</label>
          </div>

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
              Save Changes
            </button>
          )}
        </div>

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
                  Task - {item.name}{' '}
                  <button
                    title='Edit Item'
                    onClick={() => editItem(item.id)}
                    className='btn btn-block'
                  >
                    <FaEdit className='icon-update' />
                  </button>
                  <button
                    title='Delete Item'
                    onClick={() => deleteElements(item.id)}
                    className='btn btn-block'
                  >
                    <FaTrashAlt className='icon-delete' />
                  </button>
                </h3>
                <h4>Time : {item.time}</h4>
                <h5>
                  {item.remainder ? 'Remainder : On' : ' Remainder : Off'}
                </h5>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Todo;
