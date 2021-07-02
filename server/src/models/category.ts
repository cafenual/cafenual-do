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
  recipes: [
    {
      type: new mongoose.Schema({
        name: {
          type: String,
          maxLength: 50,
          required: true,
        },
        content: [
          {
            level: {
              type: String,
              required: true,
            },
            description: {
              type: String,
              required: true,
            },
          },
        ],
      }),
    },
  ],
});

const Category = mongoose.model<ICategoryMethod, ICategoryStatics>(
  "RecipeCategory",
  CategorySchema
);

export default Category;
