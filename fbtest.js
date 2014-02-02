var requestsent = function(req, res) {
    res.sendfile('index.html');
}

module.exports.requestsent = requestsent;