import React from "react";
import Griditem from "./Griditem";
import "./grid1.css";

function Grid1(props) {
  return (
    <div className="gridrow">
      <Griditem
        row={props.row}
        number="1"
        setArr1={props.setArr1}
        arr1={props.arr1}
        turn={props.turn}
        setTurn={props.setTurn}
        result={props.result}
        setResult={props.setResult}
        gameover={props.gameover}
        setGameOver={props.setGameOver}
      >
        {" "}
      </Griditem>
      <Griditem
        row={props.row}
        number="2"
        setArr1={props.setArr1}
        arr1={props.arr1}
        turn={props.turn}
        setTurn={props.setTurn}
        result={props.result}
        setResult={props.setResult}
        gameover={props.gameover}
        setGameOver={props.setGameOver}
      >
        {" "}
      </Griditem>
      <Griditem
        row={props.row}
        number="3"
        setArr1={props.setArr1}
        arr1={props.arr1}
        turn={props.turn}
        setTurn={props.setTurn}
        result={props.result}
        setResult={props.setResult}
        gameover={props.gameover}
        setGameOver={props.setGameOver}
      >
        {" "}
      </Griditem>
    </div>
  );
}

export default Grid1;
