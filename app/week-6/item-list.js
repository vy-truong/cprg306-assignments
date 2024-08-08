import React from 'react';
import Item from './item';

const ItemList = ({ items }) => {
  return (
    <ul>
      {items.map(item => (
        <Item key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default ItemList;
