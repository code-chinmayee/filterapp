import {useContext} from "react"
import {CartContext} from "../Context/CartContext"

function Cart(){

const {cart,increase,decrease,total}=useContext(CartContext)

return(

<div>

<h2>Cart</h2>

{cart.map(p=>(

<div key={p.id}>

<h4>{p.title}</h4>

<button onClick={()=>decrease(p.id)}>-</button>

{p.qty}

<button onClick={()=>increase(p.id)}>+</button>

<p>₹ {p.price*p.qty}</p>

</div>

))}

<h2>Total ₹ {total}</h2>

</div>

)

}

export default Cart