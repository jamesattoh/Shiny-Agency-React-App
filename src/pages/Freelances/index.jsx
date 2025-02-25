import Card from '../../components/Card'
import styled from 'styled-components'

import colors from '../../utils/style/colors'
import { Loader, StyledLink } from '../../utils/style/Atoms'
import { useFetch, useTheme } from '../../utils/hooks'

const CardsContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-rows: 350px 350px;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;

  @media (max-width: 768px) {
    grid-template-rows: 300px 300px;
    grid-template-columns: 1fr;
  }

  @media (max-width: 480px) {
    grid-template-rows: 250px 250px;
    grid-template-columns: 1fr;
    gap: 16px;
  }
`
const PageTitle = styled.h1`
  font-size: 30px;
  color: ${({ theme }) => (theme === 'light' ? colors.secondary : '#ffffff')};
  font-weight: 300;
  text-align: center;
  padding-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 25px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`
const PageSubtitle = styled.h2`
  font-size: 20px;
  color: ${({ theme }) => (theme === 'light' ? colors.secondary : '#ffffff')};
  font-weight: 300;
  text-align: center;
  padding-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`
const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`


function Freelances() {
  const {theme} = useTheme()

  const { data, isLoading, error} = useFetch(`http://localhost:8000/freelances`)

  const freelancersList = data?.freelancersList

  if(error){
    return <span>Oups il y a eu un probleme</span>
  }
  
  return (
    <div>
      <PageTitle theme={theme}>Trouvez votre prestataire</PageTitle>
      <PageSubtitle theme={theme}>Chez Shiny, nous réunissons les meilleurs profils pour vous.</PageSubtitle>
      
        {isLoading ? (
          <LoaderWrapper>
            <Loader theme={theme}  data-testid="loader"/>
          </LoaderWrapper>
        ) : (
          <CardsContainer>
            {freelancersList?.map((profile) => (
              <StyledLink key={`freelance-${profile.id}`} to={`/profile/${profile.id}`}>
                <Card
                  label={profile.job}
                  title={profile.name}
                  picture={profile.picture}
                  theme={theme}
                />
              </StyledLink>
            ))}
          </CardsContainer>
        )}


    </div>
  )
}
  
  export default Freelances