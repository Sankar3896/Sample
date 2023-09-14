import { render } from "@testing-library/react";
import React, { useEffect, useState } from "react";

export default function Sheweta()
{

    const[image1,setImage1] = useState(true)
    const[image2,setImage2] = useState(false)
    const element = document.getElementById('show1');
    const element2 = document.getElementById('show2')

     if(image1)
    {
         element
    }else
    {
         element2
    }

    

    return(

        <>
        <div id="show1">
            <img src={require('./Img/s1.png')}  />
        </div>
        <div id="show2">
            <img src={require('./Img/s2.png')} />
        </div>
        </>
    )

}