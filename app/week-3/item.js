export default function Item({item}) {
    //des
    let {name, quantity, category} = item
 
    const itemStyle = "bg-blue-400 text-white p-4 border-b border-gray-700 m-5  my-2 max-w-xl";
    const nameStyle = "text-lg font-bold";
    const detailStyle = "text-gray-900";
 
    return(
        <main>
            <ul className={itemStyle}>
                <li className={nameStyle}>{name}</li>
                <li  className={detailStyle}>Buy {quantity} in {category}</li>
            </ul>
        </main>
   
    );


}