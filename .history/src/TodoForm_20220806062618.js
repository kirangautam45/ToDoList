import React from 'react'

const TodoForm = () => {
  return (
    <div>
      <form onSubmit={handleSubmit} className ="todo-form">
        {props.edit?(
            <>
            
            </>
        )}
      </form>
    </div>
  )
}

export default TodoForm
