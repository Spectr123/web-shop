import React from "react";
import Item from "./Item";

const Items = ({ items, onAdd }) => {
  return (
    <main>
      {items.map((el) => (
        <Item item={el} key={el.id} onAdd={onAdd} />
      ))}
    </main>
  );
};

export default Items;