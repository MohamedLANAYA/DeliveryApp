import FoodModel from "../models/foodModels.js";
import fs from "fs";

const addFood = async (req, res) => {
  let image_filename = `${req.file.filename}`;

  const newFood = new FoodModel({
    name: req.body.name,
    price: req.body.price,
    category: req.body.category,
    image: image_filename,
    description: req.body.description,
  });

  // add the image to the database

  try {
    await newFood.save();
    res.json({ success: true, message: "Food Add successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Failed to save food" });
  }
};
//  find all data from database
const listFood = async (req, res) => {
  try {
    const foods = await FoodModel.find({});
    res.json({ success: true, data: foods });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

const removeFood = async (req,res) => {
    try {
     const food= await FoodModel.findById(req.body.id);
     fs.unlink(`upload/${food.image}`,()=>{})
     await FoodModel.findByIdAndDelete(req.body.id);
     res.json({ success: true, message: "Food deleted successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Failed to remove food" });
    }
}
  

// delete food list  from database

export { addFood, listFood, removeFood};
