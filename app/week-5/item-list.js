

"use client";
import { useState } from "react";
import Item from "./item"; 
import items from './items.json';

export default function ItemList() {
    let itemArray = items.map((item) => ({ ...item }));

    let [sortBy, setSortBy] = useState("name");

    itemArray = itemArray.sort((item1, item2) => {
        if (sortBy === 'name') {
            return item1.name.localeCompare(item2.name);
        } else if (sortBy === 'category') {
            return item1.category.localeCompare(item2.category);
        }
        return 0;
    });

    return (
        <div>
            <div>
                Sort by:
            </div>
            <div className="mb-4">
                <button
                    onClick={() => setSortBy('name')}
                    className="px-5 py-3 bg-aliceblue  mr-6 rounded-md text-black"
                    style={{
                        backgroundColor: sortBy === 'name' ? 'skyblue' : 'aliceblue',
                    }}
                >
                    Name
                </button>
                <button
                    onClick={() => setSortBy('category')}
                    className="px-5 py-3 bg-aliceblue mr-6 rounded-md text-black"
                    style={{
                        backgroundColor: sortBy === 'category' ? 'skyblue' : 'aliceblue',
                    }}
                >
                    Category
                </button>
            </div>
            <div>
                {itemArray.map((item) => (
                    <Item key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
}
