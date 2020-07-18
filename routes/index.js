var express = require('express');
var router = express.Router();
const province = require('./province')
const district = require('./district')
const village = require('./village')
/* GET home page. */
router.get('/province', function (req, res, next) {
  //res.render('index', { title: 'Express' });
  res.status(200).json(province)
});
router.get('/province/:district', function (req, res, next) {
  const districtID = req.params.district
  const __district = Object.values(district).filter(x => x.parent_code === districtID)
  res.status(200).json(__district)
});
router.get('/province/:district/:village', function (req, res, next) {
  const districtID = req.params.district
  const __district = Object.values(district).filter(x => x.parent_code === districtID)
  const villageID = req.params.village
  const __village = Object.values(village).filter(x => x.parent_code === villageID)
  res.status(200).json(__village)
});

module.exports = router;
