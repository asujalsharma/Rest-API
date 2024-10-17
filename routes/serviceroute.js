const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/servicecontroller');

// Route to add a service
router.post('/addservice', serviceController.addService);

// Route to get all services
router.get('/getservices', serviceController.getAllServices);

// Route to update services
router.put('/upadte/:serviceId', serviceController.updateService);

// Route to delete services
router.delete('/delete/:serviceId', serviceController.deleteService);

module.exports = router;
