import {useState, useEffect} from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Login from './components/Login';
import SignUp from './components/Signup';
import Home from './components/Home';
import NavBar from './components/Navbar';
import UserProfile from './components/UserProfile';
import RestaurantPage from './components/RestaurantPage';

function App() {
  //const [count, setCount] = useState(0)
  const [user, setUser] = useState(null)
  const [restaurant, setRestaurant]= useState({})
  console.log(user)
  console.log(restaurant)

  useEffect(() => {
    // auto-login
    fetch("/me")
    .then((r) => r.json())
    .then((data) => {
      console.log(data) 
      setUser(data)})
  }, []);

  function handleUpdateUser(updatedUser){
    setUser(updatedUser)
  }

 

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <main>
        {user ? (
          <Switch>
            <Route exact path="/">
              <Home user={user} handleSetRestaurant={setRestaurant}/>
            </Route>
            <Route path = {`/restaurants/${restaurant.id}`}>
                <RestaurantPage restaurant = {restaurant} user = {user}></RestaurantPage>
            </Route>
            <Route path = {'restaurants/create'} >
              <AddRestaurantPage></AddRestaurantPage>
            </Route>
            <Route path="/user">
              <UserProfile user = {user} onUpdateUser = {handleUpdateUser}></UserProfile>
            </Route>
            <Route path="/">

            </Route>
          </Switch>
        ) : (
          <Switch>
            <Route path="/signup">
              <SignUp setUser={setUser} />
            </Route>
            <Route path="/login">
              <Login setUser={setUser} />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        )}
      </main>
    </>
  );
}

export default App;
