const mongoose = require("mongoose");
const config = require('../config');

//const uri = process.env.WEBAPP_DB_URI;
const uri = config.DB;
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };
mongoose.connect(uri, clientOptions);

// Define el esquema para el modelo User
const UserSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    name: {type: String, required: false, default: "Anonymous"},
    surname: {type: String, required: false, default: "Anonymous"}
});

// Define el esquema para el modelo Publisher
const PublisherSchema = new mongoose.Schema({
    user: 
        { username: {type: String, required: true}},
    events: 
        { type: [{
            name: {type: String},
            date: {type: Date},
        }]}
});

// Define el esquema para el modelo Subscriptor
const SubscriberSchema = new mongoose.Schema({
    user: 
        { username: {type: String, required: true}},
    events: 
        { type: [{
            name: {type: String},
            date: {type: Date},
            publisher: {
                username: {type: String}}
        }]}
});

// Define el esquema para el modelo Event
const EventSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: false, default: "Un evento indescriptible" },
    day: { type: Date, required: true },
    price: { type: Number, default: 0 },
    location: { type: String, required: true },
    publisher: { 
        username: {type: String, required: true}}
});

// Crea los modelos basados en los esquemas
exports.User = mongoose.model('user', UserSchema);
exports.Subscriber = mongoose.model('subscriber', SubscriberSchema);
exports.Publisher = mongoose.model("publisher", PublisherSchema);
exports.Eventos = mongoose.model("event", EventSchema);