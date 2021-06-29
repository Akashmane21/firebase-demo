import React from 'react'
import { useEffect, useState } from 'react';
import firebase from '../db/firebase'
import Todo from './Todo'
import Imglist from './Imglist'
import ImgUpload from './ImgUpload'

import '../App.css'
export default function Todolist() {
    
  const[todoList , setTodoList] = useState()
const[imglist,newimglist]=useState()


  useEffect(()=>{
    const todoref = firebase.database().ref('Todo');
    todoref.on('value' , (snapshot)=>{
      const todoList = []
      const todos =snapshot.val()
      for(let id in todos){
        todoList.push({id, ...todos[id]})
      }
      const reversed = todoList.reverse()
      setTodoList(reversed)
    })

      const imgref = firebase.database().ref('Pictures');
      imgref.on('value' , (snapshot)=>{
        const imgList = []
        const imgs =snapshot.val()
        for(let id in imgs){
            imgList.push({id, ...imgs[id]})
        }
        newimglist(imgList)
console.log(imgList);


   })
  },  [ ]);



    return (
        <div>
        <div className="todolist">
            {todoList ? todoList.map((todo , index)=> <Todo todo={todo} key={index}/>) : ""}
        </div>
        <h1>Image's</h1>
     
     
     <ImgUpload />
        <div className="imagelisting">
            {imglist ? imglist.map((img , index)=> <Imglist img={img} key={index}/>) : ""}
        </div>


        </div>
    )
}
