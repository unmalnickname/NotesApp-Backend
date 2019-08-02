const { Router } = require("express");
const router = Router();

router.route("/").get((req, res) => res.send("User Routes"));
//   .post();

// router
//   .route("/:id")
//   .get()
//   .put()
//   .delete();
module.exports = router;
