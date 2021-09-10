import React from 'react';
const AddItem = ({
  tasklist,
  setTasklist,
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
}) => {
  const addElements = () => {
    if (!activity || !timeOfActivity) {
      alert('please enter a valid activity or time!');
    } else if (activity && timeOfActivity && !toggleAddAndEdit) {
      setTasklist(
        tasklist.map((elem) => {
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
      console.log(tasklist);
      setToggleAddAndEdit(true);

      setActivity('');

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
      setTasklist([...tasklist, allInputData]);
      setActivity('');
      setTimeOfActivity('');
      setRemainder(false);
    }
  };
  return (
    <>
      <div className='addItems'>
        <input
          type='text'
          placeholder='Add Activity'
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
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
          <label htmlFor='box-1'>Set Remainder</label>
        </div>

        {toggleAddAndEdit ? (
          <button
            title='Add item'
            onClick={addElements}
            /* onClick = onChange
            onClick = addElements()
             */
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
    </>
  );
};

export default AddItem;
