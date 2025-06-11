import React from 'react';
import { Trash2 } from 'lucide-react';

const Order = ({ item, onDelete }) => {
  const handleDelete = () => {
    onDelete(item.id);
  };

  return (
    <div className="item">
      <img 
        src={`./img/${item.img}`} 
        alt={item.title} 
      />
      <h2>{item.title}</h2>
      <span className="price">{item.price} ₸</span>
      <Trash2 
        className="delete-icon" 
        onClick={handleDelete}
        size={16}
      />
    </div>
  );
};

export default Order;