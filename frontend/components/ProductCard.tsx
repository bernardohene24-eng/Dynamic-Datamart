'use client'

import { useDispatch } from 'react-redux'
import Link from 'next/link'
import { addToCart } from '@/lib/slices/cartSlice'
import { toast } from 'react-toastify'

export default function ProductCard({ product }: { product: any }) {
  const dispatch = useDispatch()

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    dispatch(addToCart(product))
    toast.success('Added to cart!')
  }

  return (
    <Link href={`/product/${product._id}`}>
      <div className="card overflow-hidden hover:shadow-xl transition cursor-pointer">
        <div className="bg-gray-200 h-40 flex items-center justify-center text-gray-400 text-4xl">
          {product.icon || '📦'}
        </div>
        <div className="p-4">
          <h3 className="font-bold text-lg mb-2 truncate">{product.name}</h3>
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
          
          <div className="flex justify-between items-center mb-4">
            <span className="text-2xl font-bold text-blue-600">
              GH₵{product.price.toFixed(2)}
            </span>
            {product.discount && (
              <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
                -{product.discount}%
              </span>
            )}
          </div>

          <button
            onClick={handleAddToCart}
            className="btn-primary w-full"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </Link>
  )
}
