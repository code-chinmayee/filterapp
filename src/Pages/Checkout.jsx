import {useContext} from "react"
import {CartContext} from "../Context/CartContext"

function Checkout(){

const {cart,total}=useContext(CartContext)

function placeOrder(){

const orders=
JSON.parse(localStorage.getItem("orders"))||[]

orders.push({
items:cart,
total,
date:new Date().toLocaleDateString()
})

localStorage.setItem("orders",JSON.stringify(orders))

alert("Order placed")

}

return(

<div>

<h2>Checkout</h2>

<p>Total ₹ {total}</p>

<button onClick={placeOrder}>
Place Order
</button>

</div>

)

}

export default Checkout