const router = require('express').Router();
const {
  getBirthdays,
  createBirthday,
  getBirthdayById,
  updateBirthday,
  deleteBirthday
} = require('../controllers/birthdays');

router.get('/', getBirthdays);
router.post('/', createBirthday);
router.get('/:id', getBirthdayById);
router.put('/:id', updateBirthday);
router.delete('/:id', deleteBirthday);

module.exports = router;
