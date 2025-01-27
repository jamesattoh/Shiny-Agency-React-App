import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/style/colors' //defini dans src/utils/colors

const StyledLink = styled(Link)`
    padding: 15px;
    color: #8186a0;
    text-decoration: none;
    font-size: 18px;
    ${(props) =>
        props.$isFullLink &&
        `color: white; border-radius: 30px; background-color: ${colors.primary};`}
`

function Header() {
    return (
        <nav>
            <StyledLink to="/">Accueil</StyledLink>
            <StyledLink to="/survey/1">Questionnaire</StyledLink>
            <StyledLink to="/freelances">Profils</StyledLink>
            <StyledLink to="/survey/1" $isFullLink> {/*$ => signaler a styled-components  que notre prop nous sert pour le style, et qu'elle ne doit pas être passée dans le DOM; $ pour composant react, sans le $ pour simple balise comme a */}
                Faire le test
            </StyledLink>
        </nav>
    )
}

export default Header