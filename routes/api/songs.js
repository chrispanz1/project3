const express = require('express');
const router = express.Router();
const songsControl=require('../../controllers/api/songs')


// POST /api/users
router.post('/create', songsControl.createSong);

// POST /api/users/login
router.get('/read', songsControl.readSong);
router.put('/update/:id', songsControl.updateSong);
router.delete('/delete/:id', songsControl.deleteSong);

//router.post('/update', usersCtrl.update);

// GET /api/users/check-token


module.exports = router;