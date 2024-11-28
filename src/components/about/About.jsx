import React, { useState } from 'react'

const Counter = () => {
  const [value, setValue] = useState(4)
  const addValue = () => {
    setValue(value + 1);
  }
  const removeValue = () => {
    setValue(value - 1);
  }
  return (
    <div className='text-center flex flex-col gap-20'>
      <h1 className='text-red-900 text-5xl'>counter</h1>
      <div className='flex flex-col gap-10 items-center'>
        <p>Cureent number: {value}</p>
        <div className='flex gap-6 justify-center'>
          <button className='bg-red-300 px-3 py-3 rounded-lg' onClick={addValue}>Add</button>
          <button className='bg-red-300 px-3 py-3 rounded-lg' onClick={removeValue}>remove</button>
        </div>
      </div>
    </div>

  )
};



export default Counter