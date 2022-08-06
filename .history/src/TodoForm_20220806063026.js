import React from 'react'

const TodoForm = () => {
  return (
    <div>
      <form onSubmit={handleSubmit} className ="todo-form">
        {props.edit?(
            <>
            <input placeholder='update your item'
            value={input}
            onChange={handleChange}
            name="text"
            ref={inputRef}
            classname ='todo-input edit'/>
            <button onclick={handleSubmit} className='todo-button edit'>
                Update
            </button>
            </>
        ):()
        )}
      </form>
    </div>
  )
}

export default TodoForm
