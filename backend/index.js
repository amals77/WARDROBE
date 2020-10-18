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
app.use(cors());

app.get("/list", function(req, res) {
    db.Product.find({})
        .then(function(dbProducts) {
            res.json(dbProducts);
        })
        .catch(function(err) {
            res.json(err);
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
    query.select('_id name rentalRate retailRate type subtype productdetail damage desc image image1 image2');



    // execute the query at a later time
    query.exec(function(err, products) {
        if (err) return err;
        res.json(products);
    })
});

app.patch("/product/:cat", (req, res, next) => {
    const cat = req.params.cat;
    const updateOps = {}
    for (const ops of req.body) {
        updateOps[ops.propname] = ops.value;
    }
    db.Product.update({ _id: cat }, { $set: updateOps }).exec()
        .then(result => {
            console.log(200).json(result);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({})
        });
})
app.delete("/product/:id", async(request, response) => {
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