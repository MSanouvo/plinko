import { useState, useEffect } from "react";
import "../styles/pachinko.css";
import Hit from "../assets/sounds/ball_collision.mp3"

const ballHit = new Audio(Hit)

const BOARD = [
  [[]],
  [["peg"]],
  [[1], [2]],
  [["peg"], ["peg"]],
  [[1], [2], [3]],
  [["peg"], ["peg"], ["peg"]],
  [[1], [2], [3], [4]],
  [["peg"], ["peg"], ["peg"], ["peg"]],
  [[1], [2], [3], [4], [5]],
];

function Pachinko() {
  const [start, startGame] = useState(false);
  const [position, setPosition] = useState(0);
  const [previous, setPrevious] = useState(0);
  const [board, setBoard] = useState(BOARD);
  const [row, setRow] = useState(0);
  const [fallSide, setfallSide] = useState("");
  const depth = board.length;

  const ballDrop = () => {
    setPrevious(position);
    setfallSide('left')
    const gameBoard = board.map((slots) => {
      return slots.slice();
    });
    if (row < depth) {
      console.log("row: " + row);
      if (row === 0) {
        fallRight();
      } else {
        gameBoard[row - 2][previous] = [];
        fallRight();
      }
      gameBoard[row][position] = ["ball"];
      setBoard(gameBoard);
      setRow((prev) => prev + 2);
      ballHit.play()
    } else {
      startGame("over");
    }
  };

  const fallRight = () => {
    if (Math.random() > 0.5) {
      setfallSide("right");
      setPosition((prev) => prev + 1);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      if (start === false) return;
      ballDrop();
    }, 390);
  }, [row, start]);

  const handleClick = () => {
    startGame(true);
    ballDrop();
  };

  const replay = () => {
    setPosition(0);
    setBoard(BOARD);
    setRow(0);
    startGame(false);
  };

  return (
    <div id="container">
      <h1>PACHINKO</h1>
      {start === false && <button onClick={handleClick}>Play</button>}
      <div className="ball-space">
        {board[0].map((space) => {
          if (space[0] === "ball" && fallSide === 'left') {
            return <button className="ball left"></button>;
          }
          if (space[0] === "ball" && fallSide === 'right') {
            return <button className="ball right"></button>;
          }
          return <div className="empty"></div>;
        })}
      </div>
      <div className="peg-row">
        {board[1].map(() => {
          return <div className="peg"></div>;
        })}
      </div>
      <div className="ball-space">
        {board[2].map((space) => {
          if (space[0] === "ball" && fallSide === 'left') {
            return <button className="ball left"></button>;
          }
          if (space[0] === "ball" && fallSide === 'right') {
            return <button className="ball right"></button>;
          }
          return <div className="empty"></div>;
        })}
      </div>
      <div className="peg-row">
        {board[3].map(() => {
          return <div className="peg"></div>;
        })}
      </div>
      <div className="ball-space">
        {board[4].map((space) => {
          if (space[0] === "ball" && fallSide === 'left') {
            return <button className="ball left"></button>;
          }
          if (space[0] === "ball" && fallSide === 'right') {
            return <button className="ball right"></button>;
          }
          return <div className="empty"></div>;
        })}
      </div>
      <div className="peg-row">
        {board[5].map(() => {
          return <div className="peg"></div>;
        })}
      </div>
      <div className="ball-space">
        {board[6].map((space) => {
          if (space[0] === "ball" && fallSide === 'left') {
            return <button className="ball left"></button>;
          }
          if (space[0] === "ball" && fallSide === 'right') {
            return <button className="ball right"></button>;
          }
          return <div className="empty"></div>;
        })}
      </div>
      <div className="peg-row">
        {board[7].map(() => {
          return <div className="peg"></div>;
        })}
      </div>
      <div id="end">
        {board[8].map((space) => {
          if (space[0] === "ball") {
            return (
              <div className="basket ball-end">
                <div className="ball"></div>
              </div>
            );
          }
          return <div className="basket">{space}</div>;
        })}
      </div>
      {start === "over" && (
        <div className="game-over">
          <h2>Game Over</h2>
          <button onClick={replay}>play again</button>
        </div>
      )}
    </div>

    // <div>
    //   <h1>Hello World</h1>
    //   <div id="container">
    //     <button className="ball" onClick={handleClick}></button>
    //     <div id="row1">
    //       <div className="peg"></div>
    //       <div className="peg"></div>
    //       <div className="peg"></div>
    //     </div>
    //     <div id="row2">
    //       <div className="peg"></div>
    //       <div className="peg"></div>
    //       <div className="peg"></div>
    //       <div className="peg"></div>
    //     </div>
    //     <div id="row3">
    //       <div className="peg"></div>
    //       <div className="peg"></div>
    //       <div className="peg"></div>
    //       <div className="peg"></div>
    //       <div className="peg"></div>
    //     </div>
    //     <div id="row4">
    //       <div className="basket">1</div>
    //       <div className="basket">2</div>
    //       <div className="basket">3</div>
    //       <div className="basket">4</div>
    //       <div className="basket">5</div>
    //       <div className="basket">6</div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Pachinko;
