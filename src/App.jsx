


// // // import React, { useState } from 'react';
// // // import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// // // import { CartProvider, useCart } from './context/CartContext';
// // // import { Menu, X, ShoppingBag, Search, Send } from 'lucide-react';
// // // import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
// // // import { products } from './data/product.js';
// // // import Home from './pages/home';
// // // import About from './pages/about';
// // // import Contact from './pages/contact';
// // // import ProductsPage from './pages/products';
// // // import ProductDetail from './pages/productDetail';
// // // import Cart from './pages/cart';
// // // import Checkout from './pages/checkout';

// // // /* --- NAVBAR COMPONENT (With Announcement Bar & Bigger Logo) --- */
// // // const Navbar = () => {
// // //   const [isMenuOpen, setIsMenuOpen] = useState(false);
// // //   const [searchOpen, setSearchOpen] = useState(false);
// // //   const [searchQuery, setSearchQuery] = useState('');
// // //   const { cartItems } = useCart();
// // //   const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
// // //   const closeMenu = () => setIsMenuOpen(false);

// // //   return (
// // //     <nav className="bg-white border-b border-gray-100 sticky top-0 z-100">
// // //       {/* Top Announcement Bar */}
// // //       <div className="bg-black text-white text-[10px] py-1.5 text-center tracking-[0.3em] uppercase font-bold">
// // //         Welcome to Eye Studio - Premium Eyewear
// // //       </div>

// // //       <div className="container mx-auto px-4">
// // //         <div className="flex items-center justify-between py-0">

// // //           {/* Logo Section */}
// // //           <div className="flex items-center">
// // //             <Link to="/" onClick={closeMenu} className="flex items-center">
// // //               <img
// // //                 src="/eye-studio.png"
// // //                 alt="eye studio logo"
// // //                 className="h-20 md:h-24 lg:h-28 w-auto object-contain hover:opacity-90 transition-opacity duration-200"
// // //               />
// // //             </Link>
// // //           </div>

// // //           {/* Desktop Links */}
// // //           <div className="hidden md:flex items-center space-x-10 text-[11px] tracking-[0.25em] font-bold uppercase text-gray-600">
// // //             <Link to="/" className="hover:text-black border-b border-transparent hover:border-black transition-all pb-1">Home</Link>
// // //             <Link to="/products" className="hover:text-black border-b border-transparent hover:border-black transition-all pb-1">Products</Link>
// // //             <Link to="/about" className="hover:text-black border-b border-transparent hover:border-black transition-all pb-1">About Us</Link>
// // //             <Link to="/contact" className="hover:text-black border-b border-transparent hover:border-black transition-all pb-1">Contact</Link>
// // //           </div>

// // //           {/* Actions Section */}
// // //           <div className="flex items-center space-x-4">
// // //             <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-800 focus:outline-none">
// // //               {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
// // //             </button>
// // //             <button onClick={() => setSearchOpen(true)} className="hover:text-gray-500 transition" title="Search products">
// // //               <Search size={18} strokeWidth={1.5} />
// // //             </button>
// // //             <Link to="/cart" onClick={closeMenu} className="relative group">
// // //               <ShoppingBag size={20} strokeWidth={1.5} className="group-hover:text-gray-500 transition" />
// // //               {cartCount > 0 && (
// // //                 <span className="absolute -top-1.5 -right-1.5 text-[8px] bg-black text-white w-3.5 h-3.5 rounded-full flex items-center justify-center font-bold">
// // //                   {cartCount}
// // //                 </span>
// // //               )}
// // //             </Link>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* Mobile Menu */}
// // //       <div className={`md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 transition-all duration-300 ease-in-out z-50 ${isMenuOpen ? 'max-h-screen opacity-100 py-6' : 'max-h-0 opacity-0 overflow-hidden'}`}>
// // //         <div className="flex flex-col items-center space-y-5 text-sm tracking-[0.3em] font-bold uppercase text-gray-800">
// // //           <Link to="/" onClick={closeMenu}>Home</Link>
// // //           <Link to="/products" onClick={closeMenu}>Products</Link>
// // //           <Link to="/about" onClick={closeMenu}>About Us</Link>
// // //           <Link to="/contact" onClick={closeMenu}>Contact</Link>
// // //         </div>
// // //       </div>

// // //       {/* Search Modal */}
// // //       {searchOpen && (
// // //         <>
// // //           {/* Overlay */}
// // //           <div 
// // //             className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
// // //             onClick={() => setSearchOpen(false)}
// // //           />

// // //           {/* Search Modal */}
// // //           <div 
// // //             className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4"
// // //             onClick={() => setSearchOpen(false)}
// // //           >
// // //             <div
// // //               className="bg-white rounded-xl p-6 max-w-3xl w-full shadow-2xl max-h-[70vh] overflow-y-auto"
// // //               onClick={(e) => e.stopPropagation()}
// // //             >
// // //               {/* Search Header */}
// // //               <div className="flex justify-between items-center mb-6">
// // //                 <h3 className="text-lg font-serif italic">Search Eyewear</h3>
// // //                 <button 
// // //                   onClick={() => setSearchOpen(false)}
// // //                   className="text-gray-400 hover:text-gray-600 transition"
// // //                 >
// // //                   <X size={24} />
// // //                 </button>
// // //               </div>

// // //               {/* Search Input */}
// // //               <div className="relative mb-6">
// // //                 <input
// // //                   type="text"
// // //                   placeholder="Search frames, styles, colors... (press ESC to close)"
// // //                   value={searchQuery}
// // //                   onChange={(e) => setSearchQuery(e.target.value)}
// // //                   onKeyDown={(e) => e.key === 'Escape' && setSearchOpen(false)}
// // //                   autoFocus
// // //                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black text-sm"
// // //                 />
// // //                 <div className="absolute right-3 top-3.5 flex gap-2">
// // //                   {searchQuery && (
// // //                     <button
// // //                       onClick={() => setSearchQuery('')}
// // //                       className="text-gray-400 hover:text-gray-600 transition"
// // //                     >
// // //                       <X size={18} />
// // //                     </button>
// // //                   )}
// // //                   <Search size={18} className="text-gray-400" strokeWidth={2} />
// // //                 </div>
// // //               </div>

// // //               {/* Results Count */}
// // //               {searchQuery && (
// // //                 <div className="text-xs text-gray-500 mb-4">
// // //                   Found {products.filter(p => 
// // //                     p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
// // //                     p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
// // //                     p.shape.toLowerCase().includes(searchQuery.toLowerCase())
// // //                   ).length} products
// // //                 </div>
// // //               )}

// // //               {/* Search Results */}
// // //               {searchQuery ? (
// // //                 <div className="space-y-3">
// // //                   {products
// // //                     .filter(p => 
// // //                       p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
// // //                       p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
// // //                       p.shape.toLowerCase().includes(searchQuery.toLowerCase())
// // //                     )
// // //                     .map(product => (
// // //                       <Link
// // //                         key={product.id}
// // //                         to={`/product/${product.id}`}
// // //                         onClick={() => setSearchOpen(false)}
// // //                         className="flex gap-4 p-3 hover:bg-gray-50 rounded-lg transition border border-gray-100 hover:border-gray-300"
// // //                       >
// // //                         <div className="w-16 h-20 bg-gray-200 rounded shrink-0 flex items-center justify-center">
// // //                           <span className="text-xs text-gray-400">Image</span>
// // //                         </div>
// // //                         <div className="flex-1">
// // //                           <h4 className="text-sm font-semibold text-gray-900">{product.name}</h4>
// // //                           <p className="text-xs text-gray-500 mt-1">
// // //                             {product.gender} • {product.shape}
// // //                           </p>
// // //                           <div className="flex items-center justify-between mt-2">
// // //                             <div className="flex gap-2 items-center">
// // //                               {product.originalPrice && (
// // //                                 <span className="text-xs text-gray-400 line-through">
// // //                                   Rs. {product.originalPrice}
// // //                                 </span>
// // //                               )}
// // //                               <span className="text-sm font-semibold text-gray-900">
// // //                                 Rs. {product.discountPrice}
// // //                               </span>
// // //                             </div>
// // //                             {product.discount && (
// // //                               <span className="text-xs bg-black text-white px-2 py-1 rounded">
// // //                                 {product.discount}
// // //                               </span>
// // //                             )}
// // //                           </div>
// // //                         </div>
// // //                       </Link>
// // //                     ))}
// // //                   {products.filter(p => 
// // //                     p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
// // //                     p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
// // //                     p.shape.toLowerCase().includes(searchQuery.toLowerCase())
// // //                   ).length === 0 && (
// // //                     <div className="text-center py-8">
// // //                       <Search size={32} className="text-gray-300 mx-auto mb-3" />
// // //                       <p className="text-gray-500 text-sm">No products found for "{searchQuery}"</p>
// // //                       <p className="text-gray-400 text-xs mt-1">Try different keywords</p>
// // //                     </div>
// // //                   )}
// // //                 </div>
// // //               ) : (
// // //                 <div className="text-center py-8">
// // //                   <div className="text-gray-500 mb-4">
// // //                     <p className="text-sm mb-2">✨ Start typing to search our collection</p>
// // //                     <p className="text-xs text-gray-400">Search by name, category, or shape</p>
// // //                   </div>
// // //                 </div>
// // //               )}

// // //               {/* Search Tips */}
// // //               <div className="mt-6 pt-4 border-t border-gray-100 text-xs text-gray-500 text-center">
// // //                 💡 Tip: Search by name, category, or shape • Press ESC to close
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </>
// // //       )}
// // //     </nav>
// // //   );
// // // };

// // // /* --- FOOTER COMPONENT (With Bigger Logo) --- */
// // // const Footer = () => {
// // //   return (
// // //     <footer className="bg-[#f5f3f0] border-t border-gray-200 pt-16 pb-8 mt-20">
// // //       <div className="container mx-auto px-4 max-w-7xl">
// // //         <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

// // //           {/* Column 1: Brand Info with Bigger Logo */}
// // //           <div className="space-y-6">
// // //             <img 
// // //               src="/eye-studio.jpeg" 
// // //               alt="Eye Studio" 
// // //               className="h-16 w-auto object-contain"
// // //             />
// // //             <p className="text-xs text-gray-500 leading-relaxed tracking-wider uppercase">
// // //               Premium eyewear and optical solutions crafted for your vision and style.
// // //             </p>
// // //             <div className="flex space-x-4">
// // //               <FaFacebook size={18} className="text-gray-400 hover:text-black cursor-pointer" />
// // //               <FaInstagram size={18} className="text-gray-400 hover:text-black cursor-pointer" />
// // //               <FaTwitter size={18} className="text-gray-400 hover:text-black cursor-pointer" />
// // //             </div>
// // //           </div>

// // //           {/* Column 2: Quick Links */}
// // //           <div>
// // //             <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] mb-6">Information</h4>
// // //             <ul className="text-[10px] space-y-3 uppercase tracking-widest text-gray-500">
// // //               <li><Link to="/about" className="hover:text-black">About Us</Link></li>
// // //               <li><Link to="/contact" className="hover:text-black">Contact Us</Link></li>
// // //               <li className="hover:text-black cursor-pointer">Shipping Policy</li>
// // //               <li className="hover:text-black cursor-pointer">Refund Policy</li>
// // //               <li className="hover:text-black cursor-pointer">Privacy Policy</li>
// // //             </ul>
// // //           </div>

// // //           {/* Column 3: Newsletter */}
// // //           <div>
// // //             <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] mb-6">Newsletter</h4>
// // //             <p className="text-[10px] text-gray-500 mb-4 uppercase tracking-widest">Subscribe for exclusive vision updates.</p>
// // //             <div className="flex border-b border-black py-2">
// // //               <input
// // //                 type="email"
// // //                 placeholder="Email address"
// // //                 className="bg-transparent text-[10px] uppercase tracking-widest outline-none w-full"
// // //               />
// // //               <button className="text-gray-400 hover:text-black">
// // //                 <Send size={16} />
// // //               </button>
// // //             </div>
// // //           </div>

// // //           {/* Column 4: Contact */}
// // //           <div>
// // //             <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] mb-6">Get in Touch</h4>
// // //             <div className="text-[10px] text-gray-500 space-y-3 uppercase tracking-widest leading-loose">
// // //               <p>Karachi, Pakistan</p>
// // //               <p>WhatsApp: +92 371 1191925</p>
// // //               <p>Email: EyeStudio@gmail.com</p>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* Bottom Bar */}
// // //         <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
// // //           <p className="text-[9px] text-gray-400 uppercase tracking-[0.2em]">
// // //             © 2026 Eye Studio. All Rights Reserved.
// // //           </p>
// // //           <div className="flex space-x-2 grayscale opacity-50">
// // //             <div className="h-4 w-6 bg-gray-400 rounded-sm"></div>
// // //             <div className="h-4 w-6 bg-gray-400 rounded-sm"></div>
// // //             <div className="h-4 w-6 bg-gray-400 rounded-sm"></div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </footer>
// // //   );
// // // };

// // // /* --- MAIN APP FUNCTION --- */
// // // function App() {
// // //   return (
// // //     <CartProvider>
// // //       <BrowserRouter>
// // //         <div className="flex flex-col min-h-screen">
// // //           <Navbar />
// // //           <main className="grow">
// // //             <Routes>
// // //               <Route path="/" element={<Home />} />
// // //               <Route path="/about" element={<About />} />
// // //               <Route path="/contact" element={<Contact />} />
// // //               <Route path="/products" element={<ProductsPage />} />
// // //               <Route path="/product/:id" element={<ProductDetail />} />
// // //               <Route path="/cart" element={<Cart />} />
// // //               <Route path="/checkout" element={<Checkout />} />
// // //             </Routes>
// // //           </main>
// // //           <Footer />
// // //         </div>
// // //       </BrowserRouter>
// // //     </CartProvider>
// // //   );
// // // }

// // // export default App;





// // // import React, { useState } from 'react';
// // // import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// // // import { CartProvider, useCart } from './context/CartContext';
// // // import { Menu, X, ShoppingBag, Search, Send } from 'lucide-react';
// // // import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
// // // import { products } from './data/product.js';
// // // import Home from './pages/home';
// // // import About from './pages/about';
// // // import Contact from './pages/contact';
// // // import ProductsPage from './pages/products';
// // // import ProductDetail from './pages/productDetail';
// // // import Cart from './pages/cart';
// // // import Checkout from './pages/checkout';

// // // /* --- NAVBAR COMPONENT --- */
// // // const Navbar = () => {
// // //   const [isMenuOpen, setIsMenuOpen] = useState(false);
// // //   const [searchOpen, setSearchOpen] = useState(false);
// // //   const [searchQuery, setSearchQuery] = useState('');
// // //   const { cartItems } = useCart();
// // //   const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
// // //   const closeMenu = () => setIsMenuOpen(false);

// // //   return (
// // //     <nav className="bg-white border-b border-gray-100 sticky top-0 z-100">
// // //       {/* Top Announcement Bar */}
// // //       <div className="bg-black text-white text-[10px] py-1.5 text-center tracking-[0.3em] uppercase font-bold">
// // //         Welcome to Eye Studio - Premium Eyewear
// // //       </div>

// // //       <div className="container mx-auto px-4">
// // //         <div className="flex items-center justify-between py-2">

// // //           {/* Logo Section - Ring Style */}
// // //           <div className="flex items-center">
// // //             <Link to="/" onClick={closeMenu} className="flex items-center">
// // //               <div className="rounded-full ring-2 ring-black ring-offset-2 overflow-hidden w-14 h-14 md:w-16 md:h-16 flex items-center justify-center bg-white">
// // //                 <img
// // //                   src="/eye-studio.png"
// // //                   alt="eye studio logo"
// // //                   className="w-full h-full object-cover hover:opacity-90 transition-opacity duration-200"
// // //                 />
// // //               </div>
// // //             </Link>
// // //           </div>

// // //           {/* Desktop Links */}
// // //           <div className="hidden md:flex items-center space-x-10 text-[11px] tracking-[0.25em] font-bold uppercase text-gray-600">
// // //             <Link to="/" className="hover:text-black border-b border-transparent hover:border-black transition-all pb-1">Home</Link>
// // //             <Link to="/products" className="hover:text-black border-b border-transparent hover:border-black transition-all pb-1">Products</Link>
// // //             <Link to="/about" className="hover:text-black border-b border-transparent hover:border-black transition-all pb-1">About Us</Link>
// // //             <Link to="/contact" className="hover:text-black border-b border-transparent hover:border-black transition-all pb-1">Contact</Link>
// // //           </div>

// // //           {/* Actions Section */}
// // //           <div className="flex items-center space-x-4">
// // //             <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-800 focus:outline-none">
// // //               {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
// // //             </button>
// // //             <button onClick={() => setSearchOpen(true)} className="hover:text-gray-500 transition" title="Search products">
// // //               <Search size={18} strokeWidth={1.5} />
// // //             </button>
// // //             <Link to="/cart" onClick={closeMenu} className="relative group">
// // //               <ShoppingBag size={20} strokeWidth={1.5} className="group-hover:text-gray-500 transition" />
// // //               {cartCount > 0 && (
// // //                 <span className="absolute -top-1.5 -right-1.5 text-[8px] bg-black text-white w-3.5 h-3.5 rounded-full flex items-center justify-center font-bold">
// // //                   {cartCount}
// // //                 </span>
// // //               )}
// // //             </Link>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* Mobile Menu */}
// // //       <div className={`md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 transition-all duration-300 ease-in-out z-50 ${isMenuOpen ? 'max-h-screen opacity-100 py-6' : 'max-h-0 opacity-0 overflow-hidden'}`}>
// // //         <div className="flex flex-col items-center space-y-5 text-sm tracking-[0.3em] font-bold uppercase text-gray-800">
// // //           <Link to="/" onClick={closeMenu}>Home</Link>
// // //           <Link to="/products" onClick={closeMenu}>Products</Link>
// // //           <Link to="/about" onClick={closeMenu}>About Us</Link>
// // //           <Link to="/contact" onClick={closeMenu}>Contact</Link>
// // //         </div>
// // //       </div>

// // //       {/* Search Modal */}
// // //       {searchOpen && (
// // //         <>
// // //           <div
// // //             className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
// // //             onClick={() => setSearchOpen(false)}
// // //           />
// // //           <div
// // //             className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4"
// // //             onClick={() => setSearchOpen(false)}
// // //           >
// // //             <div
// // //               className="bg-white rounded-xl p-6 max-w-3xl w-full shadow-2xl max-h-[70vh] overflow-y-auto"
// // //               onClick={(e) => e.stopPropagation()}
// // //             >
// // //               <div className="flex justify-between items-center mb-6">
// // //                 <h3 className="text-lg font-serif italic">Search Eyewear</h3>
// // //                 <button onClick={() => setSearchOpen(false)} className="text-gray-400 hover:text-gray-600 transition">
// // //                   <X size={24} />
// // //                 </button>
// // //               </div>

// // //               <div className="relative mb-6">
// // //                 <input
// // //                   type="text"
// // //                   placeholder="Search frames, styles, colors... (press ESC to close)"
// // //                   value={searchQuery}
// // //                   onChange={(e) => setSearchQuery(e.target.value)}
// // //                   onKeyDown={(e) => e.key === 'Escape' && setSearchOpen(false)}
// // //                   autoFocus
// // //                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black text-sm"
// // //                 />
// // //                 <div className="absolute right-3 top-3.5 flex gap-2">
// // //                   {searchQuery && (
// // //                     <button onClick={() => setSearchQuery('')} className="text-gray-400 hover:text-gray-600 transition">
// // //                       <X size={18} />
// // //                     </button>
// // //                   )}
// // //                   <Search size={18} className="text-gray-400" strokeWidth={2} />
// // //                 </div>
// // //               </div>

// // //               {searchQuery && (
// // //                 <div className="text-xs text-gray-500 mb-4">
// // //                   Found {products.filter(p =>
// // //                     p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
// // //                     p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
// // //                     p.shape.toLowerCase().includes(searchQuery.toLowerCase())
// // //                   ).length} products
// // //                 </div>
// // //               )}

// // //               {searchQuery ? (
// // //                 <div className="space-y-3">
// // //                   {products
// // //                     .filter(p =>
// // //                       p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
// // //                       p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
// // //                       p.shape.toLowerCase().includes(searchQuery.toLowerCase())
// // //                     )
// // //                     .map(product => (
// // //                       <Link
// // //                         key={product.id}
// // //                         to={`/product/${product.id}`}
// // //                         onClick={() => setSearchOpen(false)}
// // //                         className="flex gap-4 p-3 hover:bg-gray-50 rounded-lg transition border border-gray-100 hover:border-gray-300"
// // //                       >
// // //                         <div className="w-16 h-20 bg-gray-200 rounded shrink-0 flex items-center justify-center">
// // //                           <span className="text-xs text-gray-400">Image</span>
// // //                         </div>
// // //                         <div className="flex-1">
// // //                           <h4 className="text-sm font-semibold text-gray-900">{product.name}</h4>
// // //                           <p className="text-xs text-gray-500 mt-1">{product.gender} • {product.shape}</p>
// // //                           <div className="flex items-center justify-between mt-2">
// // //                             <div className="flex gap-2 items-center">
// // //                               {product.originalPrice && (
// // //                                 <span className="text-xs text-gray-400 line-through">Rs. {product.originalPrice}</span>
// // //                               )}
// // //                               <span className="text-sm font-semibold text-gray-900">Rs. {product.discountPrice}</span>
// // //                             </div>
// // //                             {product.discount && (
// // //                               <span className="text-xs bg-black text-white px-2 py-1 rounded">{product.discount}</span>
// // //                             )}
// // //                           </div>
// // //                         </div>
// // //                       </Link>
// // //                     ))}
// // //                   {products.filter(p =>
// // //                     p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
// // //                     p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
// // //                     p.shape.toLowerCase().includes(searchQuery.toLowerCase())
// // //                   ).length === 0 && (
// // //                     <div className="text-center py-8">
// // //                       <Search size={32} className="text-gray-300 mx-auto mb-3" />
// // //                       <p className="text-gray-500 text-sm">No products found for "{searchQuery}"</p>
// // //                       <p className="text-gray-400 text-xs mt-1">Try different keywords</p>
// // //                     </div>
// // //                   )}
// // //                 </div>
// // //               ) : (
// // //                 <div className="text-center py-8">
// // //                   <p className="text-sm mb-2 text-gray-500">✨ Start typing to search our collection</p>
// // //                   <p className="text-xs text-gray-400">Search by name, category, or shape</p>
// // //                 </div>
// // //               )}

// // //               <div className="mt-6 pt-4 border-t border-gray-100 text-xs text-gray-500 text-center">
// // //                 💡 Tip: Search by name, category, or shape • Press ESC to close
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </>
// // //       )}
// // //     </nav>
// // //   );
// // // };

// // // /* --- FOOTER COMPONENT --- */
// // // const Footer = () => {
// // //   return (
// // //     <footer className="bg-[#f5f3f0] border-t border-gray-200 pt-16 pb-8 mt-20">
// // //       <div className="container mx-auto px-4 max-w-7xl">
// // //         <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

// // //           {/* Column 1: Brand Info */}
// // //           <div className="space-y-6">
// // //             <div className="rounded-full ring-2 ring-black ring-offset-2 overflow-hidden w-16 h-16 flex items-center justify-center bg-white">
// // //               <img
// // //                 src="/eye-studio.png"
// // //                 alt="Eye Studio"
// // //                 className="w-full h-full object-cover"
// // //               />
// // //             </div>
// // //             <p className="text-xs text-gray-500 leading-relaxed tracking-wider uppercase">
// // //               Premium eyewear and optical solutions crafted for your vision and style.
// // //             </p>
// // //             <div className="flex space-x-4">
// // //               <FaFacebook size={18} className="text-gray-400 hover:text-black cursor-pointer" />
// // //               <FaInstagram size={18} className="text-gray-400 hover:text-black cursor-pointer" />
// // //               <FaTwitter size={18} className="text-gray-400 hover:text-black cursor-pointer" />
// // //             </div>
// // //           </div>

// // //           {/* Column 2: Quick Links */}
// // //           <div>
// // //             <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] mb-6">Information</h4>
// // //             <ul className="text-[10px] space-y-3 uppercase tracking-widest text-gray-500">
// // //               <li><Link to="/about" className="hover:text-black">About Us</Link></li>
// // //               <li><Link to="/contact" className="hover:text-black">Contact Us</Link></li>
// // //               <li className="hover:text-black cursor-pointer">Shipping Policy</li>
// // //               <li className="hover:text-black cursor-pointer">Refund Policy</li>
// // //               <li className="hover:text-black cursor-pointer">Privacy Policy</li>
// // //             </ul>
// // //           </div>

// // //           {/* Column 3: Newsletter */}
// // //           <div>
// // //             <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] mb-6">Newsletter</h4>
// // //             <p className="text-[10px] text-gray-500 mb-4 uppercase tracking-widest">Subscribe for exclusive vision updates.</p>
// // //             <div className="flex border-b border-black py-2">
// // //               <input
// // //                 type="email"
// // //                 placeholder="Email address"
// // //                 className="bg-transparent text-[10px] uppercase tracking-widest outline-none w-full"
// // //               />
// // //               <button className="text-gray-400 hover:text-black">
// // //                 <Send size={16} />
// // //               </button>
// // //             </div>
// // //           </div>

// // //           {/* Column 4: Contact */}
// // //           <div>
// // //             <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] mb-6">Get in Touch</h4>
// // //             <div className="text-[10px] text-gray-500 space-y-3 uppercase tracking-widest leading-loose">
// // //               <p>Karachi, Pakistan</p>
// // //               <p>WhatsApp: +92 371 1191925</p>
// // //               <p>Email: EyeStudio@gmail.com</p>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* Bottom Bar */}
// // //         <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
// // //           <p className="text-[9px] text-gray-400 uppercase tracking-[0.2em]">
// // //             © 2026 Eye Studio. All Rights Reserved.
// // //           </p>
// // //           <div className="flex space-x-2 grayscale opacity-50">
// // //             <div className="h-4 w-6 bg-gray-400 rounded-sm"></div>
// // //             <div className="h-4 w-6 bg-gray-400 rounded-sm"></div>
// // //             <div className="h-4 w-6 bg-gray-400 rounded-sm"></div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </footer>
// // //   );
// // // };

// // // /* --- MAIN APP FUNCTION --- */
// // // function App() {
// // //   return (
// // //     <CartProvider>
// // //       <BrowserRouter>
// // //         <div className="flex flex-col min-h-screen">
// // //           <Navbar />
// // //           <main className="grow">
// // //             <Routes>
// // //               <Route path="/" element={<Home />} />
// // //               <Route path="/about" element={<About />} />
// // //               <Route path="/contact" element={<Contact />} />
// // //               <Route path="/products" element={<ProductsPage />} />
// // //               <Route path="/product/:id" element={<ProductDetail />} />
// // //               <Route path="/cart" element={<Cart />} />
// // //               <Route path="/checkout" element={<Checkout />} />
// // //             </Routes>
// // //           </main>
// // //           <Footer />
// // //         </div>
// // //       </BrowserRouter>
// // //     </CartProvider>
// // //   );
// // // }

// // // export default App;













// // import React, { useState } from 'react';
// // import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// // import { CartProvider, useCart } from './context/CartContext';
// // import { Menu, X, ShoppingBag, Search, Send } from 'lucide-react';
// // import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
// // import { products } from './data/product.js';
// // import Home from './pages/home';
// // import About from './pages/about';
// // import Contact from './pages/contact';
// // import ProductsPage from './pages/products';
// // import ProductDetail from './pages/productDetail';
// // import Cart from './pages/cart';
// // import Checkout from './pages/checkout';

// // /* --- NAVBAR COMPONENT --- */
// // const Navbar = () => {
// //   const [isMenuOpen, setIsMenuOpen] = useState(false);
// //   const [searchOpen, setSearchOpen] = useState(false);
// //   const [searchQuery, setSearchQuery] = useState('');
// //   const { cartItems } = useCart();
// //   const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
// //   const closeMenu = () => setIsMenuOpen(false);

// //   return (
// //     <nav className="bg-white border-b border-gray-100 sticky top-0 z-100">
// //       {/* Top Announcement Bar */}
// //       <div className="bg-black text-white text-[10px] py-1.5 text-center tracking-[0.3em] uppercase font-bold">
// //         Welcome to Eye Studio - Premium Eyewear
// //       </div>

// //       <div className="container mx-auto px-4">
// //         <div className="flex items-center justify-between py-1">

// //           {/* Logo Section */}
// //           <div className="flex items-center">
// //             <Link to="/" onClick={closeMenu} className="flex items-center">
// //               <img
// //                 src="/eye-studio.png"
// //                 alt="eye studio logo"
// //                 className="h-16 md:h-20 lg:h-24 w-auto object-contain hover:opacity-90 transition-opacity duration-200"
// //               />
// //             </Link>
// //           </div>

// //           {/* Desktop Links */}
// //           <div className="hidden md:flex items-center space-x-10 text-[11px] tracking-[0.25em] font-bold uppercase text-gray-600">
// //             <Link to="/" className="hover:text-black border-b border-transparent hover:border-black transition-all pb-1">Home</Link>
// //             <Link to="/products" className="hover:text-black border-b border-transparent hover:border-black transition-all pb-1">Products</Link>
// //             <Link to="/about" className="hover:text-black border-b border-transparent hover:border-black transition-all pb-1">About Us</Link>
// //             <Link to="/contact" className="hover:text-black border-b border-transparent hover:border-black transition-all pb-1">Contact</Link>
// //           </div>

// //           {/* Actions Section */}
// //           <div className="flex items-center space-x-4">
// //             <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-800 focus:outline-none">
// //               {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
// //             </button>
// //             <button onClick={() => setSearchOpen(true)} className="hover:text-gray-500 transition" title="Search products">
// //               <Search size={18} strokeWidth={1.5} />
// //             </button>
// //             <Link to="/cart" onClick={closeMenu} className="relative group">
// //               <ShoppingBag size={20} strokeWidth={1.5} className="group-hover:text-gray-500 transition" />
// //               {cartCount > 0 && (
// //                 <span className="absolute -top-1.5 -right-1.5 text-[8px] bg-black text-white w-3.5 h-3.5 rounded-full flex items-center justify-center font-bold">
// //                   {cartCount}
// //                 </span>
// //               )}
// //             </Link>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Mobile Menu */}
// //       <div className={`md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 transition-all duration-300 ease-in-out z-50 ${isMenuOpen ? 'max-h-screen opacity-100 py-6' : 'max-h-0 opacity-0 overflow-hidden'}`}>
// //         <div className="flex flex-col items-center space-y-5 text-sm tracking-[0.3em] font-bold uppercase text-gray-800">
// //           <Link to="/" onClick={closeMenu}>Home</Link>
// //           <Link to="/products" onClick={closeMenu}>Products</Link>
// //           <Link to="/about" onClick={closeMenu}>About Us</Link>
// //           <Link to="/contact" onClick={closeMenu}>Contact</Link>
// //         </div>
// //       </div>

// //       {/* Search Modal */}
// //       {searchOpen && (
// //         <>
// //           <div
// //             className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
// //             onClick={() => setSearchOpen(false)}
// //           />
// //           <div
// //             className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4"
// //             onClick={() => setSearchOpen(false)}
// //           >
// //             <div
// //               className="bg-white rounded-xl p-6 max-w-3xl w-full shadow-2xl max-h-[70vh] overflow-y-auto"
// //               onClick={(e) => e.stopPropagation()}
// //             >
// //               <div className="flex justify-between items-center mb-6">
// //                 <h3 className="text-lg font-serif italic">Search Eyewear</h3>
// //                 <button onClick={() => setSearchOpen(false)} className="text-gray-400 hover:text-gray-600 transition">
// //                   <X size={24} />
// //                 </button>
// //               </div>

// //               <div className="relative mb-6">
// //                 <input
// //                   type="text"
// //                   placeholder="Search frames, styles, colors... (press ESC to close)"
// //                   value={searchQuery}
// //                   onChange={(e) => setSearchQuery(e.target.value)}
// //                   onKeyDown={(e) => e.key === 'Escape' && setSearchOpen(false)}
// //                   autoFocus
// //                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black text-sm"
// //                 />
// //                 <div className="absolute right-3 top-3.5 flex gap-2">
// //                   {searchQuery && (
// //                     <button onClick={() => setSearchQuery('')} className="text-gray-400 hover:text-gray-600 transition">
// //                       <X size={18} />
// //                     </button>
// //                   )}
// //                   <Search size={18} className="text-gray-400" strokeWidth={2} />
// //                 </div>
// //               </div>

// //               {searchQuery && (
// //                 <div className="text-xs text-gray-500 mb-4">
// //                   Found {products.filter(p =>
// //                     p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
// //                     p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
// //                     p.shape.toLowerCase().includes(searchQuery.toLowerCase())
// //                   ).length} products
// //                 </div>
// //               )}

// //               {searchQuery ? (
// //                 <div className="space-y-3">
// //                   {products
// //                     .filter(p =>
// //                       p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
// //                       p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
// //                       p.shape.toLowerCase().includes(searchQuery.toLowerCase())
// //                     )
// //                     .map(product => (
// //                       <Link
// //                         key={product.id}
// //                         to={`/product/${product.id}`}
// //                         onClick={() => setSearchOpen(false)}
// //                         className="flex gap-4 p-3 hover:bg-gray-50 rounded-lg transition border border-gray-100 hover:border-gray-300"
// //                       >
// //                         <div className="w-16 h-20 bg-gray-200 rounded shrink-0 flex items-center justify-center">
// //                           <span className="text-xs text-gray-400">Image</span>
// //                         </div>
// //                         <div className="flex-1">
// //                           <h4 className="text-sm font-semibold text-gray-900">{product.name}</h4>
// //                           <p className="text-xs text-gray-500 mt-1">{product.gender} • {product.shape}</p>
// //                           <div className="flex items-center justify-between mt-2">
// //                             <div className="flex gap-2 items-center">
// //                               {product.originalPrice && (
// //                                 <span className="text-xs text-gray-400 line-through">Rs. {product.originalPrice}</span>
// //                               )}
// //                               <span className="text-sm font-semibold text-gray-900">Rs. {product.discountPrice}</span>
// //                             </div>
// //                             {product.discount && (
// //                               <span className="text-xs bg-black text-white px-2 py-1 rounded">{product.discount}</span>
// //                             )}
// //                           </div>
// //                         </div>
// //                       </Link>
// //                     ))}
// //                   {products.filter(p =>
// //                     p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
// //                     p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
// //                     p.shape.toLowerCase().includes(searchQuery.toLowerCase())
// //                   ).length === 0 && (
// //                     <div className="text-center py-8">
// //                       <Search size={32} className="text-gray-300 mx-auto mb-3" />
// //                       <p className="text-gray-500 text-sm">No products found for "{searchQuery}"</p>
// //                       <p className="text-gray-400 text-xs mt-1">Try different keywords</p>
// //                     </div>
// //                   )}
// //                 </div>
// //               ) : (
// //                 <div className="text-center py-8">
// //                   <p className="text-sm mb-2 text-gray-500">✨ Start typing to search our collection</p>
// //                   <p className="text-xs text-gray-400">Search by name, category, or shape</p>
// //                 </div>
// //               )}

// //               <div className="mt-6 pt-4 border-t border-gray-100 text-xs text-gray-500 text-center">
// //                 💡 Tip: Search by name, category, or shape • Press ESC to close
// //               </div>
// //             </div>
// //           </div>
// //         </>
// //       )}
// //     </nav>
// //   );
// // };

// // /* --- FOOTER COMPONENT --- */
// // const Footer = () => {
// //   return (
// //     <footer className="bg-[#f5f3f0] border-t border-gray-200 pt-16 pb-8 mt-20">
// //       <div className="container mx-auto px-4 max-w-7xl">
// //         <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

// //           {/* Column 1: Brand Info */}
// //           <div className="space-y-6">
// //             <img
// //               src="/eye-studio.png"
// //               alt="Eye Studio"
// //               className="h-16 w-auto object-contain"
// //             />
// //             <p className="text-xs text-gray-500 leading-relaxed tracking-wider uppercase">
// //               Premium eyewear and optical solutions crafted for your vision and style.
// //             </p>
// //             <div className="flex space-x-4">
// //               <FaFacebook size={18} className="text-gray-400 hover:text-black cursor-pointer" />
// //               <FaInstagram size={18} className="text-gray-400 hover:text-black cursor-pointer" />
// //               <FaTwitter size={18} className="text-gray-400 hover:text-black cursor-pointer" />
// //             </div>
// //           </div>

// //           {/* Column 2: Quick Links */}
// //           <div>
// //             <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] mb-6">Information</h4>
// //             <ul className="text-[10px] space-y-3 uppercase tracking-widest text-gray-500">
// //               <li><Link to="/about" className="hover:text-black">About Us</Link></li>
// //               <li><Link to="/contact" className="hover:text-black">Contact Us</Link></li>
// //               <li className="hover:text-black cursor-pointer">Shipping Policy</li>
// //               <li className="hover:text-black cursor-pointer">Refund Policy</li>
// //               <li className="hover:text-black cursor-pointer">Privacy Policy</li>
// //             </ul>
// //           </div>

// //           {/* Column 3: Newsletter */}
// //           <div>
// //             <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] mb-6">Newsletter</h4>
// //             <p className="text-[10px] text-gray-500 mb-4 uppercase tracking-widest">Subscribe for exclusive vision updates.</p>
// //             <div className="flex border-b border-black py-2">
// //               <input
// //                 type="email"
// //                 placeholder="Email address"
// //                 className="bg-transparent text-[10px] uppercase tracking-widest outline-none w-full"
// //               />
// //               <button className="text-gray-400 hover:text-black">
// //                 <Send size={16} />
// //               </button>
// //             </div>
// //           </div>

// //           {/* Column 4: Contact */}
// //           <div>
// //             <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] mb-6">Get in Touch</h4>
// //             <div className="text-[10px] text-gray-500 space-y-3 uppercase tracking-widest leading-loose">
// //               <p>Karachi, Pakistan</p>
// //               <p>WhatsApp: +92 371 1191925</p>
// //               <p>Email: EyeStudio@gmail.com</p>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Bottom Bar */}
// //         <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
// //           <p className="text-[9px] text-gray-400 uppercase tracking-[0.2em]">
// //             © 2026 Eye Studio. All Rights Reserved.
// //           </p>
// //           <div className="flex space-x-2 grayscale opacity-50">
// //             <div className="h-4 w-6 bg-gray-400 rounded-sm"></div>
// //             <div className="h-4 w-6 bg-gray-400 rounded-sm"></div>
// //             <div className="h-4 w-6 bg-gray-400 rounded-sm"></div>
// //           </div>
// //         </div>
// //       </div>
// //     </footer>
// //   );
// // };

// // /* --- MAIN APP FUNCTION --- */
// // function App() {
// //   return (
// //     <CartProvider>
// //       <BrowserRouter>
// //         <div className="flex flex-col min-h-screen">
// //           <Navbar />
// //           <main className="grow">
// //             <Routes>
// //               <Route path="/" element={<Home />} />
// //               <Route path="/about" element={<About />} />
// //               <Route path="/contact" element={<Contact />} />
// //               <Route path="/products" element={<ProductsPage />} />
// //               <Route path="/product/:id" element={<ProductDetail />} />
// //               <Route path="/cart" element={<Cart />} />
// //               <Route path="/checkout" element={<Checkout />} />
// //             </Routes>
// //           </main>
// //           <Footer />
// //         </div>
// //       </BrowserRouter>
// //     </CartProvider>
// //   );
// // }

// // export default App;













































// import React, { useState } from 'react';
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// import { CartProvider, useCart } from './context/CartContext';
// import { Menu, X, ShoppingBag, Search, Send } from 'lucide-react';
// import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
// import { products } from './data/product.js';
// import Home from './pages/home';
// import About from './pages/about';
// import Contact from './pages/contact';
// import ProductsPage from './pages/products';
// import ProductDetail from './pages/productDetail';
// import Cart from './pages/cart';
// import Checkout from './pages/checkout';

// /* --- NAVBAR COMPONENT --- */
// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [searchOpen, setSearchOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [activeCategory, setActiveCategory] = useState('All');
//   const { cartItems } = useCart();
//   const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
//   const closeMenu = () => setIsMenuOpen(false);

//   const filterCategories = ['All', 'Men', 'Women', 'Sunglasses', 'Luxury'];

//   const filteredProducts = products.filter((p) => {
//     const matchesQuery =
//       p.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       p.category?.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       p.shape?.toLowerCase().includes(searchQuery.toLowerCase());

//     const matchesCategory =
//       activeCategory === 'All' ||
//       p.category?.toLowerCase() === activeCategory.toLowerCase() ||
//       p.gender?.toLowerCase() === activeCategory.toLowerCase();

//     return matchesQuery && matchesCategory;
//   });

//   const handleClose = () => {
//     setSearchOpen(false);
//     setSearchQuery('');
//     setActiveCategory('All');
//   };

//   return (
//     <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
//       {/* Top Announcement Bar */}
//       <div className="bg-black text-white text-[10px] py-1.5 text-center tracking-[0.3em] uppercase font-bold">
//         Welcome to Eye Studio — Premium Eyewear
//       </div>

//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between py-1">

//           {/* Logo */}
//           <div className="flex items-center">
//             <Link to="/" onClick={closeMenu} className="flex items-center">
//               <img
//                 src="/eye-studio.png"
//                 alt="Eye Studio logo"
//                 className="h-16 md:h-20 lg:h-24 w-auto object-contain hover:opacity-90 transition-opacity duration-200"
//               />
//             </Link>
//           </div>

//           {/* Desktop Links */}
//           <div className="hidden md:flex items-center space-x-10 text-[11px] tracking-[0.25em] font-bold uppercase text-gray-600">
//             <Link to="/" className="hover:text-black border-b border-transparent hover:border-black transition-all pb-1">Home</Link>
//             <Link to="/products" className="hover:text-black border-b border-transparent hover:border-black transition-all pb-1">Products</Link>
//             <Link to="/about" className="hover:text-black border-b border-transparent hover:border-black transition-all pb-1">About Us</Link>
//             <Link to="/contact" className="hover:text-black border-b border-transparent hover:border-black transition-all pb-1">Contact</Link>
//           </div>

//           {/* Actions */}
//           <div className="flex items-center space-x-4">
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="md:hidden text-gray-800 focus:outline-none"
//             >
//               {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
//             </button>
//             <button
//               onClick={() => setSearchOpen(true)}
//               className="hover:text-gray-500 transition"
//               title="Search products"
//             >
//               <Search size={18} strokeWidth={1.5} />
//             </button>
//             <Link to="/cart" onClick={closeMenu} className="relative group">
//               <ShoppingBag size={20} strokeWidth={1.5} className="group-hover:text-gray-500 transition" />
//               {cartCount > 0 && (
//                 <span className="absolute -top-1.5 -right-1.5 text-[8px] bg-black text-white w-3.5 h-3.5 rounded-full flex items-center justify-center font-bold">
//                   {cartCount}
//                 </span>
//               )}
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 transition-all duration-300 ease-in-out z-50 ${
//           isMenuOpen ? 'max-h-screen opacity-100 py-6' : 'max-h-0 opacity-0 overflow-hidden'
//         }`}
//       >
//         <div className="flex flex-col items-center space-y-5 text-sm tracking-[0.3em] font-bold uppercase text-gray-800">
//           <Link to="/" onClick={closeMenu}>Home</Link>
//           <Link to="/products" onClick={closeMenu}>Products</Link>
//           <Link to="/about" onClick={closeMenu}>About Us</Link>
//           <Link to="/contact" onClick={closeMenu}>Contact</Link>
//         </div>
//       </div>

//       {/* Search Modal */}
//       {searchOpen && (
//         <>
//           {/* Backdrop */}
//           <div
//             className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
//             onClick={handleClose}
//           />

//           {/* Modal */}
//           <div
//             className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4"
//             onClick={handleClose}
//           >
//             <div
//               className="bg-white rounded-xl p-6 max-w-3xl w-full shadow-2xl max-h-[75vh] flex flex-col"
//               onClick={(e) => e.stopPropagation()}
//             >
//               {/* Header */}
//               <div className="flex justify-between items-center mb-5">
//                 <h3 className="text-lg font-serif italic">Search Eyewear</h3>
//                 <button onClick={handleClose} className="text-gray-400 hover:text-gray-600 transition">
//                   <X size={24} />
//                 </button>
//               </div>

//               {/* Search Input */}
//               <div className="relative mb-4">
//                 <input
//                   type="text"
//                   placeholder="Search by name, category, or shape..."
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   onKeyDown={(e) => e.key === 'Escape' && handleClose()}
//                   autoFocus
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black text-sm pr-16"
//                 />
//                 <div className="absolute right-3 top-3 flex items-center gap-2">
//                   {searchQuery && (
//                     <button
//                       onClick={() => setSearchQuery('')}
//                       className="text-gray-400 hover:text-gray-600 transition"
//                     >
//                       <X size={16} />
//                     </button>
//                   )}
//                   <Search size={18} className="text-gray-400" strokeWidth={2} />
//                 </div>
//               </div>

//               {/* Category Filter Pills */}
//               <div className="flex flex-wrap gap-2 mb-4">
//                 {filterCategories.map((cat) => (
//                   <button
//                     key={cat}
//                     onClick={() => setActiveCategory(cat)}
//                     className={`px-3 py-1 text-xs rounded-full border transition ${
//                       activeCategory === cat
//                         ? 'bg-black text-white border-black'
//                         : 'border-gray-200 text-gray-600 hover:border-black hover:bg-black hover:text-white'
//                     }`}
//                   >
//                     {cat}
//                   </button>
//                 ))}
//               </div>

//               {/* Results count */}
//               {(searchQuery || activeCategory !== 'All') && (
//                 <p className="text-xs text-gray-400 mb-3">
//                   {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
//                 </p>
//               )}

//               {/* Results List */}
//               <div className="overflow-y-auto flex-1">
//                 {searchQuery || activeCategory !== 'All' ? (
//                   filteredProducts.length > 0 ? (
//                     <div className="space-y-3">
//                       {filteredProducts.map((product) => (
//                         <Link
//                           key={product.id}
//                           to={`/product/${product.id}`}
//                           onClick={handleClose}
//                           className="flex gap-4 p-3 hover:bg-gray-50 rounded-lg transition border border-gray-100 hover:border-gray-300"
//                         >
//                           {/* Product image or placeholder */}
//                           <div className="w-16 h-20 rounded shrink-0 overflow-hidden bg-gray-100 flex items-center justify-center">
//                             {product.cardImage ? (
//                               <img
//                                 src={product.cardImage}
//                                 alt={product.name}
//                                 className="w-full h-full object-cover"
//                               />
//                             ) : (
//                               <span className="text-xs text-gray-400">No image</span>
//                             )}
//                           </div>

//                           <div className="flex-1 min-w-0">
//                             <h4 className="text-sm font-semibold text-gray-900 truncate">{product.name}</h4>
//                             <p className="text-xs text-gray-500 mt-0.5">
//                               {product.gender && <span>{product.gender}</span>}
//                               {product.gender && product.shape && <span> • </span>}
//                               {product.shape && <span>{product.shape}</span>}
//                               {product.category && <span className="ml-1 text-gray-400">({product.category})</span>}
//                             </p>
//                             <div className="flex items-center justify-between mt-2">
//                               <div className="flex gap-2 items-center">
//                                 {(product.pricing?.original || product.originalPrice) && (
//                                   <span className="text-xs text-gray-400 line-through">
//                                     Rs. {(product.pricing?.original || product.originalPrice).toLocaleString('en-PK')}
//                                   </span>
//                                 )}
//                                 <span className="text-sm font-semibold text-gray-900">
//                                   Rs. {(product.pricing?.discounted || product.discountPrice || 0).toLocaleString('en-PK')}
//                                 </span>
//                               </div>
//                               {(product.pricing?.discount_percent || product.discount) && (
//                                 <span className="text-xs bg-black text-white px-2 py-0.5 rounded">
//                                   -{product.pricing?.discount_percent || product.discount}%
//                                 </span>
//                               )}
//                             </div>
//                           </div>
//                         </Link>
//                       ))}
//                     </div>
//                   ) : (
//                     <div className="text-center py-12">
//                       <Search size={36} className="text-gray-300 mx-auto mb-3" strokeWidth={1.5} />
//                       <p className="text-gray-500 text-sm">No products found</p>
//                       <p className="text-gray-400 text-xs mt-1">Try a different keyword or category</p>
//                     </div>
//                   )
//                 ) : (
//                   /* Empty / initial state */
//                   <div className="text-center py-10">
//                     <Search size={40} className="text-gray-200 mx-auto mb-4" strokeWidth={1} />
//                     <p className="text-sm text-gray-500 mb-1">✨ Start typing to search our collection</p>
//                     <p className="text-xs text-gray-400">Or filter by category above</p>
//                   </div>
//                 )}
//               </div>

//               {/* Footer tip */}
//               <div className="mt-4 pt-3 border-t border-gray-100 text-xs text-gray-400 text-center">
//                 💡 Search by name, category, or shape • Press ESC to close
//               </div>
//             </div>
//           </div>
//         </>
//       )}
//     </nav>
//   );
// };

// /* --- FOOTER COMPONENT --- */
// const Footer = () => {
//   return (
//     <footer className="bg-[#f5f3f0] border-t border-gray-200 pt-16 pb-8">
//       <div className="container mx-auto px-4 max-w-7xl">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

//           {/* Column 1: Brand */}
//           <div className="space-y-6">
//             <img
//               src="/eye-studio.png"
//               alt="Eye Studio"
//               className="h-16 w-auto object-contain"
//             />
//             <p className="text-xs text-gray-500 leading-relaxed tracking-wider uppercase">
//               Premium eyewear and optical solutions crafted for your vision and style.
//             </p>
//             <div className="flex space-x-4">
//               <FaFacebook size={18} className="text-gray-400 hover:text-black cursor-pointer transition" />
//               <FaInstagram size={18} className="text-gray-400 hover:text-black cursor-pointer transition" />
//               <FaTwitter size={18} className="text-gray-400 hover:text-black cursor-pointer transition" />
//             </div>
//           </div>

//           {/* Column 2: Links */}
//           <div>
//             <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] mb-6">Information</h4>
//             <ul className="text-[10px] space-y-3 uppercase tracking-widest text-gray-500">
//               <li><Link to="/about" className="hover:text-black transition">About Us</Link></li>
//               <li><Link to="/contact" className="hover:text-black transition">Contact Us</Link></li>
//               <li className="hover:text-black cursor-pointer transition">Shipping Policy</li>
//               <li className="hover:text-black cursor-pointer transition">Refund Policy</li>
//               <li className="hover:text-black cursor-pointer transition">Privacy Policy</li>
//             </ul>
//           </div>

//           {/* Column 3: Newsletter */}
//           <div>
//             <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] mb-6">Newsletter</h4>
//             <p className="text-[10px] text-gray-500 mb-4 uppercase tracking-widest">
//               Subscribe for exclusive vision updates.
//             </p>
//             <div className="flex border-b border-black py-2">
//               <input
//                 type="email"
//                 placeholder="Email address"
//                 className="bg-transparent text-[10px] uppercase tracking-widest outline-none w-full"
//               />
//               <button className="text-gray-400 hover:text-black transition">
//                 <Send size={16} />
//               </button>
//             </div>
//           </div>

//           {/* Column 4: Contact */}
//           <div>
//             <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] mb-6">Get in Touch</h4>
//             <div className="text-[10px] text-gray-500 space-y-3 uppercase tracking-widest leading-loose">
//               <p>Karachi, Pakistan</p>
//               <p>WhatsApp: +92 371 1191925</p>
//               <p>Email: EyeStudio@gmail.com</p>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
//           <p className="text-[9px] text-gray-400 uppercase tracking-[0.2em]">
//             © 2026 Eye Studio. All Rights Reserved.
//           </p>
//           <div className="flex space-x-2 grayscale opacity-50">
//             <div className="h-4 w-6 bg-gray-400 rounded-sm" />
//             <div className="h-4 w-6 bg-gray-400 rounded-sm" />
//             <div className="h-4 w-6 bg-gray-400 rounded-sm" />
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// /* --- MAIN APP --- */
// function App() {
//   return (
//     <CartProvider>
//       <BrowserRouter>
//         <div className="flex flex-col min-h-screen">
//           <Navbar />
//           <main className="grow">
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/about" element={<About />} />
//               <Route path="/contact" element={<Contact />} />
//               <Route path="/products" element={<ProductsPage />} />
//               <Route path="/product/:id" element={<ProductDetail />} />
//               <Route path="/cart" element={<Cart />} />
//               <Route path="/checkout" element={<Checkout />} />
//             </Routes>
//           </main>
//           <Footer />
//         </div>
//       </BrowserRouter>
//     </CartProvider>
//   );
// }

// export default App;



























import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { CartProvider, useCart } from './context/CartContext';
import { Menu, X, ShoppingBag, Search, Send } from 'lucide-react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { products } from './data/product.js';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import ProductsPage from './pages/products';
import ProductDetail from './pages/productDetail';
import Cart from './pages/cart';
import Checkout from './pages/checkout';

/* --- NAVBAR COMPONENT --- */
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const { cartItems } = useCart();
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const closeMenu = () => setIsMenuOpen(false);

  const filterCategories = ['All', 'Men', 'Women', 'Sunglasses', 'Luxury'];

  const filteredProducts = products.filter((p) => {
    const matchesQuery =
      p.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.shape?.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      activeCategory === 'All' ||
      p.category?.toLowerCase() === activeCategory.toLowerCase() ||
      p.gender?.toLowerCase() === activeCategory.toLowerCase();

    return matchesQuery && matchesCategory;
  });

  const handleClose = () => {
    setSearchOpen(false);
    setSearchQuery('');
    setActiveCategory('All');
  };

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      {/* Top Announcement Bar */}
      <div className="bg-black text-white text-[10px] py-1.5 text-center tracking-[0.3em] uppercase font-bold">
        Welcome to Eye Studio — Premium Eyewear
      </div>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-1">

          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" onClick={closeMenu} className="flex items-center">
              <img
                src="/eye-studio.png"
                alt="Eye Studio logo"
                className="w-30 h-30 rounded-full object-cover hover:opacity-90 transition-opacity duration-200"
              />
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-10 text-[11px] tracking-[0.25em] font-bold uppercase text-gray-600">
            <Link to="/" className="hover:text-black border-b border-transparent hover:border-black transition-all pb-1">Home</Link>
            <Link to="/products" className="hover:text-black border-b border-transparent hover:border-black transition-all pb-1">Products</Link>
            <Link to="/about" className="hover:text-black border-b border-transparent hover:border-black transition-all pb-1">About Us</Link>
            <Link to="/contact" className="hover:text-black border-b border-transparent hover:border-black transition-all pb-1">Contact</Link>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-800 focus:outline-none"
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
            <button
              onClick={() => setSearchOpen(true)}
              className="hover:text-gray-500 transition"
              title="Search products"
            >
              <Search size={18} strokeWidth={1.5} />
            </button>
            <Link to="/cart" onClick={closeMenu} className="relative group">
              <ShoppingBag size={20} strokeWidth={1.5} className="group-hover:text-gray-500 transition" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 text-[8px] bg-black text-white w-3.5 h-3.5 rounded-full flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 transition-all duration-300 ease-in-out z-50 ${isMenuOpen ? 'max-h-screen opacity-100 py-6' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
      >
        <div className="flex flex-col items-center space-y-5 text-sm tracking-[0.3em] font-bold uppercase text-gray-800">
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/products" onClick={closeMenu}>Products</Link>
          <Link to="/about" onClick={closeMenu}>About Us</Link>
          <Link to="/contact" onClick={closeMenu}>Contact</Link>
        </div>
      </div>

      {/* Search Modal */}
      {searchOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Modal */}
          <div
            className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4"
            onClick={handleClose}
          >
            <div
              className="bg-white rounded-xl p-6 max-w-3xl w-full shadow-2xl max-h-[75vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex justify-between items-center mb-5">
                <h3 className="text-lg font-serif italic">Search Eyewear</h3>
                <button onClick={handleClose} className="text-gray-400 hover:text-gray-600 transition">
                  <X size={24} />
                </button>
              </div>

              {/* Search Input */}
              <div className="relative mb-4">
                <input
                  type="text"
                  placeholder="Search by name, category, or shape..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => e.key === 'Escape' && handleClose()}
                  autoFocus
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black text-sm pr-16"
                />
                <div className="absolute right-3 top-3 flex items-center gap-2">
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="text-gray-400 hover:text-gray-600 transition"
                    >
                      <X size={16} />
                    </button>
                  )}
                  <Search size={18} className="text-gray-400" strokeWidth={2} />
                </div>
              </div>

              {/* Category Filter Pills */}
              <div className="flex flex-wrap gap-2 mb-4">
                {filterCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-3 py-1 text-xs rounded-full border transition ${activeCategory === cat
                        ? 'bg-black text-white border-black'
                        : 'border-gray-200 text-gray-600 hover:border-black hover:bg-black hover:text-white'
                      }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Results count */}
              {(searchQuery || activeCategory !== 'All') && (
                <p className="text-xs text-gray-400 mb-3">
                  {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
                </p>
              )}

              {/* Results List */}
              <div className="overflow-y-auto flex-1">
                {searchQuery || activeCategory !== 'All' ? (
                  filteredProducts.length > 0 ? (
                    <div className="space-y-3">
                      {filteredProducts.map((product) => (
                        <Link
                          key={product.id}
                          to={`/product/${product.id}`}
                          onClick={handleClose}
                          className="flex gap-4 p-3 hover:bg-gray-50 rounded-lg transition border border-gray-100 hover:border-gray-300"
                        >
                          {/* Product image or placeholder */}
                          <div className="w-16 h-20 rounded shrink-0 overflow-hidden bg-gray-100 flex items-center justify-center">
                            {product.cardImage ? (
                              <img
                                src={product.cardImage}
                                alt={product.name}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <span className="text-xs text-gray-400">No image</span>
                            )}
                          </div>

                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-semibold text-gray-900 truncate">{product.name}</h4>
                            <p className="text-xs text-gray-500 mt-0.5">
                              {product.gender && <span>{product.gender}</span>}
                              {product.gender && product.shape && <span> • </span>}
                              {product.shape && <span>{product.shape}</span>}
                              {product.category && <span className="ml-1 text-gray-400">({product.category})</span>}
                            </p>
                            <div className="flex items-center justify-between mt-2">
                              <div className="flex gap-2 items-center">
                                {(product.pricing?.original || product.originalPrice) && (
                                  <span className="text-xs text-gray-400 line-through">
                                    Rs. {(product.pricing?.original || product.originalPrice).toLocaleString('en-PK')}
                                  </span>
                                )}
                                <span className="text-sm font-semibold text-gray-900">
                                  Rs. {(product.pricing?.discounted || product.discountPrice || 0).toLocaleString('en-PK')}
                                </span>
                              </div>
                              {(product.pricing?.discount_percent || product.discount) && (
                                <span className="text-xs bg-black text-white px-2 py-0.5 rounded">
                                  -{product.pricing?.discount_percent || product.discount}%
                                </span>
                              )}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <Search size={36} className="text-gray-300 mx-auto mb-3" strokeWidth={1.5} />
                      <p className="text-gray-500 text-sm">No products found</p>
                      <p className="text-gray-400 text-xs mt-1">Try a different keyword or category</p>
                    </div>
                  )
                ) : (
                  /* Empty / initial state */
                  <div className="text-center py-10">
                    <Search size={40} className="text-gray-200 mx-auto mb-4" strokeWidth={1} />
                    <p className="text-sm text-gray-500 mb-1">✨ Start typing to search our collection</p>
                    <p className="text-xs text-gray-400">Or filter by category above</p>
                  </div>
                )}
              </div>

              {/* Footer tip */}
              <div className="mt-4 pt-3 border-t border-gray-100 text-xs text-gray-400 text-center">
                💡 Search by name, category, or shape • Press ESC to close
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

/* --- FOOTER COMPONENT --- */
const Footer = () => {
  return (
    <footer className="bg-[#f5f3f0] border-t border-gray-200 pt-16 pb-8">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          {/* Column 1: Brand */}
          <div className="space-y-6">
            <img
              src="/eye-studio.png"
              alt="Eye Studio"
              className="h-16 w-auto object-contain"
            />
            <p className="text-xs text-gray-500 leading-relaxed tracking-wider uppercase">
              Premium eyewear and optical solutions crafted for your vision and style.
            </p>
            <div className="flex space-x-4">
              <FaFacebook size={18} className="text-gray-400 hover:text-black cursor-pointer transition" />
              <FaInstagram size={18} className="text-gray-400 hover:text-black cursor-pointer transition" />
              <FaTwitter size={18} className="text-gray-400 hover:text-black cursor-pointer transition" />
            </div>
          </div>

          {/* Column 2: Links */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] mb-6">Information</h4>
            <ul className="text-[10px] space-y-3 uppercase tracking-widest text-gray-500">
              <li><Link to="/about" className="hover:text-black transition">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-black transition">Contact Us</Link></li>
              <li className="hover:text-black cursor-pointer transition">Shipping Policy</li>
              <li className="hover:text-black cursor-pointer transition">Refund Policy</li>
              <li className="hover:text-black cursor-pointer transition">Privacy Policy</li>
            </ul>
          </div>

          {/* Column 3: Newsletter */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] mb-6">Newsletter</h4>
            <p className="text-[10px] text-gray-500 mb-4 uppercase tracking-widest">
              Subscribe for exclusive vision updates.
            </p>
            <div className="flex border-b border-black py-2">
              <input
                type="email"
                placeholder="Email address"
                className="bg-transparent text-[10px] uppercase tracking-widest outline-none w-full"
              />
              <button className="text-gray-400 hover:text-black transition">
                <Send size={16} />
              </button>
            </div>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] mb-6">Get in Touch</h4>
            <div className="text-[10px] text-gray-500 space-y-3 uppercase tracking-widest leading-loose">
              <p>Address:
                Shop No. 2, Sadiq Heights,
                Opposite Balad Trade Centre,
                Bahadurabad,
                Karachi, Pakistan.</p>
              <p>WhatsApp: 0318-3140548</p>
              <p>Email: EyeStudio@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-[9px] text-gray-400 uppercase tracking-[0.2em]">
            © 2026 Eye Studio. All Rights Reserved.
          </p>
          <div className="flex space-x-2 grayscale opacity-50">
            <div className="h-4 w-6 bg-gray-400 rounded-sm" />
            <div className="h-4 w-6 bg-gray-400 rounded-sm" />
            <div className="h-4 w-6 bg-gray-400 rounded-sm" />
          </div>
        </div>
      </div>
    </footer>
  );
};

/* --- MAIN APP --- */
function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;