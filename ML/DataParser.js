const randomIx = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

const Papa = require('papaparse');
const fs = require('fs');

const content = fs.readFileSync('wine-data.csv', "utf8");
const overallData = [];

const options = {
	delimiter: "",	// auto-detect
	newline: "",	// auto-detect
	quoteChar: '"',
	escapeChar: '"',
	header: false,
	trimHeaders: false,
	dynamicTyping: false,
	preview: 0,
	encoding: "",
	worker: false,
	comments: false,
	step: function(results, parser) {
        overallData.push(results.data[0]);
    },
	complete: function(results) {
    },
	error: undefined,
	download: false,
	skipEmptyLines: false,
	chunk: undefined,
	fastMode: undefined,
	beforeFirstChunk: undefined,
	withCredentials: undefined,
	transform: undefined
}

Papa.parse(content, options);

//train ratio should be a number between 0 and 1 that represents the amount of data to train vs the amount of data to leave for samples.
const writeData = (trainRatio) => {
    const labels = [];
    overallData.forEach(data => {
        labels.push(data.pop());
    });
    
    let dataStr = "";
    let labelsStr = "";
    let sampleDataStr = "";
    let sampleLabelsStr = "";
    
    //populate sampleStr's
    const numSamples = Math.floor(overallData.length * (1 - trainRatio))
    for (let i = 0; i < numSamples; i++) {
        const sampleIx = randomIx(0, overallData.length);
        //makes sure sampleIx isnt repeated
        if (overallData[sampleIx].length === 0) {
            i--;
            continue;
        }
        else {
            sampleDataStr += `[${overallData[sampleIx]}], \n`;
            sampleLabelsStr += `${labels[sampleIx]}, `;
            overallData[sampleIx] = [];
            labels[sampleIx] = null;
        }
    }
    
    //Populate dataStr
    overallData.forEach(data => {
        //if the piece of data is [], it has been removed and put into sample data, so we don't want to write it here.
        if (data.length !== 0)
            dataStr += `[${data}], \n`;
    })
    //Populate labelsStr, checking for null to skip
    labels.forEach(label => {
        if (label !== null && label !== undefined) {
            console.log(label);
            labelsStr += `${label}, `
        }
    })

    fs.writeFileSync('Wine-Labels.js', "const labels = [" + labelsStr.substr(0, labelsStr.length-2) + "]; \n module.exports = labels;");
    fs.writeFileSync('Wine-Data.js', "const data = [" + dataStr + "]; \n module.exports = data;");
    fs.writeFileSync('Wine-Samples-Labels.js', "const sampleLabels = [" + sampleLabelsStr + "]; \n module.exports = sampleLabels;");
    fs.writeFileSync('Wine-Samples-Data.js', "const sampleData = [" + sampleDataStr + "]; \n module.exports = sampleData");
};

writeData(.8);