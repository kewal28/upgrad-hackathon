const restaurantController = require("../controller/restaurant")
const restaurantMiddleware = require("../middleware/restaurant")

module.exports = (app) => {
    app.post("/api/restaurant/add", restaurantMiddleware.validationAddRestaurant, restaurantController.addRestaurant);
    app.get("/api/restaurant", restaurantController.getRestaurant);
    app.get("/api/restaurant/categories/:categoryName", restaurantController.getRestaurantByCategory);
    app.get("/api/restaurant/categories", restaurantController.getRestaurantCategories);
    app.get("/api/restaurant/:id", restaurantController.getRestaurantById);
    app.get("/api/restaurant/rating/:ratingValue", restaurantController.getRestaurantByRating);
    app.put("/api/restaurant/:id", restaurantController.updateRestaurantById);
    app.delete("/api/restaurant/:id", restaurantController.deleteRestaurantById);
    app.delete("/api/restaurant/", restaurantController.deleteRestaurants);
}