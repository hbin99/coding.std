import React from 'react'
import {useSelector} from "react-redux";
import GreandSonBox from "./GreandSonBox"
const Box = () => {
    let count = useSelector((state)=>state.count);
  return (
    <div>
     box :  {count}
     <GreandSonBox/>
    </div>
   
  )
}

export default Box
