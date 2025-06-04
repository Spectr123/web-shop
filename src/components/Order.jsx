import React, { Component } from 'react'

export class Order extends Component {
  render() {
    return (
      <div className='item'>
        <img src={"./img/" + this.props.item.img} alt={this.props.item.title} />
        <h2>{this.props.item.title}</h2>
        <span className="price">{this.props.item.price} ₸</span>
      </div>
    )
  }
}

export default Order