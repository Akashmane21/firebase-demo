import React from 'react'
import firebase from '../db/firebase'

export default function Imglist({img}) {
    console.log(img);
    const deletetodo = () =>{
        const todoref = firebase.database().ref('Pictures').child(img.id);
        todoref.remove()
    }

    return (
        <div className="imgbox">
            <img src={img.Link} alt="" />
           <h2>{img.Name}  </h2>  
           <button className="deletebtn" onClick={deletetodo}>Delete</button>

        </div>
    )
}
