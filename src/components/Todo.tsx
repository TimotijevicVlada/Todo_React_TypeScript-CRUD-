import React, {useState} from 'react';
import { TodosProps } from "./types/Types";
import DeleteWindow from "./DeleteWindow";

type TodoProps = {
    todos: TodosProps[]
    setTodos: (value: React.SetStateAction<TodosProps[]>) => void
    setItemForUpdate: React.Dispatch<React.SetStateAction<TodosProps[]>>
    setUpdateFormVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const Todo = ({ todos, setTodos, setItemForUpdate, setUpdateFormVisible }: TodoProps) => {

    const [itemForDeleting, setItemForDeleting] = useState<TodosProps[]>([]);
    const [deleteWindowVisible, setDeleteWindowVisible] = useState<boolean>(false);

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
    return (
        <div className='todos'>
            {todos.map((item, index) => (
                <div key={item.id} className='todo'>
                    <span className='index'>#{index + 1}</span>
                    <span className='title'>{item.title}</span>
                    <span className='description'>{item.description}</span>
                    <span className='date'>{new Date(item.date).toDateString()}</span>
                    <div className='events'>
                        <button onClick={() => handleUpdate(item.id)} className='update_btn'>Update</button>
                        <button onClick={() => handleDelete(item.id)} className='delete_btn'>Delete</button>
                    </div>
                </div>
            ))}
            {deleteWindowVisible && <DeleteWindow itemForDeleting={itemForDeleting} todos={todos} setTodos={setTodos} setDeleteWindowVisible={setDeleteWindowVisible}/>}
        </div>
    )
}

export default Todo;