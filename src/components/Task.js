import React, { useState } from 'react';
import AddItem from './AddItem';
import ShowItem from './ShowItem';

const StateContext = React.createContext();
const Task = () => {
  const [activity, setActivity] = useState('');
  const [timeOfActivity, setTimeOfActivity] = useState('');
  const [remainder, setRemainder] = useState(false);
  const [toggleAddAndEdit, setToggleAddAndEdit] = useState(true);
  const [updateItem, setUpdateItem] = useState('null'); // useStates()

  return (
    <>
      <StateContext.Provider
        value={{
          activity,
          setActivity,
          timeOfActivity,
          setTimeOfActivity,
          remainder,
          setRemainder,
          toggleAddAndEdit,
          setToggleAddAndEdit,
          updateItem,
          setUpdateItem,
        }}
      >
        <AddItem />
        <ShowItem />
      </StateContext.Provider>
    </>
  );
};

export default Task;
export { StateContext };
