import React,{} from 'react'

const TodoForm = (props) => {
    const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };
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
        ):(
            <>
            <input
            placeholder="Add a todo"
            value={input}
            onChange={handleChange}
            name="text"
            className="todo-input"
            ref={inputRef}
          />
          <button onClick={handleSubmit} className="todo-button">
            Add todo
          </button>
            </>
        )}
      </form>
    </div>
  )
}

export default TodoForm
