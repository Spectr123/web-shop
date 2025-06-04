import React, { Component } from "react";
import Item from "./Item";

class Items extends Component {
  render() {
    return (
      <main>
        {this.props.items.map((el) => (
          <Item item={el} key={el.id} onAdd={this.props.onAdd} />
        ))}
      </main>
    );
  }
}

export default Items;