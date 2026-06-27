// // import { useParams, useNavigate } from 'react-router-dom';
// // import { useCart } from '../context/CartContext';
// // import { products } from '../data/product';
// // import { useState, useEffect } from 'react';

// // const ProductDetail = () => {
// //   const { id } = useParams();
// //   const navigate = useNavigate();
// //   const [product, setProduct] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const [quantity, setQuantity] = useState(1);
// //   const [selectedImage, setSelectedImage] = useState(0);
// //   const [showAddToCart, setShowAddToCart] = useState(false);
// //   const [showPrescriptionForm, setShowPrescriptionForm] = useState(false);
// //   const [prescription, setPrescription] = useState({
// //     rightEye: { sph: '', cyl: '', axis: '', add: '' },
// //     leftEye: { sph: '', cyl: '', axis: '', add: '' },
// //     pd: '',
// //     notes: ''
// //   });

// //   // Find product by ID
// //   useEffect(() => {
// //     try {
// //       setLoading(true);
// //       const productId = id.toString();
// //       const foundProduct = products.find(p => p.id === productId);

// //       if (!foundProduct) {
// //         setProduct(null);
// //         setLoading(false);
// //         return;
// //       }

// //       setProduct(foundProduct);
// //       setSelectedImage(0);
// //       setQuantity(1);
// //       setLoading(false);
// //     } catch (err) {
// //       console.error('Error loading product:', err);
// //       setLoading(false);
// //     }
// //   }, [id]);

// //   const { addToCart } = useCart();

// //   if (loading) {
// //     return (
// //       <div className="min-h-screen flex items-center justify-center bg-gray-50">
// //         <div className="text-center">
// //           <div className="w-16 h-16 border-4 border-gray-200 border-t-black rounded-full animate-spin mx-auto mb-4"></div>
// //           <p className="text-gray-600 font-medium">Loading product...</p>
// //         </div>
// //       </div>
// //     );
// //   }

// //   if (!product) {
// //     return (
// //       <div className="min-h-screen flex items-center justify-center bg-gray-50">
// //         <div className="text-center">
// //           <h2 className="text-3xl font-bold text-gray-900 mb-4">Product Not Found</h2>
// //           <p className="text-gray-600 mb-6">The product you're looking for doesn't exist.</p>
// //           <button
// //             onClick={() => navigate('/products')}
// //             className="bg-black text-white px-8 py-3 rounded-full font-bold hover:bg-gray-800 transition-colors"
// //           >
// //             Back to Products
// //           </button>
// //         </div>
// //       </div>
// //     );
// //   }

// //   // Get product images - use detailImages if available, fallback to cardImage
// //   const images = product.detailImages && product.detailImages.length > 0 
// //     ? product.detailImages 
// //     : [product.cardImage || '/placeholder.jpg'];

// //   const currentImage = images[selectedImage] || '/placeholder.jpg';

// //   // Calculate prices
// //   const discountedPrice = product.pricing?.discounted || 0;
// //   const originalPrice = product.pricing?.original || 0;
// //   const discountPercent = product.pricing?.discount_percent || 0;

// //   const formatPrice = (price) => {
// //     return new Intl.NumberFormat('en-PK', {
// //       style: 'currency',
// //       currency: 'PKR',
// //       minimumFractionDigits: 0,
// //       maximumFractionDigits: 0
// //     }).format(price);
// //   };

// //   const handleAddToCart = () => {
// //     const cartItem = {
// //       id: product.id,
// //       name: product.name,
// //       price: discountedPrice,
// //       originalPrice: originalPrice,
// //       discount: discountPercent,
// //       image: product.cardImage || '/placeholder.jpg',
// //       category: product.category,
// //       shape: product.style,
// //       material: product.material,
// //       color: product.color,
// //       quantity: quantity,
// //     };
// //     addToCart(cartItem, quantity);
// //     setShowAddToCart(true);
// //     setTimeout(() => setShowAddToCart(false), 2000);
// //   };

// //   const handleBuyNow = () => {
// //     handleAddToCart();
// //     navigate('/checkout');
// //   };

// //   return (
// //     <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
// //       {/* Breadcrumb */}
// //       <div className="container mx-auto px-4 py-6">
// //         <button
// //           onClick={() => navigate(-1)}
// //           className="flex items-center gap-2 text-gray-600 hover:text-black font-medium transition-colors"
// //         >
// //           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
// //           </svg>
// //           Back
// //         </button>
// //       </div>

// //       {/* Main Content */}
// //       <div className="container mx-auto px-4 pb-16">
// //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
// //           {/* Image Gallery */}
// //           <div className="space-y-4">
// //             {/* Main Image */}
// //             <div className="aspect-square bg-gray-100 rounded-3xl overflow-hidden shadow-lg border border-gray-200">
// //               <img
// //                 src={currentImage}
// //                 alt={product.name}
// //                 className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
// //                 onError={(e) => {
// //                   e.target.src = '/placeholder.jpg';
// //                 }}
// //               />
// //             </div>

// //             {/* Thumbnails */}
// //             {images.length > 1 && (
// //               <div className="flex gap-3 overflow-x-auto pb-2">
// //                 {images.map((img, idx) => (
// //                   <button
// //                     key={idx}
// //                     onClick={() => setSelectedImage(idx)}
// //                     className={`w-24 h-24 rounded-xl overflow-hidden border-2 flex-shrink-0 transition-all ${
// //                       selectedImage === idx
// //                         ? 'border-black shadow-md'
// //                         : 'border-gray-200 opacity-70 hover:opacity-100'
// //                     }`}
// //                   >
// //                     <img
// //                       src={img}
// //                       alt={`View ${idx + 1}`}
// //                       className="w-full h-full object-cover"
// //                       onError={(e) => {
// //                         e.target.src = '/placeholder.jpg';
// //                       }}
// //                     />
// //                   </button>
// //                 ))}
// //               </div>
// //             )}
// //           </div>

// //           {/* Product Info */}
// //           <div className="flex flex-col justify-start space-y-6">
// //             {/* Category & Badges */}
// //             <div>
// //               <p className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-3">
// //                 {product.category}
// //               </p>

// //               <div className="flex flex-wrap gap-2 mb-4">
// //                 {discountPercent > 0 && (
// //                   <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
// //                     Save {discountPercent}%
// //                   </span>
// //                 )}
// //                 {product.badges && product.badges.map((badge, idx) => (
// //                   <span
// //                     key={idx}
// //                     className="bg-black text-white text-xs font-bold px-3 py-1 rounded-full"
// //                   >
// //                     {badge}
// //                   </span>
// //                 ))}
// //                 {product.in_stock ? (
// //                   <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">
// //                     In Stock
// //                   </span>
// //                 ) : (
// //                   <span className="bg-red-100 text-red-700 text-xs font-bold px-3 py-1 rounded-full">
// //                     Out of Stock
// //                   </span>
// //                 )}
// //               </div>
// //             </div>

// //             {/* Product Name */}
// //             <div>
// //               <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 leading-tight">
// //                 {product.name}
// //               </h1>
// //               <p className="text-lg text-gray-600">
// //                 {product.style} • {product.color} • {product.material}
// //               </p>
// //             </div>

// //             {/* Price */}
// //             <div className="border-y border-gray-200 py-6">
// //               <div className="flex items-baseline gap-3 mb-2">
// //                 <span className="text-4xl font-bold text-gray-900">
// //                   {formatPrice(discountedPrice)}
// //                 </span>
// //                 {originalPrice > discountedPrice && (
// //                   <>
// //                     <span className="text-xl text-gray-400 line-through">
// //                       {formatPrice(originalPrice)}
// //                     </span>
// //                     <span className="text-green-600 font-semibold">
// //                       Save {formatPrice(originalPrice - discountedPrice)}
// //                     </span>
// //                   </>
// //                 )}
// //               </div>
// //               <p className="text-sm text-gray-500">Inclusive of all taxes</p>
// //             </div>

// //             {/* Description */}
// //             <div>
// //               <h3 className="font-bold text-lg text-gray-900 mb-3">About this product</h3>
// //               <p className="text-gray-700 leading-relaxed mb-4">
// //                 {product.description}
// //               </p>
// //             </div>

// //             {/* Features */}
// //             {product.features && product.features.length > 0 && (
// //               <div>
// //                 <h3 className="font-bold text-lg text-gray-900 mb-3">Key Features</h3>
// //                 <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
// //                   {product.features.map((feature, idx) => (
// //                     <li key={idx} className="flex items-center gap-3 text-gray-700">
// //                       <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
// //                       </svg>
// //                       {feature}
// //                     </li>
// //                   ))}
// //                 </ul>
// //               </div>
// //             )}

// //             {/* Product Details */}
// //             <div className="bg-gray-50 rounded-2xl p-6 space-y-3">
// //               <div className="flex justify-between items-center py-2 border-b border-gray-200">
// //                 <span className="text-gray-600 font-medium">Style</span>
// //                 <span className="text-gray-900 font-bold">{product.style}</span>
// //               </div>
// //               <div className="flex justify-between items-center py-2 border-b border-gray-200">
// //                 <span className="text-gray-600 font-medium">Material</span>
// //                 <span className="text-gray-900 font-bold">{product.material}</span>
// //               </div>
// //               <div className="flex justify-between items-center py-2 border-b border-gray-200">
// //                 <span className="text-gray-600 font-medium">Color</span>
// //                 <span className="text-gray-900 font-bold">{product.color}</span>
// //               </div>
// //               {product.prescription_ready && (
// //                 <div className="flex justify-between items-center py-2">
// //                   <span className="text-gray-600 font-medium">Prescription Ready</span>
// //                   <span className="inline-flex items-center gap-1 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-bold">
// //                     <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
// //                       <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
// //                     </svg>
// //                     Yes
// //                   </span>
// //                 </div>
// //               )}
// //             </div>

// //             {/* Quantity Selector */}
// //             <div className="flex items-center gap-4">
// //               <span className="text-gray-700 font-medium">Quantity:</span>
// //               <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
// //                 <button
// //                   onClick={() => setQuantity(Math.max(1, quantity - 1))}
// //                   className="px-4 py-2 hover:bg-gray-100 transition-colors"
// //                   disabled={quantity <= 1}
// //                 >
// //                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
// //                   </svg>
// //                 </button>
// //                 <span className="px-6 py-2 font-bold text-lg w-16 text-center">{quantity}</span>
// //                 <button
// //                   onClick={() => setQuantity(quantity + 1)}
// //                   className="px-4 py-2 hover:bg-gray-100 transition-colors"
// //                 >
// //                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
// //                   </svg>
// //                 </button>
// //               </div>
// //             </div>

// //             {/* Action Buttons */}
// //             <div className="flex gap-4 pt-4">
// //               <button
// //                 onClick={handleAddToCart}
// //                 disabled={!product.in_stock}
// //                 className="flex-1 bg-gray-900 text-white px-6 py-4 rounded-xl font-bold hover:bg-black transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-md"
// //               >
// //                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
// //                 </svg>
// //                 Add to Cart
// //               </button>
// //               <button
// //                 onClick={handleBuyNow}
// //                 disabled={!product.in_stock}
// //                 className="flex-1 bg-blue-600 text-white px-6 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all disabled:opacity-50 shadow-md"
// //               >
// //                 Buy Now
// //               </button>
// //             </div>

// //             {/* Success Message */}
// //             {showAddToCart && (
// //               <div className="fixed top-24 right-6 z-50 bg-green-500 text-white px-6 py-3 rounded-full shadow-lg animate-slide-up font-medium">
// //                 ✓ Added to cart!
// //               </div>
// //             )}

// //             {/* Prescription Form Toggle */}
// //             {product.prescription_ready && (
// //               <button
// //                 onClick={() => setShowPrescriptionForm(!showPrescriptionForm)}
// //                 className="w-full flex items-center justify-between bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-300 px-6 py-4 rounded-xl font-bold text-blue-900 hover:shadow-md transition-all"
// //               >
// //                 <span className="flex items-center gap-2">
// //                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
// //                   </svg>
// //                   Add Your Prescription (Optional)
// //                 </span>
// //                 <svg className={`w-5 h-5 transition-transform ${showPrescriptionForm ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
// //                 </svg>
// //               </button>
// //             )}

// //             {/* Prescription Form */}
// //             {showPrescriptionForm && product.prescription_ready && (
// //               <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200 space-y-6">
// //                 <div className="flex items-center gap-2 mb-4">
// //                   <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
// //                     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
// //                       <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
// //                     </svg>
// //                   </div>
// //                   <div>
// //                     <h3 className="font-bold text-lg text-blue-900">Prescription Details</h3>
// //                     <p className="text-xs text-blue-700">Enter your eye prescription (all fields optional)</p>
// //                   </div>
// //                 </div>

// //                 {/* Right Eye */}
// //                 <div className="space-y-3">
// //                   <h4 className="font-bold text-blue-900 flex items-center gap-2">
// //                     <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs">R</span>
// //                     Right Eye
// //                   </h4>
// //                   <div className="grid grid-cols-2 gap-3">
// //                     <div>
// //                       <label className="text-xs font-bold text-blue-800 uppercase tracking-wider">SPH (Sphere)</label>
// //                       <input
// //                         type="text"
// //                         placeholder="+1.00 / -1.00"
// //                         value={prescription.rightEye.sph}
// //                         onChange={(e) => setPrescription({
// //                           ...prescription,
// //                           rightEye: { ...prescription.rightEye, sph: e.target.value }
// //                         })}
// //                         className="w-full mt-1 px-3 py-2 bg-white border border-blue-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
// //                       />
// //                     </div>
// //                     <div>
// //                       <label className="text-xs font-bold text-blue-800 uppercase tracking-wider">CYL (Cylinder)</label>
// //                       <input
// //                         type="text"
// //                         placeholder="+0.50 / -0.50"
// //                         value={prescription.rightEye.cyl}
// //                         onChange={(e) => setPrescription({
// //                           ...prescription,
// //                           rightEye: { ...prescription.rightEye, cyl: e.target.value }
// //                         })}
// //                         className="w-full mt-1 px-3 py-2 bg-white border border-blue-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
// //                       />
// //                     </div>
// //                     <div>
// //                       <label className="text-xs font-bold text-blue-800 uppercase tracking-wider">AXIS (Axis)</label>
// //                       <input
// //                         type="text"
// //                         placeholder="0° - 180°"
// //                         value={prescription.rightEye.axis}
// //                         onChange={(e) => setPrescription({
// //                           ...prescription,
// //                           rightEye: { ...prescription.rightEye, axis: e.target.value }
// //                         })}
// //                         className="w-full mt-1 px-3 py-2 bg-white border border-blue-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
// //                       />
// //                     </div>
// //                     <div>
// //                       <label className="text-xs font-bold text-blue-800 uppercase tracking-wider">ADD (Add)</label>
// //                       <input
// //                         type="text"
// //                         placeholder="+1.00 / +2.00"
// //                         value={prescription.rightEye.add}
// //                         onChange={(e) => setPrescription({
// //                           ...prescription,
// //                           rightEye: { ...prescription.rightEye, add: e.target.value }
// //                         })}
// //                         className="w-full mt-1 px-3 py-2 bg-white border border-blue-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
// //                       />
// //                     </div>
// //                   </div>
// //                 </div>

// //                 {/* Left Eye */}
// //                 <div className="space-y-3 pt-4 border-t-2 border-blue-300">
// //                   <h4 className="font-bold text-blue-900 flex items-center gap-2">
// //                     <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs">L</span>
// //                     Left Eye
// //                   </h4>
// //                   <div className="grid grid-cols-2 gap-3">
// //                     <div>
// //                       <label className="text-xs font-bold text-blue-800 uppercase tracking-wider">SPH (Sphere)</label>
// //                       <input
// //                         type="text"
// //                         placeholder="+1.00 / -1.00"
// //                         value={prescription.leftEye.sph}
// //                         onChange={(e) => setPrescription({
// //                           ...prescription,
// //                           leftEye: { ...prescription.leftEye, sph: e.target.value }
// //                         })}
// //                         className="w-full mt-1 px-3 py-2 bg-white border border-blue-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
// //                       />
// //                     </div>
// //                     <div>
// //                       <label className="text-xs font-bold text-blue-800 uppercase tracking-wider">CYL (Cylinder)</label>
// //                       <input
// //                         type="text"
// //                         placeholder="+0.50 / -0.50"
// //                         value={prescription.leftEye.cyl}
// //                         onChange={(e) => setPrescription({
// //                           ...prescription,
// //                           leftEye: { ...prescription.leftEye, cyl: e.target.value }
// //                         })}
// //                         className="w-full mt-1 px-3 py-2 bg-white border border-blue-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
// //                       />
// //                     </div>
// //                     <div>
// //                       <label className="text-xs font-bold text-blue-800 uppercase tracking-wider">AXIS (Axis)</label>
// //                       <input
// //                         type="text"
// //                         placeholder="0° - 180°"
// //                         value={prescription.leftEye.axis}
// //                         onChange={(e) => setPrescription({
// //                           ...prescription,
// //                           leftEye: { ...prescription.leftEye, axis: e.target.value }
// //                         })}
// //                         className="w-full mt-1 px-3 py-2 bg-white border border-blue-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
// //                       />
// //                     </div>
// //                     <div>
// //                       <label className="text-xs font-bold text-blue-800 uppercase tracking-wider">ADD (Add)</label>
// //                       <input
// //                         type="text"
// //                         placeholder="+1.00 / +2.00"
// //                         value={prescription.leftEye.add}
// //                         onChange={(e) => setPrescription({
// //                           ...prescription,
// //                           leftEye: { ...prescription.leftEye, add: e.target.value }
// //                         })}
// //                         className="w-full mt-1 px-3 py-2 bg-white border border-blue-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
// //                       />
// //                     </div>
// //                   </div>
// //                 </div>

// //                 {/* PD and Notes */}
// //                 <div className="space-y-3 pt-4 border-t-2 border-blue-300">
// //                   <div>
// //                     <label className="text-xs font-bold text-blue-800 uppercase tracking-wider">PD - Pupillary Distance</label>
// //                     <input
// //                       type="text"
// //                       placeholder="e.g. 62 or 31/31 (mm)"
// //                       value={prescription.pd}
// //                       onChange={(e) => setPrescription({ ...prescription, pd: e.target.value })}
// //                       className="w-full mt-1 px-3 py-2 bg-white border border-blue-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
// //                     />
// //                   </div>
// //                   <div>
// //                     <label className="text-xs font-bold text-blue-800 uppercase tracking-wider">Additional Notes</label>
// //                     <textarea
// //                       placeholder="Any special instructions or notes about your prescription..."
// //                       value={prescription.notes}
// //                       onChange={(e) => setPrescription({ ...prescription, notes: e.target.value })}
// //                       rows="3"
// //                       className="w-full mt-1 px-3 py-2 bg-white border border-blue-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
// //                     />
// //                   </div>
// //                 </div>

// //                 {/* Info Box */}
// //                 <div className="bg-white/60 border border-blue-300 rounded-lg p-3 text-xs text-blue-900">
// //                   <p className="font-bold mb-1">💡 Need Help?</p>
// //                   <p>You can find this information on your prescription slip from your eye doctor. Contact us on WhatsApp if you need assistance.</p>
// //                 </div>
// //               </div>
// //             )}

// //             {/* Trust Badges */}
// //             <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mt-6">
// //               <div className="grid grid-cols-3 gap-4 text-center text-xs">
// //                 <div>
// //                   <p className="font-bold text-yellow-900">30-Day</p>
// //                   <p className="text-yellow-800">Returns</p>
// //                 </div>
// //                 <div>
// //                   <p className="font-bold text-yellow-900">100%</p>
// //                   <p className="text-yellow-800">Authentic</p>
// //                 </div>
// //                 <div>
// //                   <p className="font-bold text-yellow-900">Fast</p>
// //                   <p className="text-yellow-800">Delivery</p>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* WhatsApp Support */}
// //             <a
// //               href="https://wa.me/923334455667"
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               className="w-full flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-green-600 transition-colors text-center"
// //             >
// //               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
// //                 <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.255.949c-1.238.503-2.335 1.236-3.356 2.26-1.022 1.024-1.756 2.12-2.26 3.359-.425 1.119-.648 2.275-.648 3.406 0 1.131.223 2.287.648 3.406.504 1.239 1.239 2.335 2.26 3.359 1.024 1.022 2.118 1.756 3.356 2.26 1.119.425 2.275.648 3.406.648 1.13 0 2.287-.223 3.406-.648 1.239-.504 2.335-1.239 3.359-2.26 1.022-1.024 1.756-2.12 2.26-3.359.425-1.119.648-2.275.648-3.406 0-1.131-.223-2.287-.648-3.406-.504-1.239-1.239-2.335-2.26-3.359-1.024-1.022-2.118-1.756-3.356-2.26-1.119-.425-2.275-.648-3.406-.648" />
// //               </svg>
// //               Chat on WhatsApp
// //             </a>
// //           </div>
// //         </div>

// //         {/* Related Products */}
// //         <section className="mt-20 pt-16 border-t border-gray-200">
// //           <h2 className="text-3xl font-bold text-gray-900 mb-8">You Might Also Like</h2>
// //           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
// //             {products
// //               .filter(p => p.category === product.category && p.id !== product.id)
// //               .slice(0, 3)
// //               .map(relatedProduct => (
// //                 <div
// //                   key={relatedProduct.id}
// //                   onClick={() => {
// //                     navigate(`/product/${relatedProduct.id}`);
// //                     window.scrollTo(0, 0);
// //                   }}
// //                   className="group bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
// //                 >
// //                   <div className="aspect-square bg-gray-100 overflow-hidden">
// //                     <img
// //                       src={relatedProduct.cardImage || '/placeholder.jpg'}
// //                       alt={relatedProduct.name}
// //                       className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
// //                       onError={(e) => {
// //                         e.target.src = '/placeholder.jpg';
// //                       }}
// //                     />
// //                   </div>
// //                   <div className="p-4">
// //                     <h4 className="font-bold text-gray-900 group-hover:text-black mb-1">{relatedProduct.name}</h4>
// //                     <p className="text-gray-600">
// //                       {new Intl.NumberFormat('en-PK', {
// //                         style: 'currency',
// //                         currency: 'PKR',
// //                         minimumFractionDigits: 0,
// //                         maximumFractionDigits: 0
// //                       }).format(relatedProduct.pricing?.discounted || 0)}
// //                     </p>
// //                   </div>
// //                 </div>
// //               ))}
// //           </div>
// //         </section>
// //       </div>

// //       <style>{`
// //         @keyframes slideUp {
// //           from {
// //             opacity: 0;
// //             transform: translateY(20px);
// //           }
// //           to {
// //             opacity: 1;
// //             transform: translateY(0);
// //           }
// //         }
// //         .animate-slide-up {
// //           animation: slideUp 0.3s ease-out forwards;
// //         }
// //       `}</style>
// //     </div>
// //   );
// // };

// // export default ProductDetail;















// import { useParams, useNavigate } from 'react-router-dom';
// import { useCart } from '../context/CartContext';
// import { products } from '../data/product';
// import { useState, useEffect } from 'react';

// const ProductDetail = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [quantity, setQuantity] = useState(1);
//   const [selectedImage, setSelectedImage] = useState(0);
//   const [showAddToCart, setShowAddToCart] = useState(false);
//   const [showPrescriptionForm, setShowPrescriptionForm] = useState(false);
//   const [selectedVariant, setSelectedVariant] = useState(0);
//   const [prescription, setPrescription] = useState({
//     rightEye: { sph: '', cyl: '', axis: '', add: '' },
//     leftEye: { sph: '', cyl: '', axis: '', add: '' },
//     pd: '',
//     notes: ''
//   });

//   // Find product by ID
//   useEffect(() => {
//     try {
//       setLoading(true);
//       const productId = id.toString();
//       const foundProduct = products.find(p => p.id === productId);

//       if (!foundProduct) {
//         setProduct(null);
//         setLoading(false);
//         return;
//       }

//       setProduct(foundProduct);
//       setSelectedImage(0);
//       setQuantity(1);
//       setSelectedVariant(0);
//       setLoading(false);
//     } catch (err) {
//       console.error('Error loading product:', err);
//       setLoading(false);
//     }
//   }, [id]);

//   const { addToCart } = useCart();

//   // Get current variant or use main product
//   const currentVariant = product?.variants && product.variants.length > 0 
//     ? product.variants[selectedVariant] 
//     : null;

//   // Get product images - use variant images if available
//   const getImages = () => {
//     if (currentVariant?.detailImages && currentVariant.detailImages.length > 0) {
//       return currentVariant.detailImages;
//     }
//     if (product?.detailImages && product.detailImages.length > 0) {
//       return product.detailImages;
//     }
//     if (currentVariant?.cardImage) {
//       return [currentVariant.cardImage];
//     }
//     if (product?.cardImage) {
//       return [product.cardImage];
//     }
//     return ['/placeholder.jpg'];
//   };

//   const images = getImages();
//   const currentImage = images[selectedImage] || '/placeholder.jpg';

//   // Get variant-specific pricing if available
//   const discountedPrice = currentVariant?.pricing?.discounted || product?.pricing?.discounted || 0;
//   const originalPrice = currentVariant?.pricing?.original || product?.pricing?.original || 0;
//   const discountPercent = currentVariant?.pricing?.discount_percent || product?.pricing?.discount_percent || 0;

//   const formatPrice = (price) => {
//     return new Intl.NumberFormat('en-PK', {
//       style: 'currency',
//       currency: 'PKR',
//       minimumFractionDigits: 0,
//       maximumFractionDigits: 0
//     }).format(price);
//   };

//   const handleAddToCart = () => {
//     const cartItem = {
//       id: product.id,
//       variantId: currentVariant?.id,
//       name: currentVariant?.nameSuffix 
//         ? `${product.name} (${currentVariant.nameSuffix})` 
//         : product.name,
//       price: discountedPrice,
//       originalPrice: originalPrice,
//       discount: discountPercent,
//       image: product.cardImage || '/placeholder.jpg',
//       category: product.category,
//       shape: product.style,
//       material: product.material,
//       color: product.color,
//       quantity: quantity,
//     };
//     addToCart(cartItem, quantity);
//     setShowAddToCart(true);
//     setTimeout(() => setShowAddToCart(false), 2000);
//   };

//   const handleBuyNow = () => {
//     handleAddToCart();
//     navigate('/checkout');
//   };

//   const handleVariantChange = (index) => {
//     setSelectedVariant(index);
//     setSelectedImage(0); // Reset image selection when variant changes
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-50">
//         <div className="text-center">
//           <div className="w-16 h-16 border-4 border-gray-200 border-t-black rounded-full animate-spin mx-auto mb-4"></div>
//           <p className="text-gray-600 font-medium">Loading product...</p>
//         </div>
//       </div>
//     );
//   }

//   if (!product) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-50">
//         <div className="text-center">
//           <h2 className="text-3xl font-bold text-gray-900 mb-4">Product Not Found</h2>
//           <p className="text-gray-600 mb-6">The product you're looking for doesn't exist.</p>
//           <button
//             onClick={() => navigate('/products')}
//             className="bg-black text-white px-8 py-3 rounded-full font-bold hover:bg-gray-800 transition-colors"
//           >
//             Back to Products
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
//       {/* Breadcrumb */}
//       <div className="container mx-auto px-4 py-6">
//         <button
//           onClick={() => navigate(-1)}
//           className="flex items-center gap-2 text-gray-600 hover:text-black font-medium transition-colors"
//         >
//           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
//           </svg>
//           Back
//         </button>
//       </div>

//       {/* Main Content */}
//       <div className="container mx-auto px-4 pb-16">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           {/* Image Gallery */}
//           <div className="space-y-4">
//             {/* Main Image */}
//             <div className="aspect-square bg-gray-100 rounded-3xl overflow-hidden shadow-lg border border-gray-200">
//               <img
//                 src={currentImage}
//                 alt={currentVariant?.nameSuffix ? `${product.name} (${currentVariant.nameSuffix})` : product.name}
//                 className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
//                 onError={(e) => {
//                   e.target.src = '/placeholder.jpg';
//                 }}
//               />
//             </div>

//             {/* Thumbnails */}
//             {images.length > 1 && (
//               <div className="flex gap-3 overflow-x-auto pb-2">
//                 {images.map((img, idx) => (
//                   <button
//                     key={idx}
//                     onClick={() => setSelectedImage(idx)}
//                     className={`w-24 h-24 rounded-xl overflow-hidden border-2 flex-shrink-0 transition-all ${
//                       selectedImage === idx
//                         ? 'border-black shadow-md'
//                         : 'border-gray-200 opacity-70 hover:opacity-100'
//                     }`}
//                   >
//                     <img
//                       src={img}
//                       alt={`View ${idx + 1}`}
//                       className="w-full h-full object-cover"
//                       onError={(e) => {
//                         e.target.src = '/placeholder.jpg';
//                       }}
//                     />
//                   </button>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* Product Info */}
//           <div className="flex flex-col justify-start space-y-6">
//             {/* Category & Badges */}
//             <div>
//               <p className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-3">
//                 {product.category}
//               </p>

//               <div className="flex flex-wrap gap-2 mb-4">
//                 {discountPercent > 0 && (
//                   <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
//                     Save {discountPercent}%
//                   </span>
//                 )}
//                 {product.badges && product.badges.map((badge, idx) => (
//                   <span
//                     key={idx}
//                     className="bg-black text-white text-xs font-bold px-3 py-1 rounded-full"
//                   >
//                     {badge}
//                   </span>
//                 ))}
//                 {product.in_stock ? (
//                   <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">
//                     In Stock
//                   </span>
//                 ) : (
//                   <span className="bg-red-100 text-red-700 text-xs font-bold px-3 py-1 rounded-full">
//                     Out of Stock
//                   </span>
//                 )}
//               </div>
//             </div>

//             {/* Product Name */}
//             <div>
//               <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 leading-tight">
//                 {product.name}
//                 {currentVariant?.nameSuffix && (
//                   <span className="text-xl text-gray-500 block mt-1">
//                     {currentVariant.nameSuffix}
//                   </span>
//                 )}
//               </h1>
//               <p className="text-lg text-gray-600">
//                 {product.style} • {product.color} • {product.material}
//               </p>
//             </div>

//             {/* Variant Selector */}
//             {product.variants && product.variants.length > 1 && (
//               <div className="border-y border-gray-200 py-6">
//                 <h3 className="font-bold text-lg text-gray-900 mb-3">Select Variant</h3>
//                 <div className="flex flex-wrap gap-3">
//                   {product.variants.map((variant, idx) => (
//                     <button
//                       key={idx}
//                       onClick={() => handleVariantChange(idx)}
//                       className={`px-4 py-2 rounded-lg font-medium transition-all ${
//                         selectedVariant === idx
//                           ? 'bg-black text-white'
//                           : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                       }`}
//                     >
//                       {variant.nameSuffix}
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* Price */}
//             <div className="border-y border-gray-200 py-6">
//               <div className="flex items-baseline gap-3 mb-2">
//                 <span className="text-4xl font-bold text-gray-900">
//                   {formatPrice(discountedPrice)}
//                 </span>
//                 {originalPrice > discountedPrice && (
//                   <>
//                     <span className="text-xl text-gray-400 line-through">
//                       {formatPrice(originalPrice)}
//                     </span>
//                     <span className="text-green-600 font-semibold">
//                       Save {formatPrice(originalPrice - discountedPrice)}
//                     </span>
//                   </>
//                 )}
//               </div>
//               <p className="text-sm text-gray-500">Inclusive of all taxes</p>
//             </div>

//             {/* Description */}
//             <div>
//               <h3 className="font-bold text-lg text-gray-900 mb-3">About this product</h3>
//               <p className="text-gray-700 leading-relaxed mb-4">
//                 {product.description}
//               </p>
//             </div>

//             {/* Features */}
//             {product.features && product.features.length > 0 && (
//               <div>
//                 <h3 className="font-bold text-lg text-gray-900 mb-3">Key Features</h3>
//                 <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
//                   {product.features.map((feature, idx) => (
//                     <li key={idx} className="flex items-center gap-3 text-gray-700">
//                       <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
//                       </svg>
//                       {feature}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}

//             {/* Product Details */}
//             <div className="bg-gray-50 rounded-2xl p-6 space-y-3">
//               <div className="flex justify-between items-center py-2 border-b border-gray-200">
//                 <span className="text-gray-600 font-medium">Style</span>
//                 <span className="text-gray-900 font-bold">{product.style}</span>
//               </div>
//               <div className="flex justify-between items-center py-2 border-b border-gray-200">
//                 <span className="text-gray-600 font-medium">Material</span>
//                 <span className="text-gray-900 font-bold">{product.material}</span>
//               </div>
//               <div className="flex justify-between items-center py-2 border-b border-gray-200">
//                 <span className="text-gray-600 font-medium">Color</span>
//                 <span className="text-gray-900 font-bold">{product.color}</span>
//               </div>
//               {product.prescription_ready && (
//                 <div className="flex justify-between items-center py-2">
//                   <span className="text-gray-600 font-medium">Prescription Ready</span>
//                   <span className="inline-flex items-center gap-1 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-bold">
//                     <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
//                       <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//                     </svg>
//                     Yes
//                   </span>
//                 </div>
//               )}
//             </div>

//             {/* Quantity Selector */}
//             <div className="flex items-center gap-4">
//               <span className="text-gray-700 font-medium">Quantity:</span>
//               <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
//                 <button
//                   onClick={() => setQuantity(Math.max(1, quantity - 1))}
//                   className="px-4 py-2 hover:bg-gray-100 transition-colors"
//                   disabled={quantity <= 1}
//                 >
//                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
//                   </svg>
//                 </button>
//                 <span className="px-6 py-2 font-bold text-lg w-16 text-center">{quantity}</span>
//                 <button
//                   onClick={() => setQuantity(quantity + 1)}
//                   className="px-4 py-2 hover:bg-gray-100 transition-colors"
//                 >
//                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
//                   </svg>
//                 </button>
//               </div>
//             </div>

//             {/* Action Buttons */}
//             <div className="flex gap-4 pt-4">
//               <button
//                 onClick={handleAddToCart}
//                 disabled={!product.in_stock}
//                 className="flex-1 bg-gray-900 text-white px-6 py-4 rounded-xl font-bold hover:bg-black transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-md"
//               >
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
//                 </svg>
//                 Add to Cart
//               </button>
//               <button
//                 onClick={handleBuyNow}
//                 disabled={!product.in_stock}
//                 className="flex-1 bg-blue-600 text-white px-6 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all disabled:opacity-50 shadow-md"
//               >
//                 Buy Now
//               </button>
//             </div>

//             {/* Success Message */}
//             {showAddToCart && (
//               <div className="fixed top-24 right-6 z-50 bg-green-500 text-white px-6 py-3 rounded-full shadow-lg animate-slide-up font-medium">
//                 ✓ Added to cart!
//               </div>
//             )}

//             {/* Prescription Form Toggle */}
//             {product.prescription_ready && (
//               <button
//                 onClick={() => setShowPrescriptionForm(!showPrescriptionForm)}
//                 className="w-full flex items-center justify-between bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-300 px-6 py-4 rounded-xl font-bold text-blue-900 hover:shadow-md transition-all"
//               >
//                 <span className="flex items-center gap-2">
//                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//                   </svg>
//                   Add Your Prescription (Optional)
//                 </span>
//                 <svg className={`w-5 h-5 transition-transform ${showPrescriptionForm ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
//                 </svg>
//               </button>
//             )}

//             {/* Prescription Form */}
//             {showPrescriptionForm && product.prescription_ready && (
//               <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200 space-y-6">
//                 {/* Prescription form fields - same as before */}
//                 <div className="flex items-center gap-2 mb-4">
//                   <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
//                     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
//                       <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
//                     </svg>
//                   </div>
//                   <div>
//                     <h3 className="font-bold text-lg text-blue-900">Prescription Details</h3>
//                     <p className="text-xs text-blue-700">Enter your eye prescription (all fields optional)</p>
//                   </div>
//                 </div>

//                 {/* Right Eye */}
//                 <div className="space-y-3">
//                   <h4 className="font-bold text-blue-900 flex items-center gap-2">
//                     <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs">R</span>
//                     Right Eye
//                   </h4>
//                   <div className="grid grid-cols-2 gap-3">
//                     <div>
//                       <label className="text-xs font-bold text-blue-800 uppercase tracking-wider">SPH (Sphere)</label>
//                       <input
//                         type="text"
//                         placeholder="+1.00 / -1.00"
//                         value={prescription.rightEye.sph}
//                         onChange={(e) => setPrescription({
//                           ...prescription,
//                           rightEye: { ...prescription.rightEye, sph: e.target.value }
//                         })}
//                         className="w-full mt-1 px-3 py-2 bg-white border border-blue-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       />
//                     </div>
//                     <div>
//                       <label className="text-xs font-bold text-blue-800 uppercase tracking-wider">CYL (Cylinder)</label>
//                       <input
//                         type="text"
//                         placeholder="+0.50 / -0.50"
//                         value={prescription.rightEye.cyl}
//                         onChange={(e) => setPrescription({
//                           ...prescription,
//                           rightEye: { ...prescription.rightEye, cyl: e.target.value }
//                         })}
//                         className="w-full mt-1 px-3 py-2 bg-white border border-blue-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       />
//                     </div>
//                     <div>
//                       <label className="text-xs font-bold text-blue-800 uppercase tracking-wider">AXIS (Axis)</label>
//                       <input
//                         type="text"
//                         placeholder="0° - 180°"
//                         value={prescription.rightEye.axis}
//                         onChange={(e) => setPrescription({
//                           ...prescription,
//                           rightEye: { ...prescription.rightEye, axis: e.target.value }
//                         })}
//                         className="w-full mt-1 px-3 py-2 bg-white border border-blue-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       />
//                     </div>
//                     <div>
//                       <label className="text-xs font-bold text-blue-800 uppercase tracking-wider">ADD (Add)</label>
//                       <input
//                         type="text"
//                         placeholder="+1.00 / +2.00"
//                         value={prescription.rightEye.add}
//                         onChange={(e) => setPrescription({
//                           ...prescription,
//                           rightEye: { ...prescription.rightEye, add: e.target.value }
//                         })}
//                         className="w-full mt-1 px-3 py-2 bg-white border border-blue-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 {/* Left Eye */}
//                 <div className="space-y-3 pt-4 border-t-2 border-blue-300">
//                   <h4 className="font-bold text-blue-900 flex items-center gap-2">
//                     <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs">L</span>
//                     Left Eye
//                   </h4>
//                   <div className="grid grid-cols-2 gap-3">
//                     <div>
//                       <label className="text-xs font-bold text-blue-800 uppercase tracking-wider">SPH (Sphere)</label>
//                       <input
//                         type="text"
//                         placeholder="+1.00 / -1.00"
//                         value={prescription.leftEye.sph}
//                         onChange={(e) => setPrescription({
//                           ...prescription,
//                           leftEye: { ...prescription.leftEye, sph: e.target.value }
//                         })}
//                         className="w-full mt-1 px-3 py-2 bg-white border border-blue-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       />
//                     </div>
//                     <div>
//                       <label className="text-xs font-bold text-blue-800 uppercase tracking-wider">CYL (Cylinder)</label>
//                       <input
//                         type="text"
//                         placeholder="+0.50 / -0.50"
//                         value={prescription.leftEye.cyl}
//                         onChange={(e) => setPrescription({
//                           ...prescription,
//                           leftEye: { ...prescription.leftEye, cyl: e.target.value }
//                         })}
//                         className="w-full mt-1 px-3 py-2 bg-white border border-blue-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       />
//                     </div>
//                     <div>
//                       <label className="text-xs font-bold text-blue-800 uppercase tracking-wider">AXIS (Axis)</label>
//                       <input
//                         type="text"
//                         placeholder="0° - 180°"
//                         value={prescription.leftEye.axis}
//                         onChange={(e) => setPrescription({
//                           ...prescription,
//                           leftEye: { ...prescription.leftEye, axis: e.target.value }
//                         })}
//                         className="w-full mt-1 px-3 py-2 bg-white border border-blue-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       />
//                     </div>
//                     <div>
//                       <label className="text-xs font-bold text-blue-800 uppercase tracking-wider">ADD (Add)</label>
//                       <input
//                         type="text"
//                         placeholder="+1.00 / +2.00"
//                         value={prescription.leftEye.add}
//                         onChange={(e) => setPrescription({
//                           ...prescription,
//                           leftEye: { ...prescription.leftEye, add: e.target.value }
//                         })}
//                         className="w-full mt-1 px-3 py-2 bg-white border border-blue-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 {/* PD and Notes */}
//                 <div className="space-y-3 pt-4 border-t-2 border-blue-300">
//                   <div>
//                     <label className="text-xs font-bold text-blue-800 uppercase tracking-wider">PD - Pupillary Distance</label>
//                     <input
//                       type="text"
//                       placeholder="e.g. 62 or 31/31 (mm)"
//                       value={prescription.pd}
//                       onChange={(e) => setPrescription({ ...prescription, pd: e.target.value })}
//                       className="w-full mt-1 px-3 py-2 bg-white border border-blue-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                   </div>
//                   <div>
//                     <label className="text-xs font-bold text-blue-800 uppercase tracking-wider">Additional Notes</label>
//                     <textarea
//                       placeholder="Any special instructions or notes about your prescription..."
//                       value={prescription.notes}
//                       onChange={(e) => setPrescription({ ...prescription, notes: e.target.value })}
//                       rows="3"
//                       className="w-full mt-1 px-3 py-2 bg-white border border-blue-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
//                     />
//                   </div>
//                 </div>

//                 {/* Info Box */}
//                 <div className="bg-white/60 border border-blue-300 rounded-lg p-3 text-xs text-blue-900">
//                   <p className="font-bold mb-1">💡 Need Help?</p>
//                   <p>You can find this information on your prescription slip from your eye doctor. Contact us on WhatsApp if you need assistance.</p>
//                 </div>
//               </div>
//             )}

//             {/* Trust Badges */}
//             <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mt-6">
//               <div className="grid grid-cols-3 gap-4 text-center text-xs">
//                 <div>
//                   <p className="font-bold text-yellow-900">30-Day</p>
//                   <p className="text-yellow-800">Returns</p>
//                 </div>
//                 <div>
//                   <p className="font-bold text-yellow-900">100%</p>
//                   <p className="text-yellow-800">Authentic</p>
//                 </div>
//                 <div>
//                   <p className="font-bold text-yellow-900">Fast</p>
//                   <p className="text-yellow-800">Delivery</p>
//                 </div>
//               </div>
//             </div>

//             {/* WhatsApp Support */}
//             <a
//               href="https://wa.me/923334455667"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="w-full flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-green-600 transition-colors text-center"
//             >
//               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.255.949c-1.238.503-2.335 1.236-3.356 2.26-1.022 1.024-1.756 2.12-2.26 3.359-.425 1.119-.648 2.275-.648 3.406 0 1.131.223 2.287.648 3.406.504 1.239 1.239 2.335 2.26 3.359 1.024 1.022 2.118 1.756 3.356 2.26 1.119.425 2.275.648 3.406.648 1.13 0 2.287-.223 3.406-.648 1.239-.504 2.335-1.239 3.359-2.26 1.022-1.024 1.756-2.12 2.26-3.359.425-1.119.648-2.275.648-3.406 0-1.131-.223-2.287-.648-3.406-.504-1.239-1.239-2.335-2.26-3.359-1.024-1.022-2.118-1.756-3.356-2.26-1.119-.425-2.275-.648-3.406-.648" />
//               </svg>
//               Chat on WhatsApp
//             </a>
//           </div>
//         </div>

//         {/* Related Products */}
//         <section className="mt-20 pt-16 border-t border-gray-200">
//           <h2 className="text-3xl font-bold text-gray-900 mb-8">You Might Also Like</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {products
//               .filter(p => p.category === product.category && p.id !== product.id)
//               .slice(0, 3)
//               .map(relatedProduct => (
//                 <div
//                   key={relatedProduct.id}
//                   onClick={() => {
//                     navigate(`/product/${relatedProduct.id}`);
//                     window.scrollTo(0, 0);
//                   }}
//                   className="group bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
//                 >
//                   <div className="aspect-square bg-gray-100 overflow-hidden">
//                     <img
//                       src={relatedProduct.cardImage || '/placeholder.jpg'}
//                       alt={relatedProduct.name}
//                       className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                       onError={(e) => {
//                         e.target.src = '/placeholder.jpg';
//                       }}
//                     />
//                   </div>
//                   <div className="p-4">
//                     <h4 className="font-bold text-gray-900 group-hover:text-black mb-1">{relatedProduct.name}</h4>
//                     <p className="text-gray-600">
//                       {new Intl.NumberFormat('en-PK', {
//                         style: 'currency',
//                         currency: 'PKR',
//                         minimumFractionDigits: 0,
//                         maximumFractionDigits: 0
//                       }).format(relatedProduct.pricing?.discounted || 0)}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//           </div>
//         </section>
//       </div>

//       <style>{`
//         @keyframes slideUp {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         .animate-slide-up {
//           animation: slideUp 0.3s ease-out forwards;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default ProductDetail;









































import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { products } from '../data/product';
import { useState, useEffect } from 'react';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [showAddToCart, setShowAddToCart] = useState(false);
  const [showPrescriptionForm, setShowPrescriptionForm] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [selectedLensType, setSelectedLensType] = useState('standard');
  const [prescription, setPrescription] = useState({
    rightEye: { sph: '', cyl: '', axis: '', add: '' },
    leftEye: { sph: '', cyl: '', axis: '', add: '' },
    pd: '',
    notes: ''
  });

  // Lens type options
  const lensTypes = [
    {
      id: 'standard',
      name: 'Standard Lenses',
      description: 'Just Vision',
      price: 850,
    },
    {
      id: 'anti_reflection',
      name: 'Anti Reflection',
      description: 'Clear vision with anti-reflective coating',
      price: 1700,
    },
    {
      id: 'uv',
      name: 'UV',
      description: 'Protects against harmful blue light',
      price: 4000,
    },
  ];

  // Find product by ID
  useEffect(() => {
    try {
      setLoading(true);
      const productId = id.toString();
      const foundProduct = products.find(p => p.id === productId);

      if (!foundProduct) {
        setProduct(null);
        setLoading(false);
        return;
      }

      setProduct(foundProduct);
      setSelectedImage(0);
      setQuantity(1);
      setSelectedVariant(0);
      setSelectedLensType('standard');
      setLoading(false);
    } catch (err) {
      console.error('Error loading product:', err);
      setLoading(false);
    }
  }, [id]);

  const { addToCart } = useCart();

  // Get current variant or use main product
  const currentVariant = product?.variants && product.variants.length > 0 
    ? product.variants[selectedVariant] 
    : null;

  // Get product images - use variant images if available
  const getImages = () => {
    if (currentVariant?.detailImages && currentVariant.detailImages.length > 0) {
      return currentVariant.detailImages;
    }
    if (product?.detailImages && product.detailImages.length > 0) {
      return product.detailImages;
    }
    if (currentVariant?.cardImage) {
      return [currentVariant.cardImage];
    }
    if (product?.cardImage) {
      return [product.cardImage];
    }
    return ['/placeholder.jpg'];
  };

  const images = getImages();
  const currentImage = images[selectedImage] || '/placeholder.jpg';

  // Get variant-specific pricing if available
  const discountedPrice = currentVariant?.pricing?.discounted || product?.pricing?.discounted || 0;
  const originalPrice = currentVariant?.pricing?.original || product?.pricing?.original || 0;
  const discountPercent = currentVariant?.pricing?.discount_percent || product?.pricing?.discount_percent || 0;

  // Currently selected lens type object + price
  const currentLens = lensTypes.find((l) => l.id === selectedLensType);
  const lensPrice = currentLens ? currentLens.price : 0;

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-PK', {
      style: 'currency',
      currency: 'PKR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  const handleAddToCart = () => {
    const cartItem = {
      id: product.id,
      variantId: currentVariant?.id,
      name: currentVariant?.nameSuffix 
        ? `${product.name} (${currentVariant.nameSuffix})` 
        : product.name,
      price: discountedPrice + lensPrice,
      originalPrice: originalPrice + lensPrice,
      discount: discountPercent,
      lensType: currentLens?.name || null,
      lensPrice: lensPrice,
      image: product.cardImage || '/placeholder.jpg',
      category: product.category,
      shape: product.style,
      material: product.material,
      color: product.color,
      quantity: quantity,
      prescription: showPrescriptionForm ? prescription : null,
    };
    addToCart(cartItem, quantity);
    setShowAddToCart(true);
    setTimeout(() => setShowAddToCart(false), 2000);
  };

  const handleBuyNow = () => {
    handleAddToCart();
    navigate('/checkout');
  };

  const handleVariantChange = (index) => {
    setSelectedVariant(index);
    setSelectedImage(0); // Reset image selection when variant changes
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-gray-200 border-t-black rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 font-medium">Loading product...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Product Not Found</h2>
          <p className="text-gray-600 mb-6">The product you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate('/products')}
            className="bg-black text-white px-8 py-3 rounded-full font-bold hover:bg-gray-800 transition-colors"
          >
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-600 hover:text-black font-medium transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square bg-gray-100 rounded-3xl overflow-hidden shadow-lg border border-gray-200">
              <img
                src={currentImage}
                alt={currentVariant?.nameSuffix ? `${product.name} (${currentVariant.nameSuffix})` : product.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.target.src = '/placeholder.jpg';
                }}
              />
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`w-24 h-24 rounded-xl overflow-hidden border-2 flex-shrink-0 transition-all ${
                      selectedImage === idx
                        ? 'border-black shadow-md'
                        : 'border-gray-200 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`View ${idx + 1}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = '/placeholder.jpg';
                      }}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-start space-y-6">
            {/* Category & Badges */}
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-3">
                {product.category}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {discountPercent > 0 && (
                  <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Save {discountPercent}%
                  </span>
                )}
                {product.badges && product.badges.map((badge, idx) => (
                  <span
                    key={idx}
                    className="bg-black text-white text-xs font-bold px-3 py-1 rounded-full"
                  >
                    {badge}
                  </span>
                ))}
                {product.in_stock ? (
                  <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">
                    In Stock
                  </span>
                ) : (
                  <span className="bg-red-100 text-red-700 text-xs font-bold px-3 py-1 rounded-full">
                    Out of Stock
                  </span>
                )}
              </div>
            </div>

            {/* Product Name */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 leading-tight">
                {product.name}
                {currentVariant?.nameSuffix && (
                  <span className="text-xl text-gray-500 block mt-1">
                    {currentVariant.nameSuffix}
                  </span>
                )}
              </h1>
              <p className="text-lg text-gray-600">
                {product.style} • {product.color} • {product.material}
              </p>
            </div>

            {/* Variant Selector */}
            {product.variants && product.variants.length > 1 && (
              <div className="border-y border-gray-200 py-6">
                <h3 className="font-bold text-lg text-gray-900 mb-3">Select Variant</h3>
                <div className="flex flex-wrap gap-3">
                  {product.variants.map((variant, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleVariantChange(idx)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all ${
                        selectedVariant === idx
                          ? 'bg-black text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {variant.nameSuffix}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Price */}
            <div className="border-y border-gray-200 py-6">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-4xl font-bold text-gray-900">
                  {formatPrice(discountedPrice)}
                </span>
                {originalPrice > discountedPrice && (
                  <>
                    <span className="text-xl text-gray-400 line-through">
                      {formatPrice(originalPrice)}
                    </span>
                    <span className="text-green-600 font-semibold">
                      Save {formatPrice(originalPrice - discountedPrice)}
                    </span>
                  </>
                )}
              </div>
              <p className="text-sm text-gray-500">Inclusive of all taxes</p>
            </div>

            {/* Description */}
            <div>
              <h3 className="font-bold text-lg text-gray-900 mb-3">About this product</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                {product.description}
              </p>
            </div>

            {/* Features */}
            {product.features && product.features.length > 0 && (
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-3">Key Features</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-700">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Product Details */}
            <div className="bg-gray-50 rounded-2xl p-6 space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <span className="text-gray-600 font-medium">Style</span>
                <span className="text-gray-900 font-bold">{product.style}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <span className="text-gray-600 font-medium">Material</span>
                <span className="text-gray-900 font-bold">{product.material}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <span className="text-gray-600 font-medium">Color</span>
                <span className="text-gray-900 font-bold">{product.color}</span>
              </div>
              {product.prescription_ready && (
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600 font-medium">Prescription Ready</span>
                  <span className="inline-flex items-center gap-1 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-bold">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Yes
                  </span>
                </div>
              )}
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-4">
              <span className="text-gray-700 font-medium">Quantity:</span>
              <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 hover:bg-gray-100 transition-colors"
                  disabled={quantity <= 1}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
                  </svg>
                </button>
                <span className="px-6 py-2 font-bold text-lg w-16 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 hover:bg-gray-100 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-4">
              <button
                onClick={handleAddToCart}
                disabled={!product.in_stock}
                className="flex-1 bg-gray-900 text-white px-6 py-4 rounded-xl font-bold hover:bg-black transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-md"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                Add to Cart
              </button>
              <button
                onClick={handleBuyNow}
                disabled={!product.in_stock}
                className="flex-1 bg-blue-600 text-white px-6 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all disabled:opacity-50 shadow-md"
              >
                Buy Now
              </button>
            </div>

            {/* Success Message */}
            {showAddToCart && (
              <div className="fixed top-24 right-6 z-50 bg-green-500 text-white px-6 py-3 rounded-full shadow-lg animate-slide-up font-medium">
                ✓ Added to cart!
              </div>
            )}

            {/* Prescription Form Toggle */}
            {product.prescription_ready && (
              <button
                onClick={() => setShowPrescriptionForm(!showPrescriptionForm)}
                className="w-full flex items-center justify-between bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-300 px-6 py-4 rounded-xl font-bold text-blue-900 hover:shadow-md transition-all"
              >
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Add Your Prescription (Optional)
                </span>
                <svg className={`w-5 h-5 transition-transform ${showPrescriptionForm ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
            )}

            {/* Prescription Form */}
            {showPrescriptionForm && product.prescription_ready && (
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200 space-y-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-blue-900">Prescription Details</h3>
                    <p className="text-xs text-blue-700">Enter your eye prescription (all fields optional)</p>
                  </div>
                </div>

                {/* Select Lens Type */}
                <div className="space-y-3">
                  <h4 className="font-bold text-blue-900">Select Lens Type</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {lensTypes.map((lens) => (
                      <button
                        key={lens.id}
                        type="button"
                        onClick={() => setSelectedLensType(lens.id)}
                        className={`relative text-left p-4 rounded-xl border-2 transition-all bg-white ${
                          selectedLensType === lens.id
                            ? 'border-black shadow-sm'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        {selectedLensType === lens.id && (
                          <svg
                            className="absolute top-3 right-3 w-5 h-5 text-green-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                        <div className="flex items-center justify-between pr-6 mb-1">
                          <span className="font-bold text-gray-900">{lens.name}</span>
                          <span className="font-bold text-gray-900">+{lens.price}</span>
                        </div>
                        <p className="text-sm text-gray-500">{lens.description}</p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Right Eye */}
                <div className="space-y-3">
                  <h4 className="font-bold text-blue-900 flex items-center gap-2">
                    <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs">R</span>
                    Right Eye
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-bold text-blue-800 uppercase tracking-wider">SPH (Sphere)</label>
                      <input
                        type="text"
                        placeholder="+1.00 / -1.00"
                        value={prescription.rightEye.sph}
                        onChange={(e) => setPrescription({
                          ...prescription,
                          rightEye: { ...prescription.rightEye, sph: e.target.value }
                        })}
                        className="w-full mt-1 px-3 py-2 bg-white border border-blue-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-blue-800 uppercase tracking-wider">CYL (Cylinder)</label>
                      <input
                        type="text"
                        placeholder="+0.50 / -0.50"
                        value={prescription.rightEye.cyl}
                        onChange={(e) => setPrescription({
                          ...prescription,
                          rightEye: { ...prescription.rightEye, cyl: e.target.value }
                        })}
                        className="w-full mt-1 px-3 py-2 bg-white border border-blue-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-blue-800 uppercase tracking-wider">AXIS (Axis)</label>
                      <input
                        type="text"
                        placeholder="0° - 180°"
                        value={prescription.rightEye.axis}
                        onChange={(e) => setPrescription({
                          ...prescription,
                          rightEye: { ...prescription.rightEye, axis: e.target.value }
                        })}
                        className="w-full mt-1 px-3 py-2 bg-white border border-blue-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-blue-800 uppercase tracking-wider">ADD (Add)</label>
                      <input
                        type="text"
                        placeholder="+1.00 / +2.00"
                        value={prescription.rightEye.add}
                        onChange={(e) => setPrescription({
                          ...prescription,
                          rightEye: { ...prescription.rightEye, add: e.target.value }
                        })}
                        className="w-full mt-1 px-3 py-2 bg-white border border-blue-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Left Eye */}
                <div className="space-y-3 pt-4 border-t-2 border-blue-300">
                  <h4 className="font-bold text-blue-900 flex items-center gap-2">
                    <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs">L</span>
                    Left Eye
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-bold text-blue-800 uppercase tracking-wider">SPH (Sphere)</label>
                      <input
                        type="text"
                        placeholder="+1.00 / -1.00"
                        value={prescription.leftEye.sph}
                        onChange={(e) => setPrescription({
                          ...prescription,
                          leftEye: { ...prescription.leftEye, sph: e.target.value }
                        })}
                        className="w-full mt-1 px-3 py-2 bg-white border border-blue-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-blue-800 uppercase tracking-wider">CYL (Cylinder)</label>
                      <input
                        type="text"
                        placeholder="+0.50 / -0.50"
                        value={prescription.leftEye.cyl}
                        onChange={(e) => setPrescription({
                          ...prescription,
                          leftEye: { ...prescription.leftEye, cyl: e.target.value }
                        })}
                        className="w-full mt-1 px-3 py-2 bg-white border border-blue-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-blue-800 uppercase tracking-wider">AXIS (Axis)</label>
                      <input
                        type="text"
                        placeholder="0° - 180°"
                        value={prescription.leftEye.axis}
                        onChange={(e) => setPrescription({
                          ...prescription,
                          leftEye: { ...prescription.leftEye, axis: e.target.value }
                        })}
                        className="w-full mt-1 px-3 py-2 bg-white border border-blue-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-blue-800 uppercase tracking-wider">ADD (Add)</label>
                      <input
                        type="text"
                        placeholder="+1.00 / +2.00"
                        value={prescription.leftEye.add}
                        onChange={(e) => setPrescription({
                          ...prescription,
                          leftEye: { ...prescription.leftEye, add: e.target.value }
                        })}
                        className="w-full mt-1 px-3 py-2 bg-white border border-blue-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </div>

                {/* PD and Notes */}
                <div className="space-y-3 pt-4 border-t-2 border-blue-300">
                  <div>
                    <label className="text-xs font-bold text-blue-800 uppercase tracking-wider">PD - Pupillary Distance</label>
                    <input
                      type="text"
                      placeholder="e.g. 62 or 31/31 (mm)"
                      value={prescription.pd}
                      onChange={(e) => setPrescription({ ...prescription, pd: e.target.value })}
                      className="w-full mt-1 px-3 py-2 bg-white border border-blue-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-blue-800 uppercase tracking-wider">Additional Notes</label>
                    <textarea
                      placeholder="Any special instructions or notes about your prescription..."
                      value={prescription.notes}
                      onChange={(e) => setPrescription({ ...prescription, notes: e.target.value })}
                      rows="3"
                      className="w-full mt-1 px-3 py-2 bg-white border border-blue-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    />
                  </div>
                </div>

                {/* Info Box */}
                <div className="bg-white/60 border border-blue-300 rounded-lg p-3 text-xs text-blue-900">
                  <p className="font-bold mb-1">💡 Need Help?</p>
                  <p>You can find this information on your prescription slip from your eye doctor. Contact us on WhatsApp if you need assistance.</p>
                </div>
              </div>
            )}

            {/* Trust Badges */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mt-6">
              <div className="grid grid-cols-3 gap-4 text-center text-xs">
                <div>
                  <p className="font-bold text-yellow-900">30-Day</p>
                  <p className="text-yellow-800">Returns</p>
                </div>
                <div>
                  <p className="font-bold text-yellow-900">100%</p>
                  <p className="text-yellow-800">Authentic</p>
                </div>
                <div>
                  <p className="font-bold text-yellow-900">Fast</p>
                  <p className="text-yellow-800">Delivery</p>
                </div>
              </div>
            </div>

            {/* WhatsApp Support */}
            <a
              href="https://wa.me/923334455667"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-green-600 transition-colors text-center"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.255.949c-1.238.503-2.335 1.236-3.356 2.26-1.022 1.024-1.756 2.12-2.26 3.359-.425 1.119-.648 2.275-.648 3.406 0 1.131.223 2.287.648 3.406.504 1.239 1.239 2.335 2.26 3.359 1.024 1.022 2.118 1.756 3.356 2.26 1.119.425 2.275.648 3.406.648 1.13 0 2.287-.223 3.406-.648 1.239-.504 2.335-1.239 3.359-2.26 1.022-1.024 1.756-2.12 2.26-3.359.425-1.119.648-2.275.648-3.406 0-1.131-.223-2.287-.648-3.406-.504-1.239-1.239-2.335-2.26-3.359-1.024-1.022-2.118-1.756-3.356-2.26-1.119-.425-2.275-.648-3.406-.648" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Related Products */}
        <section className="mt-20 pt-16 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">You Might Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products
              .filter(p => p.category === product.category && p.id !== product.id)
              .slice(0, 3)
              .map(relatedProduct => (
                <div
                  key={relatedProduct.id}
                  onClick={() => {
                    navigate(`/product/${relatedProduct.id}`);
                    window.scrollTo(0, 0);
                  }}
                  className="group bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <div className="aspect-square bg-gray-100 overflow-hidden">
                    <img
                      src={relatedProduct.cardImage || '/placeholder.jpg'}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        e.target.src = '/placeholder.jpg';
                      }}
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-gray-900 group-hover:text-black mb-1">{relatedProduct.name}</h4>
                    <p className="text-gray-600">
                      {new Intl.NumberFormat('en-PK', {
                        style: 'currency',
                        currency: 'PKR',
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0
                      }).format(relatedProduct.pricing?.discounted || 0)}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </section>
      </div>

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-up {
          animation: slideUp 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default ProductDetail;