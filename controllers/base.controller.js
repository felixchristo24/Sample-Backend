module.exports.add = async (data, model) => {
    try {
        let reqData = new model(data);
        return await reqData.save()
    }
    catch (err) {
        throw new Error(err)
    }
}

module.exports.getAll = async (model) => {
    try {
        let reqData = await model.find({})
        return reqData;
    }
    catch (err) {
        throw new Error(err)
    }
}



