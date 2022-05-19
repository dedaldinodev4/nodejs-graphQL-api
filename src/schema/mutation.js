const { GraphQLObjectType } =  require("graphql");
const { userCreate, userUpdate, userRemove }  = require('./users/fields/mutation');


const mutation = new GraphQLObjectType({
    name: 'mutations',

    fields: () => ({
        userCreate,
        userUpdate,
        userRemove
    })
})

module.exports =  mutation;
