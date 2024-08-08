"use client";
import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import itemsData from './items.json';

export default function Page() {
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState("");

    const handleAddItem = (item) => {
        setItems([...items, item]);
    };

    const handleItemSelect = (item) => {
        const cleanItemName = item.name.split(",")[0].replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|[\u2011-\u26FF])/g, '').trim();
        setSelectedItemName(cleanItemName);
    };

    return (
        <main className="flex flex-col items-center justify-center bg-gray-900 p-6">
            <h1 className="text-4xl font-bold mb-8 text-white">Shopping List</h1>
            <div className="">
                <div className="">
                    <NewItem onAddItem={handleAddItem} />
                    <ItemList items={items} onItemSelect={handleItemSelect} />
                </div>
                <div className="">
                    <MealIdeas ingredient={selectedItemName} />
                </div>
            </div>
        </main>
    );
}
