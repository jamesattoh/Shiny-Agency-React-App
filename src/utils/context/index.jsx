import { createContext, useState } from "react";


export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => { //ThemeProvider, composant fourni par une bibliothèque de gestion de themes comme styled-components 
    const [theme, setTheme] = useState('light')
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }
 
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}> {/* ThemeContext.Provider est utilisé pour fournir un contexte personnalisé */}
            {children}
        </ThemeContext.Provider>
    )
}