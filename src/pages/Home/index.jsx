import styled from "styled-components"
import HomeIllustration from "../../assets/home-illustration.svg"
import colors from "../../utils/style/colors"
import { StyledLink } from "../../utils/style/Atoms"
import { useEffect } from "react"
import { useTheme } from "../../utils/hooks"

const Illustration = styled.img `
  flex: 1;

  @media (max-width: 768px) {
    margin-top: 15px;
    max-width: 300px;
  }

  @media (max-width: 480px) {
    margin-top: 15px;
    max-width: 200px;
  }
`
const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
`
const HomeContainer = styled.div`
  margin: 30px;
  padding: 60px 90px;
  display: flex;
  flex-direction: row;
  max-width: 1200px;
  background-color: ${({ theme }) =>
    theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
  
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px 60px;
  }

  @media (max-width: 480px) {
    justify-content: center;
    align-items: center;
    padding: 20px 30px;
  }
`
const LeftCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1; //occuper l'espace disponible 
  ${StyledLink}{ // $ poour cibler le composant StyledLink a l'interieur de LeftCol
    max-width: 200px;
  }

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;

    ${StyledLink} {
      max-width: 100%;
    }
  }
`
const StyledTitle = styled.h2`
  color: ${({ theme }) => (theme === 'light' ? '#2F2E41' : '#ffffff')};
  padding-bottom: 30px;
  max-width: 250px;
  line-height: 50px;

  @media (max-width: 768px) {
    max-width: 100%;
    line-height: 40px;
    padding-bottom: 10px;
  }

  @media (max-width: 480px) {
    padding-bottom: 10px;
    font-size: 1.5em;
    line-height: 30px;
  }
`

function Home() {

  const {theme} = useTheme()

  useEffect(() => {
    document.title = `Shiny Agency`
  })
  
  return (
    <HomeWrapper>
      <HomeContainer theme={theme}>
        <LeftCol>
          <StyledTitle theme={theme}>
            Repérez vos besoins, on s'occupe du reste, avec les meilleurs talents
          </StyledTitle>
          <StyledLink to="/survey/1" $isFullLink>
            Faire le test
          </StyledLink>
        </LeftCol>
        <Illustration src={HomeIllustration}/>
      </HomeContainer>
    </HomeWrapper>
    
  )
}

export default Home