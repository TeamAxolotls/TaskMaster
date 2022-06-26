import React from "react";
import uncompleted from "../img/circle.png";
import completed from "../img/circlegreencheck.png"
import { useState } from "react";
const checks = {uncompleted, completed}; // These are the unchecked and checked circles

const task = [{taskItem: "Sell my laptop", highlight: false, identifier: 1},
{taskItem: "Pack for vacation to SF", highlight: false, identifier: 2},
{taskItem: "Study for graduation assessment", highlight: false, identifier: 3},
];
const subtask = [{pointer: 1, tasks:['Look up current value of computer', 'Create ad and post to craigslist']}, {pointer: 2, tasks: ["Do laundry and choose clothes", "Go shopping for travel items", "Buy plane ticket"]}];

const testArr = ['Look up current value of computer', 'Create ad and post to craigslist'];


//Map out the main tasks, and create a div for each one. Inside each one, need to map through corresponding subtask array.

// Want to deconstruction task, and subtask

//TO DO
// Need to fix functionality for check marks. Right now they all turn green when one is clicked


const TaskList = () => {


    // Function to render subtasks

        // const subtaskArr = subtask.map(obj => {
        //     return obj.tasks
        //     });

        // const subtaskDivs = [];
        
        // for (let i = 0; i < subtaskArr.length; i++) {
        //     subtaskDivs.push(<li>{subtaskArr[i]}</li>)
        // }
        // console.log(subtasksDivs)
    

    // Function to render main tasks

    const mainTasks = task.map(obj => {
            // Sub Function to change the check box image
        const [check, setCheck] = useState(checks.uncompleted);

        function complete() {
            if (check === checks.completed) {
                setCheck(checks.uncompleted)
            } else {
                setCheck(checks.completed)
            }
        };
        return (
            <div className="tasks-container">   
                <div className="main-task">{obj.taskItem}<button id="check-circle" onClick={() => complete()} key={obj.identifier}>
                    <img src={check} height="30px" id="check-button"></img></button>        
                </div>
                <div className="sub-tasks">
                     {/* {subtaskDivs} */}
                </div>
            </div>

        )
    });

// console.log(mainTasks)
    
    return (
        <div id="main-task-container">   
        { mainTasks }

        </div>
    )
}


export default TaskList;