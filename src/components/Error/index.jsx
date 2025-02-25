import styled from "styled-components"
import ErrorIllustration from "../../assets/404.svg"
import colors from "../../utils/style/colors"
import { useTheme } from "../../utils/hooks"

const ErrorWrapper = styled.div`
    margin: 30px;
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) =>
    theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
    align-items: center;
    
    @media (max-width: 768px) {
        margin: 20px;
    }

    @media (max-width: 480px) {
        margin: 10px;
    }    
`
const ErrorTitle = styled.h1`
    color: ${({ theme }) => (theme === 'light' ? colors.secondary  : '#ffffff')};
    font-weight: 300;
    font-size: 2em;

    @media (max-width: 768px) {
        font-size: 1.5em;
    }

    @media (max-width: 480px) {
        font-size: 1.2em;
    }
`
const ErrorSubtitle = styled.h2`
    font-weight: 300;
    color: ${({ theme }) => (theme === 'light' ? colors.secondary : '#ffffff')};
    font-size: 1.5em;

    @media (max-width: 768px) {
        font-size: 1.2em;
    }

    @media (max-width: 480px) {
        font-size: 1em;
    }
`
const Illustration = styled.img`
    max-width: 800px;
    @media (max-width: 768px) {
        max-width: 600px;
    }

    @media (max-width: 480px) {
        max-width: 400px;
    }
`

function Error() {
    const { theme } = useTheme()

    return (
        <ErrorWrapper theme={theme}>
            <ErrorTitle theme={theme}>Oups ...</ErrorTitle>
            <Illustration src={ErrorIllustration}/>
            <ErrorSubtitle theme={theme}>Il semblerait que la page que vous cherchez n'existe pas</ErrorSubtitle>
        </ErrorWrapper>
    )
}
 
export default Error