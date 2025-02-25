import PropTypes from "prop-types"
import styled from "styled-components"
import colors from "../../utils/style/colors"
// import { useTheme } from "../../utils/hooks"
// import { useState } from "react"

import { Component } from "react"


const CardLabel = styled.span`
    color: ${({ theme }) => (theme === 'light' ? colors.primary : '#ffffff')};
    //color: #5843e4;
    font-size: 22px;
    font-weight: normal;
    padding-left: 15px;
`

const CardImage = styled.img`
    height: 150px;
    width: 150px;
    align-self: center;
    border-radius: 50%;
    
    @media (max-width: 480px) {
    height: 120px;
    width: 120px;
  }
`

const CardTitle = styled.span`
    color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
    font-size: 22px;
    font-weight: normal;
    align-self: center;
`

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  background-color: ${({ theme }) =>
  theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
  justify-content: space-around;
  border-radius: 30px;
  width: 300px;
  height: 300px;
  transition: 200ms;
  &:hover {
      cursor: pointer; //change le curseur fleche en curseur "main"
      box-shadow: 2px 2px 10px #e2e3e9;
  }

  @media (min-width: 768px) {
    max-width: 300px;
  }
  
  @media (max-width: 767px) {
    max-width: 250px;
  }
  
  @media (max-width: 480px) {
    max-width: 100%;
    padding: 15px;
    margin-bottom: 15px;
  }
`

// function Card({ label, title, picture,}) {
//     const { theme } = useTheme()
//     const [isFavorite, setIsFavorite] = useState(false)
//     const star = isFavorite ? '⭐️' : ''
    
//     return (
//         <CardWrapper theme={theme} onClick={() => setIsFavorite(!isFavorite)}>
//             <CardLabel theme={theme}>{label}</CardLabel> {/**on utilise theme sans le $ car CardLabel est un composant stylisé et non un element Dom natif */}
//             <CardImage src={picture} alt="freelance"/>
//             <CardTitle  data-testid="card" theme={theme}>
//                 {star} {title} {star}
//             </CardTitle>
//         </CardWrapper>
//     )
// }

class Card extends Component {
  
    constructor(props) {
        super(props)
        this.state = {
          isFavorite: false,
        }
      }
    
      render() {
        const { theme, picture, label, title } = this.props
    
        return (
          <CardWrapper theme={theme} onClick={this.setFavorite}>
            <CardLabel theme={theme}>{label}</CardLabel>
            <CardImage src={picture} alt="freelance" />
            <CardTitle theme={theme}>{title}</CardTitle>
          </CardWrapper>
        )
      }
    }
    
 
Card.propTypes = { //Les PropTypes sont utilisés dans React pour valider les types des propriétés (props) passées aux composants.
    label: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired, //sera obligatoire lors de l'utilisation de Card
    picture: PropTypes.string,
    theme: PropTypes.string.isRequired,
}

Card.defaultProps = {
    label: '',
    title: '',
    //picture: DefaultPicture,
    theme: 'light',
  }

export default Card