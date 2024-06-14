const path = require('path');
const models = require("../models/modelos");

//Devolver vistas
exports.getLogin = (req, res) =>{
    if (req.session.username) res.redirect("/"+req.session.username);
    res.render(path.join(__dirname, "../views/login.ejs"), {session: req.session});
}

exports.getRegister = (req, res) =>{
    if (req.session.username) res.redirect("/"+req.session.username);
    res.render(path.join(__dirname, "../views/register.ejs"), {session: req.session});
}

exports.getUserProfilePage = async (req, res) => {
    var item = {};
    uname = req.params.username;
    item.session = req.session;
    try{
        await models.User.findOne({username: uname}).exec().then((user) => {
            if (!user) res.redirect('/');
            item.usuario = user;
        });
        await models.Subscriber.findOne({user: {username: uname}}).exec().then((sub) =>{
            item.subscriptor = sub;
            item.isSubscriptor = (sub)? true: false;
        });
        await models.Publisher.findOne({user: {username: uname}}).exec().then((pub) =>{
            item.publicador = pub;
            item.isPublicador = (pub)? true: false;
        });
    }
    catch (MongooseError){
        res.redirect('/');
    }
    res.render(path.join(__dirname, '../views/perfil_usuario.ejs'), item);
};

//Login y register
exports.checkCredentials = async (req, res) =>{
    const { username, password } = req.body;
    var user;
    await models.User.findOne({ username: username }).exec().then((ret) => user = ret);
    if(!user) res.redirect('/users/login');
    else if (password == user.password) {
        req.session.username = user.username;
        res.redirect('/users/profile');
    } else {
        res.redirect('/users/login');
    }
}

exports.createUser = async (req, res) =>{
    var data = req.body;
    var user;
    await models.User.findOne({username: data.username}).exec().then((ret) => user = ret);
    if (user) {
        req.body.msg = "El nombre de usuario ya está escogido";
        res.redirect('/');
    }

    const newUser = new models.User({
        username: data.username, 
        password: data.password, 
        name: data.name,
        surname: data.surname
    })
    const newSubscriber = new models.Subscriber({
        user: {
            username: data.username
        }
    });

    try {
        await newUser.save();
        await newSubscriber.save();
        res.redirect('/users/login');
    } catch (error) {
        console.error(error);
        res.redirect('/users/register');
    }
}


// Actualizar perfil y borrar usuario (sin usar)
exports.updateUserProfilePage = (req, res) =>{
    console.log(req.body);
}
