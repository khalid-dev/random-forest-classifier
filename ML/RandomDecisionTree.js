// const gini = require('gini');

//Helper functions

const total = 3917;
const probabilities = {
    3: 14/total,
    4: 127/total,
    5: 1148/total,
    6: 1772/total,
    7: 720/total,
    8: 134/total,
    9: 2/total
}

//likelihood of something being classified incorrectly
//Sum together the probability of choosing a label * the probability it is incorrect for the subset
const giniImpurity = (labels) => {
    const labelOccurrences = {};
    labels.forEach(label => {
        if (labelOccurrences[label] === undefined)
            labelOccurrences[label] = 1;
        else
            labelOccurrences[label] ++;
    })
    const total = labels.length;
    let gini = 0;
    Object.keys(labelOccurrences).forEach(labelRecord => {
        const probChooseLabel = Number(probabilities[labelRecord]);
        const probIncorrectChoice = 1-(Number(labelOccurrences[labelRecord])/total);
        gini = probChooseLabel*probIncorrectChoice;
    })
    return gini;
}

const equalizer = {
    3: 1/7*1/14,
    4: 1/7*1/127,
    5: 1/7*1/1148,
    6: 1/7*1/1772,
    7: 1/7*1/720,
    8: 1/7*1/134,
    9: 1/7*1/2
}

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
    // console.log(occurrences);
    // Object.keys(occurrences).forEach(key => {
    //     occurrences[key] = occurrences[key] * equalizer[key];
    // })
    // console.log('OCCURENCES AFTER EQUALIZER: ', occurrences)
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
        this.splitThreshold = .5;
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
    //chooses a random featureIx from the y-axis of data (features)
    let leftChild = new DTN([], [], 0);
    let rightChild = new DTN([], [], 0);
    if (this.data[0] !== undefined && this.data[0].length !== 0 ) {
        // const test = this.labels;
        // console.log(typeof test);
        // console.log(this.labels);
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

// RandomDecisionTree.prototype.trainWithGini = function(data, labels, options) {
//     const { maxDepth } = options;
//     const numNodes = Math.pow(2, maxDepth + 1) - 1;
//     //Binary tree of nodes represented as an array
//     const nodes = new Array(numNodes);
//     //The head of the tree is a DTN with data and a random feature
//     nodes[0] = new DTN(data, labels, 0);
//     //while the right most node is undefined, populate the graph 2 children at a time.
//     for (let i = 1; nodes[nodes.length-1] === undefined; i+=2) {
//         let minGiniImpurity = 2;
//         let leftGini;
//         let rightGini;
//         let avgGini;
//         for (let j = 0; j < data[0].length; j++) {
//             const parentIx = Math.floor((i-1)/2);
//             const parentNode = nodes[parentIx];
//             const featureIx = j;
//             for (let k = 0; k < 1; k += .2) {
//                 const splitThreshold = k;
//                 const { leftChild, rightChild } = parentNode.generateChildren(featureIx, splitThreshold);
//                 if (leftChild.labels.length === 0) {
//                     leftGini = 0;
//                 }
//                 else {
//                     leftGini = giniImpurity(leftChild.labels);
//                 }
//                 if (rightChild.labels.length === 0) {
//                     rightGini = 0;
//                 }
//                 else {
//                     rightGini = giniImpurity(rightChild.labels);
//                 }
//                 avgGini = (leftGini + rightGini) / 2;
//                 if (avgGini < minGiniImpurity) {
//                     nodes[i] = leftChild;
//                     nodes[i+1] = rightChild;
//                     parentNode.featureIx = featureIx;
//                     parentNode.splitThreshold = splitThreshold;
//                     minGiniImpurity = avgGini;
//                 }
//             }
//         }
//     }
//     this.nodes = nodes;
// }

RandomDecisionTree.prototype.predictOne = function(dataPoint) {
    let pointer = 0;
    let pointerNode = this.nodes[pointer];
    let parent;
    //leaf indices are Math.ceil(nodes.length/2) to nodes.length-1
    const minLeafIx = Math.ceil(this.nodes.length/2)-1;
    const maxLeafIx = this.nodes.length-1;
    while (pointer < minLeafIx) {
        let featureIx = pointerNode.featureIx;
        if (pointerNode.data.length === 0) {
            console.log('BREAKING ON NODE: ', pointerNode);
            let parentIx = Math.floor((pointer-1)/2)
            parent = this.nodes[parentIx];
            console.log('PARENT LABELS: ', parent.labels);
            const response = findMode(parent.labels);
            console.log('PARENT LABELS MDOE: ', response)
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
    console.log('POINTER INDEX: ', pointer);
    console.log('POINTER NODE # LABELS: ', pointerNode.labels.length);
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
    // console.log('RANDOM SAMPLES LENGTH: ', randomSamples.length)
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
        // console.log('RANDOM SAMPLE: ', randomSamples);
        this.trees[i] = new RandomDecisionTree(this.options);
        this.trees[i].train(randomSamples, associatedLabels, this.options);
    }
    console.log("# of Trees in Forest: ", this.trees.length);
    console.log('Size of Random Sample: ', numSamples);
}

RandomForest.prototype.predictOne = function(dataPoint) {
    const predictions = [];
    // let sum = 0;
    for(let i = 0; i < this.trees.length; i++) {
        predictions.push(this.trees[i].predictOne(dataPoint));
        // sum += this.trees[i].predictOne(dataPoint);
    }
    // return sum/this.trees.length;
    return findMode(predictions);

}

//make sure numSamples is enough to fill out all nodes in a tree with maxDepth

const testOptions = { maxDepth: 10, numTrees: 100, numSamples: 100};
const data = require('./Wine-Data');
const labels = require('./Wine-Labels');
const testData = require('./Wine-Samples-Data');
// const testSample = [0, 0,0,0,0,0,0,0,0,0,0]
const testLabels = require('./Wine-Samples-Labels');
// const testSample = [6.6,0.16,0.4,1.5,0.044,48,143,0.9912,3.54,0.52,12.4];
// const testLabel = 7;

const testForest = new RandomForest(testOptions);
normalizeData(data, testData[5]);
console.log(testLabels[5]);
let successfulPredictions = 0;
for (let i = 0; i < 100; i++) {
    testForest.train(data, labels);
    console.log(testForest.predictOne(testData[5]));
    if (testLabels[5] === testForest.predictOne(testData[5])) {
        successfulPredictions++;
    }
}

console.log('TARGET VALUE: ', testLabels[5]);
console.log('SUCCESSFUL PREDICTIONS: ', successfulPredictions, '/100');

// const omegaTestData = require('./Data');
// const omegaTestLabels = require('./Labels');
// const testForest = new RandomForest(testOptions);
// normalizeData(omegaTestData, testSample);
// testForest.train(omegaTestData, omegaTestLabels);
// console.log("PREDICTION: ", testForest.predictOne(testSample), "LABEL: ", testLabel);



// const data = [
//     [.27, .36, .57, .45, .43, .23, .89],
//     [.11, .22, .33, .44, .23, .15, .19],
//     [.65, .43, .23, .90, .56, .12, .28],
//     [.32, .13, .87, .09, .12, .93, .02],
//     [.16, .13, .17, .73, .23, .02, .93],
//     [.99, .33, .12, .93, .35, .35, .74]
// ];

// const labels = [1, 1, 2, 2, 3, 3];

// const test = () => {
//     const treeTest = new RandomDecisionTree({ maxDepth: 3});
//     treeTest.trainWithGini(data, labels, { maxDepth: 3});
//     console.log(treeTest.nodes);
//     console.log('PRDEICTION: ', treeTest.predictOne([6.7,0.25,0.23,7.2,0.038,61,220,0.9952,3.14,0.35,9.5]))
// }

// test();