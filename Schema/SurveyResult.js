"use strict";

/* jshint node: true */

// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var surveyresult = new Schema({
	id: String,
	num_correct: Number,
	num_total: Number,
	answer_array: Array,
	taken_before: String,
	feedback: String,
	times: Array,
	keystrokes: Array
});

// the schema is useless so far
// we need to create a model using it
var SurveyResult = mongoose.model('SurveyResult', surveyresult);

// make this available 
module.exports = SurveyResult;
