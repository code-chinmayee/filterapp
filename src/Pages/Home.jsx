import { useEffect, useState } from "react"
import ProductCard from "../Components/ProductCard"
import Navbar from "../Components/Navbar"

function Home(){

const [products,setProducts] = useState([])
const [search,setSearch] = useState("")
const [category,setCategory] = useState("all")

useEffect(()=>{

fetch("https://dummystoreapi.com/products")
.then(res=>res.json())
.then(data=>setProducts(data))

},[])

const filteredProducts = products.filter(product => {

const matchSearch =
product.title.toLowerCase().includes(search.toLowerCase())

const matchCategory =
category === "all" || product.category === category

return matchSearch && matchCategory

})

return(

<div>

<Navbar/>

<h2>Products</h2>

<div className="filters">

<input
type="text"
placeholder="Search products..."
onChange={(e)=>setSearch(e.target.value)}
/>

<select onChange={(e)=>setCategory(e.target.value)}>

<option value="all">All Categories</option>
<option value="electronics">Electronics</option>
<option value="jewelery">Jewelry</option>
<option value="men's clothing">Men Clothing</option>
<option value="women's clothing">Women Clothing</option>

</select>

</div>

<div className="products">

{filteredProducts.map(product => (

<ProductCard key={product.id} product={product}/>

))}

</div>

</div>

)

}

export default Home