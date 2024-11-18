var express = require('express');
const { ObjectId } = require('mongodb');
var router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
  try {
    const db = req.app.locals.db;
    const movies = await db.collection('database1').find().toArray();

    res.render('index', { database1: database1 });
  } catch (error) {
    console.error("Error fetching database1:", error);
    res.render('index', { database1: [] });
  }
});

module.exports = router;