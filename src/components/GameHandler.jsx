import { useState } from "react";
import Plinko from "./Plinko";
import Outcomes from "./Outcomes";
import "../styles/index.css"

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
  const [navHidden, setnavHidden] = useState(false);

  const getResult = (e) => {
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

  const hideNav = () => {
    if (navHidden != true) setnavHidden(true);
    else setnavHidden(false);
  };

  return (
    <div>
      <div id="nav-header">
        <p className="title">Play Plinko</p>
      </div>
      <div id="game-container">
        <div
          className={
            navHidden === true ? "outcome-open hidden" : "outcome-open"
          }
        >
          <Outcomes setData={setOutcomesArray} banner={banner} />
          <button id="hide-content" onClick={hideNav}></button>
        </div>
        <div className="plinko">
          <Plinko
            setResult={getResult}
            board={board}
            currentRow={currentRow}
            position={position}
            setBoard={setBoard}
            setPosition={setPosition}
            setCurrentRow={setCurrentRow}
            reset={reset}
          />
        </div>
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
