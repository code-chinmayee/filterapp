import {useState} from "react"

function Admin(){

const[products,setProducts]=useState([])

const[name,setName]=useState("")
const[price,setPrice]=useState("")

function addProduct(){

const p={
id:Date.now(),
title:name,
price
}

setProducts([...products,p])

}

return(

<div>

<h2>Admin Dashboard</h2>

<input placeholder="Product name"
onChange={e=>setName(e.target.value)}/>

<input placeholder="Price"
onChange={e=>setPrice(e.target.value)}/>

<button onClick={addProduct}>
Add Product
</button>

{products.map(p=>(

<div key={p.id}>
{p.title} - ₹ {p.price}
</div>

))}

</div>

)

}

export default Admin