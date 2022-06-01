import React, { Component } from 'react'

export default class BoxClass extends Component {
    componentWillUnmount(){
      console.log("componentWillUnmount")
    }
  render() {
    return (
      <div>
          Box{this.props.num}
      </div>
    )
  }
}