const express = require("express");
const router = express();

const { addDoctor, listDoctors } = require("../controllers/doctor.controller");

router.post("/add", addDoctor);
router.get("/list", listDoctors);

module.exports = router;
