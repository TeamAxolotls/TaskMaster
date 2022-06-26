import React from "react";
import userPhoto from "../img/michael.jpeg";
import TaskContainer from "./TaskContainer";
import star from "../img/star2.png";
import folder from "../img/folder.png";
import tag from "../img/tag.png";
import flag from "../img/flag.png";
import logo from "../img/taskmasterlogo.png";
import grid from "../img/grid.png";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faStar } from '@fortawesome/free-solid-svg-icons'
{/* <FontAwesomeIcon icon="fa-solid fa-star-sharp" /> */}

 

const NavMenu = () => {
    return (
        <div>
        <div className="sidenav">   
            <div className="logo">
                <img src={logo} id="main-logo" height="60px"></img>
                <p id="main-logo">TaskMaster</p>
            </div>   
            <a href="#">Projects<img src={folder} id="folder" height="25px" className="nav-icons"></img></a>
            <a href="#">Priority<img src={star} id="priority" height="30px" className="nav-icons"></img></a>
            <a href="#">Tags<img src={tag} id="tag" height="29px" className="nav-icons"></img></a>
            <a href="#">Flagged<img src={flag} id="flag" height="26px" className="nav-icons"></img></a>
        </div>
        <div className="topnav">
            <div id="user-section">
                {/* <p id="username">Michael</p>  */}
                <a href="#"><img src={grid} id="grid" height="23px"></img></a>
                <a href="#"> <img src={userPhoto} id="user-photo" height="40px"></img> </a>          
            </div>
 
        </div>
        <TaskContainer/>
        </div>
    )
}

export default NavMenu;