
const express = require('express'); 
const { submitPrebooking, getAllPrebookings } = require('../controllers/prebookingController'); 
const { protect, authorizeRoles } = require('../middleware/authMiddleware'); 

const router = express.Router(); 

router.post('/', submitPrebooking);

router.get('/', protect, authorizeRoles('admin'), getAllPrebookings);

module.exports = router; 