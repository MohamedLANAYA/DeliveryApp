import userModel from "../models/userModel.js";

//  add items to usr cart
const addToCart = async (req, res) => {
  try {
    let userData = await userModel.findById(req.body.userId);
    let cartData = await userData.cartData;
    if (!cartData[req.body.itemId]) {
      cartData[req.body.itemId] = 1;
    } else {
      cartData[req.body.itemId] += 1;
    }
    await userModel.findByIdAndUpdate(req.body.userId, { cartData });
    res.status(200).json({ message: "Item added to cart" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};
const removeFromCart = async (req, res) => {
  try {
    let userData = await userModel.findById(req.body.userId);
    let cartData = await userData.cartData;

    if (cartData[req.body.itemId] > 0) {
      cartData[req.body.itemId] -= 1;
    }

    await userModel.findByIdAndUpdate(req.body.userId, { cartData });
    res.status(200).json({ message: "Item removed from cart" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};
//  get cart items by userId
const getCart = async (req, res) => {
    try {
      let userData = await userModel.findById(req.body.userId);
      let cartData = await userData.cartData;
       res.json({success:true,cartData})
       
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Server Error" });
    }
};

export { addToCart, removeFromCart, getCart };
