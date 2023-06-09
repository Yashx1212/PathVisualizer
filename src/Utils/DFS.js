import animateVisited from "./Animations";

const DFS = () => {
  const startElement = document.getElementsByClassName("start")[0].getAttribute("value").split(" ").map((val) => {return parseInt(val)});
	const endElement = document.getElementsByClassName("end")[0].getAttribute("value").split(" ").map((val) => {return parseInt(val)});
	let stack = [];
	let visitedNodesInorder = [], shortestPathInorder= [];
	let dir = [1,0,-1,0,1];
	let options = [];

	for(let i=0;i<20;i++){
		let temp = [];
		for(let j=0;j<60;j++){
			temp.push({
				visited: false,
				dist: 1000,
				parent: [-1,-1]
			})
		}
		options.push(temp);
	}

	options[startElement[0]][startElement[1]] = {
		visited: true,
		dist: 0,
		parent: [-1,-1]
	};
	stack.push(startElement);

	while(stack.length){
		let node = stack[stack.length-1];
		visitedNodesInorder.push(node);
		if(node.toString() === endElement.toString()){
			break;
		}
		stack.pop();
		for(let i=0;i<4;i++){
			let row = node[0] + dir[i];
			let col = node[1] + dir[i+1];
			if(row >= 0 && col >= 0 && row < 20 && col < 60 && !options[row][col].visited){
				options[row][col].visited = true;
				options[row][col].parent = node;
				options[row][col].dist = options[node[0]][node[1]].dist + 1;
				stack.push([row,col]);
			}
		}
	}
	let curNode = endElement;
	while(curNode && (curNode[0]!==-1 || curNode[1]!==-1)){
		shortestPathInorder.push(curNode);
		curNode = options[curNode[0]][curNode[1]].parent;
	}
	animateVisited(visitedNodesInorder,shortestPathInorder);
}

export default DFS;