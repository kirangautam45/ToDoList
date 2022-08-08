import React from "react";

const TodoForm = ({ newTask, setNewTask, addTask }) => {
  return (
    <div>
      <div className="row">
        <div className="col">
          <input
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="form-control form-control-lg"
          />
        </div>
        <div className="col-auto">
          <button onClick={addTask} className="btn-success">
            Add Task
          </button>
        </div>
      </div>
      <br />
    </div>
  );
};

export default TodoForm;
