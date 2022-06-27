import React from "react";
import userPhoto from "../img/michael.jpeg";
import star from "../img/star2.png";
import folder from "../img/folder.png"
import tag from "../img/tag.png"
import flag from "../img/flag.png"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faStar } from '@fortawesome/free-solid-svg-icons'
{/* <FontAwesomeIcon icon="fa-solid fa-star-sharp" /> */}
import TaskContainer from './TaskContainer'
import {useState} from 'react';

const NavMenu = () => {

    const [currentPage, setCurrentPage] = useState('prjects')

    // setCurrentPage = () => {
    //     if (currentPage === 'projects'){
    //         return (<TaskContainer/>)
    //     }
    
    // }

    return (
        <div>
        <div className="sidenav">   
            <div className="user-nav">
                <p id="username">Michael</p>
                <img src={userPhoto} id="user-photo" height="70px"></img>      
            </div>   
            <a href="#">Projects<img src={folder} id="folder" height="25px" className="nav-icons"></img></a>
            <a href="#">Priority<img src={star} id="priority" height="30px" className="nav-icons"></img></a>
            <a href="#">Tags<img src={tag} id="tag" height="29px" className="nav-icons"></img></a>
            <a href="#">Flagged<img src={flag} id="flag" height="26px" className="nav-icons"></img></a>
        </div>
        <TaskContainer/>
        </div>
    )
}




export default NavMenu;