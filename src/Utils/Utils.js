import BFS from "./BFS";
import DFS from "./DFS";
import Reset from "./Reset";

const RunAlgo = (nodes, algo) => {
  Reset(nodes);
  setTimeout(() => {
    if (algo === "DFS") {
      DFS();
    }
    if (algo === "BFS") {
      BFS();
    }
  }, 100);
};

export default RunAlgo;