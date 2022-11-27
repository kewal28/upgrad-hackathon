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
        res.status(500).send("Some error occurred while creating the Restaurant");
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
        res.status(500).send("Some error occurred while creating the Restaurant");
    }
}

exports.getRestaurantCategories = async function(req, res) {
    try{
        const categories = await restaurantModle.distinct("category");
        res.status(200).send(categories);
    } catch(error) {
        res.status(500).send("Some error occurred while creating the Restaurant");
    }
}

exports.getRestaurantByCategory = async function(req, res) {
    try{
        const categoryName = req.params.categoryName ;
        const restaurantDetails = await restaurantModle.find({
            category: categoryName
        });
        res.status(200).send(restaurantDetails);
    } catch(error) {
        res.status(500).send("Some error occurred while creating the Restaurant");
    }
}