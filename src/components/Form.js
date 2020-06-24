import React, {useState} from 'react'

const Form = ()=>{


    const [data, setData] = useState({
        name: '',
        lastName :''
    });

    const handleInputChange = (event)=>{
        setData({
            ...data,
            [event.target.name] : event.target.value
        })
        
    }

    const sendData = (event)=>{
        event.preventDefault();
        console.log("DATA USER >: "+data.name+" "+data.lastName);
        
    }

    return (
        <div className="container m-3 p-3 bg-warning">
            <h1>Forms</h1>
            <form action="" className="row" onSubmit={sendData}>
            <div className="col-md-3 ">
                <input 
                type="text" 
                className="form-control" 
                placeholder="name" 
                name="name"
                onChange={handleInputChange}
                />
            </div>
            <div className="col-md-3 ">
                <input 
                className="form-control" 
                type="text" 
                placeholder="Lastname" 
                name="lastName"
                onChange={handleInputChange}
                />
            </div>
            <div className="col-md-3">
                <button className="btn btn-primary" type="submit">Send</button>
            </div>
            </form>
            
        </div>
    )
}

export default Form;

