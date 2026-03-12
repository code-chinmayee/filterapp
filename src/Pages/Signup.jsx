import {useState} from "react"
import {useNavigate} from "react-router-dom"

function Signup(){

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

const navigate = useNavigate()

function register(){

localStorage.setItem("user",JSON.stringify({email}))

navigate("/")

}

return(

<div className="auth">

<h2>Signup</h2>

<input
placeholder="Email"
onChange={e=>setEmail(e.target.value)}
/>

<input
type="password"
placeholder="Password"
onChange={e=>setPassword(e.target.value)}
/>

<button onClick={register}>
Register
</button>

</div>

)

}

export default Signup