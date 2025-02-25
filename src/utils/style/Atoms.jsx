import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import colors from './colors'

// Définition de l'animation de rotation
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

export const Loader = styled.div` //un composant sytlisé, utilisé pour afficher un indicateur de chargement animé. 
  padding: 10px;
  border: 6px solid ${colors.primary};
  border-bottom-color: transparent;
  border-radius: 22px;
  animation: ${rotate} 1s infinite linear; //Applique l'animation de rotation définie plus haut
  height: 0;
  width: 0;

  @media (max-width: 768px) {
    padding: 8px;
    border: 5px solid ${colors.primary};
  }

  @media (max-width: 480px) {
    padding: 6px;
    border: 4px solid ${colors.primary};
  }
`

export const StyledLink = styled(Link)` //une autre facon de rendre expotable un composant
  padding: 10px 15px;
  color: ${({ $theme }) => ($theme === 'light' ? '#8186a0' : '#ffffff')}; //utilisation des props(non standard) qui ne seront pas transmises au dOM
  text-decoration: none;
  font-size: 18px;
  text-align: center;
  //utilisation d'une prop pour en styliser une autre
  ${(props) =>
    props.$isFullLink && // props.$isFullLink est utilisé ici pour appliquer des styles conditionnels au composant StyledLink. si isFullLink etait un composant htmml, plus besoin du $
    `color: white; 
    border-radius: 30px; 
    background-color: ${colors.primary};`}
  
  @media (max-width: 768px) {
    padding: 8px 12px;
    font-size: 16px;
  }

  @media (max-width: 480px) {
    padding: 6px 10px;
    font-size: 14px;
  }
`

