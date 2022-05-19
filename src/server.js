const { createServer } = require('graphql-yoga');
const mongoose = require('mongoose');
const schema  = require('./schema');


//* MongoDB Connection *//
mongoose.connect('mongodb://localhost:27017/graphqlapi');

//* Server GraphQL *//
const Server = createServer({
    schema
});

module.exports = { Server }