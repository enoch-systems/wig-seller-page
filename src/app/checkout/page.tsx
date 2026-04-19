'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useCart } from '@/context/CartContext';

export default function CheckoutPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart, getCartTotal } = useCart();

  const handleCheckout = () => {
    if (cart.length === 0) return;

    let message = 'Hi ZinnyStore 👋\n\n';
    message += '#NEW ORDER\n\n';
    message += 'Here is my order:\n\n';
    
    cart.forEach((item) => {
      message += `• ${item.name} -\n`;
      message += ` Price: ₦${item.price.toLocaleString()}\n`;
      message += `  Qty: ${item.quantity}\n\n`;
    });
  
    message += '──────────────────\n';
    message += `Total: ₦${getCartTotal().toLocaleString()}\n\n`;
    message += "I'm interested in these items. Please let me know about delivery options and availability. Thank you!";

    const whatsappNumber = '2349162919586';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col pt-20 bg-white">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main className="flex-grow py-12 max-w-lg px-6 md:mx-auto lg:mx-auto lg:max-w-7xl lg:px-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-6 group"
        >
          <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </Link>
        
        <div className="text-center">
          <h1 className="text-2xl font-normal text-gray-900 mb-6 border-b-2 border-pink-500 pb-2 inline-block">Cart</h1>
        </div>

        {cart.length === 0 ? (
          <div className="text-center py-20">
            <svg className="w-16 h-16  text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Your cart is empty</h2>
            <p className="text-gray-500 mb-6">Add some items to get started</p>
            <button
              onClick={() => window.location.href = '/shop'}
              className="inline-flex items-center gap-2 bg-transparent border border-gray-300 text-gray-700 py-3 px-6 font-medium rounded-full cursor-pointer hover:bg-gray-50 transition-colors mt-20"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="lg:grid lg:grid-cols-3 lg:gap-8 lg:items-start">
            {/* My Cart Section */}
            <div className="lg:col-span-2 bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">My Cart ({cart.length} {cart.length === 1 ? 'item' : 'items'})</h2>
              <div className="space-y-6">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-6 pb-6 border-b border-gray-100 last:border-0 last:pb-0"
                  >
                    <div className="w-24 h-24 lg:w-32 lg:h-32 bg-gray-100 rounded-lg flex-shrink-0 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-grow flex flex-col justify-between">
                      <div>
                        <h3 className="font-medium text-gray-900 text-base lg:text-lg mb-1">{item.name}</h3>
                        <p className="text-gray-900 font-semibold text-lg mb-3">₦{item.price.toLocaleString()}</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => decreaseQuantity(item.id)}
                            className="w-9 h-9 lg:w-10 lg:h-10 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center transition-colors cursor-pointer"
                          >
                            <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                            </svg>
                          </button>
                          <span className="text-base lg:text-lg font-medium text-gray-900 w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => increaseQuantity(item.id)}
                            className="w-9 h-9 lg:w-10 lg:h-10 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center transition-colors cursor-pointer"
                          >
                            <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                          </button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-600 hover:bg-red-50 p-2 rounded-lg transition-colors cursor-pointer"
                        >
                          <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Info Section */}
            <div className="lg:col-span-1 lg:sticky lg:top-24 space-y-6">
              <button
                onClick={clearCart}
                className="w-full bg-red-50 border border-red-200 text-red-600 py-3 font-medium rounded-xl hover:bg-red-100 transition-colors cursor-pointer"
              >
                Clear All Items
              </button>
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-gray-900 mb-6">Order Info</h2>
                <div className="space-y-4">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span className="font-medium">₦{getCartTotal().toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping Cost</span>
                    <span className="font-medium text-green-600">Free</span>
                  </div>
                  <div className="flex justify-between text-gray-900 font-semibold text-xl pt-4 border-t border-gray-200">
                    <span>Total</span>
                    <span>₦{getCartTotal().toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Checkout Button */}
              <button 
                onClick={handleCheckout}
                className="w-full bg-green-600 text-white py-4 font-semibold rounded-xl hover:bg-green-700 transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Send Order to Whatsapp
              </button>

              <p className="text-center text-sm text-gray-500">
                Chat / call or negotiate with vendor via WhatsApp.
              </p>
              <p className="text-center text-sm text-gray-500">
                No card needed.
              </p>

              <div className="text-center pt-4">
                <button
                  onClick={() => window.location.href = '/shop'}
                  className="inline-flex items-center gap-2 bg-transparent border border-gray-300 text-gray-700 py-3 px-6 text-sm font-medium rounded-full cursor-pointer hover:bg-gray-50 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
