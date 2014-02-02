var requestsent = function(req, res) {
    var mongo = require('mongodb');
    var monk = require('monk');
    var db = monk('localhost:27017/fbtest');
    var collection = db.get('user_images');

    if(req.method == 'POST') {
	collection.update({user_id:req.query["user_id"]}, {$set:{img_urls:req.query["img_urls"]}}, {upsert:true}, function() {console.log("Finished adding images for " + req.query["user_id"]);});
    }
}

module.exports.requestsent = requestsent;