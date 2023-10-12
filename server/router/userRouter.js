const router = require("express").Router();
const { addNews, getAllNews, updateNews, categoryWiseNews, getLatestNews, addGallery, gallery,pdfDownload, getNewsById, getNewsSubCategoryName, getNewsCategoryById, getNewsSubCategoryWithCategory, uploadPdfById, getUploadPdf } = require("../controller/news_controller");

const multer = require('multer');
// Multer configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/pdf');
    },
    filename: function (req, file, cb) {
    const uniqueFileName = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueFileName);
    },
  });
  
const upload = multer({ storage: storage });

router.post("/post", addNews);
router.post("/gallery", addGallery);
router.get("/gallery", gallery);
router.get("/pdf/:pdfName", pdfDownload);
router.get("/", getAllNews);
router.get("/news/:id", getNewsById);
router.get("/latest/news", getLatestNews);
router.patch("/patch/:id", updateNews);
router.get("/cat/:cat", categoryWiseNews);
router.get("/news/name/:subcategoryName", getNewsSubCategoryName);
router.get("/news/category/:categoryId", getNewsCategoryById);
router.get("/news/subcategory/group/category/:categoryId", getNewsSubCategoryWithCategory);
router.post("/news/pdf", upload.single('pdfFile'), uploadPdfById);
router.get("/news/pdf/list", getUploadPdf);

module.exports = router;
