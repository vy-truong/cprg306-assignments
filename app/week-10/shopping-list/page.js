"use client";
import { useUserAuth } from "../_utils/auth-context";
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import { getItems, addItem } from "../_services/shopping-list-service";

export default function Page() {
  const { user } = useUserAuth();
  const router = useRouter();
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  // Function to load items from Firestore
  const loadItems = async () => {
    if (user) {
      const items = await getItems(user.uid);
      setItems(items);
    }
  };

  // Effect to load items on component mount
  useEffect(() => {
    if (user) {
      loadItems();
    } else {
      router.push('/week-8');
    }
  }, [user, router]);

  // Function to handle adding a new item
  const handleAddItem = async (item) => {
    const itemId = await addItem(user.uid, item);
    setItems([...items, { ...item, id: itemId }]);
  };

  // Function to handle item selection
  const handleItemSelect = (item) => {
    const cleanItemName = item.name.split(",")[0].replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|[\u2011-\u26FF])/g, '').trim();
    setSelectedItemName(cleanItemName);
  };

  if (!user) return null;

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
