import react, { useEffect } from 'react';
import MainTask from './MainTask'

const TaskContainer = () => { 

    //set a task state;
    const [task, setTask] = useState('enter a task');
    //set a sub-task state
    const [subTask, setSubTask] = useState('');


    //fetch for data from database, then use it to set state
    useEffect(() => {

        fetch ('http://localhost:3000') //get all data from database
          .then (res =>{
            console.log(res)
          })
    });

    return (
        <div>
            <MainTask/>
            <TastList task={task} subTask={subTask}/>
        </div>
    )

};

export default TaskContainer;