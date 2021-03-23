import React from 'react'
import firebase from '../db/firebase'



export default function ImgUpload() {


    var ImgName, ImgUrl;
var files=[];

    const Choose = (e) =>{
        var input = document.createElement('input');
    input.type='file';


    input.onchange = e =>
                {
                        files =e.target.files;
                       var reader = new FileReader();
                        reader.onload = function(){
                            document.getElementById('img').src=reader.result;
                        }
                        reader.readAsDataURL(files[0]);

                }
                input.click();


    }


    const Upload = () =>{
        console.log(" upload clicked");
        ImgName = document.getElementById('imgname').value;
        var uploadTask = firebase.storage().ref('Image/'+ImgName+".png").put(files[0])
    
        uploadTask.on('state_changed' , function(snapshot){
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            document.getElementById('upprogress') .innerHTML='Uploading'+progress+"%";
    
        },
    
    
    // --------Error Handling-------------------------------
        
        function(err){
            alert("Error to Saving the Image")
        },
    
    
    
    // -------------Submit image into Database--------------
        function(){
            uploadTask.snapshot.ref.getDownloadURL().then(function(url){
                ImgUrl = url;
           
    console.log("database is clear");
    
    
            firebase.database().ref('Pictures/' + ImgName)
            .set({
                Name :ImgName,
                Link:ImgUrl
                 })
    
            alert("Image Added Successfuly")
        }
        
        )
    })
    

    }

const Retrive = () =>{
    ImgName = document.getElementById('imgname').value;
    
    firebase.database().ref('Pictures/' + ImgName)
       .on('value' , function(snapshot){
           document.getElementById('img').src=snapshot.val().Link;

       })

    }




    return (
        <div>
            
            <div class="block">
            Name of the Image <input type="text" id="imgname" /> <br />
            <img src="https://i.imgur.com/Kt3A11F.jpg" id="img" alt="" />
            <label id="upprogress"></label>

            <button onClick={Choose}>Choose Image</button>
            <button onClick={Upload} id="upload">Upload</button>
            <button onClick={Retrive} id="get">Retrive</button>
            </div>
        </div>
    )
}
