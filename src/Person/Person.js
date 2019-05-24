import React from 'react';

// the argument props contains an object with all of the proporties specified in the App.js file
//  

const person = (props) => {
     return (
     <div>
         <p>I'm {props.name} and I am {props.age} years old!</p>
         <p>{props.children}</p> 
     </div>
     )
 }


export default person;