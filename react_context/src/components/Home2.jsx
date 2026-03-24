import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"

const Home2 =()=>{
    const {theme,themeToggle} = useContext(ThemeContext)
    return (<div style={{backgroundColor: theme ==='light'? '#fff': '#333',
        color: theme ==='light'? '#000': '#fff' }}>
        <p>컨텐츠</p>
        <p>컨텐츠</p>
        </div>
    )


}
export default Home2