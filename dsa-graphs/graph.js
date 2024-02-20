class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  // this function accepts a Node instance and adds it to the nodes property on the graph
  addVertex(vertex) {
    //check if the vertex already exists in the graph
    if (!this.nodes.has(vertex)) {
      //if not add to nodes map
      this.nodes.add(vertex);
    } else {
      console.log("vertex already exists in the graph")
    }
  }

  // this function accepts an array of Node instances and adds them to the nodes property on the graph
  addVertices(vertexArray) {
    vertexArray.forEach(vertex => tihs.nodes.add(vertex));
  }
  

  // this function accepts two vertices and updates their adjacent values to include the other vertex
  addEdge(v1, v2) {
    if (this.nodes.has(v1) && this.nodes.has(v2)) {
      v1.adjacent.add(v2);
      v2.adjacent.add(v1);
    } else {
      console.log("one or two vertices do not exist in the graph")
    }
  }

  // this function accepts two vertices and updates their adjacent values to remove the other vertex
  removeEdge(v1, v2) {
    if (this.nodes.has(v1) && this.nodes.has(v2)) {
      v1.adjacent.delete(v2);
      v2.adjacent.delete(v1);
    } else {
      console.log("one or two vertices does not exist in the graph")
    }
  }

  // this function accepts a vertex and removes it from the nodes property, it also updates any adjacency lists that include that vertex
  removeVertex(vertex) {
    if(this.nodes.has(vertex)) {
      //remove vertex from nodes set
      this.nodes.delete(vertex);

      //update adjacency list
      this.nodes.forEach(v => {
        v.adjacent.delete(vertex);
      });
    } else {
      console.log("vertex does not exist in the graph")
    }
  }

  // this function returns an array of Node values using DFS
  depthFirstSearch(start) {
    const visited = new Set();
    const result = [];

    const dfs = (vertex) => {
      if (!visited.has(vertex)) {
        visited.add(vertex);
        result.push(vertex.value);

        vertex.adjacent.forEach(neighbor => {
          dfs(neighbor);
        });
      }
    }
    dfs(start);
    return result;
  }


  // this function returns an array of Node values using BFS
  breadthFirstSearch(start) {
    const visited = new Set();
    const result = [];
    const queue = [];

    //start BFS from specified node
    queue.push(start);
    visited.add(start);

    while (queue.length > 0) {
      const current = queue.shift(); // dequeue the front node
      result.push(current.value);

      //enqueue adjacent nodes that haven't been visited
      current.adjacent.forEach(neighbor => {
        if(!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      });
    }
    return result;
  }
}

module.exports = {Graph, Node}