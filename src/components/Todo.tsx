import React from 'react';

type TodoProps = {
    todos: {
        id: number
        title: string
        description: string
        date: string
    }[]
}


const Todo = ({todos}: TodoProps) => {
    return (
        <div className='todos'>
            {todos.map(item => (
                <div>
                    <span>{item.title}</span>
                    <span>{item.description}</span>
                    <span>{item.date}</span>
                </div>
            ))}
        </div>
    )
}

export default Todo;
