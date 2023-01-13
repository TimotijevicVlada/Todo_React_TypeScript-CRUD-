import React, { useState, useRef } from 'react';
import { useFormik } from 'formik';
import { validate } from '../validation/Validation';
import { UpdateProps } from "../types/types";

const UpdateTodo: React.FC<UpdateProps> = ({ itemForUpdate, todos, setTodos, setUpdateFormVisible }) => {

    const [successMessage, setSuccessMessage] = useState<boolean>(false);
    const formRef = useRef<HTMLFormElement>(null);

    //Function that exit the form when we click out of the form
    const handleExit = (event: React.MouseEvent<HTMLDivElement>) => {
        if (!formRef.current?.contains(event.target as HTMLDivElement)) {
            setUpdateFormVisible(false);
        }
    }

    //Formik library
    const formik = useFormik({
        initialValues: {
            title: itemForUpdate[0].title,
            description: itemForUpdate[0].description,
            date: itemForUpdate[0].date
        },
        validate,
        onSubmit: (values) => {
            const updatedTodos = todos.map((item) =>
                item.id === itemForUpdate[0].id ? {
                    ...item,
                    title: values.title,
                    description: values.description,
                    date: values.date,
                } : item);
            setTodos(updatedTodos);
            setSuccessMessage(true);
            setTimeout(() => {
                setUpdateFormVisible(false);
            }, 2000)
        },
    });

    return (
        <div onClick={handleExit} className='update_wrapper'>
            <form onSubmit={formik.handleSubmit} ref={formRef}>
                <h2 className='update_title'>Update Todo</h2>
                <div className='update_content'>
                    <div>
                        <label>Title</label>
                        <input
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.title}
                            type="text"
                            name="title"
                        />
                    </div>
                    {formik.touched.title && formik.errors.title && (
                        <div className="error">{formik.errors.title}</div>
                    )}
                    <div>
                        <label>Description</label>
                        <input
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.description}
                            type="text"
                            name="description"
                        />
                    </div>
                    {formik.touched.description && formik.errors.description && (
                        <div className="error">{formik.errors.description}</div>
                    )}
                    <div>
                        <label>Date</label>
                        <input
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.date}
                            type="date"
                            name="date"
                            id="date"
                        />
                    </div>
                    {formik.touched.date && formik.errors.date && (
                        <div className="error">{formik.errors.date}</div>
                    )}
                    <div className='update_btn'>
                        <button type='submit'>Update Todo</button>
                    </div>
                    {successMessage && <div className='success_msg'>Todo has been updated!</div>}
                </div>
            </form>
        </div>
    )
}

export default UpdateTodo;
