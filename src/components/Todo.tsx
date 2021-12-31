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
            {todos.map((item, index) => (
                <div key={item.id} className='todo'>
                    <span className='index'>#{index + 1}</span>
                    <span className='title'>{item.title}</span>
                    <span className='description'>{item.description}</span>
                    <span className='date'>{item.date}</span>
                </div>
            ))}
        </div>
    )
}

export default Todo;
