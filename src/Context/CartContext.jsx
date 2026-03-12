import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export function CartProvider({children}){

const [cart,setCart] = useState(
JSON.parse(localStorage.getItem("cart")) || []
);

const [wishlist,setWishlist] = useState(
JSON.parse(localStorage.getItem("wishlist")) || []
);

useEffect(()=>{
localStorage.setItem("cart",JSON.stringify(cart))
},[cart])

useEffect(()=>{
localStorage.setItem("wishlist",JSON.stringify(wishlist))
},[wishlist])

function addToCart(product){
setCart([...cart,product])
}

function addToWishlist(product){

const exist = wishlist.find(p=>p.id===product.id)

if(!exist){
setWishlist([...wishlist,product])
}

}

function removeWishlist(id){
setWishlist(wishlist.filter(p=>p.id!==id))
}

return(

<CartContext.Provider value={{
cart,
wishlist,
addToCart,
addToWishlist,
removeWishlist
}}>

{children}

</CartContext.Provider>

)

}