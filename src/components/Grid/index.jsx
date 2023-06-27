import React, { useEffect, useMemo, useReducer, useRef } from "react";
import Reset from '../../Utils/Reset'
import Node from "../Node";
import "./index.css";
import RunAlgo from "../../Utils/Utils";

const initialState = {
  isLifting: false,
  nodeLifting: "",
  startNode: { row: 9, col: 18 },
  endNode: { row: 9, col: 37 }
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_LIFTING":
      return { ...state, isLifting: action.payload };
    case "SET_NODE_LIFTING":
      return { ...state, nodeLifting: action.payload };
    case "SET_START_NODE":
      return { ...state, startNode: action.payload };
    case "SET_END_NODE":
      return { ...state, endNode: action.payload };
    default:
      return state;
  }
}

function Grid() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { isLifting, nodeLifting, startNode, endNode } = state;

  const handleOnMouseUp = (row, col) => {
    if (!isLifting || !nodeLifting.length) return;
    document.getElementById(`row-${row} col-${col}`).classList.add(nodeLifting);
    nodeLifting === "start"
      ? dispatch({ type: "SET_START_NODE", payload: { row, col } })
      : dispatch({ type: "SET_END_NODE", payload: { row, col } });
    dispatch({ type: "SET_LIFTING", payload: false });
    dispatch({ type: "SET_NODE_LIFTING", payload: "" });
  };

  const handleOnMouseDown = (row, col) => {
    console.log(startNode , endNode);
    if (isLifting) {
      handleOnMouseUp(row, col);
    } else {
      if (startNode.row === row || startNode.col === col) {
        dispatch({ type: "SET_LIFTING", payload: true });
        dispatch({ type: "SET_NODE_LIFTING", payload: "start" });
        document.getElementById(`row-${row} col-${col}`).classList.remove("start");
      } else if (endNode.row === row || endNode.col === col) {
        dispatch({ type: "SET_NODE_LIFTING", payload: "end" });
        dispatch({ type: "SET_LIFTING", payload: true });
        document.getElementById(`row-${row} col-${col}`).classList.remove("end");
      }
    }
  };

  const nodes = useMemo(() => {
    let matrix = [];
    for (let i = 0; i < 20; i++) {
      let row = [];
      for (let j = 0; j < 60; j++) {
        row.push(`${i} ${j}`);
      }
      matrix.push(row);
    }
    return matrix;
  }, []);

  const isMountedRef = useRef(false);

  useEffect(() => {
    if (isMountedRef.current) {
      // If Something is loaded twice in console
    } else {
      isMountedRef.current = true;
    }
  }, [nodes]);

  return (
    <div className="grid">
      <table>
        <tbody>
          {nodes.map((row, i) => (
            <tr key={i}>
              {row.map((value, j) => (
                <Node
                  key={`${i}-${j}`}
                  value={value}
                  class={`unvisited ${
                    i === 9 && j === 18 ? "start" : i === 9 && j === 37 ? "end" : ""
                  }`}
                  id={`row-${i} col-${j}`}
                  row={i}
                  col={j}
                  handleOnMouseDown={handleOnMouseDown}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <button className="button" onClick={() => RunAlgo(nodes, "BFS")}>
        BFS
      </button>
      <button className="reset" onClick={() => Reset(nodes)}>
        Reset
      </button>
      <button className="dfs-button" onClick={() => RunAlgo(nodes, "DFS")}>
        DFS
      </button>
    </div>
  );
}

export default Grid;
