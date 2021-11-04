import React from 'react'
import logo from '../assets/images/PullMoon-transparent.png'
import useScript from './utils/useScript'

const NavBar = (props) => {
    useScript({src: "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"});
    useScript({src: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js", integrity: "sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p", crossOrigin: "anonymous"});
    return ( 
        <nav class="navbar navbar-expand-lg bg-dark sticky-top">
            <div class="container-fluid">
                <img src={logo} alt="icon" height="40" className="d-inline-block align-top"/>
                <a style={{color: "#ffec69", marginLeft: "10px"}} class="navbar-brand" href="/pullmoon-docs">PullMoon</a>
                <button class="navbar-toggler navbar-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a className="navbarItem" style={{color: "#ffec69", marginLeft: 10}} class="nav-link" href="#commands">Commands</a>
                    <a className="navbarItem" style={{color: "#ffec69", marginLeft: 10}} class="nav-link" target="_blank" rel="noreferrer" href="https://discord.com/api/oauth2/authorize?client_id=710463678062788668&permissions=8&scope=bot">Invite me</a>
                    <a className="navbarItem" style={{color: "#ffec69", marginLeft: 10}} class="nav-link" href="..">About creator</a>
                </div>
                </div>
            </div>
        </nav>
    );
}
 
export default NavBar;