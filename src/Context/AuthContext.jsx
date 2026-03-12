import { createContext, useState } from "react"

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {

const [user,setUser] = useState(
JSON.parse(localStorage.getItem("user"))
)

function login(email,password){

if(email && password){

const data = {email}

localStorage.setItem("user",JSON.stringify(data))

setUser(data)

}

}

function logout(){

localStorage.removeItem("user")
setUser(null)

}

return(

<AuthContext.Provider value={{user,login,logout}}>

{children}

</AuthContext.Provider>

)

}