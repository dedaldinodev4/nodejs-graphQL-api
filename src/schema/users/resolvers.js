
const { UserModel } = require("../../models"); 

const getAll = async () => {
    return await UserModel.find();
}

const getById = async ( parentValue, { id }) => {
    return await UserModel.findById(id );
}

const create = async (parentValue, { name, email }) => {
    return await UserModel.create({ name, email });
}

const update = async (parentValue, {id, name, email}) => {
    return await UserModel.findByIdAndUpdate(id , { name, email},{ new: true, useFineAndModify: false} )
}
const remove = async (parentValue, { id }) => {
    return await UserModel.findByIdAndDelete(id);
}

module.exports = {
    getAll, getById,
    create, update, remove
}