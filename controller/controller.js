const Key = require("../model/key");
const asyncWrapper = require("../middleware/async")
 
const create = asyncWrapper(async (req, res) => {
    const key = await Key.create(req.body)
    await key.save()
    res.status(201).json({key})
})



module.exports = {create}