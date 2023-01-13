import React, { useRef } from 'react';
import { DeleteProps } from "../types/types";

const DeleteWindow: React.FC<DeleteProps> = ({ itemForDeleting, todos, setTodos, setDeleteWindowVisible }) => {

    const deleteRef = useRef<HTMLDivElement>(null);
    //Function that exit the form when we click out of the form
    const handleExit = (event: React.MouseEvent<HTMLDivElement>) => {
        if (!deleteRef.current?.contains(event.target as HTMLDivElement)) {
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
