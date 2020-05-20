const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const ideaSchema = new Schema({
    content: {
        type: String
    }
},{
    timestamps: true
})

module.exports = mongoose.model("idea", ideaSchema, "idea");