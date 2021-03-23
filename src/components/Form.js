import React from 'react'
import { useState } from 'react'
import firebase from '../db/firebase'

export default function Form() {
const[title,settitle]=useState('')

const handleonChange = (e) =>{
settitle(e.target.value)
}

const createTodo=()=>{
const todoref = firebase.database().ref('Todo');
const todo = {
    title,
    complete:false
};
todoref.push(todo)

}
    return (
        <div>
            <input type="text" onChange={handleonChange} value={title} />
            <button  onClick={createTodo}>Add</button>
        </div>
    )
}
