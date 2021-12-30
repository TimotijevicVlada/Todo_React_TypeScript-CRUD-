import React, { useState } from 'react';
import { TodosProps } from "./types/Types";
import { useFormik } from "formik";
import { validate } from "../validation/Validation";

type CreateProps = {
    todos: {
        id: number
        title: string
        description: string
        date: string
        completed: boolean
    }[]
    setTodos: React.Dispatch<React.SetStateAction<TodosProps[]>>
}

type FormikProps = {
    title: string;
    description: string;
    date: string;
}

const CreateTodo = ({ todos, setTodos }: CreateProps) => {

    // This is how we set for event (e: React.FormEvent)

    const [seccessMessage, setSuccessMessage] = useState<boolean>(false)

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
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <h3>Create new Todo</h3>
            <div>
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
                    />
                </div>
                {formik.touched.date && formik.errors.date && (
                    <div className="error">{formik.errors.date}</div>
                )}
                <button type='submit'>Add new Todo</button>
            </div>
        </form>
    )
}

export default CreateTodo;
