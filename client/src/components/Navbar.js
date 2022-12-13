import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import {NavLink} from 'react-router-dom'


function NavBar({user, setUser}) {
    function handleLogout(e){
        e.preventDefault()

        fetch('/logout', {method: "DELETE"})
        .then((r)=>setUser(null))
    }

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>
        <Nav.Link as = {NavLink} exact to={`/`}>
        SpotFinder
        </Nav.Link>
        </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
            { user ?
                <Nav.Item>
                    <Nav.Link onClick = {handleLogout}>
                        Logout
                    </Nav.Link>
                </Nav.Item>
                :
            <Nav>
            <Nav.Item>
                <Nav.Link as = {NavLink} to={"/login"}>
                Login
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as = {NavLink} to={"/signup"}>
                Sign Up
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as = {NavLink} to={`/user`}/>
            </Nav.Item>
            </Nav>
            }   
        </Nav>
        <Nav className = "ms-auto p-3">
          {user ? (
            <Nav.Item>Welcome, {user.username}</Nav.Item>
          ) : (
            <Nav.Item>Welcome</Nav.Item>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;