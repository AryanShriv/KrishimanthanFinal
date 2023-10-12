const SubCategory = require("../modules/SubCategory");

const getSubCategories = async(req, res) => {
    
    await SubCategory.find()
    .then(doc => {
        res.json(doc)
    })
    .catch((err) => {
        res.json(err.message)
        console.log(err.message)
    })
}

const addSubCategory = async(req, res) => {
    try{
        const newCategory = new SubCategory({
            name: req.body.name,
            category_id: req.body.category_id
        })
        newCategory.save()
        .then(doc => {
            res.json(doc)
        })
        .catch(err => {
            res.json(err.message)
        })
    }
    catch(err){
        res.json(err.message)
    }
}

const getSubCategoriesByCategoryId = async(req, res) => {
    
    try {
        const categoryId = req.params.categoryId;
        const subCategoryDetails = await SubCategory.find( { category_id: categoryId} ).sort({ createdAt: 1 });
        res.send(subCategoryDetails);
      } catch (err) {
        res.status(500).send(err.message);
      }
}


module.exports = {getSubCategories, addSubCategory, getSubCategoriesByCategoryId };
