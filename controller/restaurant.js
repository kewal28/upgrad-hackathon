const restaurantModle = require('../models/restaurant');
exports.addRestaurant = async function(req, res) {
    try{
        const restaurantReq = {
            name: req.body.name,
            description: req.body.description,
            category: req.body.category,
            imageURL: req.body.imageURL,
            location: req.body.location,
            phone: req.body.phone,
            rating: 5
        }
        const restaurantDetails = await restaurantModle.create(restaurantReq);
        res.status(200).send(restaurantDetails);
    } catch(error) {
        res.status(500).send({message:"Some error occurred while creating the Restaurant"});
    }
}

exports.getRestaurant = async function(req, res) {
    try{
        const restaurantDetails = await restaurantModle.find();
        const response = {
            restaurants: restaurantDetails,
            message: "Restaurants fetched successfully."
        }
        res.status(200).send(response);
    } catch(error) {
        res.status(500).send({message:"Some error occurred while creating the Restaurant"});
    }
}

exports.getRestaurantCategories = async function(req, res) {
    try{
        const categories = await restaurantModle.distinct("category");
        res.status(200).send(categories);
    } catch(error) {
        res.status(500).send({message:"Some error occurred while creating the Restaurant"});
    }
}

exports.getRestaurantByCategory = async function(req, res) {
    try{
        const categoryName = req.params.categoryName;
        const restaurantDetails = await restaurantModle.find({
            category: categoryName
        });
        res.status(200).send(restaurantDetails);
    } catch(error) {
        res.status(500).send({message:"Some error occurred while creating the Restaurant"});
    }
}

exports.getRestaurantById = async function(req, res) {
    try{
        const id = req.params.id;
        const restaurantDetails = await restaurantModle.findOne({
            _id: id
        });
        if(restaurantDetails) {
            res.status(200).send(restaurantDetails);
        } else {
            res.status(404).send({message: "No Restaurant find with given ID"});
        }
    } catch(error) {
        res.status(500).send({message:"Some error occurred while creating the Restaurant"});
    }
}

exports.getRestaurantByRating = async function(req, res) {
    try{
        const ratingValue = req.params.ratingValue;
        const restaurantDetails = await restaurantModle.find({
            rating: ratingValue
        });
        res.status(200).send(restaurantDetails);
    } catch(error) {
        res.status(500).send({message:"Some error occurred while creating the Restaurant"});
    }
}