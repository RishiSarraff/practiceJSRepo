import { useEffect, useState } from "react";

export const Answer = ({ correct, incorrect, numCorrect, setNumCorrect }) => {
  const [shuffledAnswers, setShuffledAnswers] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  useEffect(() => {
    const allAnswers = [...incorrect, correct];
    setShuffledAnswers(allAnswers.sort(() => Math.random() - 0.5));
    // lowest value is -0.5 and highest value is 0.5, whatever sort takes it will put the index at a certain location
  }, []);

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
    setIsCorrect(answer === correct);
    if(answer === correct){
      setNumCorrect(numCorrect+1)
    }
  

}

  return (
    <>
      {shuffledAnswers.map((answer, index) => (
        <li key={index}>
          <button onClick={()=>
              handleAnswerClick(answer)}
            >{answer}</button>
        </li>
      ))}
      {selectedAnswer !== null && (isCorrect? <h3> Yay, Correct! </h3> : <h3> That is Incorrect</h3>)}
    </>
  );
  
};
