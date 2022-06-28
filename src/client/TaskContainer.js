import React, { useEffect } from 'react';
import MainTask from './MainTask'
import TaskList from './TaskList';
import { useState } from 'react';
import CreateTask from './MainTask';


const TaskContainer = () => { 

    //set a task state;
    const [task, setTask] = useState([{taskItem: "Sell my laptop", highlight: false, identifier: 1, completed: false},
        {taskItem: "Pack for vacation to SF", highlight: false, identifier: 2, completed: false},
        {taskItem: "Study for graduation assessment", highlight: false, identifier: 3, completed: false},
      ]);
    //set a sub-task state
    const [subTask, setSubTask] = useState([{pointer: 1, tasks:['Look up current value of computer', 'Create ad and post to craigslist']}, 
        {pointer: 2, tasks: ["Do laundry and choose clothes", "Go shopping for travel items", "Buy plane ticket"]},
        {pointer: 3, tasks: ["Study redux and react", "Go over lecture slides", "Review daily hack hour algos"]}]);

    // const newTask = [{taskItem: "Sell my laptop", highlight: false, identifier: 1, completed: false},
    //     {taskItem: "Pack for vacation to SF", highlight: false, identifier: 2, completed: false},
    //     {taskItem: "Study for graduation assessment", highlight: false, identifier: 3, completed: false},
    //   ];
    // const newSubTasks = [{pointer: 1, tasks:['Look up current value of computer', 'Create ad and post to craigslist']}, 
    //     {pointer: 2, tasks: ["Do laundry and choose clothes", "Go shopping for travel items", "Buy plane ticket"]},
    //     {pointer: 3, tasks: ["Study redux and react", "Go over lecture slides", "Review daily hack hour algos"]}];

    // setTask(newTask);
    // setSubTask(newSubTasks)

    //fetch for data from database, then use it to set state
    // useEffect(() => {

    //     fetch ('http://localhost:3000/main') //get all data from database
    //       .then (res =>{
    //         console.log('res', res)
    //         return res.json()
    //       })
    //       .then (res => {
    //         console.log('RES')
    //         setTask(res.task)
    //         setSubTask(res.subTask)
    //       })
    //       .catch(err=>{
    //         console.log(err);
    //       })
    // });

    return (
        <div>

            <MainTask setTask={setTask} setSubTask={setSubTask} task={task} subTask={subTask}/>
            <TaskList task={task} subTask={subTask} setTask={setTask}/>
        </div>
    )

};

export default TaskContainer;