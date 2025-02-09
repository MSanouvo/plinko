import { useState, useEffect } from "react";
import "../styles/pachinko.css";
import Hit from "../assets/sounds/ball_collision.mp3";

const ballHit = new Audio(Hit);

function Pachinko({
  setResult,
  setBoard,
  setPosition,
  setCurrentRow,
  board,
  currentRow,
  position,
}) {
  const [start, startGame] = useState(false);
  //   const [position, setPosition] = useState(0);
  const [previous, setPrevious] = useState(0);
  //   const [board, setBoard] = useState(BOARD);
  //   const [row, setRow] = useState(0);
  const [fallSide, setfallSide] = useState("");
  const depth = board.length;

  const ballDrop = () => {
    setPrevious(position);
    setfallSide("left");
    const gameBoard = board.map((slots) => {
      return slots.slice();
    });
    if (currentRow < depth) {
      if (currentRow === 0) {
        fallRight();
      } else {
        gameBoard[currentRow - 2][previous] = [];
        fallRight();
      }
      gameBoard[currentRow][position] = ["ball"];
      setBoard(gameBoard);
      setCurrentRow((prev) => prev + 2);
      if (currentRow === gameBoard.length - 1) {
        setResult(position);
        // console.log(position)
        // console.log(gameBoard)
      }
      ballHit.play();
    }
    // else {
    //   startGame("over");
    // }
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
  }, [currentRow, start]);

  const handleClick = () => {
    startGame(true);
    ballDrop();
  };

  //   const replay = () => {
  //     setPosition(0);
  //     setBoard(BOARD);
  //     setRow(0);
  //     startGame(false);
  //     reset()
  //   };

  return (
    <div id="container">
      <div id="pachinko-container">
        <h1 className="header">PLINKO</h1>
        {start === false && <button onClick={handleClick}>Play</button>}
        <div id="game-area">
          <div className="ball-space">
            {board[0].map((space) => {
              if (space[0] === "ball" && fallSide === "left") {
                return <button className="ball left"></button>;
              }
              if (space[0] === "ball" && fallSide === "right") {
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
              if (space[0] === "ball" && fallSide === "left") {
                return <button className="ball left"></button>;
              }
              if (space[0] === "ball" && fallSide === "right") {
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
              if (space[0] === "ball" && fallSide === "left") {
                return <button className="ball left"></button>;
              }
              if (space[0] === "ball" && fallSide === "right") {
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
              if (space[0] === "ball" && fallSide === "left") {
                return <button className="ball left"></button>;
              }
              if (space[0] === "ball" && fallSide === "right") {
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
        </div>
      </div>
    </div>
  );
}

export default Pachinko;
