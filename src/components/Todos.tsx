import { useState } from 'react';
import Todo from './Todo';
import CreateTodo from './CreateTodo';
import {TodosProps} from "./types/Types";

const Todos = () => {

    const [todos, setTodos] = useState<TodosProps[]>([]);
 
    return (
        <div>
            <h2>My Todo List</h2>
            <div>
                <button>Create new todo</button>
            </div>
            <div>
                <input type="text" placeholder='Search todo' />
            </div>
            <Todo todos={todos}/>
            <CreateTodo todos={todos} setTodos={setTodos} />
        </div>
    )
}

export default Todos;
