'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import CartIcon from './icons/CartIcon'
import UserIcon from './icons/UserIcon'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const cartItems = useSelector((state: any) => state.cart.items)

  return (
    <nav className="bg-white shadow-md">
      <div className="container-main">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">DD</span>
            </div>
            <span className="font-bold text-lg hidden sm:inline">Dynamic Datamart</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/bundles" className="hover:text-blue-600 transition">Data Bundles</Link>
            <Link href="/virtual-numbers" className="hover:text-blue-600 transition">Virtual Numbers</Link>
            <Link href="/social-booster" className="hover:text-blue-600 transition">Social Booster</Link>
            <Link href="/results" className="hover:text-blue-600 transition">Results Checker</Link>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            <Link href="/cart" className="relative">
              <CartIcon />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </Link>
            <Link href="/account">
              <UserIcon />
            </Link>
            
            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="/bundles" className="block px-4 py-2 hover:bg-gray-100">Data Bundles</Link>
            <Link href="/virtual-numbers" className="block px-4 py-2 hover:bg-gray-100">Virtual Numbers</Link>
            <Link href="/social-booster" className="block px-4 py-2 hover:bg-gray-100">Social Booster</Link>
            <Link href="/results" className="block px-4 py-2 hover:bg-gray-100">Results Checker</Link>
          </div>
        )}
      </div>
    </nav>
  )
}
