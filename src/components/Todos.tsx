import { useState } from 'react';
import Todo from './Todo';
import CreateTodo from './CreateTodo';
import { TodosProps } from "./types/Types";

const Todos = () => {

    const [todos, setTodos] = useState<TodosProps[]>([]);
    const [crateFormVisible, setCreateFormVisible] = useState<boolean>(false);

    return (
        <div className='todos'>
            <h2>My Todo List</h2>
            <div className='create_todo_btn'>
                <button onClick={() => setCreateFormVisible(true)}>Create new todo</button>
            </div>
            <div className='search_todos'>
                <input type="text" placeholder='Search todo' />
            </div>
            <Todo todos={todos} />

            {crateFormVisible && <CreateTodo todos={todos} setTodos={setTodos} setCreateFormVisible={setCreateFormVisible} />}
        </div>
    )
}

export default Todos;
