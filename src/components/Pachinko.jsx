import { useState, useEffect } from "react";
import "../styles/pachinko.css";

const BOARD = [
  [["ball"]],
  [["peg"]],
  [[1], [2]],
  [["peg"], ["peg"]],
  [[1], [2], [3]],
  [["peg"], ["peg"], ["peg"]],
  [[1], [2], [3], [4]],
];

function Pachinko() {
  const [start, startGame] = useState(false);
  const [position, setPosition] = useState(0);
  const [board, setBoard] = useState(BOARD);
  const depth = board.length
  const [row, setRow] = useState(0);

  const ballDrop = () => {
    const gameBoard = board.map((slots) => {
        return slots.slice()
    })
    if (row < depth) {
      console.log("row: " + row);
      if (Math.random() > 0.5) {
        console.log("right");
        setPosition((prev) => prev + 1);
        console.log(position);
      } else {
        console.log("left");
        console.log(position);
      }
      gameBoard[row][position] = ["ball"];
      setBoard(gameBoard);
      setRow((prev) => prev + 2);
    } else{
        startGame('over')
    }
  };

  useEffect(() => {
    setTimeout(() => {
      if (start === false) return;
      ballDrop();
    }, 400);
  }, [row, start]);

  const handleClick = () => {
    console.log(position);
    startGame(true);
    ballDrop();
  };

  const replay = () => {
    setPosition(0)
    setBoard(BOARD)
    setRow(0)
    console.log(BOARD)
    startGame(false)
  }

  return (
    <div id="container">
      <h1>PACHINKO</h1>
      <div className="ball-space">
        {board[0].map((space, index) => {
          if (space[0] === "ball") {
            return (
              <button
                id={index + 1}
                className="ball"
                onClick={handleClick}
              ></button>
            );
          }
          return <div id={index + 1} className="empty"></div>;
        })}
      </div>
      <div className="peg-row">
        {board[1].map(() => {
          return <div className="peg"></div>;
        })}
      </div>
      <div className="ball-space">
        {board[2].map((space) => {
          if (space[0] === "ball") {
            return <div className="ball"></div>;
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
          if (space[0] === "ball") {
            return <div className="ball"></div>;
          }
          return <div className="empty"></div>;
        })}
      </div>
      <div className="peg-row">
        {board[5].map(() => {
          return <div className="peg"></div>;
        })}
      </div>
      <div id="end">
        {board[6].map((space) => {
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
      {start === 'over' && (
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
