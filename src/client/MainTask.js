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
    const userInput = document.getElementById('create-input').value;
    // const userID = document.getElementById('')
    // console.log(userInput)
    const outgoing = {
        // username: userID,
        newTask: userInput
    }
    console.log(outgoing)
    fetch ('http://localhost:3000/main', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: outgoing
    })
      .then (res =>{
        console.log(res)
      })
}


export default CreateTask;