import React, {useState, Fragment} from 'react'

const Form = ()=>{
    return (
        <div className="container m-3 p-3 bg-warning">
            <h1>Forms</h1>
            <form action="" className="row">
            <div className="col-md-3 ">
                <input type="text" className="form-control"/>
            </div>
            <div className="col-md-3 ">
                <input className="form-control" type="text"/>
            </div>
            <div className="col-md-3">
                <button className="btn btn-primary" type="submit">Send</button>
            </div>
            </form>
            
        </div>
    )
}

export default Form;