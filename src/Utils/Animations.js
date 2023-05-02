const animateShortestPath = (shortestPathInorder) => {
	const startElement = document.getElementsByClassName("start")[0].getAttribute("value").split(" ").map((val) => {return parseInt(val)});
	const endElement = document.getElementsByClassName("end")[0].getAttribute("value").split(" ").map((val) => {return parseInt(val)});
	shortestPathInorder.forEach((element,index)=>{
		setTimeout(()=>{
			if(element.toString() !== startElement.toString() && element.toString() !== endElement.toString()){
				let node = document.getElementById(`row-${element[0]} col-${element[1]}`);
				node.classList.remove('visited');
				node.classList.add('path');
			}
		},index*50)
	})
}

const animateVisited = (visitedNodesInorder,shortestPathInorder) => {

	const startElement = document.getElementsByClassName("start")[0].getAttribute("value").split(" ").map((val) => {return parseInt(val)});
	const endElement = document.getElementsByClassName("end")[0].getAttribute("value").split(" ").map((val) => {return parseInt(val)});

	visitedNodesInorder.forEach((element,index) => {
		setTimeout(()=>{
			if(element.toString() !== startElement.toString() && element.toString() !== endElement.toString()){
				let node = document.getElementById(`row-${element[0]} col-${element[1]}`);
				node.classList.remove('unvisited');
				node.classList.add('visited');
			}
			if(index===visitedNodesInorder.length-1){
				animateShortestPath(shortestPathInorder);
			}
		},index*10)
	});
}

export default animateVisited;