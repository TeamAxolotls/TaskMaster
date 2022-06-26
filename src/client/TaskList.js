import React from "react";
import circle from "../img/circle.png";
import completed from "../img/circlegreencheck.png"

const task = [{taskItem: "Sell my laptop", highlight: false, identifier: 1},{taskItem: "Pack for vacation to SF", highlight: false, identifier: 2} ];
const subtask = [{pointer: 1, tasks:['Look up current value of computer', 'Create ad and post to craigslist']}, {pointer: 2, tasks: ["Do laundry and choose clothes", "Go shopping for travel items", "Buy plane ticket"]}];

// props.task and props.subtask
//Map out the main tasks, and create a div for each one. Inside each one, need to map through corresponding subtask array.

// Want to deconstruction task, and subtask



const TaskList = () => {

    const mainTasks = task.map(obj => {
        return (
            <div className="tasks-container">   
                <div>{obj.taskItem}</div>
                <img src={completed} height="30px"></img>
            </div>
        
        
        )
    })

console.log(mainTasks)
    
    return (
        <div>   
        { mainTasks }
        </div>
    )
}


export default TaskList;