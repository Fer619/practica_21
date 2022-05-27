const mongoose= require('mongoose'); // se inyecta la dependencia de moongose
const express = require('express'); // inyección de la dependencia de Express
const personsRoutes = require('./routes/persons'); //se inyecta la dependencia del router de persons

mongoose.Promise= global.Promise;
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded( {extended:false} ));
app.use(personsRoutes);

app.get('/', (req, res) => {
    res.render('persons')
}) //Se modifica la vista para generar la tabla 

mongoose.connect(
    `mongodb+srv://fbs619:fbs12345@cluster0.ernhq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
{
    useNewUrlParser: true,
    useUnifiedTopology: true

}
);

const db= mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function () {
    console.log("Connected successfully");

});


app.listen(3000);