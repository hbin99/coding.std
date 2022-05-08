
import './App.css';
import Box from './component/Box';
import {useState} from "react";

function App() {
  let counter = 0;//동기적
  const [counter2,setCounter2] = useState(0); //비동기적
  const increase =() =>{
      counter = counter+1;
      setCounter2(counter2+1);
  };

  //순서 
  //1. 유저가 버튼 클릭
  //2. counter +1 해서 1 됨 
  //3. setState 함수 호출 
  //4. console.log 실행 
  // 변수값은 1로 보이고, state 값은 아직 안변했기 때문에 그전에 값이 보임 
  // 함수 끝 
  // app 다시 re render
  // let counter = 0을 거치면서 counter 값은 다시 0 으로 초기화 
  // state값은 update가 되면서 다시 render 업데이트된 state 값이 보임 

  //중요 : 변수(잠깐 담아둬야하는 값)는 re render 될때마다 초기화, state값은 비동기화가 됨! 

  return (
    <div> /*하나로 묶어서 반환해야함*/
      <Box name="제니"/>
      <Box name="리사"/>
      <div>state:{counter2}</div>
      <div>{counter}</div>
      <button onClick={increase}>클릭!</button>
    </div>
  );
}

export default App;
