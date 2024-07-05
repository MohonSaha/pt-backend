import { Schema, model } from 'mongoose'
import { IBlog } from './blog.interface'

const blogSchema = new Schema<IBlog>(
  {
    title: {
      type: String,
      unique: true,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    // toJSON: { virtuals: true },
    // toObject: { virtuals: true },
    // versionKey: false,
    timestamps: true,
  },
)

export const Blog = model<IBlog>('Blog', blogSchema)
