import mongoose from 'mongoose';

const foodSchema = new mongoose.Schema({
  name:{type: String, required: true},
  description:{type: String, required: true},
  price:{type: Number, required: true},
  category:{type:String, required:true},
  image:{type:String, required:true},
  created_at: {type: Date, default: Date.now},
  updated_at: {type: Date, default: Date.now}

})

const FoodModel = mongoose.model.Food || mongoose.model('Food', foodSchema);

export default FoodModel;