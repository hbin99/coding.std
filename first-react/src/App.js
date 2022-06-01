
import './App.css';
import Box from './component/Box';
import { useState,useEffect } from 'react';

function App() {
  let counter = 0;//동기적
  const [counter2,setCounter2] = useState(0); //비동기적
  const [value, setValue] = useState(0);
  const increase =() =>{
      counter = counter+1;
      setValue(value+2)
      //setCounter2(counter2+1);
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


//useEffect 콜백함수,배열을 받음 => componentDidMount를 커버해줌 
// 초기 api 호출할때 사용!


/*
useEffect: 상황에 따라 다양한 역할을 하는 멀티 플레이어
 - componentDidMount
useEffect 는 기본적으로 앱실행후 첫번째 렌더 후에 한번 실행이 된다.
여기에선 주로 화면에 처음 보여줘야할 데이터들에 대한 api호출을 한다.
 - componentDidUpdate
useEffect두번째 매개변수인 배열에 state가 들어가 있다면 state값이 바뀔때마다 호출되는 componentDidUpdate 의 역할을 한다.
state가 바뀌고 렌더후 호출된다
 - 배열 안에 여러개의 state 가 들어있다면?
배열안에 여러개의 state를 구독하고 있다면 배열 안에 state중 하나라도 업데이트가 되면 해당 useEffect가 호출이 된다. 
하지만 여러개의 state가 동시에 업데이트 되었다 해도 한번만 호출이 된다.

*/
  useEffect(()=>{
    console.log("useEfferct1 Firee")
  }, []);

  useEffect(()=>{
    console.log("useEfferct2 Firee", counter2, value)
  }, [counter2]);

  useEffect(()=>{
    console.log("다른내용 하고싶어요", value)
  }, [value]);
  return (
    <div>
      {console.log("이렇게도 사용가능")}
      <Box name="제니"/>
      <Box name="리사"/>
      <div>state:{counter2}</div>
      <div>{counter}</div>
      <button onClick={increase}>클릭!</button>
    </div>
  );
}

export default App;
