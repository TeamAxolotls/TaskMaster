import React from "react";

const TaskMaster = () => {
      
    return (
        <div>
            <input id='createInput'></input>
            <button id='createNew' onClick={enterTask}>Create New</button>
        </div>
    )

};

const enterTask = () =>{
    const userInput = document.getElementById('createInput').value;
    // const userID = document.getElementById('')
    console.log(userInput)
    const outgoing = {
        // username: userID,
        newTask: userInput
    }
    fetch ('http://localhost:3000', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: outgoing
    })
      .then (res =>{
        console.log(res)
      })
}


export default TaskMaster;