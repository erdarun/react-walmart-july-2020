import React from 'react';
//functional component

// function hello(){} // should work

//arrow function
// props==> object props.message
const hello = (props) => {

    //return JSX(View)
    return (
        <div>
            <h3>Hello Component</h3>
            <p>This is a functional component</p>
            <p>Generated Date: {new Date().toTimeString()}</p>
            <p>Message: {props.message}</p>
            <div>
                {props.children}
            </div>
        </div>
    );
}

export default hello;
