import { React } from 'react';
const AddItem = ({
  activity,
  setActivity,
  timeOfActivity,
  setTimeOfActivity,
  remainder,
  setRemainder,
  onChange,
  toggleAddAndEdit,
}) => {
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
            onClick={onChange}
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
            onClick={onChange}
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
