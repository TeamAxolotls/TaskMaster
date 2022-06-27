import React from "react";

const CreateTask = () => {
      
    return (
        <div className="create-task">
            <input id='create-input'></input>
            <button id='create-new' onClick={enterTask}>Create New</button>
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


export default CreateTask;