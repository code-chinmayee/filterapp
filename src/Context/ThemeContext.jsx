import {createContext,useState} from "react"

export const ThemeContext = createContext()

export const ThemeProvider = ({children}) => {

const [theme,setTheme] = useState("light")

function toggle(){

const newTheme = theme==="light" ? "dark" : "light"

setTheme(newTheme)

document.body.className = newTheme

}

return(

<ThemeContext.Provider value={{theme,toggle}}>

{children}

</ThemeContext.Provider>

)

}