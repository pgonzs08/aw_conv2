const mongoose = require("mongoose");

const uri = "mongodb+srv://root:99HuDLfG09OLth23@clustereventcity.9tjm5i9.mongodb.net/eventCity?retryWrites=true&w=majority&appName=ClusterEventCity";
//const uri = "mongodb+srv://eventCity:XkzsIkgjMa1ytZrG@eventcity.hikfngv.mongodb.net/?retryWrites=true&w=majority&appName=EventCity";
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
        { type: {username: {type: String, required: true}}, 
        required: true },

    events: 
        { type: Array({name: {type: String, required:true}, date: {type: Date, required: true}}), 
        required: true }
});

// Define el esquema para el modelo Subscriptor
const SubscriberSchema = new mongoose.Schema({
    user: 
        { type: {username: {type: String, required: true}}, 
        required: true },
    events: 
        { type: Array({user: 
                { type: {username: {type: String, required: true}}, 
                required: true }, 
            name: {type: String, required:true}, date: {type: Date, required: true}}), 
            required: true }

});

// Define el esquema para el modelo Event
const EventSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: false, default: "Un evento indescriptible" },
    day: { type: Date, required: true },
    price: { type: Number, default: 0 },
    location: { type: String, required: true },
    publisher: { type: {username: {type: String, required: true}}, required: true }
});

// Crea los modelos basados en los esquemas
exports.User = mongoose.model('user', UserSchema);
exports.Subscriber = mongoose.model('subscriber', SubscriptorSchema);
exports.Publisher = mongoose.model("publisher", PublisherSchema);
exports.Eventos = mongoose.model("event", EventSchema);

exports.Publisher.find().then((results) => {
    console.log("\n----------------------\nPublicadores: "+results);
});

exports.User.find().then((results) => {
    console.log("\n----------------------\nUsuarios: "+results);
});

exports.Subscriptor.find().then((results) => {
    console.log("\n----------------------\nSubscriptores: "+results);
});

exports.Eventos.find().then((results) => {
    console.log("\n----------------------\nEventos: "+results);
});