import { Link, useParams } from "react-router-dom"

function Survey() {
    const { questionNumber } = useParams() //Récuperer le numéro de la question depuis les paramètres de l'URL
    const questionNumberInt = parseInt(questionNumber) //convertir le numero de la question en entier
    const prevQuestionNumber = questionNumberInt === 1 ? 1 : questionNumberInt - 1
    const nextQuestionNumber = questionNumberInt + 1
    return (
        <div>
            <h1>Questionnaire 🧮</h1>
            <h2>Question {questionNumber}</h2>

            <Link to={`/survey/${prevQuestionNumber}`}>Précédent</Link>
            { questionNumberInt === 10 ? (
                <Link to="/results">Résultats</Link>
            ): (
                <Link to={`/survey/${nextQuestionNumber}`}>Suivant</Link>
            )}
        </div>
    )
}

export default Survey