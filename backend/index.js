var express = require("express");
var mongoose = require("mongoose");

var db = require("./models");
mongoose.connect("mongodb://localhost:27017/wardrobe", { useNewUrlParser: true });
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
var PORT = 3000;

//below code for cross origin support
var cors = require('cors');
const { request } = require("express");
app.use(cors());

app.get("/list", function(req, res) {

    var query = db.Product.find({});
    query.select('_id image status');
    query.exec(function(err, products) {
        if (err) return err;
        res.json(products);
    })

});
app.post("/load", function(req, res) {
    console.log("recevied")
    db.Product.create(req.body)
        .then(function(dbProduct) {
            res.json(dbProduct);
        })
        .catch(function(err) {
            res.json(err);
        });
});

app.get("/product/:cat", function(req, res) {


    var query = db.Product.find({ _id: req.params.cat });

    // selecting the 'name' and 'age' fields
    query.select('_id name date condition  rentalRate retailRate type subtype material brand fit occation size color pattern productdetail damage care desc image image1 image2');



    // execute the query at a later time
    query.exec(function(err, products) {
        if (err) return err;
        res.json(products);
    })
});

app.put("/update/:id", async(request, response) => {
    try {
        var person = await db.Product.findById({ "_id": request.params.id }).exec();
        person.set(request.body);
        var result = await person.save();
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
});
app.delete("/remove/:id", async(request, response) => {
    try {

        var result = await db.Product.deleteOne({ _id: request.params.id }).exec();
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
});
app.listen(PORT, function() {
    console.log("Listening on port " + PORT + ".");
});