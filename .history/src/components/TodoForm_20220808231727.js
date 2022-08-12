import React from "react";

const TodoForm = ({ newTask, setNewTask, addTask }) => {
  return (
    <div>
      <di className="row">
        <div className="col">
          <input
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="col-auto">
          <button onClick={addTask} className="btn-success">
            Add Task
          </button>
        </div>
      </di>
    </div>
  );
};

export default TodoForm;
