import React, { Component } from 'react'

export class Item extends Component {
  render() {
    return (
      <div className='item'>
        <img src={"./img/"+ this.props.item.img}></img>
        <h2>{this.props.item.title}</h2>
        <p>{this.props.item.desc}</p>
        <span className='price'>{this.props.item.price} ₸</span>
        <div className='add-to-cart'>+</div>        
      </div>
    )
  }
}

export default Item