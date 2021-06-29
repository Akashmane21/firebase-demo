import React from 'react'

export default function Imglist({img}) {
    console.log(img);
    return (
        <div className="imgbox">
            <img src={img.Link} alt="" />
           <h2>{img.Name}  </h2>  
        </div>
    )
}
