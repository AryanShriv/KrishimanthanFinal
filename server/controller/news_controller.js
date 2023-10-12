const News = require("../modules/News");
const Gallery = require("../modules/Gallery");
const SubCategory = require("../modules/SubCategory");
const FileModel = require("../modules/FileUpload");
const ObjectId = require("mongoose").Types.ObjectId;
// const { ObjectId } = require('mongodb');

const addNews = async (req, res) => {
  const newNews = new News({
    name: req.body.name,
    image: req.body.image,
    description: req.body.description,
    category_id: req.body.category_id,
    subcategory_id: req.body.subcategory_id,
  });
  newNews
    .save()
    .then((doc) => {
      res.status(200).json(doc);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

const getAllNews = async (req, res) => {
  try {
    const allNews = await News.find().sort({ createdAt: -1 });
    res.send(allNews);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const getLatestNews = async (req, res) => {
  try {
    const latestNews = await News.findOne().sort({ createdAt: -1 }).limit(1);
    res.send(latestNews);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const updateNews = async (req, res) => {
  const News = await News.findByIdAndUpdate({ _id: req.params.id }, { $set: req.body })
    .then((doc, err) => {
      res.send(doc);
    })
    .catch((err) => {
      res.send(err.message);
    });
};

const categoryWiseNews = async (req, res) => {
  try {
    const cat = req.params.cat;
    // console.log("file: news_controller.js:45  cat:", cat)
    let news = await News.aggregate([
      {
        $match: {
          category_id: new ObjectId(cat),
        },
      },
      {
        $group: {
          _id: "$subcategory_id",
          news: {
            $push: {
              name: "$name",
              image: "$image",
              description: "$description",
            },
          },
        },
      },
      {
        $lookup: {
          from: "subcategories",
          as: "subcategories",
          localField: "_id",
          foreignField: "_id",
        },
      },
      {
        $unwind: "$subcategories",
      },
      {
        $project: {
          subcategory: "$subcategories.name",
          news: 1,
          _id:0
        },
      },
    ]);
    res.json(news)
  } catch (error) {
    console.error(error);
    res.json(error.message);
  }
};

const addGallery  = async (req, res) => {
  try {
    // Find and delete the existing record
    const deletedGallery = await Gallery.deleteMany({ });

    if (!deletedGallery) {
      // If the existing record doesn't exist, return an error
      return res.status(404).json({ message: 'Gallery not found' });
    }

    const { image1, image2, image3, image4, image5, image1Text, image2Text, image3Text, image4Text, image5Text } = req.body;
    // Create and save the new record based on the request body
    const newGallery = new Gallery({
      image1,
      image2,
      image3,
      image4,
      image5,
      image1Text,
      image2Text,
      image3Text,
      image4Text,
      image5Text
    });

    const savedGallery = await newGallery.save();

    res.status(200).json(savedGallery);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const gallery = async (req, res) => {
  try {
    const allGallery = await Gallery.findOne().sort({ createdAt: -1 });
    res.send(allGallery);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const pdfDownload = async (req, res) => {
  try {
    const fileName = req.params.pdfName;
    const pdfFilePath = path.join(__dirname, "uploads", fileName );
    res.sendFile(pdfFilePath);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const getNewsById = async (req, res) => {
  try {
    const newId = req.params.id;
    const news = await News.findById( newId  ).sort({ createdAt: -1 });
    res.send(news);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

  const getNewsSubCategoryName = async (req, res) => {
    try {
      const subcategoryName = req.params.subcategoryName;
      const subcategoriesId = await SubCategory.find({ name: subcategoryName }).select( '_id' );

      const subcategoryIds = subcategoriesId.map((subcategory) => subcategory._id);

      const newsSubCategoryName = await News.find({ subcategory_id: { $in: subcategoryIds } })

      res.send(newsSubCategoryName);
    } catch (err) {
      res.status(500).send(err.message);
    }
  };

  const getNewsCategoryById = async (req, res) => {
    try {
      const categoryId = req.params.categoryId;
      const news = await News.find( { category_id: categoryId }  ).sort({ createdAt: -1 });
      res.send(news);
    } catch (err) {
      res.status(500).send(err.message);
    }
  };

  const getNewsSubCategoryWithCategory = async (req, res) => {
    try {
      const categoryId = req.params.categoryId;
      let news = await News.aggregate([
        {
          $match: {
            category_id: new ObjectId(categoryId),
          },
        },
        {
          $lookup: {
            from: "categories",
            localField: "category_id",
            foreignField: "_id",
            as: "category",
          },
        },
        {
          $unwind: "$category",
        },
        {
          $lookup: {
            from: "subcategories",
            localField: "subcategory_id",
            foreignField: "_id",
            as: "subCategory",
          },
        },
        {
          $unwind: "$subCategory",
        },
        {
          $group: {
            _id: "$subCategory._id",
            subCategoryName: { $first: "$subCategory.name" },
            records: {
              $push: {
                _id: "$_id",
                name: "$name",
                image: "$image",
                description: "$description",
                createdAt: "$createdAt",
                updatedAt: "$updatedAt",
                __v: "$__v",
              },
            },
          },
        },
        {
          $sort: { "_id": 1 },
        },
      ]);

      res.json(news)
    } catch (err) {
      res.status(500).send(err.message);
    }
  };

  const uploadPdfById = async (req, res) => {
    try {
      const fileName = req.body.fileName;
      const newsDate = req.body.newsDate;
      if (!req.file) {
        return res.status(400).send('No file uploaded.');
      }
  
      const newFile = new FileModel({
        fileName,
        newsDate,
        fileUrl: req.file.filename,
      });

      await newFile.save()
    
      return res.status(200).json({
        status: true,
        message: "Pdf Uploaded Successfully.",
      });
    } catch (error) {
      return res.status(500).json({
        error: error.message,
        status: false,
        message: "Internal Server Error",
      });
    }
  };

  const getUploadPdf = async (req, res) => {
    try {
      const allFile = await FileModel.find().sort({ createdAt: -1 });  
      return res.status(200).json({
        status: true,
        message: "Pdf Uploaded Successfully.",
        data: allFile
      });
    } catch (err) {
      return res.status(500).send(err.message);
    }
  };

module.exports = { addNews, getAllNews, updateNews, categoryWiseNews, getLatestNews, addGallery, gallery, pdfDownload, getNewsById, getNewsSubCategoryName, getNewsCategoryById, getNewsSubCategoryWithCategory, uploadPdfById, getUploadPdf };

// const loginNews = async (req, res) => {
//   console.log(req.body);
//   try {
//     const { email, password } = req.body;
//     News.findOne({ email: email }).then((News) => {
//       if (News) {
//         if (News.password === password) {
//           res.json({
//             News: News,
//             message: ""
//           });
//         } else {
//           res.json({message:"The password is incorrect"});
//         }
//       } else {
//         res.json({message:"No record found"});
//       }
//     });
//   } catch (err) {
//     res.send(err);
//   }
// };

// const loginNews = async (req, res) => {
//   const { email, password } = req.body;
//   const News = await News.findOne({ email, password });
//   if (News) {
//     res.status(200).json(News);
//   } else {
//     res.status(400).json(false);
//   }
// };
