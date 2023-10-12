const router = require("express").Router();
const {addCategory, getCategories, getSubCategoriesByCategoryName} = require("../controller/category");

router.get("/" , getCategories);
router.post("/" , addCategory);
router.get("/name/:categoryName", getSubCategoriesByCategoryName);

module.exports = router


