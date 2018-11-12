//Helper functions

const randomIx = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

const findMode = (arr) => {
    const occurrences = {};
    let currLabel;
    for (let i = 0; i < arr.length; i++) {
        currLabel = arr[i];
        //need this check for leaves that evaluate their label as 0 because they have no data.
        if (currLabel !== 0) {
            if(occurrences[currLabel] === undefined) {
                occurrences[currLabel] = 1;
            }
            else {
                occurrences[currLabel]++;
            }
        }
    }
    let modeKey = -1;
    let maxOccurrences = -1;
    Object.keys(occurrences).forEach(key => {
        if (occurrences[key] > maxOccurrences) {
            modeKey = key;
            maxOccurrences = occurrences[key];
        }
    })
    return Number(modeKey);
}

//DecisionTreeNode
class DTN {
    constructor(data, labels, featureIx) {
        this.data = data;
        this.labels = labels;
        this.featureIx = featureIx;
        //assumes all features scale from 0 to 1
        this.splitThreshold = Math.random();
    }
}

DTN.prototype.splitData = function(featureIx) {
    let leftData = [];
    let rightData = [];
    let leftLabels = [];
    let rightLabels = [];
    //if the data point i has a the feature value below the split threshold, push the entire data point to leftData, else push to rightData
    for (let i = 0; i < this.data.length; i++) {
        if (this.data[i][featureIx] <= this.splitThreshold) {
            leftData.push(this.data[i]);
            leftLabels.push(this.labels[i]);
        }
        if (this.data[i][featureIx] > this.splitThreshold) {
            rightData.push(this.data[i]);
            rightLabels.push(this.labels[i]);
        }
    }
    return { leftData, leftLabels, rightData, rightLabels };
}

DTN.prototype.generateChildren = function(data) {
    let leftChild = new DTN([], [], 0);
    let rightChild = new DTN([], [], 0);
    if (this.data[0] !== undefined && this.data[0].length !== 0 ) {
        //chooses a random featureIx from the y-axis of data (features)
        const featureIx = randomIx(0, data[0].length);
        const { leftData, leftLabels, rightData, rightLabels } = this.splitData(featureIx);
        leftChild = new DTN(leftData, leftLabels, featureIx);
        rightChild = new DTN(rightData, rightLabels, featureIx);
    }
    return { leftChild, rightChild };
}

//Random Decision Tree

class RandomDecisionTree {
    //options should be an object with the appropriate fields on it
    constructor(options) {
        this.options = options;
        this.nodes = [];
    }
}

RandomDecisionTree.prototype.train = function(data, labels, options) {
    const { maxDepth } = options;
    const numNodes = Math.pow(2, maxDepth + 1) - 1;
    //Binary tree of nodes represented as an array
    const nodes = new Array(numNodes);
    let featureIx = randomIx(0, data[0].length);
    //The head of the tree is a DTN with data and a random feature
    nodes[0] = new DTN(data, labels, featureIx);
    //while the right most node is undefined, populate the graph 2 children at a time.
    for (let i = 1; nodes[nodes.length-1] === undefined; i+=2) {
        const parentIx = Math.floor((i-1)/2);
        const parentNode = nodes[parentIx];
        const { leftChild, rightChild } = parentNode.generateChildren(data);
        nodes[i] = leftChild;
        nodes[i+1] = rightChild;
    }
    this.nodes = nodes;
}

RandomDecisionTree.prototype.predictOne = function(dataPoint) {
    let pointer = 0;
    let pointerNode = this.nodes[pointer];
    let parent;
    //leaf indices are Math.ceil(nodes.length/2) to nodes.length-1
    const minLeafIx = Math.ceil(this.nodes.length/2)-1;
    const maxLeafIx = this.nodes.length-1;
    while (pointer < minLeafIx) {
        let featureIx = pointerNode.featureIx;
        //if pointerNode is an empty node, go to the parent and find the Mode of its Labels
        if (pointerNode.data.length === 0) {
            let parentIx = Math.floor((pointer-1)/2)
            parent = this.nodes[parentIx];
            const response = findMode(parent.labels);
            return response;
        }
        if (dataPoint[featureIx] <= pointerNode.splitThreshold) {
            pointer = 2 * pointer + 1;
        }
        else {
            pointer = 2 * pointer + 2;
        }
        pointerNode = this.nodes[pointer];
    }
    pointerNode = this.nodes[pointer];
    const prediction = findMode(pointerNode.labels);
    return prediction;
}


////////// FOREST STUFF ////////

const getRandomSample = (data, labels, numSamples) => {
    const numbersGenerated = {};
    const randomSamples = [];
    const associatedLabels = [];
    //holder variable
    let randomNum;
    while(randomSamples.length < numSamples) {
        randomNum = randomIx(0, data.length);
        if (numbersGenerated[randomNum] !== true) {
            numbersGenerated[randomNum] = true;
            randomSamples.push(data[randomNum]);
            associatedLabels.push(labels[randomNum]);
        }
    }
    return { randomSamples, associatedLabels};
}

//Converts all attribute scores in data to a value between 0 and 1, relative to the max of that attribute
const normalizeData = (data, sampleData) => {
    for (let i = 0; i < data[0].length; i++) {
        const attributeVals = [];
        for (let j = 0; j < data.length; j++) {
            attributeVals.push(data[j][i]);
        }
        const attributeMax = attributeVals.reduce(function(a, b) {
            return Math.max(a, b);
        });
        for (let k = 0; k < data.length; k++) {
            data[k][i] = data[k][i]/attributeMax;
        }
        sampleData[i] = sampleData[i]/attributeMax;
    }
}

class RandomForest {
    constructor(options) {
        this.options = options;
        this.trees = [];
    }
}

RandomForest.prototype.train = function(data, labels) {
    const { numTrees, numSamples } = this.options;
    this.trees = new Array(numTrees);
    for(let i = 0; i < numTrees; i++) {
        //train each tree on a random sample of data
        const { randomSamples, associatedLabels } = getRandomSample(data, labels, numSamples);
        this.trees[i] = new RandomDecisionTree(this.options);
        this.trees[i].train(randomSamples, associatedLabels, this.options);
    }
    console.log("# of Trees in Forest: ", this.trees.length);
    console.log('Size of Random Sample: ', numSamples);
}

RandomForest.prototype.predictOne = function(dataPoint) {
    const predictions = [];
    for(let i = 0; i < this.trees.length; i++) {
        console.log(this.trees[i].predictOne(dataPoint));
        predictions.push(this.trees[i].predictOne(dataPoint));
    }
    return findMode(predictions);

}

//make sure numSamples is enough to fill out all nodes in a tree with maxDepth

const testOptions = { maxDepth: 10, numTrees: 100, numSamples: 50};
const data = require('./Wine-Data');
const labels = require('./Wine-Labels');
const testData = require('./Wine-Samples-Data');
const testLabels = require('./Wine-Samples-Labels');

const testForest = new RandomForest(testOptions);
normalizeData(data, testData[5]);
console.log(testLabels[5]);
testForest.train(data, labels);
console.log('PREDICTION: ',testForest.predictOne(testData[5]));