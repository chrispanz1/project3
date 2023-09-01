const Song = require('../../models/Song');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const createSong = async (req, res) => {
  try {
    // Add user to database
    const song = await Song.create(req.body);

    // Helper funtion to create JWT
    

    // Responding with our jwt
    res.json(song);
  } catch (err) {
    // Client will check for non-2xx status code
    // 400 = Bad Request
    res.status(400).json(err);
    console.log(err)
  }
};
const readSong= async(req,res)=>{
    try {
        const songs=await Song.find({})
        res.json(songs)
        
    } catch (error) {
        res.status(400).json(error);
        console.log(error)
    }
}
const deleteSong = async(req,res)=>{
    try {
        const song=await Song.findByIdAndDelete(req.params.id)
        res.json(songs)
        
    } catch (error) {
        res.status(400).json(error);
        console.log(error)
    }
}

const updateSong = async (req, res) => {
  try {
    // Find the user by their email
    const song = await Song.findByIdAndUpdate(req.params.id,req.body);
    //console.log("body",req.body)

    //const isMatch = await bcrypt.compare(req.body.password, user.password);

    //if (!isMatch) throw new Error();

    res.json(song)
  } catch (error) {
    res.status(400).json(error)
    console.log(error)
  }
};




module.exports = {
  readSong,
  deleteSong,
  updateSong,
  createSong
};