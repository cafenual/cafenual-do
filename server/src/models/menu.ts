import mongoose, { Document, Model, Schema } from "mongoose";
import { IComment } from "./comment";

export interface IRecipe {
  recipe: string;
}

export interface IMenu {
  name: string;
  description: string;
  categoryId: string;
  recipes: IRecipe[];
  comments: IComment[];
}

export interface IMenuMethod extends IMenu, Document {}
export interface IMenuStatics extends Model<IMenuMethod> {}

const MenuSchema: Schema<IMenuMethod> = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  categoryId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Category",
  },
  recipes: [
    {
      recipe: {
        type: String,
        trim: true,
      },
    },
  ],
  comments: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Comment",
    },
  ],
});

const Menu = mongoose.model<IMenuMethod, IMenuStatics>("Menu", MenuSchema);

export default Menu;
