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