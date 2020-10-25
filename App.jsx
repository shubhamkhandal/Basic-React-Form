import React, { useState } from 'react';

const App = () => {
    const  [name, setName] = useState("");
    const [lastName, setLastName] = useState("");

    const [fullName, setfullName] = useState();
    const [AddlastName, setAddLastName] = useState();

    const inputEvent = (event) => {
        // console.log(event.target.value);
        setName(event.target.value);
    };
    const inputEventTwo = (event) => {
        setLastName(event.target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        setfullName(name);
        setAddLastName(lastName);
    }

   
   return (
    <reactFragment>
    <form onSubmit={onSubmit}>
        <div>
            <h1>Hello {fullName}{AddlastName}</h1>
            <input type="text" placeholder="enter your name" onChange={inputEvent} value={name} /><br/>
            <input type="text" placeholder="enter your Last name" onChange={inputEventTwo} value={lastName} /><br/>
            <button type="submit" >Change above 👍</button>
        </div>
    </form>
    </reactFragment>
   );

};
export default App;