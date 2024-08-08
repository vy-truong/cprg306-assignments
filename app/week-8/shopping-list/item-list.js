"use client";
import { useState } from "react";
import Item from "./item";

export default function ItemList({ items, onItemSelect }) {
    const [sortBy, setSortBy] = useState("name");

    const sortedItems = [...items].sort((item1, item2) => {
        if (sortBy === 'name') {
            return item1.name.localeCompare(item2.name);
        } else if (sortBy === 'category') {
            return item1.category.localeCompare(item2.category);
        }
        return 0;
    });

    return (
        <div className="w-full">
            <div className="flex justify-center mb-4">
                <button
                    onClick={() => setSortBy('name')}
                    className="px-5 py-3 bg-blue-500 text-white rounded-md mr-6 hover:bg-blue-600 transition duration-300"
                >
                    Name
                </button>
                <button
                    onClick={() => setSortBy('category')}
                    className="px-5 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
                >
                    Category
                </button>
            </div>
            <div className="flex flex-col items-center">
                {sortedItems.map((item) => (
                    <Item key={item.id} item={item} onSelect={onItemSelect} />
                ))}
            </div>
        </div>
    );
}
