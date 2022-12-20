import React from 'react'

function AddRestaurantPage() {
     

  return (
    <div>  
       <form onSubmit = {handleSubmit}>
            <label>Whatis the name of this resturaunt?</label>
            <br/>
            <input id = "name" type = "text" onChange = {handleChange} value = {name}></input>
            <br/>
            <label>What is the vibe of this restaurant?</label>
            <br/>
            <input id = "vibe" type = "text" onChange = {handleChange} value = {vibe}></input>
            <br/>
            <label >What is the address of this restaurant?</label>
            <br/>
            <input id = "address" type = "text" onChange = {handleChange} value = {email}></input>
             <br/>
            <label >What type of food does this restaurant serve?</label>
            <br/>
            <input id="food_type" type = "text" onChange = {handleChange} value = {zip}></input>
            <br/>
            <label >What is the phone number of this restaurant?</label>
            <br/>
            <input id="phone_number" type = "text" onChange = {handleChange} value = {zip}></input>
            <br/>
            <button type = "submit">Submit</button>
        </form>
</div>
  )
}

export default AddRestaurantPage