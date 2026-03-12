function Sidebar({setCategory}){

const categories = [
"all",
"electronics",
"jewelery",
"men's clothing",
"women's clothing"
]

return(

<div className="sidebar">

<h3>Categories</h3>

{categories.map(c=>(
<button
key={c}
onClick={()=>setCategory(c)}
>
{c}
</button>
))}

</div>

)

}

export default Sidebar