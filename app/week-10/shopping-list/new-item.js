"use client";
import { useState } from "react"; 

export default function NewItem({ onAddItem }) {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    const handleName = (event) => setName(event.target.value); 
    const handleQuantity = (event) => setQuantity(event.target.value); 
    const handleCategory = (event) => setCategory(event.target.value);

    const handleSubmit = (event) => { 
        event.preventDefault(); 

        let item = {
            id: Math.random().toString(36).substr(2, 9),
            name: name, 
            quantity: quantity, 
            category: category, 
        };

        onAddItem(item);

        setName("");
        setQuantity(1);
        setCategory("produce");
    };

    return(
        <form onSubmit={handleSubmit} className="bg-black p-6 mt-10 rounded-lg shadow-md">
            <div className="mb-4">
                <label className="block mb-2 text-white">Item Name</label>
                <input required type="text" onChange={handleName} value={name} placeholder="Item name" className="w-full p-2 rounded bg-gray-200 text-black" />
            </div>
            <div className="mb-4">
                <label className="block mb-2 text-white">Quantity</label>
                <input required type="number" onChange={handleQuantity} value={quantity} min="1" className="w-full p-2 rounded bg-gray-200 text-black" />
            </div>
            <div className="mb-6">
                <label className="block mb-2 text-white">Category</label>
                <select onChange={handleCategory} value={category} className="w-full p-2 rounded bg-gray-200 text-black">
                    <option value="produce">Select product category</option>
                    <option value="dairy">Dairy</option>
                    <option value="bakery">Bakery</option>
                    <option value="meat">Meat</option>
                    <option value="frozen_foods">Frozen Food</option>
                    <option value="canned_goods">Canned Goods</option>
                    <option value="dry_goods">Dry Goods</option>
                    <option value="beverages">Beverages</option>
                    <option value="snacks">Snacks</option>
                    <option value="household">Household</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <div>
                <button className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    Add Item
                </button>
            </div>
        </form>
    );
}
