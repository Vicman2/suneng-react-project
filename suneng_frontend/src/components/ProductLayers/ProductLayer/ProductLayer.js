import React from 'react';


const productLayer = (props) => {
    return (
        <div>
            <img src={props.url} alt = {props.name} />
            
        </div>  
    )
}

export  default productLayer