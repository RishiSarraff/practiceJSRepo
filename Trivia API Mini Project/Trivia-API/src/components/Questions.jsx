import { QuestionTemplate} from "./QuestionTemplate.jsx"

export const Questions = ({index, quest}) => {


  return (
    <>
     <span> {index}: </span>
     <span dangerouslySetInnerHTML={{ __html: quest}}/>
    
    </>
  );
};

// quest == array. 
// category, correct_answer, difficulty, incorrect_answer{False, length}, question, type
