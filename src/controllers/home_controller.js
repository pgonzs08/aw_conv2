const path = require('path');

exports.getHomePage = (req, res) => {
    console.log(req.session);
    res.render(path.join(__dirname, '../views/home.ejs'), {session: req.session});
};