const Event = require('../../lib/mongooseConfig').models.userModel;

module.exports = {
    
    authenticate: async (data) => {
        const eventData = data;
        const queryResult = await Event.findOne(eventData);
        if (!queryResult) throw new Error('RESOURCE_NOT_FOUND');
        return {
            id: queryResult.id,
            name: queryResult.name
        };
    },

    create: async (data) => {
        const eventData = new Event(data);
        const queryResult = await eventData.save();
        return {
            id: queryResult.id,
            name: queryResult.name
        };
    },

    getAllUserForTodoScheduler: async () => {
        const queryResult = await Event.find({}, { "_id": 1, "name": 1 });
        return queryResult;
    }

}


// getAll: async () => {
//     const queryResult = await Event.find();
//     return queryResult;
// },

// get: async (id) => {
//     const query = { _id: id };
//     const queryResult = await Event.findOne(query);
//     if (!queryResult) throw new Error('User Not Found');
//     return queryResult;
// },

// update: async (data, id) => {
//     const eventData = data;
//     const queryResult = await Event.findByIdAndUpdate(id, eventData, { new: true });
//     if (!queryResult) throw new Error('User Not Found');
//     return queryResult;
// },

// delete: async (id) => {
//     const query = { _id: id };
//     const queryResult = await Event.delete(query);
//     if (!queryResult) throw new Error('User Not Found');
//     return queryResult;
// }