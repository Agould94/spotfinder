import {useState, useEffect} from 'react';
import {Switch, Route} from "react-router-dom";
import { useParams } from "react-router-dom";
import Login from './components/Login';
import SignUp from './components/Signup';
import Home from './components/Home';
import NavBar from './components/Navbar';
import UserProfile from './components/UserProfile';
import RestaurantPage from './components/RestaurantPage';
import AddRestaurantPage from './components/AddRestaurantPage';

function App() {
  //const [count, setCount] = useState(0)
  const [user, setUser] = useState(null)
  const [restaurants, setRestaurants] = useState([])
  const [tags, setTags] = useState([])
  console.log(tags)
  console.log(restaurants)
  
  useEffect(()=>{
    fetch("/popular_tags")
    .then((r)=>r.json())
    .then((t)=>setTags(t))
  }, [])
  
  //console.log(restaurants[1].popular_tags)
  
  console.log(user)
  const [restaurantPage, setRestaurantPage]= useState({})
  
  const params = useParams()

  function handleSetTags(tags){
    setTags(tags)
  }

  useEffect(() => {
    // auto-login
    fetch("/me")
    .then((r) => r.json())
    .then((data) => {
      if(data.error){
        console.log(data)
      }else{
        console.log(data) 
        setUser(data)
      }})
  }, []);

  function handleUpdateUser(updatedUser){
    setUser(updatedUser)
  }
  function handleSetRestaurantPage(restaurant){
    setRestaurantPage(restaurant)
  }

  function handleRestaurantParams(){

  }



  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <main>
        {user ? (
          <Switch>
             <Route path = "/restaurants/:id" >
                <RestaurantPage user = {user}  restaurant = {restaurantPage} restaurants = {restaurants} tags = {tags} setTags = {setTags}></RestaurantPage>
            </Route>
            <Route exact path="/">
              <Home user={user} setRestaurantPage = {handleSetRestaurantPage} restaurants={restaurants} setRestaurants={setRestaurants} tags = {tags} handleSetTags = {handleSetTags}/>
            </Route>
            <Route path = {'/new'} >
              <AddRestaurantPage></AddRestaurantPage>
            </Route>
            <Route path="/user">
              <UserProfile user = {user} onUpdateUser = {handleUpdateUser}></UserProfile>
            </Route>
          </Switch>
        ) : (
          <Switch>
            <Route path = "/restaurants/:id" >
                <RestaurantPage user = {user} restaurant = {restaurantPage} restaurants = {restaurants} ></RestaurantPage>
            </Route>
            <Route path="/signup">
              <SignUp setUser={setUser} />
            </Route>
            <Route path="/login">
              <Login setUser={setUser} />
            </Route>
            <Route path="/">
              <Home setRestaurantPage = {handleSetRestaurantPage} restaurants={restaurants} setRestaurants={setRestaurants} tags = {tags} setTags = {setTags}/>
            </Route>

          </Switch>
        )}
      </main>
    </>
  );
}

export default App;
