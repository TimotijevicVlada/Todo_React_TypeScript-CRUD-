import React, {useState} from 'react';
import { useFormik } from 'formik';
import { validate } from '../validation/Validation';
import { TodosProps } from "./types/Types";

type UpdateProps = {
    itemForUpdate: TodosProps[]
    todos: TodosProps[]
    setTodos: React.Dispatch<React.SetStateAction<TodosProps[]>>
}

const UpdateTodo = ({ itemForUpdate, todos, setTodos }: UpdateProps) => {

    const [successMessage, setSuccessMessage] = useState<boolean>(false);

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
                    desc: values.description,
                    date: values.date,
                } : item);
                setTodos(updatedTodos);
                setSuccessMessage(true);
        },
    });

    return (
        <div className='update_wrapper'>
            <form onSubmit={formik.handleSubmit} >
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
