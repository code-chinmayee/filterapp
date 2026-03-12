import { Link } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../Context/CartContext"

function Navbar(){

const {cart,wishlist} = useContext(CartContext)

return(

<div className="navbar">

<h2 className="logo">Flipkart</h2>

<div className="nav-links">

<Link to="/home">Home</Link>

<Link to="/wishlist">
❤️ Wishlist ({wishlist.length})
</Link>

<Link to="/cart">
🛒 Cart ({cart.length})
</Link>

</div>

</div>

)

}

export default Navbar