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
            classna
            </>
        )}
      </form>
    </div>
  )
}

export default TodoForm
