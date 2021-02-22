import React from "react";
import "./Griditem.css";

function Griditem(props) {
  function sam() {
    if (!props.gameover) {
      var x = props.arr1.slice();
      x[props.row - 1][props.number - 1] = props.turn;
      props.setArr1(x);

      for (var i = 0; i <= 2; i++) {
        if (
          props.arr1[i][0] === props.arr1[i][1] &&
          props.arr1[i][1] === props.arr1[i][2] &&
          props.arr1[i][0] != null
        ) {
          props.setResult(props.arr1[i][0] + "  Winner");
          props.setGameOver(true);
        }
      }
      for (var j = 0; j <= 2; j++) {
        if (
          props.arr1[0][j] === props.arr1[1][j] &&
          props.arr1[1][j] === props.arr1[2][j] &&
          props.arr1[0][j] != null
        ) {
          props.setResult(props.arr1[0][j] + "  Winner");
          props.setGameOver(true);
        }
      }

      if (
        props.arr1[0][0] === props.arr1[1][1] &&
        props.arr1[1][1] === props.arr1[2][2] &&
        props.arr1[0][0] != null
      ) {
        props.setResult(props.arr1[0][0] + "  Winner");
        props.setGameOver(true);
      }

      if (
        props.arr1[0][2] === props.arr1[1][1] &&
        props.arr1[1][1] === props.arr1[2][0] &&
        props.arr1[0][2] != null
      ) {
        props.setResult(props.arr1[0][2] + "  Winner");
        props.setGameOver(true);
      }
      var flag = 0;
      for (var k = 0; k <= 2; k++) {
        for (var m = 0; m <= 2; m++) {
          if (props.arr1[k][m] === null) {
            flag = flag + 1;
          }
        }
      }

      if (flag === 0) {
        props.setResult("Match Draw");
        props.setGameOver(true);
      }

      if (props.turn === "X") {
        props.setTurn("O");
      }
      if (props.turn === "O") {
        props.setTurn("X");
      }
    }
  }

  return (
    <div className="griditem" onClick={sam}>
      {props.arr1[props.row - 1][props.number - 1]}
    </div>
  );
}

export default Griditem;
