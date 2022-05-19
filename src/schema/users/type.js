const { GraphQLObjectType, GraphQLString} = require('graphql');


const UserType = new GraphQLObjectType({
    name: 'user',
    description: 'type user',

    fields: () => ({
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        email: {type: GraphQLString},
        createdAt: {type: GraphQLString}
    })
})

module.exports = {
    UserType
}

