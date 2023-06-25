import React, { useEffect, useMemo, useRef } from "react";
import BFS from '../../Utils/BFS'
import Reset from '../../Utils/Reset'
import DFS from '../../Utils/DFS'
import Node from "../Node";
import "./index.css";
function Grid() {
  const RunAlgo = (nodes,algo) => {
    Reset(nodes);
    setTimeout(()=>{
      if(algo==="DFS"){
        DFS();
      }
      if(algo==="BFS"){
        BFS();
      }
    },100);
  }

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
      // If Something is laoded twice in console
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
                key = {`${i}-${j}`} 
                value={value}
                class={`unvisited ${ i === 0 && j === 0 ? "start" : i === 10 && j === 10 ? "end" : "" }`}
                id={`row-${i} col-${j}`}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <button className="button" onClick={()=>RunAlgo(nodes,"BFS")}>BFS</button>
      <button className="reset" onClick={()=>Reset(nodes)}>Reset</button>
      <button className="dfs-button" onClick={()=>RunAlgo(nodes,"DFS")}>DFS</button>
    </div>
  );
}

export default Grid;
