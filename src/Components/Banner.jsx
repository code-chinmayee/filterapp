import {useState,useEffect} from "react"

const images=[
"https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/1.jpg",
"https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/2.jpg",
"https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/3.jpg"
]

function Banner(){

const[index,setIndex]=useState(0)

useEffect(()=>{

const timer=setInterval(()=>{
setIndex((prev)=>(prev+1)%images.length)
},3000)

return()=>clearInterval(timer)

},[])

return(
<div className="banner">
<img src={images[index]}/>
</div>
)

}

export default Banner