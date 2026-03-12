function Orders(){

const orders=
JSON.parse(localStorage.getItem("orders"))||[]

return(

<div>

<h2>Order History</h2>

{orders.map((o,i)=>(

<div key={i}>

<p>Date: {o.date}</p>
<p>Total: ₹ {o.total}</p>

</div>

))}

</div>

)

}

export default Orders