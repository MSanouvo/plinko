import { useState, useEffect } from "react";
import "../styles/plinko.css";
import Hit from "../assets/sounds/ball_collision.mp3";

const ballHit = new Audio(Hit);
ballHit.volume = 0.3

function Plinko({
  setResult,
  setBoard,
  setPosition,
  setCurrentRow,
  board,
  currentRow,
  position,
  reset,
}) {
  const [start, startGame] = useState(false);
  const [previous, setPrevious] = useState(0);
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
        startGame(false);
      }
      ballHit.play();
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
  }, [currentRow, start]);

  const handleClick = () => {
    if (start != true) {
      reset();
      startGame(true);
      ballDrop();
    }
  };
  return (
    <div id="container">
      <div id="plinko-container">
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
                    <div className="ball shadow"></div>
                  </div>
                );
              }
              return <div className="basket">{space}</div>;
            })}
          </div>
        </div>
      </div>
      <button className="header" id="play" onClick={handleClick}>
          Play
        </button>
    </div>
  );
}

export default Plinko;
