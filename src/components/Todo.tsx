import React, { useState } from 'react';
import { TodosProps } from "./types/Types";
import DeleteWindow from "./DeleteWindow";
import Details from "./Details";

type TodoProps = {
    todos: TodosProps[]
    setTodos: (value: React.SetStateAction<TodosProps[]>) => void
    setItemForUpdate: React.Dispatch<React.SetStateAction<TodosProps[]>>
    setUpdateFormVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const Todo = ({ todos, setTodos, setItemForUpdate, setUpdateFormVisible }: TodoProps) => {

    const [itemForDeleting, setItemForDeleting] = useState<TodosProps[]>([]);
    const [deleteWindowVisible, setDeleteWindowVisible] = useState<boolean>(false);
    const [detailsItem, setDetailsItem] = useState<TodosProps[]>([]);
    const [detailsVisible, setDetailsVisible] = useState<boolean>(false);

    //First click on delete button
    const handleDelete = (id: number) => {
        const deleteItem = todos.filter(item => item.id === id);
        setItemForDeleting(deleteItem);
        setDeleteWindowVisible(true);
    }

    //Function that update the choosen item
    const handleUpdate = (id: number) => {
        setUpdateFormVisible(true);
        const updateItem = todos.filter(item => item.id === id);
        setItemForUpdate(updateItem);
    }

    //Function that set details item
    const handleDetails = (id: number) => {
        const details = todos.filter(item => item.id === id);
        setDetailsItem(details);
        setDetailsVisible(true);
    }

    //Handle complete 
    const completeHandler = (id: number) => {
        setTodos(todos.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    completed: !item.completed
                }
            }
            return item;
        }))
    }

    return (
        <div className='todos'>
            {todos.map((item, index) => (
                <div key={item.id} className={item.completed ? "todo completed" : "todo"}>
                    <div onClick={() => handleDetails(item.id)} className='todo_info'>
                        <span className='index'>#{index + 1}</span>
                        <span className='title'>{item.title}</span>
                        <span className='description'>{item.description}</span>
                        <span className='date'>{new Date(item.date).toDateString()}</span>
                    </div>
                    <div className='events'>
                        <i onClick={() => completeHandler(item.id)} className='fas fa-check'></i>
                        <button onClick={() => handleUpdate(item.id)} className='update_btn'>Update</button>
                        <button onClick={() => handleDelete(item.id)} className='delete_btn'>Delete</button>
                    </div>
                </div>
            ))}
            {deleteWindowVisible && <DeleteWindow itemForDeleting={itemForDeleting} todos={todos} setTodos={setTodos} setDeleteWindowVisible={setDeleteWindowVisible} />}
            {detailsVisible && <Details detailsItem={detailsItem} setDetailsVisible={setDetailsVisible} />}
        </div>
    )
}

export default Todo;