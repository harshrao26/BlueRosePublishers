import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
import { AiOutlineHeart } from 'react-icons/ai';
import EcommerceSection from '../components/EcommerceSection'

const ShopNow = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold text-center mb-12 animate-fadeInUp">Shop Now</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Product Card 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 relative animate-fadeInUp">
            <img
              src="https://via.placeholder.com/300"
              alt="Product 1"
              className="w-full h-48 object-cover rounded-md mb-4 transform hover:scale-105 transition-transform duration-300"
            />
            <h2 className="text-xl font-semibold mb-2">Product 1</h2>
            <p className="text-gray-600 mb-4">Durable and reliable product at an affordable price.</p>
            <div className="flex items-center justify-between">
              <button className="flex items-center bg-zinc-800 text-white px-4 py-2 rounded-md hover:zinc-900 transition-all">
                <FaShoppingCart className="mr-2" /> Add to Cart
              </button>
              <button className="text-red-500 hover:text-red-600 transition-all">
                <AiOutlineHeart size={24} />
              </button>
            </div>
          </div>

          {/* Product Card 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 relative animate-fadeInUp delay-200">
            <img
              src="https://via.placeholder.com/300"
              alt="Product 2"
              className="w-full h-48 object-cover rounded-md mb-4 transform hover:scale-105 transition-transform duration-300"
            />
            <h2 className="text-xl font-semibold mb-2">Product 2</h2>
            <p className="text-gray-600 mb-4">Durable and reliable product at an affordable price.</p>
            <div className="flex items-center justify-between">
              <button className="flex items-center bg-zinc-800 text-white px-4 py-2 rounded-md hover:bg-zinc-900 transition-all">
                <FaShoppingCart className="mr-2" /> Add to Cart
              </button>
              <button className="text-red-500 hover:text-red-600 transition-all">
                <AiOutlineHeart size={24} />
              </button>
            </div>
          </div>

          {/* Product Card 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 relative animate-fadeInUp delay-400">
            <img
              src="https://via.placeholder.com/300"
              alt="Product 3"
              className="w-full h-48 object-cover rounded-md mb-4 transform hover:scale-105 transition-transform duration-300"
            />
            <h2 className="text-xl font-semibold mb-2">Product 3</h2>
            <p className="text-gray-600 mb-4">Durable and reliable product at an affordable price.</p>
            <div className="flex items-center justify-between">
              <button className="flex items-center bg-zinc-800 text-white px-4 py-2 rounded-md hover:bg-zinc-900 transition-all">
                <FaShoppingCart className="mr-2" /> Add to Cart
              </button>
              <button className="text-red-500 hover:text-red-600 transition-all">
                <AiOutlineHeart size={24} />
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <button className="flex items-center bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-all">
            Explore More <FiArrowRight className="ml-2" />
          </button>
        </div>
      <EcommerceSection/>
      </div>
    </div>
  );
};

export default ShopNow;
