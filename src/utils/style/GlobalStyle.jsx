import { useContext } from 'react'
import { ThemeContext } from '../context'
import { createGlobalStyle } from 'styled-components'


const StyledGlobalStyle = createGlobalStyle` //creation du style global dy projet avec createGlobalStyle
    * {
        font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }
 
    body {
        background-color: ${({ isDarkMode }) =>
            (isDarkMode ? '#2F2E41' : 'white')};
        margin: 0;  //supprimer toute marge par défaut appliquée par le navigateur au corps de la page
    }
`

function GlobalStyle() {
    const { theme } = useContext(ThemeContext)
    return <StyledGlobalStyle isDarkMode={theme === 'dark'} />
}

export default GlobalStyle