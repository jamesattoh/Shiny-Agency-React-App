import styled from "styled-components"
import HomeIllustration from "../../assets/home-illustration.svg"
import colors from "../../utils/style/colors"
import { StyledLink } from "../../utils/style/Atoms"
import { useEffect } from "react"

const Illustration = styled.img `
  flex: 1;
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
  background-color: ${colors.backgroundLight};
`
const LeftCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1; //occuper l'espace disponible 
  ${StyledLink}{ // $ poour cibler le composant StyledLink a l'interieur de LeftCol
    max-width: 200px;
  }
`
const StyledTitle = styled.h2`
  padding-bottom: 30px;
  max-width: 250px;
  line-height: 50px;
`

function Home() {

  useEffect(() => {
    document.title = `Shiny Agency`
  })
  
  return (
    <HomeWrapper>
      <HomeContainer>
        <LeftCol>
          <StyledTitle>
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