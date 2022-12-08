const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');


const resolvers = {
    Query: {
        me: async(parent, args,context) => {
            if(context.user) {
                data = await user.findOne({_id: context.user.id}).select('-__v -password');
                return data;
            }
            throw new AuthenticationError('You need to be logged in!');
        }
    }
}


module.exports = resolvers;