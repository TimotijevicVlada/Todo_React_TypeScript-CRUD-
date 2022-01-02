import React, { useState, useRef } from 'react';
import { TodosProps } from "./types/Types";
import { useFormik } from "formik";
import { validate } from "../validation/Validation";


type CreateProps = {
    todos: TodosProps[]
    setTodos: React.Dispatch<React.SetStateAction<TodosProps[]>>
    setCreateFormVisible: React.Dispatch<React.SetStateAction<boolean>>
}

type FormikProps = {
    title: string;
    description: string;
    date: string;
}

const CreateTodo = ({ todos, setTodos, setCreateFormVisible }: CreateProps) => {

    const [seccessMessage, setSuccessMessage] = useState<boolean>(false)
    const formRef = useRef<HTMLFormElement>(null);

    //Function that exit the form when we click out of the form
    //Insted of "React.MouseEvent<HTMLDivElement>" I put "any" because I couldn't solve the error.
    const handleExit = (event: any) => {
            if (!formRef.current?.contains(event.target)) {
                setCreateFormVisible(false);
            }
    }

    //Formik library
    const formik = useFormik({
        initialValues: {
            title: "",
            description: "",
            date: "",
        },
        validate,
        onSubmit: (values: FormikProps) => {
            setTodos([...todos, {
                id: Math.random() * 10000,
                title: values.title,
                description: values.description,
                date: values.date,
                completed: false
            }])
            setSuccessMessage(true);
            setTimeout(() => {
                setCreateFormVisible(false);
            }, 2000)
        },
    });

    return (
        <div onClick={handleExit} className='create_wrapper'>
            <form onSubmit={formik.handleSubmit} ref={formRef}>
                <h2 className='create_title'>Create new Todo</h2>
                <div className='create_content'>
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
                    <div className='create_btn'>
                        <button type='submit'>Add new Todo</button>
                    </div>
                    {seccessMessage && <div className='success_msg'>Todo has been created!</div>}
                </div>
            </form>
        </div>

    )
}

export default CreateTodo;
