const { GraphQLString } = require("graphql");

const { UserType } = require("../type");
const { create, update, remove } = require("../resolvers");

const userCreate = {
    type: UserType,
    args: {
        name: {
            name: 'name',
            type: GraphQLString
        },

        email: {
            name: 'email',
            type: GraphQLString
        }
    },
    resolve: create
}

const userUpdate = {
    type: UserType,
    args: {
        name: {
            name: 'name',
            type: GraphQLString
        },

        email: {
            name: 'email',
            type: GraphQLString
        },
        id: {
            type: GraphQLString
        }
    },
    resolve: update
}

const userRemove = {
    type: UserType,
    args: {
        id: { name: 'id', type: GraphQLString }
    },
    resolve: remove
}

module.exports = {
    userCreate, userUpdate,
    userRemove
}