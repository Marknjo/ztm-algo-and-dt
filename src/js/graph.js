class Graph {
  numberOfNodes = 0;
  adjacentList = new Map();

  addVertex(node) {
    this.adjacentList.set(node, []);
    return this;
  }

  addEdge(node1, node2) {
    try {
      let hasNode1 = this.adjacentList.get(node1);
      let hasNode2 = this.adjacentList.get(node2);

      if (!hasNode1 || !hasNode2) {
        throw Error(
          "Reference Error: Node 1 value or Node 2 value not in the graph"
        );
      }

      // There are nodes in the graph
      hasNode1.push(node2);
      hasNode2.push(node1);

      return this;
    } catch (error) {
      console.error(error.message);
    }
  }

  showConnections() {
    // const allNodes = [...this.adjacentList.keys()];

    // allNodes.forEach((node) => {
    //   let nodeConnections = this.adjacentList.get(node);
    //   let connections = "";
    //   let vertex;

    //   for (vertex of nodeConnections) {
    //     connections += vertex + " ";
    //   }

    //   console.log(node + "-->" + connections);
    // });

    this.adjacentList.forEach((value, key) => {
      console.log(`${key} --> ${value.join(" ")}`);
    });
  }
}

const myGraph = new Graph();

/// Add Vertex
console.log(
  "----------------------------------VERTEX----------------------------------\n"
);
myGraph.addVertex("0");
myGraph.addVertex("1");
myGraph.addVertex("2");
myGraph.addVertex("3");
myGraph.addVertex("4");
myGraph.addVertex("5");
myGraph.addVertex("6");

console.log(myGraph);

console.log("Added 7 Vertex");

console.log(
  "\n\n----------------------------------ADDING EDGES----------------------------------\n"
);
myGraph.addEdge("3", "1");
myGraph.addEdge("3", "4");
myGraph.addEdge("4", "2");
myGraph.addEdge("4", "5");
myGraph.addEdge("1", "2");
myGraph.addEdge("1", "0");
myGraph.addEdge("0", "2");
myGraph.addEdge("6", "5");
console.log("Added all edges");
myGraph.showConnections();
