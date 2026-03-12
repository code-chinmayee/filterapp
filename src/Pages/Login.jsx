import {useState,useContext} from "react"
import {AuthContext} from "../Context/AuthContext"
import {useNavigate,Link} from "react-router-dom"

function Login(){

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

const {login} = useContext(AuthContext)

const navigate = useNavigate()

function handleLogin(){

login(email,password)

navigate("/home")

}

return(

<div className="auth">

<h2>Login</h2>

<input
placeholder="Email"
onChange={e=>setEmail(e.target.value)}
/>

<input
type="password"
placeholder="Password"
onChange={e=>setPassword(e.target.value)}
/>

<button onClick={handleLogin}>
Login
</button>

<p>
No account?
<Link to="/signup">Signup</Link>
</p>

</div>

)

}

export default Login