//import { Component } from 'react'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { ThemeContext } from '../../utils/context'

import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 90px 0;
  margin: 0 90px;
  background-color: ${({ theme }) =>
    theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
  
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 60px 20px;
    margin: 0 20px;
  }

  @media (max-width: 480px) {
    padding: 40px 10px;
    margin: 0 10px;
  }
`

const ProfileDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 50px;
  color: ${({ theme }) => (theme === 'light' ? colors.dark : 'white')};

  @media (max-width: 768px) {
    margin-left: 0;
    align-items: center;
    text-align: center;
  }
`

const Picture = styled.img`
  height: 150px;
  width: 150px;
  border-radius: 75px;

  @media (max-width: 480px) {
    height: 100px;
    width: 100px;
    border-radius: 50px;
  }
`

const Title = styled.h1`
  font-size: 25px;
  margin: 0;
  font-weight: 500;

  @media (max-width: 480px) {
    font-size: 20px;
  }
`

const JobTitle = styled.h2`
  padding-top: 10px;
  font-size: 20px;
  margin: 0;
  font-weight: 500;

  @media (max-width: 480px) {
    font-size: 18px;
  }
`

const Location = styled.span`
  margin-left: 15px;
  color: ${colors.secondary};

  @media (max-width: 768px) {
    margin-left: 0;
  }
`

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const Price = styled.span`
  padding-top: 10px;
  font-weight: 500;
  font-size: 20px;

  @media (max-width: 480px) {
    font-size: 18px;
  }
`

const SkillsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 0;
`

const Skill = styled.span`
  border-radius: 5px;
  padding: 5px;
  margin-right: 5px;
  border: 1px solid
    ${({ theme }) => (theme === 'light' ? colors.dark : 'white')};
`

const Availability = styled.span`
  &:before {
    position: absolute;
    left: 0;
    top: 4px;
    height: 10px;
    width: 10px;
    border-radius: 5px;
    background-color: ${({ available }) => (available ? 'green' : 'red')};
    content: '';
  }
  padding-left: 20px;
  position: relative;
`

// class Profile extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       profileData: {},
//     }
//   }

//   componentDidMount() {
//     const { id } = this.props

//     fetch(`http://localhost:8000/freelance?id=${id}`)
//       .then((response) => response.json())
//       .then((jsonResponse) => {
//         this.setState({ profileData: jsonResponse?.freelanceData })
//       })
//   }

//   render() {
//     const { profileData } = this.state
//     const {
//       picture,
//       name,
//       location,
//       tjm,
//       job,
//       skills,
//       available,
//       id,
//     } = profileData
//     return (
//       <ThemeContext.Consumer>
//         {({ theme }) => (
//           <ProfileWrapper theme={theme}>
//             <Picture src={picture} alt={name} height={150} width={150} />
//             <ProfileDetails theme={theme}>
//               <TitleWrapper>
//                 <Title>{name}</Title>
//                 <Location>{location}</Location>
//               </TitleWrapper>
//               <JobTitle>{job}</JobTitle>
//               <SkillsWrapper>
//                 {skills &&
//                   skills.map((skill) => (
//                     <Skill key={`skill-${skill}-${id}`} theme={theme}>
//                       {skill}
//                     </Skill>
//                   ))}
//               </SkillsWrapper>
//               <Availability available={available}>
//                 {available ? 'Disponible maintenant' : 'Indisponible'}
//               </Availability>
//               <Price>{tjm} € / jour</Price>
//             </ProfileDetails>
//           </ProfileWrapper>
//         )}
//       </ThemeContext.Consumer>
//     )
//   }
// }

function Profile() {
    const { id: queryId } = useParams()
    const [profileData, setProfileData] = useState({})
    useEffect(() => {
      fetch(`http://localhost:8000/freelance?id=${queryId}`)
        .then((response) => response.json())
        .then((jsonResponse) => {
          setProfileData(jsonResponse?.freelanceData)
        })
    }, [queryId])
  
    const {
      picture,
      name,
      location,
      tjm,
      job,
      skills,
      available,
      id,
    } = profileData
  
    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <ProfileWrapper theme={theme}>
            <Picture src={picture} alt={name} height={150} width={150} />
            <ProfileDetails theme={theme}>
              <TitleWrapper>
                <Title>{name}</Title>
                <Location>{location}</Location>
              </TitleWrapper>
              <JobTitle>{job}</JobTitle>
              <SkillsWrapper>
                {skills &&
                  skills.map((skill) => (
                    <Skill key={`skill-${skill}-${id}`} theme={theme}>
                      {skill}
                    </Skill>
                  ))}
              </SkillsWrapper>
              <Availability available={available}>
                {available ? 'Disponible maintenant' : 'Indisponible'}
              </Availability>
              <Price>{tjm} € / jour</Price>
            </ProfileDetails>
          </ProfileWrapper>
        )}
      </ThemeContext.Consumer>
    )
  }


export default Profile