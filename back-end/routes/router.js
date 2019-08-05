const express = require('express');
const testCtrl = require('../controllers/test');
const router = express.Router();
const vfToken = require('../middlewares/verifyToken');

router.get('/', testCtrl.index);
router.get('/login', testCtrl.login);
router.get('/hello', vfToken, testCtrl.hello);
router.get('/take', vfToken, testCtrl.take);

module.exports = router;