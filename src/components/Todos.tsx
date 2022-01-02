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
    const [search, setSearch] = useState<string>("");

    //Variable that sort all todos ascending by date
    const sortedTodos = todos.sort((a: TodosProps, b: TodosProps) => new Date(a.date) > new Date(b.date) ? 1 : -1);

    //Variable that represent searched todos
    const searchedTodos = sortedTodos.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
    );

    //Function that set searched todo
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTimeout(() => {
            setSearch(e.target.value);
        }, 500)
    }

    return (
        <div className='todos_wrapper'>
            <h2>My Todo List</h2>
            <div className='create_todo_btn'>
                <button onClick={() => setCreateFormVisible(true)}>Create new todo</button>
            </div>
            <div className='search_todos'>
                <input  onChange={(e) => handleSearch(e)} type="text" placeholder='Search todo' />
            </div>
            <Todo todos={searchedTodos} setTodos={setTodos} setItemForUpdate={setItemForUpdate} setUpdateFormVisible={setUpdateFormVisible} />

            {crateFormVisible && <CreateTodo todos={todos} setTodos={setTodos} setCreateFormVisible={setCreateFormVisible} />}

            {updateFormVisible && <UpdateTodo itemForUpdate={itemForUpdate} todos={todos} setTodos={setTodos} setUpdateFormVisible={setUpdateFormVisible} />}
        </div>
    )
}

export default Todos;