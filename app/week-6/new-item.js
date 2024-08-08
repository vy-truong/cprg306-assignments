"use client";
import { useState } from "react"; 

export default function NewItem({ onAddItem }) {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    // handle event.target.value 
    const handleName = (event) => setName(event.target.value); 
    const handleQuantity = (event) => setQuantity(event.target.value); 
    const handleCategory = (event) => setCategory(event.target.value);

    // form submission handler 
    const handleSubmit = (event) => { 
        event.preventDefault(); 

        let item = {
            id: Math.random().toString(36).substr(2, 9),
            name: name, 
            quantity: quantity, 
            category: category, 
        };

        onAddItem(item);

        // reset
        setName("");
        setQuantity(1);
        setCategory("produce");
    };

    return (
        <main style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f0f0f0' }}>
            <form onSubmit={handleSubmit} style={{ backgroundColor: 'black', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
                <div style={{ marginBottom: '10px' }}>
                    <label style={{ display: 'block', marginBottom: '5px' }}>Item Name</label>
                    <input required type="text" onChange={handleName} value={name} placeholder="Item name" style={{ width: '100%', padding: '8px', boxSizing: 'border-box', color: 'black' }} />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label style={{ display: 'block', marginBottom: '5px' }}>Quantity</label>
                    <input required type="number" onChange={handleQuantity} value={quantity} min="1" style={{ width: '100%', padding: '8px', boxSizing: 'border-box', color: 'black'}} />
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', marginBottom: '5px' }}>Category</label>
                    <select onChange={handleCategory} value={category} style={{ width: '100%', padding: '8px', boxSizing: 'border-box', color: 'black' }}>
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
                    <button className="w-40 py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                        Add Item
                    </button>
                </div>
            </form>
        </main>
    );
}
