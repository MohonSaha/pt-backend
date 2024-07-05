import { Schema, model } from 'mongoose'
import { IProject } from './project.interface'

const projectSchema = new Schema<IProject>(
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

export const Project = model<IProject>('Project', projectSchema)
