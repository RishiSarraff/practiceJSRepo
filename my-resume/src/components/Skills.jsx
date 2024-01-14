import { Counter } from "./Counter.jsx";

export const Skills = () => {
  const skills = ["React.js", "Javascript", "HTML", "CSS", "Node.js"];

  return (
    <>
      <h3>Skills</h3>
      <ul>
        {skills.map((element, index) => (
          <>
            <li>{element}</li>
            <Counter />
          </> // when we hvae more than one html tag, we should use <></>
        ))}
      </ul>
    </>
  )
  
};
