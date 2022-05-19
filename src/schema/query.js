const { GraphQLObjectType } = require("graphql");
const { users, user } = require('./users/fields/query');


const query = new GraphQLObjectType({
    name: 'query',

    fields: () => ({
        users,
        user
    })
})

module.exports = query;
