import express from 'express';

const router = express.Router();

// TODO: @utkarsh Fix the routes
router.get('/', function (req, res) {
  res.send('Sessions home page');
});

router.get('/login', function (req, res) {
  res.send('Sessions login');
});;

router.get('/logout', function (req, res) {
  res.send('Sessions logout');
});;

export default router;