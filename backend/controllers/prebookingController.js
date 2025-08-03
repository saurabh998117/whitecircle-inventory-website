const Prebooking = require('../models/Prebooking');

const submitPrebooking = async (req, res) => {
    const { businessName, userName, email, mobileNumber, wantsDemo } = req.body;

    if (!businessName || !userName || !email || !mobileNumber) {
        return res.status(400).json({ message: 'Please fill all required fields: Business Name, Your Name, Your Email, and Mobile Number.' });
    }

    try {
        const newPrebooking = new Prebooking({
            businessName,
            userName,
            email,
            mobileNumber,
            wantsDemo: wantsDemo || false,
            timestamp: new Date()
        });

        const createdPrebooking = await newPrebooking.save();

        res.status(201).json({
            message: 'Pre-booking submitted successfully!',
            data: createdPrebooking
        });

    } catch (error) {
        console.error('Error submitting pre-booking:', error);

        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(val => val.message);
            return res.status(400).json({ message: `Validation Error: ${messages.join(', ')}` });
        }

        res.status(500).json({ message: 'Server error submitting pre-booking. Please try again.' });
    }
};

const getAllPrebookings = async (req, res) => {
    try {
        const prebookings = await Prebooking.find({}).sort({ timestamp: -1 });
        res.status(200).json(prebookings);
    } catch (error) {
        console.error('Error fetching pre-bookings:', error);
        res.status(500).json({ message: 'Server error fetching pre-bookings.' });
    }
};
module.exports = { submitPrebooking, getAllPrebookings };