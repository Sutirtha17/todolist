import React, { useState } from 'react';
import AddItem from './AddItem';
import ShowItem from './ShowItem';
const Task = ({ tasklist, setTasklist }) => {
  const [activity, setActivity] = useState('');
  const [timeOfActivity, setTimeOfActivity] = useState('');
  const [remainder, setRemainder] = useState(false);
  const [toggleAddAndEdit, setToggleAddAndEdit] = useState(true);
  const [updateItem, setUpdateItem] = useState('null'); // useStates()
  return (
    <>
      <AddItem
        tasklist={tasklist}
        setTasklist={setTasklist}
        activity={activity}
        setActivity={setActivity}
        timeOfActivity={timeOfActivity}
        setTimeOfActivity={setTimeOfActivity}
        remainder={remainder}
        setRemainder={setRemainder}
        toggleAddAndEdit={toggleAddAndEdit}
        setToggleAddAndEdit={setToggleAddAndEdit}
        updateItem={updateItem}
        setUpdateItem={setUpdateItem}
      />
      <ShowItem
        tasklist={tasklist}
        setTasklist={setTasklist}
        setActivity={setActivity}
        setTimeOfActivity={setTimeOfActivity}
        setRemainder={setRemainder}
        setToggleAddAndEdit={setToggleAddAndEdit}
        setUpdateItem={setUpdateItem}
      />
    </>
  );
};

export default Task;
