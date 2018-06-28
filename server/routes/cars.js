import express from 'express';

import Car from '../models/car';

let router = express.Router();

router.get('/getCar', (req, res) => {
    console.log("cars");
    Car.query({
        select: ['*']
    }).where("brand", "LIKE", "%" + req.query.term + "%")
        .fetchAll().then(car => {
        res.json({car});
    })
        .catch(err => res.status(500).json({error: err}));
});

router.post('/addCar', (req, res) => {

    const {id, brand, model, description, img} = req.body;

    var car = new Car({id, brand, model, description, img})
    car.save(null, {method: 'insert'})
        .then(car => res.json({success: true}))
        .catch(err => res.status(500).json({error: err}));
    ;

});





export default router;