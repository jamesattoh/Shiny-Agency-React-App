import styled from 'styled-components'
//import { Component } from 'react'
import colors from '../../utils/style/colors'
import { useState } from 'react'

const InputWrapper = styled.div`
  color: ${({ theme }) => (theme === 'light' ? colors.dark : 'white')};
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 300px;

  @media (max-width: 768px) {
    max-width: 200px;
  }

  @media (max-width: 480px) {
    max-width: 70%;
    padding: 0 10px;
  }
`

const StyledLabel = styled.label`
  color: ${({ theme }) => (theme === 'light' ? colors.dark : 'white')};
  font-size: 1.2em;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1em;
  }

  @media (max-width: 480px) {
    font-size: 0.9em;
  }
`

const StyledInput = styled.input`
  border: none;
  color: ${({ theme }) => (theme === 'light' ? colors.dark : 'white')};
  background-color: transparent;
  border-bottom: 2px solid
    ${({ theme }) => (theme === 'light' ? colors.dark : 'white')};
  margin-top: 5px;
  margin-bottom: 15px;
  font-size: 1em;
  padding: 5px;

  @media (max-width: 768px) {
    font-size: 0.9em;
  }

  @media (max-width: 480px) {
    font-size: 0.8em;
  }
`

// class EmailInput extends Component {
//     constructor(props) { // constructor est une méthode utilisée pour créer et initialiser un objet lorsqu'on utilise le mot clé class .
//         super(props)
//         this.state = {
//             inputValue: '',
//         }
//     }

//     updateInputValue = (value) => { //updateInputValue  est une méthode de la classe,donc Pas besoin de const = devant notre fonction
//         this.setState({ inputValue: value }) //setState  déclenche un rerender du composant,donc pas d'appel de setState  depuis render, sinon cela provoquera une boucle infinie dans le composant.
//     }

//     render() { //est obligatoirement appelée dans le composant 
//         // Ici on récupère theme en destructurant this.props
//         const { theme } = this.props
//         return ( //render  doit forcément retourner du JSX (ce qui sera dans le return)
//             <InputWrapper theme={theme}>
//               <StyledLabel theme={theme}>Adresse Email</StyledLabel>
//               <StyledInput
//                 theme={theme}
//                 onChange={(e) => this.updateInputValue(e.target.value)}
//               />
//               {this.state.inputValue} {/**Pour afficher le contenu de notre input */}
//             </InputWrapper>
//           )
//     }

// }

function EmailInput({ theme }) {
    const [inputValue, setInputValue] = useState('')
  
    return (
      <InputWrapper theme={theme}>
        <StyledLabel theme={theme}>Adresse email</StyledLabel>
        <StyledInput
          theme={theme}
          onChange={(e) => setInputValue(e.target.value)}
        />
        {inputValue}
      </InputWrapper>
    )
  }
 
export default EmailInput