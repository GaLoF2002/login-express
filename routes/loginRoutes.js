const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');

router.get('/', loginController.renderLogin);
router.post('/login', loginController.login);
router.get('/dashboard', loginController.dashboard);
router.get('/logout', loginController.logout);

module.exports = router;