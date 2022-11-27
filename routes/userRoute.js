const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();

//User routes
router
  .route("/")
  .post(userController.createNewUser)
  .put(userController.putUserJwtToken)
  .get(userController.getUserByEmail);
//.get(userController.getAllUser);
/* router
  .route("/users/")
  
 .patch(userController.patchUserRole);
 */
module.exports = router;
