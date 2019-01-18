import React, { Component } from 'react';
import { carouselData } from '../../data'
// Complete this Carousel 
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      currImg: "",
      currIdx: 0
    }
  }
  componentDidMount(){
    this.setState({
      currImg: carouselData[0],
      currIdx: 0
    });
  }

  leftClick = () => {
    let currIdx = this.state.currIdx;
    currIdx--;
    if (currIdx < 0){
      currIdx = carouselData.length - 1;
    }
    this.setState({
      currImg: carouselData[currIdx],
      currIdx: currIdx
    });
  }

  rightClick = () => {
    let currIdx = this.state.currIdx;
    currIdx++;
    if (currIdx === carouselData.length){
      currIdx = 0;
    }
    this.setState({
      currImg: carouselData[currIdx],
      currIdx: currIdx
    });
  }

  selectedImage = () => {
    return <img src={this.state.currImg} style={{display: 'block'}} />
  }
  
  render(){
    return (
      <div className="carousel">
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
        {this.selectedImage()}
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
      </div>
    )
  }
}