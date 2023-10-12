const router = require("express").Router();
const {getSubCategories, addSubCategory, getSubCategoriesByCategoryId, getSubCategoriesByCategoryName} = require("../controller/subCategory");

router.get("/", getSubCategories);
router.post("/", addSubCategory);
router.get("/:categoryId", getSubCategoriesByCategoryId);


module.exports = router;