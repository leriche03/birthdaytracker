const Birthday = require('../db/models/birthday.model');

const getBirthdays = async (req, res) => {
  try {
    const allBirthdays = await Birthday.find();
    res.json(allBirthdays);
  } catch (error) {
    console.log(error.message);
  }
};

const createBirthday = async (req, res) => {
  try {
    const birthday = new Birthday(req.body);
    await birthday.save();
    res.json(birthday);
  } catch (error) {
    console.log(error.message);
  }
};

const getBirthdayById = async (req, res) => {
  try {
    const birthday = await Birthday.findById(req.params.id);
    res.json(birthday);
  } catch (error) {
    console.log(error.message);
  }
};

const updateBirthday = async (req, res) => {
  try {
    const birthday = await Birthday.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    await birthday.save();
    res.json(birthday);
  } catch (err) {
    console.log('Error: ' + err);
  }
};

const deleteBirthday = async (req, res) => {
  try {
    await Birthday.findByIdAndDelete(req.params.id);
    res.json('birthday deleted');
  } catch (err) {
    console.log(err.toString());
  }
};

module.exports = {
  getBirthdays,
  createBirthday,
  getBirthdayById,
  updateBirthday,
  deleteBirthday
};
