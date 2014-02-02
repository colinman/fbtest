var requestsent = function(req, res) {
    var mongo = require('mongodb');
    var monk = require('monk');
    var db = monk('localhost:27017/fbtest');
    var collection = db.get('user_images');

    if(req.method == 'POST') {
	var images = JSON.parse(req.query["img_urls"]);
	collection.update({user_id:parseInt(req.query["user_id"])}, {$set:{img_urls:images}}, {upsert:true}, function() {console.log("Finished adding images for " + req.query["user_id"]);});
    }
}

var getrequest = function(req, res) {
    var mongo = require('mongodb');
    var monk = require('monk');
    var db = monk('localhost:27017/fbtest');
    var collection = db.get('user_images');

    collection.find({user_id:parseInt(req.query["user_id"])}, {}, function(e, docs) {
	if(docs[0] != undefined) {
	    res.write(JSON.stringify(docs[0]["img_urls"]));
	    console.log("data sent for " + req.query["user_id"]);
	}
	else {
	    res.write("userdne");
	    console.log("user does not exist: " + req.query["user_id"]);
	}
	res.end();
    });
}

module.exports.requestsent = requestsent;
module.exports.getrequest = getrequest;