import { useState } from "react";
import Pachinko from "./Pachinko";
import Outcomes from "./Outcomes";

const BOARD = [
  [[]],
  [["peg"], ["peg"], ["peg"], ["peg"], ["peg"]],
  [[1], [2]],
  [["peg"], ["peg"], ["peg"], ["peg"]],
  [[1], [2], [3]],
  [["peg"], ["peg"], ["peg"], ["peg"], ["peg"]],
  [[1], [2], [3], [4]],
  [["peg"], ["peg"], ["peg"], ["peg"]],
  [[1], [2], [3], [4], [5]],
];

function GameHandler() {
  const [outcomesArray, setOutcomesArray] = useState([1, 2, 3, 4, 5]);
  const [result, setResult] = useState(0);
  const [banner, setBanner] = useState(false);
  const [board, setBoard] = useState(BOARD);
  const [currentRow, setCurrentRow] = useState(0);
  const [position, setPosition] = useState(0);

  const getOutcomes = (outcomes) => {
    console.log(outcomes);
    setOutcomesArray(outcomes);
  };

  const getResult = (e) => {
    console.log(e);
    setResult(e);
    setBanner(true);
  };

  const reset = () => {
    setBanner(false);
    setResult(0);
    setBoard(BOARD);
    setPosition(0);
    setCurrentRow(0);
  };

  return (
    <div>
      <div id="nav-header">
        <p className="title">PLAY PLINKO</p>
      </div>
      <div id="game-container">
        <Pachinko
          setResult={getResult}
          board={board}
          currentRow={currentRow}
          position={position}
          setBoard={setBoard}
          setPosition={setPosition}
          setCurrentRow={setCurrentRow}
          banner={banner}
          reset={reset}
        />
        <Outcomes setData={getOutcomes} banner={banner} />
      </div>
      {banner === true && outcomesArray.length != 0 && (
        <div id="results-banner">
          <p className="result">
            {outcomesArray[result] != undefined
              ? outcomesArray[result]
              : "No registered outcome"}
          </p>
          <button className="banner-button" onClick={() => setBanner(false)}>
            Close
          </button>
        </div>
      )}
    </div>
  );
}

export default GameHandler;
