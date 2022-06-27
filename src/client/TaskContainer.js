import React, { useEffect, useState} from 'react';
import MainTask from './MainTask';
// import TaskList from './TaskList';

const TaskContainer = () => { 

    //set a task state;
    const [task, setTask] = useState('enter a task');
    //set a sub-task state
    const [subTask, setSubTask] = useState('');


    //fetch for data from database, then use it to set state
    useEffect(() => {

        fetch ('http://localhost:3000/home') //get all data from database
          .then (res =>{
            console.log(res)
            return res.json()
          })
          .then (res => {
            setTask(res.task)
            setSubTask(res.subTask)
          })
          .catch(err=>{
            console.log(err);
          })
    });

    return (
        <div>
            <MainTask/>
            {/* <TaskList task={task} subTask={subTask}/> */}
        </div>
    )

};

export default TaskContainer;