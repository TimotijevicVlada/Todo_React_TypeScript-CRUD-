import { useState } from 'react';
import Todo from './Todo';
import CreateTodo from './CreateTodo';
import UpdateTodo from './UpdateTodo';
import { TodosProps } from "./types/Types";

const Todos = () => {

    const [todos, setTodos] = useState<TodosProps[]>([{
        id: 121412,
        title: "Vlada title..",
        description: "Tekst koji je napisao Vlada kako bi...",
        date: "12.31.2021",
        completed: false
    },
    {
        id: 1231231,
        title: "Pera title...",
        description: "Tekst koji je napisao Pera kako bi...",
        date: "12.30.2021",
        completed: false
    }]);

    const [crateFormVisible, setCreateFormVisible] = useState<boolean>(false);
    const [itemForUpdate, setItemForUpdate] = useState<TodosProps[]>([]);
    const [updateFormVisible, setUpdateFormVisible] = useState<boolean>(false);
    

    return (
        <div className='todos_wrapper'>
            <h2>My Todo List</h2>
            <div className='create_todo_btn'>
                <button onClick={() => setCreateFormVisible(true)}>Create new todo</button>
            </div>
            <div className='search_todos'>
                <input type="text" placeholder='Search todo' />
            </div>
            <Todo todos={todos} setTodos={setTodos} setItemForUpdate={setItemForUpdate} setUpdateFormVisible={setUpdateFormVisible}/>

            {crateFormVisible && <CreateTodo todos={todos} setTodos={setTodos} setCreateFormVisible={setCreateFormVisible} />}

            {updateFormVisible && <UpdateTodo itemForUpdate={itemForUpdate} todos={todos} setTodos={setTodos}/> }
        </div>
    )
}

export default Todos;