import { useState } from 'react';
import Todo from './Todo';
import CreateTodo from './CreateTodo';
import { TodosProps } from "./types/Types";

const Todos = () => {

    const [todos, setTodos] = useState<TodosProps[]>([{
        id: 121412,
        title: "Vlada title..",
        description: "Tekst koji je napisao Vlada kako bi imao neki sadrzaj...",
        date: "31.12.2021",
        completed: false
    },
    {
        id: 1231231,
        title: "Pera title...",
        description: "Tekst koji je napisao Pera kako bi imao neki sadrzaj...",
        date: "31.12.2021",
        completed: false
    }]);

    const [crateFormVisible, setCreateFormVisible] = useState<boolean>(false);

    return (
        <div className='todos_wrapper'>
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