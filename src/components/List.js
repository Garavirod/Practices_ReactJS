import React, { useState, Fragment } from 'react';

const List = () => {
    const [numbers, setNumbers] = useState(
        [2,3,12,4,5,678,34,5,678,1]
    );

    const [num, setNumb] = useState(500);

    const addNumber = () =>{

        setNumb(num+1)

        setNumbers(
            [...numbers,num]
        )
    }
    return ( 
        <div >
            <p>These are the numbers</p>
            <button onClick={addNumber}>Add number</button>            
            {/* Print an array in HTML suing script insde */}
            {
                numbers.map((item,index)=>
                    <p key={index}> {item} - {index}</p>
                )
            }
        </div>
    );
};

export default List;