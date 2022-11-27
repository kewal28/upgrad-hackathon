exports.validationAddRestaurant = function(req, res, next) {
    if(!req.body.name) {
        return  res.status(200).send({
            message : "Content cannot be empty"
        })
    }
    if(!req.body.description) {
        return  res.status(200).send({
            message : "Content cannot be empty"
        })
    }
    if(!req.body.category) {
        return  res.status(200).send({
            message : "Content cannot be empty"
        })
    }
    if(!req.body.imageURL) {
        return  res.status(200).send({
            message : "Content cannot be empty"
        })
    }
    if(!req.body.location) {
        return  res.status(200).send({
            message : "Content cannot be empty"
        })
    }
    if(!req.body.phone) {
        return  res.status(200).send({
            message : "Content cannot be empty"
        })
    }
    if(!req.body.rating) {
        return  res.status(200).send({
            message : "Content cannot be empty"
        })
    }
    next();
}