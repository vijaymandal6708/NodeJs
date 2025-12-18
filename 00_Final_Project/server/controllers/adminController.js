const AdminModel = require("../models/AdminModel");
const ProductModel = require("../models/ProductModel");
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../cloudinary");

// Set up Cloudinary storage for multer
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "product_images", // folder name Cloudinary account
    format: async (req, file) => "jpg", // supports promises as well
    public_id: (req, file) => Date.now() + "-" + file.originalname,
  },
});

const upload = multer({ storage: storage }).array("images", 10); //image size

const adminLogin = async (req, res) => {
  console.log(req.body);
  const { adminEmail, adminPassword } = req.body;

  const admin = await AdminModel.findOne({ adminEmail: adminEmail });

  if (!admin) {
    return res.status(401).json({ msg: "Invalid Admin ID" });
  }

  if (admin.adminPassword != adminPassword) {
    return res.status(401).json({ msg: "Invalid Password" });
  }

  res.status(200).json({
    msg: "Login Successfully",
    admin: {
      id: admin._id,
      email: admin.adminEmail,
    },
  });
};

const addProduct = async (req, res) => {

  console.log("ADD PRODUCT API HIT"); 
  upload(req, res, async (err) => {
    if (err) {
      return res.status(500).send("Error uploading files: " + err.message);
    }
    try {

      const { name, category, price, quantity, description } = req.body;
      const imageUrls = req.files && req.files.length > 0
          ? req.files.map((file) => file.path) : [];
      const product = await ProductModel.create({
        name: name,
        category: category,
        price: price,
        quantity: quantity,
        description: description,
        defaultImage: imageUrls[0],
        images: imageUrls,
      });

      res.status(200).send("Data saved successfully!");
    } catch (error) {
      res.status(500).send("Error saving data: " + error.message);
    }
  });
};

module.exports = {
  adminLogin,
  addProduct,
};
