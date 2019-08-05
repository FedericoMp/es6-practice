const express = require('express');
const testCtrl = require('../controllers/test');
const router = express.Router();
const vfToken = require('../middlewares/verifyToken');

// express router with endpoints and middleware, to verity token before send request
router.get('/', testCtrl.index);
router.post('/token', testCtrl.token);
router.get('/hello', vfToken, testCtrl.hello);
router.post('/take', vfToken, testCtrl.take);

module.exports = router;