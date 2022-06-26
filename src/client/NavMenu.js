import React from "react";
import userPhoto from "../img/michael.jpeg";
import TaskContainer from "./TaskContainer";
import star from "../img/star2.png";
import folder from "../img/folder.png";
import tag from "../img/tag.png";
import flag from "../img/flag.png";
import logo from "../img/taskmasterlogo.png";
import grid from "../img/grid.png";
import completed from "../img/completed.png";

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
            <a href="#" id="tasks-div">Tasks<img src={folder} id="folder" height="23px" className="nav-icons"></img></a>
            <a href="#" id="priority-div">Priority<img src={star} id="priority" height="30px" className="nav-icons"></img></a>
            <a href="#" id="tags-div">Tags<img src={tag} id="tag" height="27px" className="nav-icons"></img></a>
            <a href="#" id="flagged-div">Flagged<img src={flag} id="flag" height="24px" className="nav-icons"></img></a>
            <a href="#" id="done-div">Done<img src={completed} id="completed-logo" height="26px" className="nav-icons"></img></a>
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