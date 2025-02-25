import { styled } from 'styled-components'
import colors from '../../utils/style/colors'
 
import { useContext } from 'react'
import { ThemeContext } from '../../utils/context'

import EmailInput from '../EmailInput'

const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding-bottom: 20px;

    @media (max-width: 768px) {
        padding-top: 40px;
    }

    @media (max-width: 480px) {
        padding-top: 20px;
    }
`
 
const NightModeButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: ${({ theme }) => (theme === 'light' ? colors.secondary  : '#ffffff')};
    margin-top: 20px;

    @media (max-width: 768px) {
        margin-top: 20px;
    }

    @media (max-width: 480px) {
        margin-top: 10px;
    }
`

function Footer() {

    const { toggleTheme, theme } = useContext(ThemeContext) //c'est grace au hooks "useContext" qu'on aura acces au toogleTheme

    return (
        <FooterContainer>
             <EmailInput theme={theme} />
            <NightModeButton theme={theme} onClick={() => toggleTheme()}>
                Changer de mode : { theme === 'light' ? '☀️' : '🌙' }
            </NightModeButton>
        </FooterContainer>
    )
}
 
export default Footer