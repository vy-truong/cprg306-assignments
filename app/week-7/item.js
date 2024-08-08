"use client";
import React from "react";

export default function Item({ item, onSelect }) {
    const { name, quantity, category } = item;

    // const itemStyle = "bg-blue-400 text-white p-4 border-b border-gray-700 m-5 my-2 max-w-xl cursor-pointer flex flex-col items-center";
    const itemStyle = "bg-blue-400 text-white px-20 border-b border-gray-700 m-5 my-2 max-w-xl cursor-pointer";
    const nameStyle = "text-lg font-bold";
    const detailStyle = "text-gray-900";


    return (
        <div onClick={() => onSelect(item)} className={itemStyle}>
            <ul className="w-full">
                <li className={nameStyle}>{name}</li>
                <li className={detailStyle}>Buy {quantity} in {category}</li>
            </ul>
        </div>
    );
}
