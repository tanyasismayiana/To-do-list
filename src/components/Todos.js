import { useState } from "react";
import { v4 as uuid } from 'uuid';

const TodoC = (props) => {
  return(
    <div className="task-one">  
      <div className="task-info">
        {props.task.complete ?
        <h3><s>{props.task.title}</s></h3>
        :
        <h3>{props.task.title}</h3>
        }
        <span><a className="remove" onClick={()=>props.onRemoveTask(props.task.id)}>Remove</a></span>
        {!props.task.complete &&
           <span><a className="complete" onClick={()=>props.onCompleteTask(props.task.id)}>Complete</a></span>
        }
      </div>
    </div>
  )
}

const Todos = () => {

  const [ value, setValue ] = useState();
  const [ todos, setTodos ] = useState(
    [
        {id:1, title: "Meet friend for lunch", complete:false}, 
        {id:2, title: "Build really cool todo app", complete: false}, 
        {id:3, title: "Got to Ciero sports", complete: true},
    ]
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTask(value);
    setValue("");
  }

  const addTask = title =>{
    const newTasks = [...todos, {id: uuid(), title: title, complete: false}];
    setTodos(newTasks);
  }

  const removeTask = id => {
     let newTodos = [...todos];
     let newArray = newTodos.filter(item=>item.id !== id);
     setTodos(newArray);
  }

  const completeTask = id => {
    let newTodos = [...todos];
    const task = newTodos.find(item => item.id === id);
    if (task) {
      task['complete'] = true;
    }
    setTodos(newTodos);
  }

  return (
    <>
    <form className="container" onSubmit={handleSubmit}>
      <input className="form-control" type="text" placeholder="Add Task" onChange={e => setValue(e.target.value)}/>
      <button className="btnSubmit" type="submit">Add Task</button>
    </form> 
    
    <div className="todo-container">
    {todos.map((todo, index) => (
       <TodoC task={todo} onRemoveTask={removeTask} onCompleteTask={completeTask} key={index}/>
      )
    )}
    </div>
    </>
    
  );
}

export default Todos;
