const { GraphQLString, GraphQLList } = require("graphql");

const { UserType } = require("../type");
const { getAll, getById } = require("../resolvers");

const users = {
    type: new GraphQLList(UserType),
    resolve: getAll
}


const user = {
    type: UserType,
    args: {
        id: { name: 'id', type: GraphQLString }
    },
    resolve: getById
}

module.exports = {
    users,
    user
}