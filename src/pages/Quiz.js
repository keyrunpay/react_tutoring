import React from "react";
import AnswerPill from "../component/AnswerPill";
import { myQuestions } from "./data";

export default function Quiz() {
  const [selected, setSelected] = React.useState(0);
  const [state, setState] = React.useState(myQuestions);
  const [qstnIndex, setQstnIndex] = React.useState(0);
  const [correctCount, setCorrectCount] = React.useState(0);
  const [submitted, setSubmitted] = React.useState(false);

  const fetchQstn = () => {
    return state[qstnIndex].question;
  };

  const fetchAnswer = () => {
    return state[qstnIndex].answers;
  };

  const getSelectedAns = () => {
    if (selected === 0) return "a";
    if (selected === 1) return "b";
    if (selected === 2) return "c";
    if (selected === 3) return "d";
  };

  const onSubmit = () => {
    const cAns = state[qstnIndex].correctAnswer;
    const sAns = getSelectedAns();
    if (cAns === sAns) {
      setCorrectCount((prevCount) => prevCount + 1);
    }

    if (qstnIndex + 1 == state.length) {
      //submit to api
      setSubmitted(true);
      console.log("Submitting to api");
    } else {
      setQstnIndex((pI) => pI + 1);
    }
  };

  return (
    <div className="xyz">
      <div className="content centerize">
        <div className="question">
          <div className="count">
            Question {qstnIndex + 1} of {state.length}
          </div>
          <p className="qstn-body">{fetchQstn()}</p>
        </div>

        <div className="answer">
          <div className="flex jcsb ci">
            <AnswerPill
              text={fetchAnswer().a}
              selected={selected === 0 ? true : false} // according to the selected value yo item select xa ke nai props ma pass gareko
              onClick={() => setSelected(0)}
            />
            <AnswerPill
              text={fetchAnswer().b}
              selected={selected === 1 ? true : false}
              onClick={() => setSelected(1)}
            />
          </div>
          <div className="flex jcsb ci">
            <AnswerPill
              text={fetchAnswer().c}
              selected={selected === 2 ? true : false}
              onClick={() => setSelected(2)}
            />
            <AnswerPill
              text={fetchAnswer().d}
              selected={selected === 3 ? true : false}
              onClick={() => setSelected(3)}
            />
          </div>
        </div>
        <br />
        <button className="submit" onClick={onSubmit}>
          {qstnIndex + 1 == state.length ? "Submit" : "Next Question"}
        </button>
        <br />
        <br />
        {submitted && <h1>Your Score Is: {correctCount}</h1>}
      </div>
    </div>
  );
}
