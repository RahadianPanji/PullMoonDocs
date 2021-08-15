import React, { Component } from 'react'
import logo from '../assets/images/PullMoon-transparent.png'

const NavBar = (props) => {
    return ( 
        <nav style={{backgroundColor: "#222222"}} class="navbar navbar-expand-lg bg-dark sticky-top">
            <div class="container-fluid">
                <img src={logo} height="40" className="d-inline-block align-top"/>
                <a style={{color: "#ffec69", marginLeft: "10px"}} class="navbar-brand" href="#">PullMoon</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a className="navbarItem" style={{color: "#ffec69", marginLeft: 10}} class="nav-link" href="#commands">Commands</a>
                    <a className="navbarItem" style={{color: "#ffec69", marginLeft: 10}} class="nav-link" target="_blank" href="https://discord.com/api/oauth2/authorize?client_id=710463678062788668&permissions=8&scope=bot">Invite me</a>
                    <a className="navbarItem" style={{color: "#ffec69", marginLeft: 10}} class="nav-link" href="..">About creator</a>
                </div>
                </div>
            </div>
        </nav>
    );
}
 
export default NavBar;