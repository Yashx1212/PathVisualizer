const Reset = (nodes) => {
	const start = document.querySelector(".start");
	const end = document.querySelector(".end");

	for(let i=0;i<20;i++){
		for(let j=0;j<60;j++){
			const node = document.getElementById(`row-${i} col-${j}`);
			if(node===start){
				node.classList.add("start");
			}else if(node===end){
				node.classList.add("end");
			}else{
				node.classList.add("unvisited");
			}
			node.classList.remove("visited", "path");
		}
	}
};

export default Reset;