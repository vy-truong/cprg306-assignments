import ItemList from "./item-list";
 
 
export default function Page(){
    return(
        <main>
            {/*  */}
            <div className="bg-slate-800 p-4" >
            <h1 className="text-3xl text-white font-bold mx-4 p-4">Shopping List</h1>  
            <ItemList/>
            </div>
        </main>
    );
}