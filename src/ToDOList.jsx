import { useState } from "react";
import { v4 as uuidv4 }from 'uuid';
import "./ToDoList.css";
export default function ToDoList(){
    let[todos,setTodos]=useState([{task:"sampleState" ,id:uuidv4(),isdone:false}]);
    let[newtodo,setNewtodo]=useState("");
  
    let addNewTask = () => {
    if (newtodo.trim() === "") return;

    setTodos((prevTodo) => [
        ...prevTodo,
        { task: newtodo, id: uuidv4(), isdone: false }
    ]);

    setNewtodo("");
};
      let updateToDoValue= (event)=>{
        setNewtodo(event.target.value);
    };
   
    let deleteTodo = (id) => {
    setTodos((prevTodos) =>
        prevTodos.filter((todo) => todo.id !== id)
    );
};
    let markAllDone=()=>{
        setTodos((prevTodos)=>
            prevTodos.map((todo)=>{
                return {
                    ...todo,
                     isdone:true,
                };
            })
        );
    };
        let markAsDone=(id)=>{
        setTodos((prevTodos)=>
            prevTodos.map((todo)=>{
                if(todo.id==id){ return {
                    ...todo,
                    isdone:true,
                };
            }else{
                    return todo;
                }
               
            })
        );
    };
    return (
        <div  className="todo-container">
           <h2>Task To Do</h2>
            
           <input className="todo-input" placeholder="add a task" value={newtodo} onChange={updateToDoValue}></input>
          
           <button onClick={addNewTask}>Add</button>
           <br></br>
    <hr></hr>
           <ul className="todo-list">
              {todos.map((todo, index) => (
    <li key={todo.id}>
        <span className={todo.isdone ? "completed" : ""}>
            {index + 1}. {todo.task}
        </span>

        <button onClick={() => deleteTodo(todo.id)}>
            Delete
        </button>

        <button onClick={() => markAsDone(todo.id)}>
            Done
        </button>
    </li>
))}

           </ul>
                        <button  className="mark-all" onClick={markAllDone}>Maks All as Done</button>

        </div>
    );

}
