import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { StyledLink } from '../../utils/style/Atoms'
import DarkLogo from '../../assets/dark-logo.png'
import LightLogo from '../../assets/light-logo.png'
import { useTheme } from '../../utils/hooks'

const HomeLogo = styled.img`
    height: 78px;

    @media (max-width: 768px) {
        height: 60px;
    }
`

const NavContainer = styled.nav`
    padding: 30px;
    display: flex;
    justify-content: space-between; //l'axe horizontal
    align-items: center; //l'axe vertical

    @media (max-width: 768px) {
        padding: 20px;
    }
  
    @media (max-width: 480px) {
        flex-direction: column;
        gap: 15px;
    }

`

function Header() {
    const { theme } = useTheme()

    return (
        <NavContainer>
            <Link to="/">
                <HomeLogo src={theme === 'light' ? DarkLogo : LightLogo}/>
            </Link>
            <div>
                <StyledLink $theme={theme} to="/">Accueil</StyledLink>
                <StyledLink $theme={theme} to="/freelances">Profils</StyledLink>
                <StyledLink $theme={theme} to="/survey/1" $isFullLink> {/*$ => signaler a styled-components  que notre prop nous sert pour le style, et qu'elle ne doit pas être passée dans le DOM; $ pour composant react, sans le $ pour simple balise comme a */}
                    Faire le test
                </StyledLink>
            </div>
        </NavContainer>
    )
}

export default Header