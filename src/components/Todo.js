import React from 'react'
import firebase from '../db/firebase'
import '../App.css'

export default function Todo({todo}) {
    console.log(todo);
    const deletetodo = () =>{
        const todoref = firebase.database().ref('Todo').child(todo.id);
        todoref.remove()
    }

const completetodo=()=>{

    
    const todoref = firebase.database().ref('Todo').child(todo.id);
    todoref.update({
        complete:!todo.complete,
    })
}

    return (
        <div className="todobox">
            <h3 className={todo.complete?"complete":""}>{todo.title}</h3>

          <div className="btns">
            <button className="deletebtn" onClick={deletetodo}>Delete</button>
            <button className="completebtn" onClick={completetodo}>Copy</button>
           </div>

        </div>
    )
}
