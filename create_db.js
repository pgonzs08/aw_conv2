const modelos = require("./src/models/modelos");

modelos.User.insertMany([
    { idUser: 1, username: 'user1', password: 'password1'},
    { idUser: 2, username: 'user2', password: 'password2'},
    { idUser: 3, username: 'user3', password: 'password3'},
    { idUser: 4, username: 'user4', password: 'password4'},
    { idUser: 5, username: 'user5', password: 'password5'},
    { idUser: 6, username: 'user6', password: 'password6'},
    { idUser: 7, username: 'user7', password: 'password7'},
    { idUser: 8, username: 'user8', password: 'password8'},
    { idUser: 9, username: 'user9', password: 'password9'},
    { idUser: 10, username: 'user10', password: 'password10'}
]).then(() =>{
    console.log("Usuarios creados exitosamente");
})


modelos.Subscriptor.insertMany([
    {}
]).then(() => {
    console.log("Suscriptores creados exitosamente");
});

