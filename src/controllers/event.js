const path = require('path');
const models = require("../models/modelos");

exports.getEvent = async (req, res) =>{
    var event;
    await models.Eventos.findById(req.params.eventId).exec().then((evt) => event = evt);
    console.log(event);
    if(!event) res.redirect('/');
    res.render(path.join(__dirname, '../views/info_evento.ejs'), {event: event, session: req.session});
}

exports.subscribeToEvent = async (req, res) =>{
    var event = req.body;
    const uname = req.session.username;
    var subscriber;
    console.log(event);
    await models.Subscriber.findOne({user: {username: uname}}).exec().then((sub) => subscriber = sub);
    if(!subscriber) res.redirect(`/`);
    else{
        console.log(subscriber);
        subscriber.events.push(event);
        await subscriber.save();
        res.redirect(`/users/${uname}`);
    }
}

exports.getEventsDate = async (req, res) =>{
    var event_list;
    await models.Eventos.find().exec().then((evts) => event_list = evts);
    res.render(path.join(__dirname, '../views/lista_eventos.ejs'), {events: event_list, session: req.session});
}

exports.getCreateEventPage = (req, res) => {
    res.render(path.join(__dirname, '../views/crear_evento.ejs'), {session: req.session});
};

exports.getEventPage = (req, res) =>{
    res.render(path.join(__dirname, '../views/evento.ejs'), {session: req.session});
}

exports.createEvent = async (req, res) => {
    const session = req.session;
    var publisher;
    await models.Publisher.findOne({user: { username: session.username} }).exec().then((pub) => publisher = pub);
    if(!publisher) res.redirect('/');
    else{
        console.log("publisher verified");
        try{
            const { nombre, descripcion, precio, fecha, lugar } = req.body;
            const newEvent = new models.Eventos({
                name: nombre,
                description: descripcion,
                day: fecha,
                price: precio,
                location: lugar,
                publisher: {
                    username: session.username,
                }
            });
            await newEvent.save();
            publisher.events.push({name: newEvent.name, date: newEvent.date});
            await publisher.save();
            res.redirect('/');
        } catch (err) {
            // Maneja cualquier error que ocurra durante el proceso
            console.error(err);
            res.status(500).json({ error: 'Error al crear el evento' });
        }
    }
};

exports.updateEvent = async (req, res) => {
    const session = req.session;
    try{
        const evento = req.params;
        const { nombre, descripcion, fecha, precio, lugar } = req.body;
        var modifiedEvent;
        models.Eventos.findOne(evento).exec().then((evento) => modifiedEvent = evento);

        if(session.username == modifiedEvent.publisher.username) await modifiedEvent.update({nombre: nombre, descripcion: descripcion, "day": fecha, "precio": precio, "location": lugar});
        res.redirect('/');
    } catch (err) {
        // Maneja cualquier error que ocurra durante el proceso
        console.error(err);
        res.status(500).json({ error: 'Error al crear el evento' });
    }
}