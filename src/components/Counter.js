import React, {useState, Fragment} from 'react';


const Counter = () => {
    const [number, setNumber] = useState(0);
    const increase = () => {
        setNumber(
            number + 1
        );
    }
    return (
        <Fragment>
            <h1>My fisrt component</h1>
            <hr/>
            <h4>Counter > {number} </h4>
            <button onClick={increase}>Push me</button>
        </Fragment>
     );
}
 
export default Counter;