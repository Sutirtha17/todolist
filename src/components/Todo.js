import React, { useState } from 'react';
import '../App.css';
import AddItem from './AddItem';
import ShowItem from './ShowItem';

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
        <AddItem
          activity={activity}
          setactivity={setactivity}
          timeOfActivity={timeOfActivity}
          setTimeOfActivity={setTimeOfActivity}
          remainder={remainder}
          setRemainder={setRemainder}
          onChange={addElements} // important line
          /*   onChange = {
            passing the addElement to child component
          } */
          toggleAddAndEdit={toggleAddAndEdit}
        />
        <ShowItem
          elements={elements}
          deleteElements={deleteElements}
          editItem={editItem}
        />
      </div>
    </>
  );
};

export default Todo;
