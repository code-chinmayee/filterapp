import { useContext } from "react"
import { CartContext } from "../Context/CartContext"

function ProductCard({product}){

const {addToCart,addToWishlist} = useContext(CartContext)

return(

<div className="card">

<img src={product.image} width="120"/>

<h4>{product.title}</h4>

<p>${product.price}</p>

<p>⭐ {product.rating.rate}</p>

<button onClick={()=>addToCart(product)}>
Add to Cart
</button>

<button onClick={()=>addToWishlist(product)}>
❤️ Wishlist
</button>

</div>

)

}

export default ProductCard