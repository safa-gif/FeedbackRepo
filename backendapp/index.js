const express = require('express')
const mongoose = require("mongoose");
const feedbackRoutes = require('./routes/FeedbackRouter');
const app = express()
const port = 4000

//application/json
app.use(express.json()); 


app.use((req, res, next) => {
    //res.setHeader('Access-Control-Allow-Origin', 'https://cdpn.io')
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})

app.use('/', feedbackRoutes);


app.use((error, req, res, next) => {
    console.log("-----", error);
    const status = error.statusCode || 500;
    const message = error.message;
    const data = error.data;
    res.status(status).json({ message: message, data: data }); //data c'est pour la validation
});

mongoose.connect('mongodb://127.0.0.1:27017/feedback', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(result => app.listen(port, () => {
    console.log('Server Started');
})).catch(err => {
    console.log(err);
})




