import React from "react";

const PriorityContainer = (props)=>{
    const {task, subTask} = props;

    let priorityTasks = []


    let highlightTask = task.filter(individualTask => individualTask.highlight===true);

    highlightTask.forEach(task=>{
       let highlightSubs = subTask.filter(sub => task.identifier === sub.pointer);
       
    });

    return (
        <div>
            <p>IN PRIORITYCONTAINER</p>
        </div>
    )
};

export default PriorityContainer;
