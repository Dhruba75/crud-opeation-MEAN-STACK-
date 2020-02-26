const router = require('express').Router();
const userModel = require('./../models/users');

// Add users
router.route('/create')
    .post((req, res, next) => {
        var newUser = new userModel({});
        newUser.name = req.body.name;
        newUser.email = req.body.email;
        newUser.designation = req.body.designation;
        newUser.phoneNumber = req.body.phoneNumber;

        newUser.save(function (err, user) {
            if (err) {
                return next(err);
            }
            res.status(200).json(user);
        });
    });

// Get All users
router.route('/')
    .get((req, res) => {
        userModel.find((error, data) => {
            if (error) {
                return next(error)
            } else {
                res.json(data)
            }
        })
    })

// Get single users
router.route('/:id')
    .get((req, res, next) => {
        userModel.findById(req.params.id, (error, data) => {
            if (error) {
                return next(error)
            } else {
                res.json(data)
            }
        })
    })


// Update users
router.route('/update/:id')
    .put((req, res, next) => {
        userModel.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, (error, data) => {
            if (error) {
                console.log(error)
            } else {
                res.json(data)
                console.log('Data updated successfully')
            }
        })
    })

// Delete users
router.route('/delete/:id')
    .delete((req, res, next) => {
        userModel.findOneAndRemove(req.params.id, (error, data) => {
            if (error) {
                return next(error);
            } else {
                res.status(200).json({
                    msg: data
                })
            }
        })
    })
module.exports = router;