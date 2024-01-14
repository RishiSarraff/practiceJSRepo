
export const QuestionTemplate = ({category, correct_answer, difficulty, incorrect_answers, question, type}) => {
    
    incorrect_answers.push(correct_answer)

    return(
        <>
        <p> Category: {category} </p>
        <p> Difficulty: {difficulty} </p>
        <p> Question: {question} </p>
        <p> Type: {type} </p>
        <p> Answer Options: 
            <ul>
                {incorrect_answers.map((incorrect_answer)=> (
                    <li>{incorrect_answer}</li>
                ))}
            </ul>
        </p>

        </>
    )
}