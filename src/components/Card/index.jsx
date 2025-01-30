import PropTypes from "prop-types"
//import DefaultPicture from "../../assets/profile.png"
import styled from "styled-components"
import colors from "../../utils/style/colors"

const CardLabel = styled.span`
    color: #5843e4;
    font-size: 22px;
    font-weight: normal;
    padding-left: 15px;
`

const CardImage = styled.img`
    height: 150px;
    width: 150px;
    align-self: center;
    border-radius: 50%;
`

const CardTitle = styled.span`
    color: black;
    font-size: 22px;
    font-weight: normal;
    align-self: center;
`

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px;
    background-color: ${colors.backgroundLight};
    justify-content: space-around;
    border-radius: 30px;
    width: 350px;
    transition: 200ms;
    &:hover {
        cursor: pointer; //change le curseur fleche en curseur "main"
        box-shadow: 2px 2px 10px #e2e3e9;
    }

`

function Card({ label, title, picture,}) {
    return (
        <CardWrapper>
            <CardLabel>{label}</CardLabel>
            <CardImage src={picture} alt="freelance"/>
            <CardTitle>{title}</CardTitle>
        </CardWrapper>
    )
}
 
Card.propTypes = {
    label: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired, //sera obligatoire lors de l'utilisation de Card
    picture: PropTypes.string,
}

Card.defaultProps = {
    label: '',
    title: '',
    //picture: DefaultPicture,
  }

export default Card