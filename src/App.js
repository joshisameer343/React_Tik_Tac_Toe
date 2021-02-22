import React, { useState } from "react";
import "./App.css";
import Grid1 from "./Grid1";

export default function App() {
  const [arr1, setArr1] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ]);
  const [turn, setTurn] = useState("X");
  const [result, setResult] = useState("");
  const [gameover, setGameOver] = useState(false);

  function res() {
    var x = arr1.slice();
    for (var k = 0; k <= 2; k++) {
      for (var m = 0; m <= 2; m++) {
        x[k][m] = null;
      }
    }
    setArr1(x);
    setGameOver(false);
    setResult("");
    setTurn("X");
  }

  return (
    <div className="board">
      <Grid1
        row="1"
        setArr1={setArr1}
        arr1={arr1}
        turn={turn}
        setTurn={setTurn}
        result={result}
        setResult={setResult}
        gameover={gameover}
        setGameOver={setGameOver}
      />
      <Grid1
        row="2"
        setArr1={setArr1}
        arr1={arr1}
        turn={turn}
        setTurn={setTurn}
        result={result}
        setResult={setResult}
        gameover={gameover}
        setGameOver={setGameOver}
      />
      <Grid1
        row="3"
        setArr1={setArr1}
        arr1={arr1}
        turn={turn}
        setTurn={setTurn}
        result={result}
        setResult={setResult}
        gameover={gameover}
        setGameOver={setGameOver}
      />

      <p className="turn">Turn : {turn}</p>
      <p className="result">{result}</p>
      <button className="res" onClick={res}>
        Reset
      </button>
    </div>
  );
}
