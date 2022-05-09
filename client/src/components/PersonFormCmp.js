import React, {useEffect, useState} from 'react';
import axios from 'axios'; 

const PersonFormCmp = () => {
    // const [message, messageSetter] = useState("Loading...")
    const [firstName, firstNameSetter ] = useState("");
    const [lastName, lastNameSetter] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault(); 
        axios.post("http://localhost:8000/api/people", {
            firstName, 
            lastName
        })
            .then(res=> {
                console.log(res); 
                console.log(res.data); 
            })
            .catch(err => console.log(err))
    }

    return (
        <form onSubmit={handleSubmit}>
            <p>
                <label>First Name:</label><br/>
                <input type="text" onChange={(e) => firstNameSetter(e.target.value)}/>
            </p>
            <p>
                <label>Last Name:</label><br/>
                <input type="text" onChange={(e) => lastNameSetter(e.target.value)}/>
            </p>
            <input type="submit" />

        </form>
    )

    // useEffect( () => {
    //     axios
    //         .get("http://localhost:8000/api")
    //         .then(res => messageSetter(res.data.message))
    //         .catch(err => console.log(err))
    // }, []); 

    // return (
    //     <div> 
    //         <h2>Message from the darkside of the moon: {message}</h2>
    //     </div>
    // )
}; 

export default PersonFormCmp; 