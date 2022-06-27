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
import {useState} from 'react';
import PriorityContainer from "./PriorityContainer";

 

const NavMenu = () => {

    const [currentPage, setCurrentPage] = useState('tasks')


    let goPage;
    if (currentPage==='tasks'){
        goPage = <TaskContainer/>;
    }
    else if (currentPage === 'priority'){
        goPage = <PriorityContainer/>
    }
    // else if (currentPage === 'tags'){
    //     goPage = <TagsContainer/>;
    // }
    // else if (currentPage === 'flagged'){
    //     goPage = <FlaggedContainer/>
    // }
    // else if (currentPage === 'done'){
    //     goPage = <DoneContainer/>
    // }

    return (
        <div>
        <div className="sidenav">   
            <div className="logo">
                <img src={logo} id="main-logo" height="60px"></img>
                <p id="main-logo">TaskMaster</p>
            </div>   
            <a href="#" id="tasks-div" onClick={()=> setCurrentPage('tasks')} >Tasks<img src={folder} id="folder" height="23px" className="nav-icons"></img></a>
            <a href="#" id="priority-div" onClick={()=> setCurrentPage('priority')}>Priority<img src={star} id="priority" height="30px" className="nav-icons"></img></a>
            <a href="#" id="tags-div" onClick={()=> setCurrentPage('tags')}>Tags<img src={tag} id="tag" height="27px" className="nav-icons"></img></a>
            <a href="#" id="flagged-div" onClick={()=> setCurrentPage('flagged')}>Flagged<img src={flag} id="flag" height="24px" className="nav-icons"></img></a>
            <a href="#" id="done-div" onClick={()=> setCurrentPage('done')}>Done<img src={completed} id="completed-logo" height="26px" className="nav-icons"></img></a>
        </div>
        <div className="topnav">
            <div id="user-section">
                {/* <p id="username">Michael</p>  */}
                <a href="#"><img src={grid} id="grid" height="23px"></img></a>
                <a href="#"> <img src={userPhoto} id="user-photo" height="40px"></img> </a>          
            </div>
 
        </div >
        <div  id="main-task-container">
            {goPage}
        </div>

        </div>
    )
}




export default NavMenu;