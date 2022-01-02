import React from 'react';
import {TodosProps} from "./types/Types";

type DeleteProps = {
    itemForDeleting: TodosProps[]
    todos: TodosProps[]
    setTodos: React.Dispatch<React.SetStateAction<TodosProps[]>>
    setDeleteWindowVisible : React.Dispatch<React.SetStateAction<boolean>>
}

const DeleteWindow = ({itemForDeleting, todos, setTodos, setDeleteWindowVisible}: DeleteProps) => {

    //Confirm deleting Item
    const handleDelete = () => {
        const deletedItem = todos.filter(item => item.id !== itemForDeleting[0].id);
        setTodos(deletedItem);
        setDeleteWindowVisible(false);
    }

    return (
        <div className='delete_wrapper'>
            <div className='delete'>
                <div className='delete_question'>Are you sure you want to delete this item?</div>
                <div className='delete_events'>
                    <button onClick={() => setDeleteWindowVisible(false)} className='delete_cancel'>Cancel</button>
                    <button onClick={handleDelete} className='delete_ok'>Ok</button>
                </div>
            </div>
        </div>
    )
}

export default DeleteWindow;
