import styled from 'styled-components'
import { Component } from 'react'
import colors from '../../utils/style/colors'

const InputWrapper = styled.div`
  color: ${({ theme }) => (theme === 'light' ? colors.dark : 'white')};
  display: flex;
  flex-direction: column;
`

const StyledLabel = styled.label`
  color: ${({ theme }) => (theme === 'light' ? colors.dark : 'white')};
`

const StyledInput = styled.input`
  border: none;
  color: ${({ theme }) => (theme === 'light' ? colors.dark : 'white')};
  background-color: transparent;
  border-bottom: 2px solid
    ${({ theme }) => (theme === 'light' ? colors.dark : 'white')};
  margin-top: 5px;
  margin-bottom: 15px;
`

class EmailInput extends Component {
    constructor(props) { // constructor est une méthode utilisée pour créer et initialiser un objet lorsqu'on utilise le mot clé class .
        super(props)
        this.state = {
            inputValue: '',
        }
    }

    updateInputValue = (value) => { //updateInputValue  est une méthode de la classe,donc Pas besoin de const = devant notre fonction
        this.setState({ inputValue: value }) //setState  déclenche un rerender du composant,donc pas d'appel de setState  depuis render, sinon cela provoquera une boucle infinie dans le composant.
    }

    render() { //est obligatoirement appelée dans le composant 
        // Ici on récupère theme en destructurant this.props
        const { theme } = this.props
        return ( //render  doit forcément retourner du JSX (ce qui sera dans le return)
            <InputWrapper theme={theme}>
              <StyledLabel theme={theme}>Adresse Email</StyledLabel>
              <StyledInput
                theme={theme}
                onChange={(e) => this.updateInputValue(e.target.value)}
              />
              {this.state.inputValue} {/**Pour afficher le contenu de notre input */}
            </InputWrapper>
          )
    }

}
 
export default EmailInput