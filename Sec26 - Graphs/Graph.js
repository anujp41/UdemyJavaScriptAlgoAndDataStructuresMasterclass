class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
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
}

const g = new Graph();
g.addVertex('Dallas');
g.addVertex('Tokyo');
g.addVertex('Aspen');
g.addEdge('Tokyo', 'Dallas');
g.addEdge('Tokyo', 'Aspen');
console.log(g);
g.removeVertex('Aspen');
console.log(g);
