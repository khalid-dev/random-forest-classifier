# Random Forest Classifier JS
* An implementation of a Random Forest Classifier from scratch in JS
* Stackathon Project; Stackathon is a 4 day hackathon at FullStack Academy of Code
* Uses the White Wine dataset and parses its CSV using Papa Parse
## Approach
* Read textbooks and articles to get an understanding of supervised machine learning algorithms and random forest classifiers
## Current Problems
* Representing each individual tree in an array is memory prohibitive when ensuring data is split enough times to reach meaningful, distinct leaf nodes.
## TODO: Post December 7th
* Restructure data structure for individual trees from arrays to simple nodes with left and right pointers
* Remove storage of training data in nodes
  * Instead of relying on computing the gini score of data at each node, determine leaf nodes by number of samples at a node
* Implement a frontend UI through which a user can see how changing different settings while training leads to different results
  * This is the intended purpose of boilermaker in this project
