import mongoose from "mongoose";

const menuSchema = mongoose.Schema({
  menuName: {
    type: String,
    maxlength: 10,
  },
  menuRecipe: {
    type: String,
    maxlength: 50,
  },
  menuCategory: {
    type: String,
    maxlength: 10,
  },
});

const Menu = mongoose.model("Menu", menuSchema);
export default Menu;
