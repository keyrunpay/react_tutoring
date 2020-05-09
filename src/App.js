import React from "react";
import AnswerPill from "./component/AnswerPill";

export default function App() {
  const [selected, setSelected] = React.useState(0);

  return (
    <div className="xyz">
      <div className="content centerize">
        <div className="question">
          <div className="count">Question 1 of 10</div>
          <p className="qstn-body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos odit
            fugit maiores tempora, eaque veniam sint ipsa magni? Iure facilis
            est saepe pariatur sapiente veritatis
          </p>
        </div>

        <div className="answer">
          <div className="flex jcsb ci">
            <AnswerPill
              text="Answe 1"
              selected={selected === 0 ? true : false} // according to the selected value yo item select xa ke nai props ma pass gareko
              onClick={() => setSelected(0)}
            />
            <AnswerPill
              text="Answe 2"
              selected={selected === 1 ? true : false}
              onClick={() => setSelected(1)}
            />
          </div>
          <div className="flex jcsb ci">
            <AnswerPill
              text="Answe 3"
              selected={selected === 2 ? true : false}
              onClick={() => setSelected(2)}
            />
            <AnswerPill
              text="Answe 4"
              selected={selected === 3 ? true : false}
              onClick={() => setSelected(3)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
