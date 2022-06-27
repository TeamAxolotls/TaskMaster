import React from "react";
import uncompleted from "../img/circle.png";
import completed from "../img/circlegreencheck.png"
import { useState } from "react";
const checks = {uncompleted, completed}; // These are the unchecked and checked circles

const task = [{taskItem: "Sell my laptop", highlight: false, identifier: 1, completed: false},
{taskItem: "Pack for vacation to SF", highlight: false, identifier: 2, completed: false},
{taskItem: "Study for graduation assessment", highlight: false, identifier: 3, completed: false},
];
const subtask = [{pointer: 1, tasks:['Look up current value of computer', 'Create ad and post to craigslist']}, 
    {pointer: 2, tasks: ["Do laundry and choose clothes", "Go shopping for travel items", "Buy plane ticket"]},
    {pointer: 3, tasks: ["Study redux and react", "Go over lecture slides", "Review daily hack hour algos"]}];

const testArr = ['Look up current value of computer', 'Create ad and post to craigslist'];


// Map out the main tasks, and create a div for each one. Inside each one, need to map through corresponding subtask array.

// Will want to deconstruction task, and subtask

const TaskList = (props)=> {
    // task={task} subTask={subTask} setTask={setTask}
    
    // const {setTask, task, subTask} = props;
    // const subtask = subTask;
    
        // console.log(subtasksDivs)
    
    // Function to render main tasks
    const mainTasks = task.map(obj => {
            // Sub Function to change the check box image
        const [check, setCheck] = useState(checks.uncompleted);
        function complete() {
            if (check === checks.completed) {
                setCheck(checks.uncompleted)
                //completed: false;
                // setTask(currentState =>{

                //     return currentState[0].completed = false
                // })
                console.log(check)
            } else {
                setCheck(checks.completed)
                console.log(check)
                //completed:true;
            }
        };
    // Function to render subtasks
    let subtaskArr = subtask.filter(subtask => {
            return subtask.pointer === obj.identifier
        });
    subtaskArr = subtaskArr[0].tasks;
        // console.log(subtaskArr);
    const subtaskDivs = [];

    for (let i = 0; i < subtaskArr.length; i++) {
        subtaskDivs.push(<li>{subtaskArr[i]}</li>)
    }

    console.log(subtaskDivs);
        
        return (
            <div className="tasks-container">   
                <div className="main-task">{obj.taskItem}<button id="check-circle" 
                onClick={() => complete()} key={obj.identifier}>
                    <img src={check} height="30px" id="check-button"></img></button>        
                </div>
                <div className="sub-tasks">
                     { subtaskDivs }
                </div>
            </div>

        )
    });
    
    // Render entire task component (mainTasks, which as subTasks nested inside)
    return (
        <div id="main-task-container">   
        { mainTasks }
        </div>
    )
}


export default TaskList;