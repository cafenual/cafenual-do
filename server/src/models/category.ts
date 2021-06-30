import mongoose, { Document, Model, Schema } from "mongoose";

export interface ICategory {
  name: string;
}

export interface ICategoryMethod extends ICategory, Document {}

export interface ICategoryStatics extends Model<ICategoryMethod> {}

const CategorySchema: Schema<ICategoryMethod> = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
});

const Category = mongoose.model<ICategoryMethod, ICategoryStatics>(
  "RecipeCategory",
  CategorySchema
);

export default Category;
