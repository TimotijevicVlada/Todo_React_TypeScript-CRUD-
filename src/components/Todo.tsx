import React from 'react';
import { TodosProps } from "./types/Types";

type TodoProps = {
    todos: {
        id: number
        title: string
        description: string
        date: string
        completed: boolean
    }[]
    setTodos: (value: React.SetStateAction<TodosProps[]>) => void
    setItemForUpdate: React.Dispatch<React.SetStateAction<TodosProps[]>>
    setUpdateFormVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const Todo = ({ todos, setTodos, setItemForUpdate, setUpdateFormVisible }: TodoProps) => {

    const handleDelete = (id: number) => {
        const deletedItem = todos.filter(item => item.id !== id);
        setTodos(deletedItem);
    }

    const handleUpdate = (id: number) => {
        setUpdateFormVisible(true);
        const updateItem = todos.filter(item => item.id !== id);
        setItemForUpdate(updateItem);
    }

    return (
        <div className='todos'>
            {todos.map((item, index) => (
                <div key={item.id} className='todo'>
                    <span className='index'>#{index + 1}</span>
                    <span className='title'>{item.title}</span>
                    <span className='description'>{item.description}</span>
                    <span className='date'>{item.date}</span>
                    <div className='events'>
                        <button onClick={() => handleUpdate(item.id)} className='update_btn'>Update</button>
                        <button onClick={() => handleDelete(item.id)} className='delete_btn'>Delete</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Todo;