const restaurantController = require("../controller/restaurant")
const restaurantMiddleware = require("../middleware/restaurant")

module.exports = (app) => {
    app.post("/api/restaurant/add", restaurantMiddleware.validationAddRestaurant, restaurantController.addRestaurant);
    app.get("/api/restaurant", restaurantController.getRestaurant);
}