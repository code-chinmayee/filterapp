import {useParams} from "react-router-dom"
import {useEffect,useState} from "react"
import Navbar from "../Components/Navbar"

function ProductDetails(){

const {id} = useParams()

const [product,setProduct] = useState({})

useEffect(()=>{

fetch("https://dummystoreapi.com/products/"+id)
.then(res=>res.json())
.then(data=>setProduct(data))

},[])

return(

<div>

<Navbar/>

<div className="details">

<img src={product.image} width="200"/>

<div>

<h2>{product.title}</h2>

<p>{product.description}</p>

<h3>₹ {product.price}</h3>

</div>

</div>

</div>

)

}

export default ProductDetails