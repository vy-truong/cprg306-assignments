// In page.js, create a functional component named Page that returns a main element wrapped around an h1 "Shopping List" header and the ItemList component.

import ItemList from "./item-list";


export default function Page() {
    return (
        <main className="p-6 min-h-screen bg-white">
            <h1 className="text-4xl font-bold mb-4 text-dark-blue">Shopping List</h1>
            <ItemList/>
            
        </main>
    );
}
