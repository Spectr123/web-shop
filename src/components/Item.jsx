import React from "react";

const Item = ({ item, onAdd }) => {
  const handleAddToCart = () => {
    onAdd(item);
  };

  return (
    <div className="item">
      <img src={`./img/${item.img}`} alt={item.title} />
      <h2>{item.title}</h2>
      <p>{item.desc}</p>
      <span className="price">{item.price} ₸</span>
      <div className="add-to-cart" onClick={handleAddToCart}>
        +
      </div>
    </div>
  );
};

export default Item;