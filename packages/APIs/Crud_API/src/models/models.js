import mongoose, { Schema } from 'mongoose';

const resourceSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Resource = mongoose.model('Resource', resourceSchema);
