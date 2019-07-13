import React from 'react';

const tickField = (props) => {
    
    const style = {
        background: '#ccc',
        border: '1px solid black',
        color: 'white',
        padding: '10px',
        margin: '0 20px'
    }
    
    return <div style = {style}>
                {props.children}
            </div>
}

export default tickField;