import React, {useState} from 'react';
import { useForm } from "react-hook-form";

const FormHook = () =>{

    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = (data,e) => {
        console.log(data);
        e.target.reset() //This erase the data inside input after pushing it
    }

    return (
        <div>
            <h1>Form Hook</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input 
                type="text"
                name="title"
                ref={
                    register({
                        required : {value:true, message :'You must set a title'}
                    })
                }
                className="form-control my-2"/>
                <span className="text-danger text-samll d-block mb-2">
                    {/* Where the 'title' and message is the 'name' of the input */}
                    {errors?.title?.message}
                </span>
                <button className="btn btn-primary">Send data</button>
            </form>
        </div>
    )
}

export default FormHook;