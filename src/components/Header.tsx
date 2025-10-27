// src/components/navigation-header.tsx
import * as React from "react"
import { Calendar, Phone, Search, User, ShoppingCart, ChevronDown } from 'lucide-react'
import { cn } from "@/lib/utils"

interface MegaMenuProps {
  isOpen: boolean
}

interface MegaMenuContentProps {
  isOpen: boolean
  menuType: string | null
}

const MegaMenuContent: React.FC<MegaMenuContentProps> = ({ isOpen, menuType }) => {
  if (!isOpen) return null

  // Shop Menu Content
  if (menuType === 'shop') {
    return (
      <div className="absolute left-0 right-0 top-full w-full bg-[#e8e6e1] shadow-lg border-t border-gray-200">
        <div className="container mx-auto px-8 py-12">
          <div className="grid grid-cols-12 gap-8">
            {/* Discover Column */}
            <div className="col-span-2">
              <h3 className="font-serif text-lg font-semibold mb-6">Discover</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm hover:underline">New Arrivals</a></li>
                <li><a href="#" className="text-sm hover:underline">Shop All</a></li>
                <li><a href="#" className="text-sm hover:underline">Gifts & Vouchers</a></li>
                <li><a href="#" className="text-sm hover:underline">Saunders & Long</a></li>
              </ul>
            </div>

            {/* Collections Column */}
            <div className="col-span-2">
              <h3 className="font-serif text-lg font-semibold mb-6">Collections</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm hover:underline">Wedding Suits</a></li>
                <li><a href="#" className="text-sm hover:underline">Business</a></li>
                <li><a href="#" className="text-sm hover:underline">Autumn Winter '25</a></li>
              </ul>
            </div>

            {/* Tailoring Column */}
            <div className="col-span-2">
              <h3 className="font-serif text-lg font-semibold mb-6">Tailoring</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm hover:underline">Suits</a></li>
                <li><a href="#" className="text-sm hover:underline">Formalwear</a></li>
                <li><a href="#" className="text-sm hover:underline">Jackets</a></li>
                <li><a href="#" className="text-sm hover:underline">Trousers</a></li>
                <li><a href="#" className="text-sm hover:underline">Painters</a></li>
              </ul>
            </div>

            {/* Shirts Column */}
            <div className="col-span-2">
              <h3 className="font-serif text-lg font-semibold mb-6">Shirts</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm hover:underline">Business Shirts</a></li>
                <li><a href="#" className="text-sm hover:underline">Casual Shirts</a></li>
                <li><a href="#" className="text-sm hover:underline">Formal Shirts</a></li>
                <li><a href="#" className="text-sm hover:underline">Denim Shirts</a></li>
                <li><a href="#" className="text-sm hover:underline">Overshirts</a></li>
              </ul>
            </div>

            {/* Knitwear Column */}
            <div className="col-span-2">
              <h3 className="font-serif text-lg font-semibold mb-6">Knitwear</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm hover:underline">Cashmere</a></li>
                <li><a href="#" className="text-sm hover:underline">Merino Wool</a></li>
                <li><a href="#" className="text-sm hover:underline">Winter Edit</a></li>
              </ul>
            </div>

            {/* Image Cards */}
            <div className="col-span-2">
              <div className="space-y-4">
                <div className="relative group cursor-pointer">
                  <img
                    src="/placeholder.svg?height=300&width=250"
                    alt="Shop All"
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="mt-3 text-center">
                    <p className="font-serif text-sm font-semibold group-hover:text-gray-700 transition-colors">Discover</p>
                    <p className="text-sm group-hover:text-gray-600 transition-colors">Shop All</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Second Row - Accessories & Outerwear */}
          <div className="grid grid-cols-12 gap-8 mt-12">
            {/* Accessories Column */}
            <div className="col-span-2">
              <h3 className="font-serif text-lg font-semibold mb-6">Accessories</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm hover:underline">Ties</a></li>
                <li><a href="#" className="text-sm hover:underline">Bowties</a></li>
                <li><a href="#" className="text-sm hover:underline">Pocket Squares</a></li>
                <li><a href="#" className="text-sm hover:underline">Caps, Hats & Gloves</a></li>
                <li><a href="#" className="text-sm hover:underline">Bags & Luggage</a></li>
                <li><a href="#" className="text-sm hover:underline">Braces</a></li>
                <li><a href="#" className="text-sm hover:underline">Socks</a></li>
                <li><a href="#" className="text-sm hover:underline">Umbrellas</a></li>
                <li><a href="#" className="text-sm hover:underline">Clothes Care</a></li>
              </ul>
            </div>

            {/* Outerwear Column */}
            <div className="col-span-2">
              <h3 className="font-serif text-lg font-semibold mb-6">Outerwear</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm hover:underline">Overcoats</a></li>
                <li><a href="#" className="text-sm hover:underline">Greatcoats</a></li>
                <li><a href="#" className="text-sm hover:underline">Suede & Leather</a></li>
                <li><a href="#" className="text-sm hover:underline">Technical</a></li>
              </ul>
            </div>

            {/* Spacer columns */}
            <div className="col-span-6"></div>

            {/* Second Image Card */}
            <div className="col-span-2">
              <div className="relative group cursor-pointer">
                <img
                  src="/placeholder.svg?height=300&width=250"
                  alt="Winter Knitwear"
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="mt-3 text-center">
                  <p className="font-serif text-sm font-semibold group-hover:text-gray-700 transition-colors">Discover</p>
                  <p className="text-sm group-hover:text-gray-600 transition-colors">Winter Knitwear</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Bespoke Menu Content
  if (menuType === 'bespoke') {
    return (
      <div className="absolute left-0 right-0 top-full w-full bg-[#e8e6e1] shadow-lg border-t border-gray-200">
        <div className="container mx-auto px-8 py-12">
          <div className="grid grid-cols-12 gap-8">
            {/* Bespoke Services */}
            <div className="col-span-3">
              <h3 className="font-serif text-lg font-semibold mb-6">Bespoke Services</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm hover:underline">Full Bespoke Suits</a></li>
                <li><a href="#" className="text-sm hover:underline">Bespoke Shirts</a></li>
                <li><a href="#" className="text-sm hover:underline">Bespoke Overcoats</a></li>
                <li><a href="#" className="text-sm hover:underline">Wedding Suits</a></li>
                <li><a href="#" className="text-sm hover:underline">Formal Wear</a></li>
              </ul>
            </div>

            {/* Process */}
            <div className="col-span-3">
              <h3 className="font-serif text-lg font-semibold mb-6">The Process</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm hover:underline">Initial Consultation</a></li>
                <li><a href="#" className="text-sm hover:underline">Fitting Schedule</a></li>
                <li><a href="#" className="text-sm hover:underline">Fabric Selection</a></li>
                <li><a href="#" className="text-sm hover:underline">Timeline & Delivery</a></li>
              </ul>
            </div>

            {/* Fabrics */}
            <div className="col-span-3">
              <h3 className="font-serif text-lg font-semibold mb-6">Fabric Collections</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm hover:underline">Premium Wool</a></li>
                <li><a href="#" className="text-sm hover:underline">Cashmere</a></li>
                <li><a href="#" className="text-sm hover:underline">Silk Blends</a></li>
                <li><a href="#" className="text-sm hover:underline">Linen & Cotton</a></li>
              </ul>
            </div>

            {/* Image Card */}
            <div className="col-span-3">
              <div className="relative group cursor-pointer">
                <img
                  src="/placeholder.svg?height=300&width=250"
                  alt="Bespoke Tailoring"
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="mt-3 text-center">
                  <p className="font-serif text-sm font-semibold group-hover:text-gray-700 transition-colors">Bespoke</p>
                  <p className="text-sm group-hover:text-gray-600 transition-colors">Tailoring Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // About Menu Content
  if (menuType === 'about') {
    return (
      <div className="absolute left-0 right-0 top-full w-full bg-[#e8e6e1] shadow-lg border-t border-gray-200">
        <div className="container mx-auto px-8 py-12">
          <div className="grid grid-cols-12 gap-8">
            {/* Our Story */}
            <div className="col-span-3">
              <h3 className="font-serif text-lg font-semibold mb-6">Our Story</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm hover:underline">Heritage & History</a></li>
                <li><a href="#" className="text-sm hover:underline">Savile Row Tradition</a></li>
                <li><a href="#" className="text-sm hover:underline">Our Craftsmen</a></li>
                <li><a href="#" className="text-sm hover:underline">Awards & Recognition</a></li>
              </ul>
            </div>

            {/* Services */}
            <div className="col-span-3">
              <h3 className="font-serif text-lg font-semibold mb-6">Services</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm hover:underline">Alterations</a></li>
                <li><a href="#" className="text-sm hover:underline">Repairs</a></li>
                <li><a href="#" className="text-sm hover:underline">Cleaning & Care</a></li>
                <li><a href="#" className="text-sm hover:underline">Storage Solutions</a></li>
              </ul>
            </div>

            {/* Sustainability */}
            <div className="col-span-3">
              <h3 className="font-serif text-lg font-semibold mb-6">Sustainability</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm hover:underline">Ethical Sourcing</a></li>
                <li><a href="#" className="text-sm hover:underline">Local Production</a></li>
                <li><a href="#" className="text-sm hover:underline">Waste Reduction</a></li>
                <li><a href="#" className="text-sm hover:underline">Community Impact</a></li>
              </ul>
            </div>

            {/* Image Card */}
            <div className="col-span-3">
              <div className="relative group cursor-pointer">
                <img
                  src="/placeholder.svg?height=300&width=250"
                  alt="About Us"
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="mt-3 text-center">
                  <p className="font-serif text-sm font-semibold group-hover:text-gray-700 transition-colors">About</p>
                  <p className="text-sm group-hover:text-gray-600 transition-colors">Our Heritage</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Locations Menu Content
  if (menuType === 'locations') {
    return (
      <div className="absolute left-0 right-0 top-full w-full bg-[#e8e6e1] shadow-lg border-t border-gray-200">
        <div className="container mx-auto px-8 py-12">
          <div className="grid grid-cols-12 gap-8">
            {/* London */}
            <div className="col-span-3">
              <h3 className="font-serif text-lg font-semibold mb-6">London</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm hover:underline">Savile Row</a></li>
                <li><a href="#" className="text-sm hover:underline">Mayfair</a></li>
                <li><a href="#" className="text-sm hover:underline">City of London</a></li>
                <li><a href="#" className="text-sm hover:underline">Canary Wharf</a></li>
              </ul>
            </div>

            {/* International */}
            <div className="col-span-3">
              <h3 className="font-serif text-lg font-semibold mb-6">International</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm hover:underline">New York</a></li>
                <li><a href="#" className="text-sm hover:underline">Hong Kong</a></li>
                <li><a href="#" className="text-sm hover:underline">Dubai</a></li>
                <li><a href="#" className="text-sm hover:underline">Singapore</a></li>
              </ul>
            </div>

            {/* Services */}
            <div className="col-span-3">
              <h3 className="font-serif text-lg font-semibold mb-6">Location Services</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm hover:underline">Appointments</a></li>
                <li><a href="#" className="text-sm hover:underline">Private Consultations</a></li>
                <li><a href="#" className="text-sm hover:underline">Traveling Tailors</a></li>
                <li><a href="#" className="text-sm hover:underline">Contact Information</a></li>
              </ul>
            </div>

            {/* Image Card */}
            <div className="col-span-3">
              <div className="relative group cursor-pointer">
                <img
                  src="/placeholder.svg?height=300&width=250"
                  alt="Our Locations"
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="mt-3 text-center">
                  <p className="font-serif text-sm font-semibold group-hover:text-gray-700 transition-colors">Locations</p>
                  <p className="text-sm group-hover:text-gray-600 transition-colors">Worldwide Service</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return null
}

export default function NavigationHeader() {
  const [activeMenu, setActiveMenu] = React.useState<string | null>(null)

  return (
    <header className="w-full bg-[#e8e6e1] border-b border-gray-200">
      {/* Top Bar */}
      <div className="border-b border-gray-200">
        <div className="container mx-auto px-8 py-3 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 text-sm hover:underline transition-all duration-200 hover:text-gray-700">
            <Calendar className="w-4 h-4" />
            <span>Book an Appointment</span>
          </a>

          <div className="flex items-center gap-6">
            <button className="hover:opacity-70 transition-opacity duration-200 hover:scale-110">
              <Phone className="w-5 h-5" />
            </button>
            <button className="hover:opacity-70 transition-opacity duration-200 hover:scale-110">
              <Search className="w-5 h-5" />
            </button>
            <button className="hover:opacity-70 transition-opacity duration-200 hover:scale-110">
              <User className="w-5 h-5" />
            </button>
            <button className="hover:opacity-70 transition-opacity duration-200 hover:scale-110">
              <ShoppingCart className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div
        className="relative"
        onMouseLeave={() => setActiveMenu(null)}
      >
        <div className="container mx-auto px-8 py-6">
          <div className="flex items-center justify-center gap-12">
            {/* Left Navigation */}
            <nav className="flex items-center gap-8">
              <div
                className="relative"
                onMouseEnter={() => setActiveMenu('bespoke')}
              >
                <button className="flex items-center gap-1 text-base hover:opacity-70 transition-opacity duration-200">
                  Bespoke
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>

              <div
                className="relative"
                onMouseEnter={() => setActiveMenu('shop')}
              >
                <button className="flex items-center gap-1 text-base hover:opacity-70 transition-opacity duration-200">
                  Shop
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>

              <div
                className="relative"
                onMouseEnter={() => setActiveMenu('about')}
              >
                <button className="flex items-center gap-1 text-base hover:opacity-70 transition-opacity duration-200">
                  About
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            </nav>

            {/* Logo */}
            <a href="/" className="flex flex-col items-center hover:opacity-80 transition-opacity duration-200">
              <h1 className="font-serif text-3xl tracking-tight">Cad & The Dandy</h1>
              <p className="text-xs tracking-widest mt-1">SAVILE ROW</p>
            </a>

            {/* Right Navigation */}
            <nav className="flex items-center gap-8">
              <div
                className="relative"
                onMouseEnter={() => setActiveMenu('locations')}
              >
                <button className="flex items-center gap-1 text-base hover:opacity-70 transition-opacity duration-200">
                  Locations
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>

              <a href="#" className="text-base hover:opacity-70 transition-opacity duration-200">
                The Journal
              </a>

              <a href="#" className="text-base hover:opacity-70 transition-opacity duration-200">
                Contact
              </a>
            </nav>
          </div>
        </div>

        {/* Mega Menu */}
        <MegaMenuContent isOpen={!!activeMenu} menuType={activeMenu} />
      </div>
    </header>
  )
}