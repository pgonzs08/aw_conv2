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
        item = fetch('/api/users/'+uname);
    }
    catch (MongooseError){
        res.redirect('/');
    }
    res.render(path.join(__dirname, '../views/perfil_usuario.ejs'), item);
};

exports.getUserData = async (req, res) =>{
    const uname = req.params.id;
    var item;
    await models.User.findOne({username: uname}).exec().then((u) =>item.user=u);
    await models.Subscriber.findOne({user: {username: uname}}).exec().then((s) =>item.subscriptor=s);
    await models.Publisher.findOne({user: {username: uname}}).exec().then((p) =>item.publisher=p);

    res.send(item);
}

exports.getAllUsers = async (req, res) =>{
    var users;
    await models.User.find({}, );
}

//Login y register
exports.checkCredentials = async (req, res) =>{
    const { username, password } = req.body;
    var user;
    var utype;
    await models.User.findOne({ username: username }).exec().then((ret) => user = ret);
    await models.Subscriber.findOne({user: {username: username}}).exec().then((ret) => {if(ret) utype=0});
    await models.Publisher.findOne({user: {username: username}}).exec().then((ret) => {if(ret) utype=0});
    if(!user) res.redirect('/users/login');
    else if (password == user.password) {
        req.session.username = user.username;

        res.redirect('/users/profile');
    } else {
        res.redirect('/users/login');
    }
}

exports.createUser = async (req, res) =>{
    //Prerequisito: 
    // frontend ha comprobado que el usuario no está escogido
    // y que la contraseña y su confirmación son iguales
    
    var data = req.body;
    const newUser = new models.User({
        username: data.username, 
        password: data.password, 
        name: data.name,
        surname: data.surname
    })

    try {
        if (data.utype == 0){
            const newSubscriber = new models.Subscriber({
                user: {
                    username: data.username
                }
            });
            await newUser.save();
            await newSubscriber.save();
        }
        else if (data.utype == 1){
            const newPublisher = new models.Subscriber({
                user: {
                    username: data.username
                }
            });
            await newUser.save();
            await newPublisher.save();
        }
            
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
