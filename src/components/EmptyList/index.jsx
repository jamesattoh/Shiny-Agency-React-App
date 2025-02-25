//import { Component } from 'react'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import EmptyIllustration from '../../assets/empty.svg'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 60px 90px;
  padding: 30px;
  background-color: ${({ theme }) =>
    theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
  
  @media (max-width: 768px) {
    margin: 40px 30px;
  }
  
  @media (max-width: 480px) {
    margin: 20px 15px;
    padding: 20px;
  }
`

const Title = styled.h1`
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
  font-size: 2em;

  @media (max-width: 768px) {
    font-size: 1.5em;
  }

  @media (max-width: 480px) {
    font-size: 1.2em;
}
`

const SubTitle = styled.h3`
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
  font-weight: normal;
  font-size: 1.2em;

  @media (max-width: 768px) {
    font-size: 1em;
  }

  @media (max-width: 480px) {
    font-size: 0.9em;
  }
`

const Illustration = styled.img`
  margin: 30px 0;
  width: 100%;
  max-width: 300px;

  @media (max-width: 768px) {
    max-width: 200px;
  }

  @media (max-width: 480px) {
    max-width: 150px;
  }
`

// class EmptyList extends Component {
//   render() {
//     const { theme } = this.props
//     return (
//       <Container theme={theme}>
//         <Title theme={theme}>Dommage...</Title>
//         <Illustration src={EmptyIllustration} />
//         <SubTitle theme={theme}>
//           Il semblerait que vous n’ayez besoin d’aucune compétence
//         </SubTitle>
//       </Container>
//     )
//   }
// }

function EmptyList({ theme }) {
    return (
      <Container theme={theme}>
        <Title theme={theme}>Dommage...</Title>
        <Illustration src={EmptyIllustration} />
        <SubTitle theme={theme}>
          Il semblerait que vous n’ayez besoin d’aucune compétence
        </SubTitle>
      </Container>
    )
  }

export default EmptyList