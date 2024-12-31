const express = require('express');
const router = express.Router();
const {getContactRecords,deleteContactRecord } = require('../controllers/contactController');
const auth = require('../middlewares/auth');

router.get('/contact/allpages', auth, getContactRecords);
router.post('/contact/delete_page',auth,deleteContactRecord);

module.exports = router;