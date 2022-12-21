import React, {useState} from "react";

function UserProfile({user, onUpdateUser}){
    const [clicked, setClicked] = useState(false)
    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [vibe, setVibe] = useState(user.vibe)
    const [zip, setZip] = useState(user.zip)
    

    function handleClick(){
        setClicked(!clicked)
    }

    function handleChange(e){
       if(e.target.id === "name"){
        setName(e.target.value)
       }else if(e.target.id ==="email"){
        setEmail(e.target.value)
       }else if (e.target.id ==="vibe"){
        setVibe(e.target.value)
       }else if(e.target.id === "zip"){
        setZip(e.target.value)
       }
    }

    function handleSubmit(e){
        e.preventDefault()
        fetch(`users/${user.id}`, {
            method: "PATCH", 
            headers: {
                "Content-Type":"application/json",
            },
            body: JSON.stringify({name: name, email: email, vibe: vibe, zip: zip})
        })
        .then((r)=>r.json())
        .then((user)=>{
            onUpdateUser(user)
            setClicked(!clicked)
        }
            )
    }
    
    function handleDelete(){
        fetch(`/users/${user.id}`,{
            method: "DELETE", 
        })
        .then((r =>r.json()))
        .then((data)=>console.log(data))
    }


return (
<div>
    <h1>
        {user.username}
    </h1>
    <p>{user.name}</p>
    <p>{user.vibe}</p>
    <p>{user.email}</p>
    <p>{user.zip}</p>

    {clicked ?
    <div>
        <form onSubmit = {handleSubmit}>
            <label>What's your name?</label>
            <br/>
            <input id = "name" type = "text" onChange = {handleChange} value = {name}></input>
            <br/>
            <label>What's your vibe?</label>
            <br/>
            <input id = "vibe" type = "text" onChange = {handleChange} value = {vibe}></input>
            <br/>
            <label >What's your email?</label>
            <br/>
            <input id = "email" type = "text" onChange = {handleChange} value = {email}></input>
             <br/>
            <label >What's your Zip Code?</label>
            <br/>
            <input id="zip" type = "text" onChange = {handleChange} value = {zip}></input>
            <br/>
            <button type = "submit">Submit</button>

        </form>
    </div>
    :
    <button onClick = {handleClick}>Update your Profile!</button>
    }
    <button onClick={handleDelete}>Delete your account</button>
</div>
)
}

export default UserProfile