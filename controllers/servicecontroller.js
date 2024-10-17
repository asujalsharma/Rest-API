const Service = require('../models/servicemodel');

// Add service
exports.addService = async (req, res) => {
    try {
        const { serviceName, description, price } = req.body;

        if (!serviceName || !price) {
            return res.status(400).json({ error: 'Service name and price are required' });
        }

        const newService = new Service({
            serviceName,
            description,
            price
        });

        await newService.save();
        res.status(201).json(newService);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Get all services
exports.getAllServices = async (req, res) => {
    try {
        const services = await Service.find();
        res.status(200).json(services);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Update a service
exports.updateService = async (req, res) => {
    try {
        const { serviceId } = req.params;
        const { serviceName, description, price } = req.body;

        const updatedService = await Service.findByIdAndUpdate(
            serviceId,
            { serviceName, description, price },
            { new: true, runValidators: true }
        );

        if (!updatedService) {
            return res.status(404).json({ error: 'Service not found' });
        }

        res.status(200).json(updatedService);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

// Delete a service
exports.deleteService = async (req, res) => {
    try {
        const { serviceId } = req.params;

        
        const deletedService = await Service.findByIdAndDelete(serviceId);

        if (!deletedService) {
            return res.status(404).json({ error: 'Service not found' });
        }

        res.status(200).json({ message: 'Service deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error });
    }
};
