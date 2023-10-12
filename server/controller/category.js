const Model = require("../modules/Category");

const getCategories = async(req, res) => {
    
    await Model.find()
    .then(doc => {
        res.json(doc)
    })
    .catch((err) => {
        res.json(err.message)
        console.log(err.message)
    })
}

const addCategory = async(req, res) => {
    try{
        const newCategory = new Model({
            name: req.body.name
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

const getSubCategoriesByCategoryName = async(req, res) => {
    
    try {
        const categoryName = req.params.categoryName;

        const CategoryDetails = await Model.findOne( { name: categoryName} );
        
        if(!CategoryDetails){
            return res.status(400).send({
                "Message": "Category name not found"
              });
        }

        return res.send(CategoryDetails);

      } catch (err) {
        return res.status(500).send(err.message);
      }
}

module.exports = {getCategories, addCategory, getSubCategoriesByCategoryName};
