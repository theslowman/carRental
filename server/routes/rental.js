import express from 'express';

import Rental from '../models/rental';

let router = express.Router();


router.post('/getRentals', (req, res) => {
    Rental.query({
        select: ['*']
    }).where({"carId": req.body.carId})
        .fetchAll().then(rentals => {
        res.json({rentals});
    })

});

router.post('/rentCar', (req, res) => {

    const {carId, from, to, user} = req.body;
    console.log(req.body);
    var rental = new Rental({carId, after: JSON.stringify(from), before: JSON.stringify(to), user: user.id});
    rental.save(null, {method: 'insert'})
        .then(rental => res.json({success: true}))

    ;

});


export default router;