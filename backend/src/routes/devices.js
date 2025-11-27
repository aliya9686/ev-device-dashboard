 
const express = require("express");
const router = express.Router();
const devices = require("../data/devices");

router.get("/", (req, res) => {
  const { status } = req.query;
  let filtered = devices;

  if (status) {
    filtered = filtered.filter(d => d.status === status);
  }

  res.json(filtered);
});

module.exports = router;
