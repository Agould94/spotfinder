import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'

function AddRestaurantPage() {
     const [name, setName]=useState('')
     const [vibe, setVibe]=useState('')
     const [address, setAddress]=useState('')
     const [food_type, setFoodType]=useState('')
     const [phone_number, setPhoneNumber]=useState('')
    console.log(name)
    console.log(address)
    console.log(vibe)
    console.log(food_type)
    console.log(phone_number)
  

        const history=useHistory()
     const restaurant={
        name: name,
        vibe: vibe,
        address: address, 
        food_type: food_type,
        phone_number: phone_number
     }

     function handleChange(e){
        switch(e.target.id){
            case "name":
                setName(e.target.value)
                break
            case "vibe":
                setVibe(e.target.value)
                break
            case "address":
                setAddress(e.target.value)
                break
            case "food_type":
                setFoodType(e.target.value)
                break
            case "phone_number":
                setPhoneNumber(e.target.value)
                break
        }
     }

     function handleSubmit(e){
        e.preventDefault()
        fetch('/restaurants',{
            method: "POST",
            headers:{
                'Content-Type':"application/json"
            },
            body: JSON.stringify({ 
                name: name,
                vibe: vibe,
                address: address, 
                food_type: food_type,
                phone_number: phone_number
            })
        }).then((r)=>r.json())
        .then((restaurant)=>{
            console.log(restaurant)
            console.log("something")
            history.push(`/restaurants/${restaurant.id}`)
        })
     }

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
            <input id = "address" type = "text" onChange = {handleChange} value = {address}></input>
             <br/>
            <label >What type of food does this restaurant serve?</label>
            <br/>
            <input id="food_type" type = "text" onChange = {handleChange} value = {food_type}></input>
            <br/>
            <label >What is the phone number of this restaurant?</label>
            <br/>
            <input id="phone_number" type = "text" onChange = {handleChange} value = {phone_number}></input>
            <br/>
            <button type = "submit">Submit</button>
        </form>
</div>
  )
}

export default AddRestaurantPage;