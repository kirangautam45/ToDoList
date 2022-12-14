import React from 'react'
import addTask from '../App'
const search = () => {
  return (
    <div>
      <div className='main'>
        <h1>Search</h1>
        <div className='search'>
            <input
            id="outlined-basic"
            variant="outlined"
            label ="Search"/>
        </div>
        <ul>
            {addTask.map((item)=>(
                <li key={item.id}>{item.text}</li>
            ))}
        </ul>
      </div>
    </div>
  )
}

export default search
