import { Link, useParams } from "react-router-dom"

import { useContext } from 'react'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { Loader } from '../../utils/style/Atoms'

import { SurveyContext } from '../../utils/context'

import { useFetch, useTheme } from "../../utils/hooks"


const SurveyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`

const QuestionTitle = styled.h2`
  text-decoration: underline;
  text-decoration-color: ${colors.primary};
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};

  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`

const QuestionContent = styled.span`
  margin: 30px;
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};

  @media (max-width: 768px) {
    text-align: center;
    margin: 20px;
  }

  @media (max-width: 480px) {
    text-align: center;
    margin: 10px;
  }
`

const LinkWrapper = styled.div`
  padding-top: 30px;
  & a {  // Cible tous les éléments <a> à l'intérieur de LinkWrapper
    color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
  }
  & a:first-of-type {
    margin-right: 20px; //une marge droite au premier lien (élément <a>) enfant du div
  }
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    padding-top: 20px;
  }

  @media (max-width: 480px) {
    padding-top: 10px;
    & a:first-of-type {
      margin-right: 10px;
    }
  }
`
const ReplyBox = styled.button`
  border: none;
  height: 100px;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) =>
    theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
  border-radius: 30px;
  cursor: pointer;
  box-shadow: ${(props) =>
    props.$isSelected ? `0px 0px 0px 2px ${colors.primary} inset` : 'none'}; //ne pas oublier le $ pour indiquer a styled-components qu'il ne doit pas passer cette prop au DOM
  margin: 10px;

  &:first-child {
    margin-right: 15px; // Applique une marge droite au premier enfant
  }
  &:last-of-type {
    margin-left: 15px; // Applique une marge gauche au dernier enfant
  }

  @media (max-width: 768px) {
    height: 80px;
    width: 250px;
  }

  @media (max-width: 480px) {
    height: 60px;
    width: 200px;
  }
`

const ReplyWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;

  @media (max-width: 768px) {
    gap: 8px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 5px;

  }
`



function Survey() { //ce composant repose principalement sur l'utilisation des parametres passes dans l'url
  const { questionNumber } = useParams() //Récuperer le numéro de la question depuis les paramètres de l'URL
  const questionNumberInt = parseInt(questionNumber) //convertir le numero de la question en entier
  const prevQuestionNumber = questionNumberInt === 1 ? 1 : questionNumberInt - 1
  const nextQuestionNumber = questionNumberInt + 1
  
  const { theme } = useTheme()
  const { answers, saveAnswers } = useContext(SurveyContext)

  /*on sauvegarde la reponse a une question dans le contexte de l'application
  * L'objet { [questionNumber]: answer } crée un objet avec une clé dynamique. La clé de l'objet est la valeur de questionNumber, et la valeur associée à cette clé est answer.
  */
  function saveReply(answer) {
    saveAnswers({ [questionNumber]: answer })
  }

  const { data, isLoading, error } = useFetch(`http://localhost:8000/survey`)
  
  const { surveyData } = data

  if (error) {

    return <span>Il y a un problème</span>
    
  }


  return (
      <SurveyContainer>
          <QuestionTitle theme={theme}>Question {questionNumber}</QuestionTitle>

          {isLoading ? ( //Affiche un loader si les données sont en cours de chargement, sinon affiche le contenu de la question actuelle
              <Loader />
          ) : (
              <QuestionContent theme={theme}>{surveyData && surveyData[questionNumber]}</QuestionContent> //on peut tout simplement accéder à une question avec surveyData[questionNumber], mais verifier d'abord si surveyData est defini
          )}
          
          <ReplyWrapper>
            <ReplyBox
              onClick={() => saveReply(true)}
              $isSelected={answers[questionNumber] === true} //donc dans le tableau answers, la valeur de la reponse sera enregistrée a chaque clic
              theme={theme}
            >
              Oui
            </ReplyBox>
            <ReplyBox
              onClick={() => saveReply(false)}
              $isSelected={answers[questionNumber] === false}
              theme={theme}
            >
              Non
            </ReplyBox>
          </ReplyWrapper>

          <LinkWrapper theme={theme}>
              <Link to={`/survey/${prevQuestionNumber}`}>Précédent</Link>
              { questionNumberInt === 10 ? (
                  <Link to="/results">Résultats</Link>
              ): (
                  <Link to={`/survey/${nextQuestionNumber}`}>Suivant</Link>
              )}
          </LinkWrapper>
      </SurveyContainer>
  )
}

export default Survey