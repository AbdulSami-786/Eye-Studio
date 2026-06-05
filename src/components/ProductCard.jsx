import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  // Get card image
  const cardImage = product.cardImage || product.image || '/placeholder.jpg';

  // Get discount percentage
  const getDiscountPercent = () => {
    if (product.pricing?.discount_percent) {
      return product.pricing.discount_percent;
    }
    if (product.discount) {
      return parseInt(product.discount);
    }
    return 0;
  };

  // Get prices
  const discountedPrice = product.pricing?.discounted || 0;
  const originalPrice = product.pricing?.original || 0;
  const discountPercent = getDiscountPercent();

  // Format price
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-PK', {
      style: 'currency',
      currency: 'PKR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    const cartItem = {
      id: product.id,
      name: product.name,
      price: discountedPrice,
      originalPrice: originalPrice,
      discount: discountPercent,
      image: cardImage,
      category: product.category,
      shape: product.style || product.shape,
      quantity: 1,
    };
    addToCart(cartItem, 1);
  };

  const handleViewDetails = () => {
    navigate(`/product/${product.id}`);
    window.scrollTo(0, 0);
  };

  return (
    <div
      onClick={handleViewDetails}
      className="group bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer h-full flex flex-col"
    >
      {/* Image Container */}
      <div className="relative w-full aspect-square overflow-hidden bg-gray-100">
        {/* Image */}
        <img
          src={cardImage}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          onError={(e) => {
            e.target.src = '/placeholder.jpg';
          }}
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {discountPercent > 0 && (
            <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-md">
              -{discountPercent}%
            </span>
          )}
          {product.badges && product.badges.map((badge, idx) => (
            <span
              key={idx}
              className="bg-black text-white text-xs font-bold px-2 py-1 rounded-full shadow-md"
            >
              {badge}
            </span>
          ))}
        </div>

        {/* Hover Overlay with Buttons */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <button
            onClick={handleAddToCart}
            className="bg-white text-black px-4 py-2 rounded-full font-semibold text-sm hover:bg-gray-100 transition-colors flex items-center gap-2"
            title="Add to cart"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            Add to Cart
          </button>
          <button
            onClick={handleViewDetails}
            className="bg-black text-white px-4 py-2 rounded-full font-semibold text-sm hover:bg-gray-800 transition-colors"
            title="View details"
          >
            View
          </button>
        </div>

        {/* Stock Indicator */}
        {!product.in_stock && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <span className="text-white font-bold text-lg">Out of Stock</span>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4 flex-1 flex flex-col">
        {/* Category */}
        <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1">
          {product.category}
        </p>

        {/* Product Name */}
        <h3 className="text-sm font-bold text-gray-900 line-clamp-2 mb-2 group-hover:text-black transition-colors">
          {product.name}
        </h3>

        {/* Style/Color */}
        {product.style && (
          <p className="text-xs text-gray-600 mb-2">
            <span className="font-medium">{product.style}</span> • {product.color}
          </p>
        )}

        {/* Features (First 2) */}
        {product.features && product.features.length > 0 && (
          <div className="mb-3 flex flex-wrap gap-1">
            {product.features.slice(0, 2).map((feature, idx) => (
              <span
                key={idx}
                className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full"
              >
                {feature}
              </span>
            ))}
          </div>
        )}

        {/* Price Section */}
        <div className="mt-auto pt-3 border-t border-gray-100">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-lg font-bold text-gray-900">
              {formatPrice(discountedPrice)}
            </span>
            {originalPrice > discountedPrice && (
              <span className="text-sm text-gray-400 line-through">
                {formatPrice(originalPrice)}
              </span>
            )}
          </div>

          {/* Prescription Ready Badge */}
          {product.prescription_ready && (
            <div className="flex items-center gap-1 text-xs text-blue-600 font-semibold">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Rx Ready
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
