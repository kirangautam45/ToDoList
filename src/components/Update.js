import React from 'react'

const update = ({updateData, changeTask, updateTask, cancelUpdate}) => {
  return (
    <div>
       <div className="row">
        <div className="col">
          <input 
            value={ updateData && updateData.title }
            onChange={ (e) => changeTask(e)}
            className="form-control form-control-lg"
          />
        </div>
        <div className="col-auto">
          <button
            onClick={updateTask}
            className="btn-success"
          >Update</button>
          <button
            onClick={cancelUpdate}
            className="btn-warning"
          >Cancel</button>
        </div>
      </div>
      <br />  
    </div>
  )
}

export default update
