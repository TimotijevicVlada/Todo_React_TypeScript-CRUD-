import React from 'react';
import { useFormik } from 'formik';
import { validate } from '../validation/Validation';
import {TodosProps} from "./types/Types";



const UpdateTodo = () => {



     //Formik library
     const formik = useFormik({
        initialValues: {
            title: "",
            description: "",
            date: ""
        },
        validate,
        onSubmit: (values) => {
            console.log("USAO U SUBMIT!")
            
            //setSuccessMessage(true);
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
                    {/* {seccessMessage && <div className='success_msg'>Todo has been updated!</div>} */}
                </div>
            </form>
        </div>
    )
}

export default UpdateTodo;
