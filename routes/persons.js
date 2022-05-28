const express = require('express'); // inyección de la dependencia de Express
const {route} = require('express/lib/application');
const router= express.Router(); // se genera la instancia de routers
const mongoose= require('../node_modules/mongoose'); // se inyecta la dependencia de mongoose
let Person = require('../models/person'); //se inyecta la dependencia del archivo person dentro de la carpeta modules

router.get('/persons', function(req,res,next){
    Person.find(function (err, persons) {
        if(err) return next(err);
       // res.json(persons); se comenta para obtener otra respuesta en el render
       res.render('personsIndex', {persons})
    });
});  //Esta sera la ruta del archivo /persons con el método GET, En este método primero revisa el error y si este coincide regresa error, si no coincide error pasa al render

router.get('/person', function(req,res){
    res.render('person');
}); //Ruta de /person que muestra el formulario de llenado de info

// ruta para agregar un nuevo documento 
router.post('/addPerson', function(req, res){
        //console.log(req.body) es una petición;
    const myPerson = new Person ({
        nombre: req.body.nombre,
        edad: req.body.edad,
        tipoSangre: req.body.tipoSangre,
        nss: req.body.nss }); // se crean las entidades
        myPerson.save(); //myPerson toma de valores a todos aquellos que tengan .body y los guarda en la base de datos

});


module.exports=router;