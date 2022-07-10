import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import Box from "./component/Box";

function App() {
  const count = useSelector((state)=>state.count)
  let id = useSelector((state)=>state.id)
  let pass = useSelector((state)=>state.pass)
  //const[count,setCount]= useState(0);
  const dispatch =useDispatch();
  const increase=()=>{
    // type : 액션의 이름 
    // payload : 함수의 매개변수 같은 느낌  > 필요한 정보 전송 
    dispatch({type:"INCREMENT",payload:{num : 5}}); //action 던지고 
    //setCount(count+1);
  };
  const login =()=>{
    dispatch({type:"LOGIN",payload:{id : "noona",pass :"123"}});
  }
  const decrement =()=>{
    dispatch({type:"DECREMENT",payload});
  }
  return (
    <div>
       <h1>{id}{pass}</h1>
      <h1>{count}</h1>
      <button onClick={increase}>증가!</button>
      <button onClick={decrement}>감소!</button>
      <button onClick={login}>Login</button>
      <Box/>
    </div>
  );
}

export default App;
