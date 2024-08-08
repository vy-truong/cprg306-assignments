"use client";
import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from './items.json';

export default function Page() {
    const [items, setItems] = useState(itemsData);

    const handleAddItem = (item) => {
        setItems([...items, item]);
    };

    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-6">
            <h1 className="text-4xl font-bold mb-4 text-white">Shopping List</h1>
            <div className="w-full max-w-md mb-8">
                <NewItem onAddItem={handleAddItem} />
            </div>
            <div className="w-full max-w-4xl">
                <ItemList items={items} />
            </div>
        </main>
    );
}
