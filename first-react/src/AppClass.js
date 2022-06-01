import React, { Component } from 'react'
import BoxClass from './component/BoxClass';
export default class AppClass extends Component { //rcc 
    constructor(props){
        super(props)
        this.state={
            counter2: 0,
            num:1,
            value:0
        };
        console.log("constructor")
    }

    //클래스에서는 const를 붙여주지 않는다.
    increase = () => {
        this.setState({
            counter2:this.state.counter2 + 1,
            value:this.state.value+1
        });
        console.log("increase function", this.state);
    };
  componentDidMount(){
     //api 콜
    console.log("componentDidMount")
  }
  //최신 작업 사용
  componentDidUpdate(){
    console.log("componentDidUpdate", this.state);
  }
  //lifecycle function > class component , function component
  // 1, constructor 안에서는 state를 만듬 
  // 2, render  : ui 그리는 것 
  // 3, componentDidMount: api 호출 작업 > render 끝나고 호출되니까 
  
  render() {//setState, new Props,등등 업데이트가 되는 상황에서 render가 일어난다. > componentDidUpdate 호출 
    console.log("render")
    return (
      <div>
        <div>state:{this.state.counter2}</div>
        <button onClick={this.increase}>클릭!</button>
        <BoxClass num={this.state.value} />
        {this.state.counter2<3 && <BoxClass num={this.state.value} />}
      </div>
    )
  }
}