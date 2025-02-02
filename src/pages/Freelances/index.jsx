import Card from '../../components/Card'
//import DefaultPicture from '../../assets/profile.png'
import styled from 'styled-components'

import colors from '../../utils/style/colors'
import { useEffect, useState } from 'react'
import { Loader } from '../../utils/style/Atoms'
 
// const freelanceProfiles = [
//     {
//         name: 'Jane Doe',
//         jobTitle: 'Devops',
//         picture: DefaultPicture,
//     },
//     {
//         name: 'John Doe',
//         jobTitle: 'Developpeur frontend',
//         picture: DefaultPicture,
//     },
//     {
//         name: 'Jeanne Biche',
//         jobTitle: 'Développeuse Fullstack',
//         picture: DefaultPicture,
//     },
//     {
//       name: 'Lorem ipsum',
//       jobTitle: 'UX Designer',
//       picture: DefaultPicture,
//     },
// ]


const CardsContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-rows: 350px 350px;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  align-items: center;
`
const PageTitle = styled.h1`
  font-size: 30px;
  color: black;
  font-weight: 300;
  text-align: center;
  padding-bottom: 30px;
`
const PageSubtitle = styled.h2`
  font-size: 20px;
  color: ${colors.secondary};
  font-weight: 300;
  text-align: center;
  padding-bottom: 30px;
`
const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`


function Freelances() {
  const [freelancersList, setFreelancersList] = useState([]) //[] pour les listes et {} pour les objets
  const [isDataLoading, setDataLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(()=>{

    setDataLoading(true)
    fetch(`http://localhost:8000/freelances`).then((response) =>
    response.json().then(({ freelancersList }) => {
      setFreelancersList(freelancersList)
      setDataLoading(false) //Indiquer que le chargement des données est terminé
    })
    )
  }, [])

  if (!error){
    setError(true)
    return <span>Oups il y a eu un problème</span>
  }

  return (
    <div>
      <PageTitle>Trouvez votre prestataire</PageTitle>
      <PageSubtitle>Chez Shiny, nous réunissons les meilleurs profils pour vous.</PageSubtitle>
      
        {isDataLoading ? (
          <LoaderWrapper>
            <Loader />
          </LoaderWrapper>
        ) : (
          <CardsContainer>
            {freelancersList.map((profile, index) => (
              <Card
                key={`${profile.name}-${index}`}
                label={profile.job}
                title={profile.name}
                picture={profile.picture}
              />
            ))}
          </CardsContainer>
        )}


    </div>
  )
}
  
  export default Freelances