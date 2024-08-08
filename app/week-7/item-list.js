import React from 'react';
import Item from './item';

const ItemList = ({ items, onItemSelect }) => {
  return (
    <div>
      <ul>
        {items.map(item => (
          <Item key={item.id} item={item} onSelect={onItemSelect} />
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
