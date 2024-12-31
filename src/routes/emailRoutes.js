const express = require('express');
const router = express.Router();
const {getNesletterEmails,deleteNewsletterEmail } = require('../controllers/newsletterController');
const auth = require('../middlewares/auth');

router.get('/subscriptions/allpages', auth, getNesletterEmails);
router.post('/subscriptions/delete_page',auth,deleteNewsletterEmail);

module.exports = router;
