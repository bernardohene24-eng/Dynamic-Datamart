import mongoose, { Schema, Document } from 'mongoose'

interface IResultChecker extends Document {
  userId: mongoose.Types.ObjectId
  orderId: mongoose.Types.ObjectId
  orderType: 'data_bundle' | 'virtual_number' | 'social_booster'
  status: 'pending' | 'processing' | 'completed' | 'failed'
  deliveryStatus: 'not_delivered' | 'in_transit' | 'delivered'
  reference: string
  details: any
  smsNotifications: Array<{
    message: string
    sentAt: Date
    status: 'sent' | 'failed'
  }>
  createdAt: Date
  updatedAt: Date
}

const resultCheckerSchema = new Schema<IResultChecker>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    orderId: {
      type: Schema.Types.ObjectId,
      ref: 'Order',
      required: true,
    },
    orderType: {
      type: String,
      enum: ['data_bundle', 'virtual_number', 'social_booster'],
      required: true,
    },
    status: {
      type: String,
      enum: ['pending', 'processing', 'completed', 'failed'],
      default: 'pending',
    },
    deliveryStatus: {
      type: String,
      enum: ['not_delivered', 'in_transit', 'delivered'],
      default: 'not_delivered',
    },
    reference: {
      type: String,
      required: true,
    },
    details: Schema.Types.Mixed,
    smsNotifications: [
      {
        message: String,
        sentAt: { type: Date, default: Date.now },
        status: { type: String, enum: ['sent', 'failed'], default: 'sent' },
      },
    ],
  },
  { timestamps: true }
)

export default mongoose.model<IResultChecker>('ResultChecker', resultCheckerSchema)
