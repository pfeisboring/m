const mongoose = require("mongoose");
// const Schema = mongoose.Schema
// destructuring
const { Schema, model } = mongoose;
const personSchema = new Schema({
    name: {
        type: String,
        required : true,
    },
    age: Number,
   favoriteFoods =[],
});

module.exports = Person = model("Person", personSchema);