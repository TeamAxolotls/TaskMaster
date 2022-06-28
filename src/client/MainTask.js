import React from "react";

const CreateTask = (props) => {
      const {setTask, setSubTask, task, subTask} = props;


      const enterTask = () =>{
        const userInput = document.getElementById('create-input').value;
        // const userID = document.getElementById('')

        const newSubTask = {
            pointer: 4,
            tasks: []
        }
        let currentSub = [...subTask];
        currentSub.push(newSubTask);
        setSubTask(currentSub)

        const newTask = {
            taskItem: userInput,
            highlight: false,
            identifier: 4,
            completed: false
        }
        let curr = [...task];
        curr.push(newTask);
        console.log(curr);
        setTask(newTask);




        // setTask(currState =>{
        //             let newState = [...currState];
        //             console.log('CURRSTATE', currState)
        //             newState.push(newTask);
        //             console.log('NEWSTATE', newState)
        //             return newState;
        //         })


        // const newTask = [{taskItem: "Sell my laptop", highlight: false, identifier: 1, completed: false},
        //     {taskItem: "Pack for vacation to SF", highlight: false, identifier: 2, completed: false},
        //     {taskItem: "Study for graduation assessment", highlight: false, identifier: 3, completed: false},
        //   ];
        // const newSubTasks = [{pointer: 1, tasks:['Look up current value of computer', 'Create ad and post to craigslist']}, 
        //     {pointer: 2, tasks: ["Do laundry and choose clothes", "Go shopping for travel items", "Buy plane ticket"]},
        //     {pointer: 3, tasks: ["Study redux and react", "Go over lecture slides", "Review daily hack hour algos"]}];
    

        // console.log(userInput)
        const outgoing = {
            // username: userID,
            taskName: userInput
        }
        // fetch ('http://localhost:3000/main', {
        //     method: 'POST',
        //     headers: {'Content-Type': 'application/json'},
        //     body: JSON.stringify(outgoing)
        // })
        //   .then (res =>{
        //     return res.json()
        //   })
        //   .then (res =>{
        //     console.log('fetch post request', res)
        //     setTask(currState =>{
        //         let newState = [...currState];
        //         console.log('CURRSTATE', currState)
        //         newState.push(res.task[0]);
        //         console.log('NEWSTATE', newState)
        //         return newState;
        //     })
        //     setSubTask(currState =>{
        //         let newState = [...currState];
        //         newState.push(res.subTask[0]);
        //         return newState;
        //     })
    
        //   })
    }


//     const task = [{taskItem: "Sell my laptop", highlight: false, identifier: 1, completed: false},
// {taskItem: "Pack for vacation to SF", highlight: false, identifier: 2, completed: false},
// {taskItem: "Study for graduation assessment", highlight: false, identifier: 3, completed: false},
// ];
// const subtask = [{pointer: 1, tasks:['Look up current value of computer', 'Create ad and post to craigslist']}, 
//     {pointer: 2, tasks: ["Do laundry and choose clothes", "Go shopping for travel items", "Buy plane ticket"]},
//     {pointer: 3, tasks: ["Study redux and react", "Go over lecture slides", "Review daily hack hour algos"]}];



    return (
        <div className="create-task">
            <input id='create-input'></input>
            <button id='create-new' onClick={enterTask}>Create New</button>
        </div>
    )

};

export default CreateTask;