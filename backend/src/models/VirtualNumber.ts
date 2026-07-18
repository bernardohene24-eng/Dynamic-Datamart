import mongoose, { Schema, Document } from 'mongoose'

interface IVirtualNumber extends Document {
  phoneNumber: string
  country: string
  provider: string
  userId: mongoose.Types.ObjectId
  status: 'active' | 'inactive' | 'expired'
  smsReceived: Array<{
    from: string
    message: string
    timestamp: Date
  }>
  expiresAt: Date
  createdAt: Date
  updatedAt: Date
}

const virtualNumberSchema = new Schema<IVirtualNumber>(
  {
    phoneNumber: {
      type: String,
      required: true,
      unique: true,
    },
    country: {
      type: String,
      required: true,
    },
    provider: {
      type: String,
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    status: {
      type: String,
      enum: ['active', 'inactive', 'expired'],
      default: 'active',
    },
    smsReceived: [
      {
        from: String,
        message: String,
        timestamp: { type: Date, default: Date.now },
      },
    ],
    expiresAt: Date,
  },
  { timestamps: true }
)

export default mongoose.model<IVirtualNumber>('VirtualNumber', virtualNumberSchema)
