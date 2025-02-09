import { Link, useParams } from "react-router-dom"

import { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { Loader } from '../../utils/style/Atoms'

import { SurveyContext } from '../../utils/context'

const SurveyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const QuestionTitle = styled.h2`
  text-decoration: underline;
  text-decoration-color: ${colors.primary};
`

const QuestionContent = styled.span`
  margin: 30px;
`

const LinkWrapper = styled.div`
  padding-top: 30px;
  & a {
    color: black;
  }
  & a:first-of-type {
    margin-right: 20px; //une marge droite au premier lien (élément <a>) enfant du div
  }
`
const ReplyBox = styled.button`
  border: none;
  height: 100px;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.backgroundLight};
  border-radius: 30px;
  cursor: pointer;
  box-shadow: ${(props) =>
    props.isSelected ? `0px 0px 0px 2px ${colors.primary} inset` : 'none'};
  &:first-child {
    margin-right: 15px;
  }
  &:last-of-type {
    margin-left: 15px;
  }
`

const ReplyWrapper = styled.div`
  display: flex;
  flex-direction: row;
`



function Survey() { //ce composant repose principalement sur l'utilisation des parametres passes dans l'url
    const { questionNumber } = useParams() //Récuperer le numéro de la question depuis les paramètres de l'URL
    const questionNumberInt = parseInt(questionNumber) //convertir le numero de la question en entier
    const prevQuestionNumber = questionNumberInt === 1 ? 1 : questionNumberInt - 1
    const nextQuestionNumber = questionNumberInt + 1
    
    const [surveyData, setSurveyData] = useState({}) //surveyData va nous permettre de stocker l’objet (qui a pour clés des nombres) qui a été retourné par l’API.
    const [isDataLoading, setDataLoading] = useState(false)

    const { answers, saveAnswers } = useContext(SurveyContext)
    //const [error, setError] = useState(false)

    // Cette syntaxe permet aussi bien de faire des calls API.
    // Mais pour utiliser await dans une fonction, il faut que celle-ci soit async (pour asynchrone).
    // Comme la fonction passée à useEffect ne peut pas être asynchrone,
    // il faut utiliser une fonction qui est appelée dans useEffect et déclarée en dehors, comme ici 👇.
    // Essayez de commenter le code créé dans le chapitre et de décommenter fetchData pour voir.

    // async function fetchData() {
    //   try {
    //     const response = await fetch(`http://localhost:8000/survey`)
    //     const { surveyData } = await response.json()
    //     setSurveyData(surveyData)
    //   } catch (error) {
    // console.log('===== error =====', error)
    // setError(true)
    //   }
    // }

    /**on sauvegarde la reponse a une question dans le contexte de l'application
     * L'objet { [questionNumber]: answer } crée un objet avec une clé dynamique. La clé de l'objet est la valeur de questionNumber, et la valeur associée à cette clé est answer.
    **/
    function saveReply(answer) {
      saveAnswers({ [questionNumber]: answer })
    }
    
    useEffect(() => {
      // fetchData()
      setDataLoading(true) //les données sont en cours de chargement
      fetch(`http://localhost:8000/survey`).then((response) =>
      response.json().then(({ surveyData }) => { //Convertir la réponse en JSON
        setSurveyData(surveyData) //mettre à jour l'état surveyData avec les données récupérées.
        setDataLoading(false) //Indiquer que le chargement des données est terminé
      })
      )
    }, [])

    // if (error) {
    //   return <span>Oups il y a eu un problème</span>
    // }

    return (
        <SurveyContainer>
            <QuestionTitle>Question {questionNumber}</QuestionTitle>

            {isDataLoading ? ( //Affiche un loader si les données sont en cours de chargement, sinon affiche le contenu de la question actuelle
                <Loader />
            ) : (
                <QuestionContent>{surveyData[questionNumber]}</QuestionContent> //on peut tout simplement accéder à une question avec surveyData[questionNumber]
            )}
            
            <ReplyWrapper>
              <ReplyBox
                onClick={() => saveReply(true)}
                isSelected={answers[questionNumber] === true} //donc dans le tableau answers, la valeur de la reponse sera enregistrée a chaque clic
              >
                Oui
              </ReplyBox>
              <ReplyBox
                onClick={() => saveReply(false)}
                isSelected={answers[questionNumber] === false}
              >
                Non
              </ReplyBox>
            </ReplyWrapper>

            <LinkWrapper>
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