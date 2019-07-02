class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    else console.log('Vertex already in graph!');
  }

  addEdge(vertex1, vertex2) {
    const check1 = this._check(vertex1);
    const check2 = this._check(vertex2);
    if (check1 && check2) {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
    } else {
      console.log('Provided vertices do not exists in graph!');
    }
  }

  _removeEdge(vertex1, vertex2) {
    return this.adjacencyList[vertex1].filter(v => v !== vertex2);
  }

  removeEdge(vertex1, vertex2) {
    const check1 = this._check(vertex1);
    const check2 = this._check(vertex2);
    if (check1 && check2) {
      this.adjacencyList[vertex1] = this._removeEdge(vertex1, vertex2);
      this.adjacencyList[vertex2] = this._removeEdge(vertex2, vertex1);
    } else {
      console.log('Provided vertices do not exists in graph!');
    }
  }

  _check(vertex) {
    return this.adjacencyList.hasOwnProperty(vertex);
  }

  //check if there is relation between two vertices; also check edges in between; return true if yes, false otherwise
  checkIfRelated(v1, v2) {
    let edgeArr = [...this.adjacencyList[v1]];
    let checked = [];
    while (edgeArr.length) {
      if (edgeArr.includes(v2)) return true;
      const currVertex = edgeArr.shift();
      if (!checked.includes(currVertex)) {
        edgeArr.push(...this.adjacencyList[currVertex]);
      }
      checked.push(currVertex);
    }
    return false;
  }

  removeVertex(vertex) {
    this.adjacencyList[vertex].forEach(v => this.removeEdge(v, vertex));
    delete this.adjacencyList[vertex];
  }

  //iterative solution to depth first
  DFSIterative(start) {
    const result = [start];
    const visited = { [start]: true };
    const stack = [...this.adjacencyList[start]];
    while (stack.length) {
      const currItem = stack[0];
      if (!visited[currItem]) {
        result.push(currItem);
        visited[currItem] = true;
        stack.push(...this.adjacencyList[currItem]);
      }
      stack.shift();
    }
    return result;
  }

  //recursive solution to depth first
  DFSRecursive(start) {
    const result = [];
    const visited = {};
    // HELPER FUNCTION WRITTEN WITH CALL AND BIND METHODS
    /*
    function _DFS(vertex) {
      if (!vertex) return;
      result.push(vertex);
      visited[vertex] = true;
      this.adjacencyList[vertex].forEach(
        function(v) {
          if (!visited[v]) {
            _DFS.call(this, v);
          }
        }.bind(this)
      );
    }
    _DFS.call(this, start);
    */

    //SAME HELPER FUNCTION WRITTEN WITH ES6 FUNCTIONS TO INHERIT SCOPE

    const _DFS = vertex => {
      if (!vertex) return;
      result.push(vertex);
      visited[vertex] = true;
      this.adjacencyList[vertex].forEach(v => {
        if (!visited[v]) _DFS(v);
      });
    };
    _DFS(start);

    return result;
  }
}

const g = new Graph();
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');
g.addVertex('Z');
g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');
g.addEdge('D', 'E');
g.addEdge('D', 'F');
g.addEdge('E', 'F');
console.log(g.DFSRecursive('A'));
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log(g.DFSIterative('A'));
