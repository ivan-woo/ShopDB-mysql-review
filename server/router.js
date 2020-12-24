const router = require('express').Router();

// TODO: Connect router to controller functions
const controllers = require('./controllers.js');

router.route('/inventory')
  .get(controllers.readAll)
  .post(controllers.create)

router.route('/inventory/:id')
  .get(controllers.getOne)
  .delete(controllers.deleteOne)
  .put(controllers.updateOne)



module.exports = router;