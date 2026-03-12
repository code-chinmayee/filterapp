import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import Navbar from "../Components/Navbar";

function Wishlist(){

const {wishlist,removeWishlist} = useContext(CartContext)

return(

<div>

<Navbar/>

<h2>Wishlist</h2>

<div className="products">

{wishlist.map(p=>(

<div key={p.id} className="card">

<img src={p.image} width="100"/>

<h4>{p.title}</h4>

<p>${p.price}</p>

<button onClick={()=>removeWishlist(p.id)}>
Remove
</button>

</div>

))}

</div>

</div>

)

}

export default Wishlist