import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import {Questions} from "./components/Questions.jsx"
import {Answer} from "./components/Answer.jsx"

function App() {
  const [questions, setQuestions] = useState([]);
  const [numCorrect, setNumCorrect] = useState(0)
  //let [count, setCount] = useState(0);

  useEffect(() => {
      axios
        .get(
          "https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple")
        .then((data) => setQuestions(data.data.results))
      .catch((error) => console.log(error));
  }, []); // empty dependency array to run only once. 


 

  return (
    <>
         <h1> TRIVIA TIME!</h1>


    {questions.map((obj, index) => (
      <>
        <Questions key={index} index={index+1} quest={obj.question} />
        <Answer key={index} numCorrect = {numCorrect} setNumCorrect={setNumCorrect} correct={obj.correct_answer} incorrect={obj.incorrect_answers} />

      </>
    ))}

    <h1>You have {numCorrect}/10 Questions Right</h1>
    

    </>
  );
}

export default App;
