import animateVisited from "./Animations";

const BFS = (nodes) => {

	let queue = [];
	let options = [];
	let visitedNodesInorder = [] , shortestPathInorder= [];
	let dir = [1,0,-1,0,1];
	const startElement = document.getElementsByClassName("start")[0].getAttribute("value").split(" ").map((val) => {return parseInt(val)});
	const endElement = document.getElementsByClassName("end")[0].getAttribute("value").split(" ").map((val) => {return parseInt(val)});

	for(let i=0;i<20;i++){
		let temp = [];
		for(let j=0;j<60;j++){
			temp.push({
				visited: false,
				dist: 10000,
				parent: -1
			}); 
		}
		options.push(temp);
	}
	options[startElement[0]][startElement[1]] = {
		visited: true,
		dist: 0,
		parent: [-1,-1]
	}
	queue.push(startElement);
	while(queue.length){
		let curNode = queue[0];
		visitedNodesInorder.push(curNode);
		if(curNode[0]===endElement[0] && curNode[1]===endElement[1]){
			break;
		}
		queue.shift();
		for(let i=0;i<4;i++){
			let row = curNode[0] + dir[i];
			let col = curNode[1] + dir[i+1];
			if(row>=0 && col>=0 && row < 20 && col <60 && !options[row][col].visited){
				options[row][col].visited = true;
				options[row][col].parent = curNode;
				options[row][col].dist = options[curNode[0]][curNode[1]].dist + 1;
				queue.push([row,col]);
			}
		}
	}
	let curNode = endElement;
	while(curNode && (curNode[0]!==-1 || curNode[1]!==-1)){
		shortestPathInorder.push(curNode);
		curNode = options[curNode[0]][curNode[1]].parent;
	}
	shortestPathInorder.reverse();
	setTimeout(()=>{
		animateVisited(visitedNodesInorder,shortestPathInorder);
	},10)
}

export default BFS;