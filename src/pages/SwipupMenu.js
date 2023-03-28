import { Reorder } from "framer-motion"
import { useState } from "react"

function List() {
  const [items, setItems] = useState([{name:"🍅",text:"Tommato",number:1}, {name:"🥭",text:"mango",number:2}, {name:"🍌",text:"bannana",number:3}, {name:"🥑",text:"papa",number:4}])
  
  return (

  

    <Reorder.Group axis="y" values={items} onReorder={setItems}>
       <div className="space-y-4 p-5 rounded-md  bg-indigo-500 w-5/12 mx-auto flex flex-col items-center justify-center"> 
       {items.map((item,index) => (
        <Reorder.Item key={item.number} value={item}>
          
          <p className="w-52 gap-3 flex items-center justify-around h-14 rounded-lg bg-white">
           
          <span>

           {item.name}
          </span>
          <span  >{item.text}</span>
          <span>{item.number}</span>
          
          </p>
          
   
        </Reorder.Item>
      ))}  
      
       </div>
    </Reorder.Group>
     
  )
}


export default List