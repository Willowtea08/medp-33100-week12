const express = require('express');
const { ObjectId } = require('mongodb');
const router = express.Router();
const connectToDatabase = require('../config/db'); 

/* GET home page. */
router.get('/', async function (req, res, next) {
  try {
    const db = await connectToDatabase(); 

    // Fetch data from the three collections
    const teasCollection = await db.collection('teas').find().toArray(); // Get all teas
    const usersCollection = await db.collection('users').find().toArray(); // Get all users
    const commentsCollection = await db.collection('comments').find().toArray(); // Get all comments

    // Pass the collections data to the view
    res.render('index', {
      teas: teasCollection,
      users: usersCollection,
      comments: commentsCollection,
    });
  } catch (error) {
    console.error("Error fetching data from collections:", error);
    res.render('index', {
      teas: [],
      users: [],
      comments: [],
    });
  }
});

module.exports = router;
