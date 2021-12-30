import React from 'react';
import {TodosProps} from "./types/Types";

type CreateProps = {
    todos: {
        id: number
        title: string
        description: string
        date: string
    }[]
    setTodos: React.Dispatch<TodosProps[]>
}

const CreateTodo = ({ todos, setTodos }: CreateProps) => {

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setTodos([
            ...todos,
            {
                id: Math.random() * 10000,
                title: "Naslov",
                description: "Tekst...",
                date: "31.12.2021"
            }
        ])
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3>Create new Todo</h3>
            <div>
                <div>
                    <label>Title</label>
                    <input type="text" />
                </div>
                <div>
                    <label>Description</label>
                    <input type="text" />
                </div>
                <div>
                    <label>Date</label>
                    <input type="date" />
                </div>
                <button type='submit'>Add new Todo</button>
            </div>
        </form>
    )
}

export default CreateTodo;
