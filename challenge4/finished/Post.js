// Require mongoose
var mongoose = require('mongoose');

// Configure conenction URL (only needs to happen once per app)
mongoose.connect('mongodb://testuser:testpass9@ds039231.mongolab.com:39231/reekahdoh-mongo');

// Create a database schema for our Post object
var postSchema = mongoose.Schema({
    title:String,
    content:String
});

// Create a model object constructor that will have ODM functionality like .save()...
var Post = mongoose.model('Post', postSchema);

// Expose out model as the module interface
module.exports = Post;