import { useState,createContext } from "react";
import Paragraph from "../components/Paragraph";

const ThemeContext = createContext();

function ThemeProvider({children}){
    const [theme,setTheme] = useState("dark");

    const handleClick = () =>{
        setTheme(theme==='dark'?'light':'dark');
    }

    const objectTheme = {
        theme,
        handleClick
    }
    return (
        <ThemeContext.Provider value={objectTheme}>
            {children}
            <Paragraph />
        </ThemeContext.Provider>
    )
}

export {ThemeContext,ThemeProvider}