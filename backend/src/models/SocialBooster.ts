import mongoose, { Schema, Document } from 'mongoose'

interface ISocialBooster extends Document {
  userId: mongoose.Types.ObjectId
  platform: 'instagram' | 'tiktok' | 'twitter' | 'facebook' | 'youtube'
  account: string
  service: 'followers' | 'likes' | 'views' | 'comments'
  quantity: number
  status: 'pending' | 'processing' | 'completed' | 'failed'
  price: number
  orderId: mongoose.Types.ObjectId
  startDate: Date
  completionDate?: Date
  notes?: string
  createdAt: Date
  updatedAt: Date
}

const socialBoosterSchema = new Schema<ISocialBooster>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    platform: {
      type: String,
      enum: ['instagram', 'tiktok', 'twitter', 'facebook', 'youtube'],
      required: true,
    },
    account: {
      type: String,
      required: true,
    },
    service: {
      type: String,
      enum: ['followers', 'likes', 'views', 'comments'],
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      min: 1,
    },
    status: {
      type: String,
      enum: ['pending', 'processing', 'completed', 'failed'],
      default: 'pending',
    },
    price: {
      type: Number,
      required: true,
    },
    orderId: {
      type: Schema.Types.ObjectId,
      ref: 'Order',
    },
    startDate: {
      type: Date,
      default: Date.now,
    },
    completionDate: Date,
    notes: String,
  },
  { timestamps: true }
)

export default mongoose.model<ISocialBooster>('SocialBooster', socialBoosterSchema)
