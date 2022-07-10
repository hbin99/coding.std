import React from 'react'
import {useSelector} from "react-redux";



const GreandSonBox = () => {
    let count = useSelector((state)=>state.count);
  return (
    <div>
      GreandSonBox: {count}
    </div>
  )
}

export default GreandSonBox
