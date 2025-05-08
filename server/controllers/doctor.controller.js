const doctorModel = require("../models/doctor.model");

const addDoctor = async (req, res) => {
  try {
    const { name, location, experience, specialization, isAvailable, fees } =
      req.body;
    if (
      !name ||
      !location ||
      !experience ||
      !specialization ||
      !fees ||
      isAvailable === undefined
    ) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }
    const doctor = await doctorModel.create({
      name,
      location,
      experience,
      specialization,
      isAvailable,
      fees,
    });

    if (!doctor) {
      return res
        .status(400)
        .json({ success: false, message: "Failed to add doctor" });
    }
    res.status(200).json({
      success: true,
      message: "Doctor added successfully",
      doctor,
    });
  } catch (error) {
    console.error("Error adding doctor:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Internal server error",
    });
  }
};

const listDoctors = async (req, res) => {
  try {
    const { specialization, isAvailable, page, limit } = req.query;

    // Build dynamic filter object
    const filters = {};
    if (specialization) filters.specialization = specialization;
    if (isAvailable !== undefined) filters.isAvailable = isAvailable === "true";

    const doctors = await doctorModel
      .find(filters)
      .skip((page - 1) * limit)
      .limit(parseInt(limit));

    const total = await doctorModel.countDocuments(filters);

    res.json({
      success: true,
      data: doctors,
      currentPage: parseInt(page),
      totalPages: Math.ceil(total / limit),
      totalDoctors: total,
    });
  } catch (error) {
    console.error("Error listing doctors:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Internal server error",
    });
  }
};

module.exports = {
  addDoctor,
  listDoctors,
};
