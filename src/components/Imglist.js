import React from 'react'

export default function Imglist({img}) {
    console.log(img);
    return (
        <div>
            <img src={img.Link} alt="" />
           <h1>Name : {img.Name}  </h1>  
        </div>
    )
}
