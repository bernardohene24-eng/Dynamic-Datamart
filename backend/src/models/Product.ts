import mongoose, { Schema, Document } from 'mongoose'

interface IProduct extends Document {
  name: string
  description: string
  category: 'data_bundle' | 'virtual_number' | 'social_booster'
  provider: string
  price: number
  discount?: number
  icon?: string
  duration?: string
  features: string[]
  isActive: boolean
  createdAt: Date
  updatedAt: Date
}

const productSchema = new Schema<IProduct>(
  {
    name: {
      type: String,
      required: [true, 'Product name is required'],
    },
    description: {
      type: String,
      required: [true, 'Product description is required'],
    },
    category: {
      type: String,
      enum: ['data_bundle', 'virtual_number', 'social_booster'],
      required: true,
    },
    provider: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: [true, 'Price is required'],
      min: [0, 'Price cannot be negative'],
    },
    discount: {
      type: Number,
      min: 0,
      max: 100,
    },
    icon: String,
    duration: String,
    features: [String],
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
)

export default mongoose.model<IProduct>('Product', productSchema)
