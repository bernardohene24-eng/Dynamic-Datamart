import mongoose, { Schema, Document } from 'mongoose'

interface IOrderItem {
  productId: mongoose.Types.ObjectId
  name: string
  price: number
  quantity: number
}

interface IOrder extends Document {
  userId: mongoose.Types.ObjectId
  items: IOrderItem[]
  total: number
  tax: number
  subtotal: number
  status: 'pending' | 'processing' | 'completed' | 'failed' | 'cancelled'
  paymentMethod: 'stripe' | 'mtn_mobile_money' | 'vodafone_cash' | 'airteltigo_money'
  paymentStatus: 'pending' | 'completed' | 'failed'
  reference: string
  notes?: string
  deliveryInfo?: {
    phone: string
    email: string
  }
  createdAt: Date
  updatedAt: Date
}

const orderSchema = new Schema<IOrder>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    items: [
      {
        productId: {
          type: Schema.Types.ObjectId,
          ref: 'Product',
          required: true,
        },
        name: String,
        price: Number,
        quantity: Number,
      },
    ],
    total: {
      type: Number,
      required: true,
    },
    tax: {
      type: Number,
      default: 0,
    },
    subtotal: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ['pending', 'processing', 'completed', 'failed', 'cancelled'],
      default: 'pending',
    },
    paymentMethod: {
      type: String,
      enum: ['stripe', 'mtn_mobile_money', 'vodafone_cash', 'airteltigo_money'],
      required: true,
    },
    paymentStatus: {
      type: String,
      enum: ['pending', 'completed', 'failed'],
      default: 'pending',
    },
    reference: {
      type: String,
      unique: true,
      required: true,
    },
    notes: String,
    deliveryInfo: {
      phone: String,
      email: String,
    },
  },
  { timestamps: true }
)

export default mongoose.model<IOrder>('Order', orderSchema)
