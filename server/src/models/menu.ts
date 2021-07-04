import mongoose, { Document, Model, Schema } from "mongoose";
import { IComment } from "./comment";

export interface IMenu {
  name: string;
  description: string;
  categoryId: string;
  recipe: string;
  comments: IComment[];
}

export interface IMenuMethod extends IMenu, Document {}
export interface IMenuStatics extends Model<IMenuMethod> {}

const MenuSchema: Schema<IMenuMethod> = new Schema(
  {
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
    recipe: {
      type: String,
      trim: true,
      required: true,
    },
  },
  { timestamps: true }
);

const Menu = mongoose.model<IMenuMethod, IMenuStatics>("Menu", MenuSchema);

export default Menu;
