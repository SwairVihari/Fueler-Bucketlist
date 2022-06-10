const express = require("express");
const { createBucket, getBuckets } = require("../controllers/bucketItem");
const router = express.Router();
const {test} = require("../controllers/testController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

router.route("/test").get(test)
router.route("/test/createbucket").post(createBucket)
router.route("/test/getbuckets").get(getBuckets)
module.exports = router