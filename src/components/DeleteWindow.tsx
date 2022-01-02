import React, {useRef} from 'react';
import {TodosProps} from "./types/Types";

type DeleteProps = {
    itemForDeleting: TodosProps[]
    todos: TodosProps[]
    setTodos: React.Dispatch<React.SetStateAction<TodosProps[]>>
    setDeleteWindowVisible : React.Dispatch<React.SetStateAction<boolean>>
}

const DeleteWindow = ({itemForDeleting, todos, setTodos, setDeleteWindowVisible}: DeleteProps) => {

    const deleteRef = useRef<HTMLDivElement>(null);
    //Function that exit the form when we click out of the form
    //Insted of "React.MouseEvent<HTMLDivElement>" I put "any" because I couldn't solve the error.
    const handleExit = (event: any) => {
            if (!deleteRef.current?.contains(event.target)) {
                setDeleteWindowVisible(false);
            }
    }

    //Confirm deleting Item
    const handleDelete = () => {
        const deletedItem = todos.filter(item => item.id !== itemForDeleting[0].id);
        setTodos(deletedItem);
        setDeleteWindowVisible(false);
    }

    return (
        <div onClick={handleExit} className='delete_wrapper'>
            <div ref={deleteRef} className='delete'>
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
