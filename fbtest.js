var express = require('express');
var routes = require('./routes');
var http = require('http');
var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/nodetest1');

var requestsent = function(req, res) {
    res.sendfile('index.html');
}

module.exports.requestsent = requestsent;