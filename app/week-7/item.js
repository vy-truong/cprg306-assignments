"use client";
import React from 'react';

const Item = ({ item, onSelect }) => {
  return (
    <li onClick={() => onSelect(item)}>
      {item.name}
    </li>
  );
};

export default Item;
