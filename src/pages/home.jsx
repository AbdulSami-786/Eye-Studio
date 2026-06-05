// // import React, { useState, useEffect, useRef } from 'react';
// // import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
// // import { useCart } from '../context/CartContext';
// // import { products } from '../data/product';

// // // --- Sample Data --
// // const heroSlides = [
// //   {
// //     id: 1,
// //     title: "Visionary Elegance",
// //     subtitle: "Autumn/Winter 2024",
// //     description: "Discover frames that redefine luxury",
// //     ctaPrimary: "Shop Collection",
// //     ctaSecondary: "Explore Luxury",
// //     image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=2070&auto=format",
// //     gradient: "from-black/70 via-black/40 to-transparent"
// //   },
// //   {
// //     id: 2,
// //     title: "Minimalist Icon",
// //     subtitle: "The New Classic",
// //     description: "Where craftsmanship meets modern design",
// //     ctaPrimary: "Discover Now",
// //     ctaSecondary: "Shop Now",
// //     image: "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?q=80&w=2071&auto=format",
// //     gradient: "from-black/60 via-black/30 to-transparent"
// //   },
// //   {
// //     id: 3,
// //     title: "Timeless Craft",
// //     subtitle: "Limited Edition",
// //     description: "Handcrafted perfection for the discerning",
// //     ctaPrimary: "Shop Limited",
// //     ctaSecondary: "Learn More",
// //     image: "https://images.unsplash.com/photo-1577803645773-f96470509666?q=80&w=2070&auto=format",
// //     gradient: "from-black/70 via-black/40 to-transparent"
// //   }
// // ];

// // const categories = [
// //   { id: 1, name: "Men", image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=1887&auto=format", link: "/shop/men" },
// //   { id: 2, name: "Women", image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format", link: "/shop/women" },
// //   { id: 3, name: "Sunglasses", image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=2070&auto=format", link: "/shop/sunglasses" },
// //   { id: 4, name: "Luxury", image: "https://images.unsplash.com/photo-1594938378606-c8141f7e2b88?q=80&w=1887&auto=format", link: "/shop/luxury" },
// //   { id: 5, name: "Blue Light", image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=2070&auto=format", link: "/shop/blue-light" }
// // ];

// // const trendingProducts = products.slice(0, 3).map((product) => ({
// //   ...product,
// //   id: product.id,
// //   price: product.pricing?.discounted || 0,
// //   originalPrice: product.pricing?.original || 0,
// //   discount: product.pricing?.discount_percent || 0,
// //   image: product.cardImage || '/placeholder.jpg',
// //   rating: 4.8,
// //   reviews: 124,
// //   category: product.category,
// // }));

// // const features = [
// //   { icon: "🚚", title: "Express Delivery", description: "Free shipping on all orders over $200" },
// //   { icon: "🛡️", title: "Authenticity Guaranteed", description: "100% original luxury products" },
// //   { icon: "🏆", title: "Premium Quality", description: "Handcrafted with Japanese titanium" },
// //   { icon: "✨", title: "Lifetime Comfort", description: "Ergonomic design for daily wear" }
// // ];

// // const testimonials = [
// //   { id: 1, name: "Isabella Rossi", role: "Fashion Director", content: "The craftsmanship is exceptional. Every detail reflects true luxury. My go-to for optical wear.", rating: 5, image: "https://randomuser.me/api/portraits/women/68.jpg" },
// //   { id: 2, name: "James Chen", role: "Architect", content: "Finally, glasses that combine minimalist design with unparalleled comfort. Worth every penny.", rating: 5, image: "https://randomuser.me/api/portraits/men/32.jpg" },
// //   { id: 3, name: "Amira Hassan", role: "Designer", content: "Eye Studio offers the perfect blend of style and quality. Their collection is absolutely stunning and worth every investment.", rating: 5, image: "https://randomuser.me/api/portraits/women/45.jpg" }
// // ];

// // const instagramPosts = [
// //   "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=2070&auto=format",
// //   "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?q=80&w=2071&auto=format",
// //   "https://images.unsplash.com/photo-1577803645773-f96470509666?q=80&w=2070&auto=format",
// //   "https://images.unsplash.com/photo-1594938378606-c8141f7e2b88?q=80&w=1887&auto=format",
// //   "https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=2070&auto=format",
// //   "https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=1887&auto=format"
// // ];

// // // --- Components ---

// // const Navbar = () => {
// //   const [scrolled, setScrolled] = useState(false);
// //   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
// //   const [searchOpen, setSearchOpen] = useState(false);
// //   const [searchQuery, setSearchQuery] = useState('');
// //   const { scrollY } = useScroll();
  
// //   useEffect(() => {
// //     const unsubscribe = scrollY.on('change', (v) => setScrolled(v > 50));
// //     return () => unsubscribe();
// //   }, [scrollY]);

// //   const navLinks = ["Home", "Shop", "Men", "Women", "Luxury", "Sunglasses", "About", "Contact"];
  
// //   return (
// //     <>
// //       <motion.nav 
// //         initial={{ y: -100 }}
// //         animate={{ y: 0 }}
// //         transition={{ duration: 0.6 }}
// //         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
// //           scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
// //         }`}
// //       >
// //         <div className="container mx-auto px-6 flex justify-between items-center">
// //           {/* Logo */}
// //           <motion.div 
// //             whileHover={{ scale: 1.02 }}
// //             className="cursor-pointer"
// //           >
// //             <img
// //               src="/eye-studio.png"
// //               alt="Eye Studio logo"
// //               className="h-14 md:h-16 w-auto object-contain hover:opacity-90 transition-opacity"
// //             />
// //           </motion.div>
          
// //           {/* Desktop Navigation */}
// //           <div className="hidden md:flex space-x-8">
// //             {navLinks.map((link, i) => (
// //               <motion.a
// //                 key={link}
// //                 href="#"
// //                 initial={{ opacity: 0, y: -20 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 transition={{ delay: i * 0.05 }}
// //                 className="text-sm tracking-wide relative group"
// //               >
// //                 {link}
// //                 <span className="absolute -bottom-1 left-0 w-0 h-px bg-black transition-all duration-300 group-hover:w-full" />
// //               </motion.a>
// //             ))}
// //           </div>
          
// //           {/* Icons */}
// //           <div className="flex items-center gap-4">
// //             {/* Search Icon */}
// //             <svg 
// //               className="w-5 h-5 cursor-pointer hover:opacity-70 transition" 
// //               fill="none" 
// //               stroke="currentColor" 
// //               viewBox="0 0 24 24"
// //               onClick={() => setSearchOpen(true)}
// //             >
// //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
// //             </svg>
// //             {/* Shopping Bag Icon */}
// //             <svg className="w-5 h-5 cursor-pointer hover:opacity-70 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
// //             </svg>
// //             {/* Menu Icon */}
// //             <svg 
// //               className="w-5 h-5 cursor-pointer md:hidden" 
// //               fill="none" 
// //               stroke="currentColor" 
// //               viewBox="0 0 24 24"
// //               onClick={() => setMobileMenuOpen(true)}
// //             >
// //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
// //             </svg>
// //           </div>
// //         </div>
// //       </motion.nav>
      
// //       {/* Mobile Drawer */}
// //       <AnimatePresence>
// //         {mobileMenuOpen && (
// //           <motion.div
// //             initial={{ x: '100%' }}
// //             animate={{ x: 0 }}
// //             exit={{ x: '100%' }}
// //             transition={{ type: 'tween', duration: 0.3 }}
// //             className="fixed inset-0 z-50 bg-white shadow-xl md:hidden"
// //           >
// //             <div className="p-6 flex justify-end">
// //               <svg className="w-6 h-6 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" onClick={() => setMobileMenuOpen(false)}>
// //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
// //               </svg>
// //             </div>
// //             <div className="flex flex-col items-center gap-6 mt-10">
// //               {navLinks.map(link => (
// //                 <a key={link} href="#" className="text-lg tracking-wide font-light" onClick={() => setMobileMenuOpen(false)}>
// //                   {link}
// //                 </a>
// //               ))}
// //             </div>
// //           </motion.div>
// //         )}
// //       </AnimatePresence>

// //       {/* Search Modal */}
// //       <AnimatePresence>
// //         {searchOpen && (
// //           <motion.div
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             exit={{ opacity: 0 }}
// //             className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-start justify-center pt-20 px-4"
// //             onClick={() => setSearchOpen(false)}
// //             onKeyDown={(e) => e.key === 'Escape' && setSearchOpen(false)}
// //           >
// //             <motion.div
// //               initial={{ y: -50, opacity: 0 }}
// //               animate={{ y: 0, opacity: 1 }}
// //               exit={{ y: -50, opacity: 0 }}
// //               className="bg-white rounded-xl p-6 max-w-3xl w-full shadow-2xl"
// //               onClick={(e) => e.stopPropagation()}
// //             >
// //               {/* Search Header */}
// //               <div className="flex justify-between items-center mb-6">
// //                 <h3 className="text-lg font-serif italic">Search Eyewear</h3>
// //                 <button 
// //                   onClick={() => setSearchOpen(false)}
// //                   className="text-gray-400 hover:text-gray-600"
// //                 >
// //                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
// //                   </svg>
// //                 </button>
// //               </div>

// //               {/* Search Input */}
// //               <div className="relative mb-6">
// //                 <input
// //                   type="text"
// //                   placeholder="Search frames, styles, colors... (press ESC to close)"
// //                   value={searchQuery}
// //                   onChange={(e) => setSearchQuery(e.target.value)}
// //                   autoFocus
// //                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black text-sm"
// //                 />
// //                 <div className="absolute right-3 top-3.5 flex gap-2">
// //                   {searchQuery && (
// //                     <button
// //                       onClick={() => setSearchQuery('')}
// //                       className="text-gray-400 hover:text-gray-600 transition"
// //                     >
// //                       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
// //                       </svg>
// //                     </button>
// //                   )}
// //                   <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
// //                   </svg>
// //                 </div>
// //               </div>

// //               {/* Category Filter Tags */}
// //               <div className="flex flex-wrap gap-2 mb-6">
// //                 {['All', 'Men', 'Women', 'Sunglasses', 'Luxury'].map(cat => (
// //                   <button
// //                     key={cat}
// //                     className="px-3 py-1 text-xs rounded-full border border-gray-200 hover:border-black hover:bg-black hover:text-white transition"
// //                   >
// //                     {cat}
// //                   </button>
// //                 ))}
// //               </div>

// //               {/* Results Count */}
// //               {searchQuery && (
// //                 <div className="text-xs text-gray-500 mb-4">
// //                   Found {trendingProducts.filter(p => 
// //                     p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
// //                     p.category.toLowerCase().includes(searchQuery.toLowerCase())
// //                   ).length} products
// //                 </div>
// //               )}

// //               {/* Search Results */}
// //               {searchQuery && (
// //                 <div className="max-h-96 overflow-y-auto">
// //                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //                     {trendingProducts
// //                       .filter(p => 
// //                         p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
// //                         p.category.toLowerCase().includes(searchQuery.toLowerCase())
// //                       )
// //                       .map(product => (
// //                         <motion.div
// //                           key={product.id}
// //                           initial={{ opacity: 0, y: 10 }}
// //                           animate={{ opacity: 1, y: 0 }}
// //                           className="flex gap-4 p-4 hover:bg-gray-50 rounded-lg transition cursor-pointer border border-gray-100 hover:border-gray-300"
// //                           onClick={() => setSearchOpen(false)}
// //                         >
// //                           <img src={product.image} alt={product.name} className="w-20 h-24 object-cover rounded" />
// //                           <div className="flex-1 flex flex-col justify-between">
// //                             <div>
// //                               <h4 className="text-sm font-semibold">{product.name}</h4>
// //                               <p className="text-xs text-gray-500 mt-1">{product.category}</p>
// //                               <div className="flex items-center gap-1 mt-2">
// //                                 <span className="text-yellow-500 text-xs">★</span>
// //                                 <span className="text-xs text-gray-600">{product.rating} ({product.reviews})</span>
// //                               </div>
// //                             </div>
// //                             <div className="flex justify-between items-center">
// //                               <div className="flex gap-2">
// //                                 {product.originalPrice && (
// //                                   <span className="text-xs text-gray-400 line-through">Rs. {product.originalPrice.toLocaleString('en-PK')}</span>
// //                                 )}
// //                                 <span className="text-sm font-serif italic">Rs. {product.price.toLocaleString('en-PK')}</span>
// //                               </div>
// //                               {product.discount > 0 && (
// //                                 <span className="text-xs bg-black text-white px-2 py-1 rounded">-{product.discount}%</span>
// //                               )}
// //                             </div>
// //                           </div>
// //                         </motion.div>
// //                       ))}
// //                   </div>
// //                   {trendingProducts.filter(p => 
// //                     p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
// //                     p.category.toLowerCase().includes(searchQuery.toLowerCase())
// //                   ).length === 0 && (
// //                     <div className="text-center py-12">
// //                       <svg className="w-12 h-12 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
// //                       </svg>
// //                       <p className="text-gray-500 text-sm">No products found for "{searchQuery}"</p>
// //                       <p className="text-gray-400 text-xs mt-2">Try different keywords</p>
// //                     </div>
// //                   )}
// //                 </div>
// //               )}

// //               {/* Empty State */}
// //               {!searchQuery && (
// //                 <div className="text-center py-8">
// //                   <div className="text-gray-500 mb-4">
// //                     <p className="text-sm mb-2">✨ Browse our collection</p>
// //                     <p className="text-xs text-gray-400">Type to search or browse by category above</p>
// //                   </div>
// //                   <button
// //                     onClick={() => setSearchOpen(false)}
// //                     className="mt-4 px-6 py-2 bg-black text-white text-xs font-bold tracking-widest uppercase rounded hover:bg-gray-900 transition"
// //                   >
// //                     View All Products
// //                   </button>
// //                 </div>
// //               )}

// //               {/* Search Tips */}
// //               <div className="mt-6 pt-4 border-t border-gray-100 text-xs text-gray-500 text-center">
// //                 💡 Tip: Search by name, category, or style • Press ESC to close
// //               </div>
// //             </motion.div>
// //           </motion.div>
// //         )}
// //       </AnimatePresence>
// //     </>
// //   );
// // };

// // const Hero = () => {
// //   const [currentSlide, setCurrentSlide] = useState(0);
// //   const { scrollY } = useScroll();
// //   const y = useTransform(scrollY, [0, 500], [0, 200]);
  
// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
// //     }, 6000);
// //     return () => clearInterval(interval);
// //   }, []);

// //   const slide = heroSlides[currentSlide];
  
// //   return (
// //     <div className="relative h-screen w-full overflow-hidden">
// //       <AnimatePresence mode="wait">
// //         <motion.div
// //           key={currentSlide}
// //           initial={{ opacity: 0, scale: 1.1 }}
// //           animate={{ opacity: 1, scale: 1 }}
// //           exit={{ opacity: 0, scale: 1.05 }}
// //           transition={{ duration: 1.2, ease: "easeOut" }}
// //           className="absolute inset-0"
// //         >
// //           <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
// //           <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient}`} />
// //         </motion.div>
// //       </AnimatePresence>
      
// //       <motion.div style={{ y }} className="relative z-10 h-full flex items-center">
// //         <div className="container mx-auto px-6">
// //           <motion.div
// //             initial={{ opacity: 0, y: 30 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ delay: 0.3, duration: 0.8 }}
// //             className="max-w-2xl"
// //           >
// //             <p className="text-white/80 text-sm tracking-[0.3em] mb-4">{slide.subtitle}</p>
// //             <h1 className="text-6xl md:text-8xl font-serif text-white mb-6 leading-tight">
// //               {slide.title}
// //             </h1>
// //             <p className="text-white/90 text-lg md:text-xl mb-10 font-light">{slide.description}</p>
// //             <div className="flex gap-4">
// //               <button className="px-8 py-3 bg-white text-black hover:bg-black hover:text-white transition-all duration-300 text-sm tracking-wide">
// //                 {slide.ctaPrimary}
// //               </button>
// //               <button className="px-8 py-3 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 text-sm tracking-wide backdrop-blur-sm">
// //                 {slide.ctaSecondary}
// //               </button>
// //             </div>
// //           </motion.div>
// //         </div>
// //       </motion.div>
      
// //       {/* Glassmorphism Card */}
// //       <motion.div
// //         initial={{ opacity: 0, y: 50 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         transition={{ delay: 0.6, duration: 0.8 }}
// //         className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20"
// //       >
// //         <div className="flex gap-6">
// //           {heroSlides.map((_, idx) => (
// //             <button
// //               key={idx}
// //               onClick={() => setCurrentSlide(idx)}
// //               className={`w-2 h-2 rounded-full transition-all duration-300 ${
// //                 idx === currentSlide ? 'w-8 bg-white' : 'bg-white/50'
// //               }`}
// //             />
// //           ))}
// //         </div>
// //       </motion.div>
// //     </div>
// //   );
// // };

// // const FeaturedCategories = () => {
// //   return (
// //     <section className="py-24 bg-cream">
// //       <div className="container mx-auto px-6">
// //         <motion.div 
// //           initial={{ opacity: 0, y: 20 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           className="text-center mb-16"
// //         >
// //           <h2 className="text-4xl md:text-5xl font-serif mb-4">Discover Collections</h2>
// //           <p className="text-gray-600 max-w-lg mx-auto">Curated for every style and occasion</p>
// //         </motion.div>
        
// //         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// //           {categories.slice(0, 3).map((cat, idx) => (
// //             <motion.div
// //               key={cat.id}
// //               initial={{ opacity: 0, y: 30 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               viewport={{ once: true }}
// //               transition={{ delay: idx * 0.1 }}
// //               className="group relative overflow-hidden rounded-2xl cursor-pointer h-[400px]"
// //             >
// //               <img 
// //                 src={cat.image} 
// //                 alt={cat.name} 
// //                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
// //               />
// //               <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
// //               <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
// //                 <h3 className="text-3xl font-serif mb-2">{cat.name}</h3>
// //                 <span className="inline-block text-sm tracking-wide border-b border-white/50 pb-1 opacity-0 group-hover:opacity-100 transition-all duration-300">
// //                   Shop Now →
// //                 </span>
// //               </div>
// //             </motion.div>
// //           ))}
// //         </div>
        
// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
// //           {categories.slice(3, 5).map((cat, idx) => (
// //             <motion.div
// //               key={cat.id}
// //               initial={{ opacity: 0, y: 30 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               viewport={{ once: true }}
// //               transition={{ delay: 0.3 + idx * 0.1 }}
// //               className="group relative overflow-hidden rounded-2xl cursor-pointer h-[300px]"
// //             >
// //               <img 
// //                 src={cat.image} 
// //                 alt={cat.name} 
// //                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
// //               />
// //               <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
// //               <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
// //                 <h3 className="text-3xl font-serif mb-2">{cat.name}</h3>
// //                 <span className="inline-block text-sm tracking-wide border-b border-white/50 pb-1 opacity-0 group-hover:opacity-100 transition-all duration-300">
// //                   Shop Now →
// //                 </span>
// //               </div>
// //             </motion.div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // const ProductCard = ({ product, index }) => {
// //   const [isHovered, setIsHovered] = useState(false);
// //   const [quickViewOpen, setQuickViewOpen] = useState(false);
// //   const { addToCart } = useCart();
// //   const [addedToCart, setAddedToCart] = useState(false);

// //   const handleAddToCart = () => {
// //     addToCart({
// //       id: product.id,
// //       name: product.name,
// //       price: product.price,
// //       image: product.image,
// //       quantity: 1
// //     });
// //     setAddedToCart(true);
// //     setTimeout(() => setAddedToCart(false), 2000);
// //   };
  
// //   return (
// //     <>
// //       <motion.div
// //         initial={{ opacity: 0, y: 30 }}
// //         whileInView={{ opacity: 1, y: 0 }}
// //         viewport={{ once: true }}
// //         transition={{ delay: index * 0.1 }}
// //         className="group relative cursor-pointer"
// //         onMouseEnter={() => setIsHovered(true)}
// //         onMouseLeave={() => setIsHovered(false)}
// //       >
// //         <div className="relative overflow-hidden rounded-xl bg-gray-100 aspect-[3/4]">
// //           <img 
// //             src={product.image} 
// //             alt={product.name}
// //             className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
// //           />
// //           {product.discount > 0 && (
// //             <span className="absolute top-4 left-4 bg-black text-white text-xs px-3 py-1 rounded-full">
// //               -{product.discount}%
// //             </span>
// //           )}
          
// //           {/* Hover Actions */}
// //           <AnimatePresence>
// //             {isHovered && (
// //               <motion.div
// //                 initial={{ opacity: 0, y: 20 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 exit={{ opacity: 0, y: 20 }}
// //                 className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent flex justify-center gap-3"
// //               >
// //                 <button 
// //                   onClick={handleAddToCart}
// //                   className="bg-white text-black px-6 py-2 text-sm rounded-full hover:bg-black hover:text-white transition"
// //                 >
// //                   {addedToCart ? '✓ Added' : 'Add to Cart'}
// //                 </button>
// //                 <button 
// //                   onClick={() => setQuickViewOpen(true)}
// //                   className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition"
// //                 >
// //                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
// //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
// //                   </svg>
// //                 </button>
// //                 <button className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition">
// //                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
// //                   </svg>
// //                 </button>
// //               </motion.div>
// //             )}
// //           </AnimatePresence>
// //         </div>
        
// //         <div className="mt-4 text-center">
// //           <h4 className="font-medium tracking-wide text-sm">{product.name}</h4>
// //           <div className="flex justify-center items-center gap-2 mt-1">
// //             {product.originalPrice && (
// //               <span className="text-gray-400 line-through text-sm">Rs. {product.originalPrice.toLocaleString('en-PK')}</span>
// //             )}
// //             <span className="font-serif text-lg">Rs. {product.price.toLocaleString('en-PK')}</span>
// //           </div>
// //           <div className="flex justify-center items-center gap-1 mt-2">
// //             <span className="text-yellow-500">★</span>
// //             <span className="text-xs">{product.rating}</span>
// //             <span className="text-xs text-gray-400">({product.reviews})</span>
// //           </div>
// //         </div>
// //       </motion.div>
      
// //       {/* Quick View Modal */}
// //       <AnimatePresence>
// //         {quickViewOpen && (
// //           <motion.div
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             exit={{ opacity: 0 }}
// //             className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
// //             onClick={() => setQuickViewOpen(false)}
// //           >
// //             <motion.div
// //               initial={{ scale: 0.9, opacity: 0 }}
// //               animate={{ scale: 1, opacity: 1 }}
// //               exit={{ scale: 0.9, opacity: 0 }}
// //               className="bg-white rounded-2xl max-w-4xl w-full overflow-hidden"
// //               onClick={(e) => e.stopPropagation()}
// //             >
// //               <div className="flex flex-col md:flex-row">
// //                 <div className="md:w-1/2 h-80 md:h-auto">
// //                   <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
// //                 </div>
// //                 <div className="p-8 md:w-1/2">
// //                   <h3 className="text-2xl font-serif mb-2">{product.name}</h3>
// //                   <div className="flex items-center gap-3 mb-4">
// //                     <span className="text-3xl font-serif">Rs. {product.price.toLocaleString('en-PK')}</span>
// //                     {product.originalPrice && (
// //                       <span className="text-gray-400 line-through">Rs. {product.originalPrice.toLocaleString('en-PK')}</span>
// //                     )}
// //                   </div>
// //                   <p className="text-gray-600 mb-6">Premium acetate frame with titanium hinges. Available in multiple colors.</p>
// //                   <button 
// //                     onClick={handleAddToCart}
// //                     className="w-full bg-black text-white py-3 rounded-full hover:bg-gray-800 transition"
// //                   >
// //                     {addedToCart ? '✓ Added to Cart' : 'Add to Cart'}
// //                   </button>
// //                 </div>
// //               </div>
// //             </motion.div>
// //           </motion.div>
// //         )}
// //       </AnimatePresence>
// //     </>
// //   );
// // };

// // const TrendingProducts = () => {
// //   return (
// //     <section className="py-24 bg-white">
// //       <div className="container mx-auto px-6">
// //         <motion.div
// //           initial={{ opacity: 0, y: 20 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           className="text-center mb-16"
// //         >
// //           <h2 className="text-4xl md:text-5xl font-serif mb-4">Trending Now</h2>
// //           <p className="text-gray-600">Most sought-after styles this season</p>
// //         </motion.div>
        
// //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
// //           {trendingProducts.flat().map((product) => (
// //             <ProductCard key={`trending-${product.id}`} product={product} />
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // const WhyChooseUs = () => {
// //   return (
// //     <section className="py-24 bg-cream">
// //       <div className="container mx-auto px-6">
// //         <motion.div
// //           initial={{ opacity: 0, y: 20 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           className="text-center mb-16"
// //         >
// //           <h2 className="text-4xl md:text-5xl font-serif mb-4">Why Choose Eye Studio</h2>
// //           <p className="text-gray-600">Experience the difference of true luxury eyewear</p>
// //         </motion.div>
        
// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
// //           {features.map((feature, idx) => (
// //             <motion.div
// //               key={feature.title}
// //               initial={{ opacity: 0, y: 30 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               viewport={{ once: true }}
// //               transition={{ delay: idx * 0.1 }}
// //               className="group text-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
// //             >
// //               <div className="inline-flex p-3 bg-black rounded-full mb-4 text-white group-hover:scale-110 transition-transform text-2xl">
// //                 {feature.icon}
// //               </div>
// //               <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
// //               <p className="text-gray-500 text-sm">{feature.description}</p>
// //             </motion.div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // const BrandStory = () => {
// //   return (
// //     <section className="py-24 bg-white">
// //       <div className="container mx-auto px-6">
// //         <div className="flex flex-col md:flex-row gap-12 items-center">
// //           <motion.div
// //             initial={{ opacity: 0, x: -50 }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             viewport={{ once: true }}
// //             className="md:w-1/2"
// //           >
// //             <img 
// //               src="https://images.unsplash.com/photo-1591076482161-42ce6da69f67?q=80&w=2071&auto=format" 
// //               alt="Craftsmanship"
// //               className="rounded-2xl shadow-2xl w-full object-cover h-[500px]"
// //             />
// //           </motion.div>
          
// //           <motion.div
// //             initial={{ opacity: 0, x: 50 }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             viewport={{ once: true }}
// //             className="md:w-1/2 space-y-6"
// //           >
// //             <h2 className="text-4xl md:text-5xl font-serif">The Art of Vision</h2>
// //             <p className="text-gray-600 leading-relaxed">
// //               At Eye Studio, we believe eyewear is more than a necessity—it's an expression of self. 
// //               Each frame is meticulously crafted using Japanese titanium and Italian acetate, 
// //               combining centuries-old techniques with modern innovation.
// //             </p>
// //             <p className="text-gray-600 leading-relaxed">
// //               Our commitment to excellence extends beyond aesthetics. Every pair is engineered for 
// //               all-day comfort, featuring precision hinges and anti-reflective lenses that protect 
// //               your eyes while elevating your style.
// //             </p>
// //             <button className="px-8 py-3 border border-black text-black hover:bg-black hover:text-white transition-all duration-300 text-sm tracking-wide">
// //               Discover Our Story
// //             </button>
// //           </motion.div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // const Testimonials = () => {
// //   const [current, setCurrent] = useState(0);
  
// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setCurrent((prev) => (prev + 1) % testimonials.length);
// //     }, 5000);
// //     return () => clearInterval(interval);
// //   }, []);
  
// //   const testimonial = testimonials[current];
  
// //   return (
// //     <section className="py-24 bg-cream">
// //       <div className="container mx-auto px-6">
// //         <motion.div
// //           initial={{ opacity: 0, y: 20 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           className="text-center mb-16"
// //         >
// //           <h2 className="text-4xl md:text-5xl font-serif mb-4">What Our Clients Say</h2>
// //           <p className="text-gray-600">Trusted by visionaries worldwide</p>
// //         </motion.div>
        
// //         <div className="max-w-4xl mx-auto">
// //           <AnimatePresence mode="wait">
// //             <motion.div
// //               key={current}
// //               initial={{ opacity: 0, y: 20 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               exit={{ opacity: 0, y: -20 }}
// //               className="text-center"
// //             >
// //               <img 
// //                 src={testimonial.image} 
// //                 alt={testimonial.name}
// //                 className="w-20 h-20 rounded-full mx-auto mb-6 object-cover"
// //               />
// //               <div className="flex justify-center gap-1 mb-6">
// //                 {[...Array(testimonial.rating)].map((_, i) => (
// //                   <span key={i} className="text-yellow-500 text-xl">★</span>
// //                 ))}
// //               </div>
// //               <p className="text-xl md:text-2xl italic font-serif text-gray-700 mb-8">
// //                 "{testimonial.content}"
// //               </p>
// //               <h4 className="font-medium text-lg">{testimonial.name}</h4>
// //               <p className="text-gray-500 text-sm">{testimonial.role}</p>
// //             </motion.div>
// //           </AnimatePresence>
          
// //           <div className="flex justify-center gap-2 mt-10">
// //             {testimonials.map((_, idx) => (
// //               <button
// //                 key={idx}
// //                 onClick={() => setCurrent(idx)}
// //                 className={`w-2 h-2 rounded-full transition-all ${
// //                   idx === current ? 'w-8 bg-black' : 'bg-gray-300'
// //                 }`}
// //               />
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // const InstagramGallery = () => {
// //   return (
// //     <section className="py-24 bg-white">
// //       <div className="container mx-auto px-6">
// //         <motion.div
// //           initial={{ opacity: 0, y: 20 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           className="text-center mb-12"
// //         >
// //           <h2 className="text-4xl md:text-5xl font-serif mb-4">@eyestudio</h2>
// //           <p className="text-gray-600">Follow us for daily inspiration</p>
// //         </motion.div>
        
// //         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
// //           {instagramPosts.map((post, idx) => (
// //             <motion.div
// //               key={idx}
// //               initial={{ opacity: 0, scale: 0.9 }}
// //               whileInView={{ opacity: 1, scale: 1 }}
// //               viewport={{ once: true }}
// //               transition={{ delay: idx * 0.05 }}
// //               className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer"
// //             >
// //               <img src={post} alt="Instagram" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
// //               <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
// //                 <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
// //                   <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
// //                 </svg>
// //               </div>
// //             </motion.div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // const Newsletter = () => {
// //   return (
// //     <section className="py-20 bg-black text-white">
// //       <div className="container mx-auto px-6 text-center">
// //         <motion.div
// //           initial={{ opacity: 0, y: 30 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           className="max-w-2xl mx-auto"
// //         >
// //           <h2 className="text-3xl md:text-4xl font-serif mb-4">Join the Studio</h2>
// //           <p className="text-white/60 mb-8">Be the first to discover new arrivals and exclusive offers</p>
// //           <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
// //             <input 
// //               type="email" 
// //               placeholder="Your email address"
// //               className="flex-1 px-6 py-3 bg-white/10 border border-white/20 rounded-full text-white placeholder-white/50 focus:outline-none focus:border-white/50"
// //             />
// //             <button className="px-8 py-3 bg-white text-black rounded-full hover:bg-gray-100 transition">
// //               Subscribe
// //             </button>
// //           </div>
// //         </motion.div>
// //       </div>
// //     </section>
// //   );
// // };

// // const Footer = () => {
// //   return (
// //     <footer className="bg-gray-950 text-white/70 pt-20 pb-10">
// //       <div className="container mx-auto px-6">
// //         <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
// //           <div>
// //             <h3 className="text-2xl font-serif text-white mb-4">EYE STUDIO</h3>
// //             <p className="text-sm leading-relaxed">Luxury eyewear crafted for the modern visionary.</p>
// //           </div>
// //           <div>
// //             <h4 className="font-medium text-white mb-4">Shop</h4>
// //             <ul className="space-y-2 text-sm">
// //               <li><a href="#" className="hover:text-white transition">Men</a></li>
// //               <li><a href="#" className="hover:text-white transition">Women</a></li>
// //               <li><a href="#" className="hover:text-white transition">Sunglasses</a></li>
// //               <li><a href="#" className="hover:text-white transition">Blue Light</a></li>
// //             </ul>
// //           </div>
// //           <div>
// //             <h4 className="font-medium text-white mb-4">Support</h4>
// //             <ul className="space-y-2 text-sm">
// //               <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
// //               <li><a href="#" className="hover:text-white transition">Shipping & Returns</a></li>
// //               <li><a href="#" className="hover:text-white transition">Size Guide</a></li>
// //               <li><a href="#" className="hover:text-white transition">FAQ</a></li>
// //             </ul>
// //           </div>
// //           <div>
// //             <h4 className="font-medium text-white mb-4">Connect</h4>
// //             <div className="flex gap-4">
// //               <svg className="w-5 h-5 cursor-pointer hover:text-white transition" fill="currentColor" viewBox="0 0 24 24">
// //                 <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/>
// //               </svg>
// //               <svg className="w-5 h-5 cursor-pointer hover:text-white transition" fill="currentColor" viewBox="0 0 24 24">
// //                 <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
// //               </svg>
// //               <svg className="w-5 h-5 cursor-pointer hover:text-white transition" fill="currentColor" viewBox="0 0 24 24">
// //                 <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0021.6-11.808c0-.214-.005-.425-.014-.636A9.936 9.936 0 0024 4.59z"/>
// //               </svg>
// //               <svg className="w-5 h-5 cursor-pointer hover:text-white transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
// //               </svg>
// //             </div>
// //             <div className="mt-4 space-y-2 text-sm">
// //               <p className="flex items-center gap-2">
// //                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
// //                 </svg>
// //                 +1 (555) 123-4567
// //               </p>
// //               <p className="flex items-center gap-2">
// //                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
// //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
// //                 </svg>
// //                 405 Madison Ave, New York
// //               </p>
// //             </div>
// //           </div>
// //         </div>
        
// //         <div className="pt-8 border-t border-white/10 text-center text-sm">
// //           <p>&copy; 2024 Eye Studio. All rights reserved.</p>
// //         </div>
// //       </div>
// //     </footer>
// //   );
// // };

// // // --- Main Home Component ---
// // const Home = () => {
// //   useEffect(() => {
// //     window.scrollTo(0, 0);
// //   }, []);
  
// //   return (
// //     <div className="bg-cream font-sans antialiased">
// //       <Navbar />
// //       <Hero />
// //       <FeaturedCategories />
// //       <TrendingProducts />
// //       <WhyChooseUs />
// //       <BrandStory />
// //       <Testimonials />
// //       <InstagramGallery />
// //       <Newsletter />
// //       <Footer />
// //     </div>
// //   );
// // };

// // export default Home;







// import React, { useState, useEffect } from 'react';
// import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
// import { useCart } from '../context/CartContext';
// import { products } from '../data/product';

// // --- Sample Data ---
// const heroSlides = [
//   {
//     id: 1,
//     title: "Visionary Elegance",
//     subtitle: "Autumn/Winter 2024",
//     description: "Discover frames that redefine luxury",
//     ctaPrimary: "Shop Collection",
//     ctaSecondary: "Explore Luxury",
//     image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=2070&auto=format",
//     gradient: "from-black/70 via-black/40 to-transparent"
//   },
//   {
//     id: 2,
//     title: "Minimalist Icon",
//     subtitle: "The New Classic",
//     description: "Where craftsmanship meets modern design",
//     ctaPrimary: "Discover Now",
//     ctaSecondary: "Shop Now",
//     image: "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?q=80&w=2071&auto=format",
//     gradient: "from-black/60 via-black/30 to-transparent"
//   },
//   {
//     id: 3,
//     title: "Timeless Craft",
//     subtitle: "Limited Edition",
//     description: "Handcrafted perfection for the discerning",
//     ctaPrimary: "Shop Limited",
//     ctaSecondary: "Learn More",
//     image: "https://images.unsplash.com/photo-1577803645773-f96470509666?q=80&w=2070&auto=format",
//     gradient: "from-black/70 via-black/40 to-transparent"
//   }
// ];

// const categories = [
//   { id: 1, name: "Men", image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=1887&auto=format", link: "/shop/men" },
//   { id: 2, name: "Women", image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format", link: "/shop/women" },
//   { id: 3, name: "Sunglasses", image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=2070&auto=format", link: "/shop/sunglasses" },
//   { id: 4, name: "Luxury", image: "https://images.unsplash.com/photo-1594938378606-c8141f7e2b88?q=80&w=1887&auto=format", link: "/shop/luxury" },
//   { id: 5, name: "Blue Light", image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=2070&auto=format", link: "/shop/blue-light" }
// ];

// const trendingProducts = products.slice(0, 3).map((product) => ({
//   ...product,
//   id: product.id,
//   price: product.pricing?.discounted || 0,
//   originalPrice: product.pricing?.original || 0,
//   discount: product.pricing?.discount_percent || 0,
//   image: product.cardImage || '/placeholder.jpg',
//   rating: 4.8,
//   reviews: 124,
//   category: product.category,
// }));

// const features = [
//   { icon: "🚚", title: "Express Delivery", description: "Free shipping on all orders over Rs. 5,000" },
//   { icon: "🛡️", title: "Authenticity Guaranteed", description: "100% original luxury products" },
//   { icon: "🏆", title: "Premium Quality", description: "Handcrafted with Japanese titanium" },
//   { icon: "✨", title: "Lifetime Comfort", description: "Ergonomic design for daily wear" }
// ];

// const testimonials = [
//   { id: 1, name: "Isabella Rossi", role: "Fashion Director", content: "The craftsmanship is exceptional. Every detail reflects true luxury. My go-to for optical wear.", rating: 5, image: "https://randomuser.me/api/portraits/women/68.jpg" },
//   { id: 2, name: "James Chen", role: "Architect", content: "Finally, glasses that combine minimalist design with unparalleled comfort. Worth every penny.", rating: 5, image: "https://randomuser.me/api/portraits/men/32.jpg" },
//   { id: 3, name: "Amira Hassan", role: "Designer", content: "Eye Studio offers the perfect blend of style and quality. Their collection is absolutely stunning.", rating: 5, image: "https://randomuser.me/api/portraits/women/45.jpg" }
// ];

// const instagramPosts = [
//   "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=2070&auto=format",
//   "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?q=80&w=2071&auto=format",
//   "https://images.unsplash.com/photo-1577803645773-f96470509666?q=80&w=2070&auto=format",
//   "https://images.unsplash.com/photo-1594938378606-c8141f7e2b88?q=80&w=1887&auto=format",
//   "https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=2070&auto=format",
//   "https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=1887&auto=format"
// ];

// // --- Section Components (NO Navbar or Footer here) ---

// const Hero = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const { scrollY } = useScroll();
//   const y = useTransform(scrollY, [0, 500], [0, 200]);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
//     }, 6000);
//     return () => clearInterval(interval);
//   }, []);

//   const slide = heroSlides[currentSlide];

//   return (
//     <div className="relative h-screen w-full overflow-hidden">
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={currentSlide}
//           initial={{ opacity: 0, scale: 1.1 }}
//           animate={{ opacity: 1, scale: 1 }}
//           exit={{ opacity: 0, scale: 1.05 }}
//           transition={{ duration: 1.2, ease: "easeOut" }}
//           className="absolute inset-0"
//         >
//           <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
//           <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient}`} />
//         </motion.div>
//       </AnimatePresence>

//       <motion.div style={{ y }} className="relative z-10 h-full flex items-center">
//         <div className="container mx-auto px-6">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3, duration: 0.8 }}
//             className="max-w-2xl"
//           >
//             <p className="text-white/80 text-sm tracking-[0.3em] mb-4">{slide.subtitle}</p>
//             <h1 className="text-6xl md:text-8xl font-serif text-white mb-6 leading-tight">
//               {slide.title}
//             </h1>
//             <p className="text-white/90 text-lg md:text-xl mb-10 font-light">{slide.description}</p>
//             <div className="flex gap-4">
//               <button className="px-8 py-3 bg-white text-black hover:bg-black hover:text-white transition-all duration-300 text-sm tracking-wide">
//                 {slide.ctaPrimary}
//               </button>
//               <button className="px-8 py-3 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 text-sm tracking-wide backdrop-blur-sm">
//                 {slide.ctaSecondary}
//               </button>
//             </div>
//           </motion.div>
//         </div>
//       </motion.div>

//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.6, duration: 0.8 }}
//         className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20"
//       >
//         <div className="flex gap-6">
//           {heroSlides.map((_, idx) => (
//             <button
//               key={idx}
//               onClick={() => setCurrentSlide(idx)}
//               className={`w-2 h-2 rounded-full transition-all duration-300 ${
//                 idx === currentSlide ? 'w-8 bg-white' : 'bg-white/50'
//               }`}
//             />
//           ))}
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// const FeaturedCategories = () => {
//   return (
//     <section className="py-24 bg-[#f5f3f0]">
//       <div className="container mx-auto px-6">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-serif mb-4">Discover Collections</h2>
//           <p className="text-gray-600 max-w-lg mx-auto">Curated for every style and occasion</p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {categories.slice(0, 3).map((cat, idx) => (
//             <motion.div
//               key={cat.id}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: idx * 0.1 }}
//               className="group relative overflow-hidden rounded-2xl cursor-pointer h-[400px]"
//             >
//               <img src={cat.image} alt={cat.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
//               <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
//                 <h3 className="text-3xl font-serif mb-2">{cat.name}</h3>
//                 <span className="inline-block text-sm tracking-wide border-b border-white/50 pb-1 opacity-0 group-hover:opacity-100 transition-all duration-300">
//                   Shop Now →
//                 </span>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
//           {categories.slice(3, 5).map((cat, idx) => (
//             <motion.div
//               key={cat.id}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.3 + idx * 0.1 }}
//               className="group relative overflow-hidden rounded-2xl cursor-pointer h-[300px]"
//             >
//               <img src={cat.image} alt={cat.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
//               <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
//                 <h3 className="text-3xl font-serif mb-2">{cat.name}</h3>
//                 <span className="inline-block text-sm tracking-wide border-b border-white/50 pb-1 opacity-0 group-hover:opacity-100 transition-all duration-300">
//                   Shop Now →
//                 </span>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// const ProductCard = ({ product, index }) => {
//   const [isHovered, setIsHovered] = useState(false);
//   const [quickViewOpen, setQuickViewOpen] = useState(false);
//   const { addToCart } = useCart();
//   const [addedToCart, setAddedToCart] = useState(false);

//   const handleAddToCart = () => {
//     addToCart({
//       id: product.id,
//       name: product.name,
//       price: product.price,
//       image: product.image,
//       quantity: 1
//     });
//     setAddedToCart(true);
//     setTimeout(() => setAddedToCart(false), 2000);
//   };

//   return (
//     <>
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ delay: index * 0.1 }}
//         className="group relative cursor-pointer"
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         <div className="relative overflow-hidden rounded-xl bg-gray-100 aspect-[3/4]">
//           <img
//             src={product.image}
//             alt={product.name}
//             className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//           />
//           {product.discount > 0 && (
//             <span className="absolute top-4 left-4 bg-black text-white text-xs px-3 py-1 rounded-full">
//               -{product.discount}%
//             </span>
//           )}
//           <AnimatePresence>
//             {isHovered && (
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: 20 }}
//                 className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent flex justify-center gap-3"
//               >
//                 <button
//                   onClick={handleAddToCart}
//                   className="bg-white text-black px-6 py-2 text-sm rounded-full hover:bg-black hover:text-white transition"
//                 >
//                   {addedToCart ? '✓ Added' : 'Add to Cart'}
//                 </button>
//                 <button
//                   onClick={() => setQuickViewOpen(true)}
//                   className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition"
//                 >
//                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
//                   </svg>
//                 </button>
//                 <button className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition">
//                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
//                   </svg>
//                 </button>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>

//         <div className="mt-4 text-center">
//           <h4 className="font-medium tracking-wide text-sm">{product.name}</h4>
//           <div className="flex justify-center items-center gap-2 mt-1">
//             {product.originalPrice && (
//               <span className="text-gray-400 line-through text-sm">Rs. {product.originalPrice.toLocaleString('en-PK')}</span>
//             )}
//             <span className="font-serif text-lg">Rs. {product.price.toLocaleString('en-PK')}</span>
//           </div>
//           <div className="flex justify-center items-center gap-1 mt-2">
//             <span className="text-yellow-500">★</span>
//             <span className="text-xs">{product.rating}</span>
//             <span className="text-xs text-gray-400">({product.reviews})</span>
//           </div>
//         </div>
//       </motion.div>

//       <AnimatePresence>
//         {quickViewOpen && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
//             onClick={() => setQuickViewOpen(false)}
//           >
//             <motion.div
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.9, opacity: 0 }}
//               className="bg-white rounded-2xl max-w-4xl w-full overflow-hidden"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <div className="flex flex-col md:flex-row">
//                 <div className="md:w-1/2 h-80 md:h-auto">
//                   <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
//                 </div>
//                 <div className="p-8 md:w-1/2">
//                   <h3 className="text-2xl font-serif mb-2">{product.name}</h3>
//                   <div className="flex items-center gap-3 mb-4">
//                     <span className="text-3xl font-serif">Rs. {product.price.toLocaleString('en-PK')}</span>
//                     {product.originalPrice && (
//                       <span className="text-gray-400 line-through">Rs. {product.originalPrice.toLocaleString('en-PK')}</span>
//                     )}
//                   </div>
//                   <p className="text-gray-600 mb-6">Premium acetate frame with titanium hinges. Available in multiple colors.</p>
//                   <button
//                     onClick={handleAddToCart}
//                     className="w-full bg-black text-white py-3 rounded-full hover:bg-gray-800 transition"
//                   >
//                     {addedToCart ? '✓ Added to Cart' : 'Add to Cart'}
//                   </button>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// const TrendingProducts = () => {
//   return (
//     <section className="py-24 bg-white">
//       <div className="container mx-auto px-6">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-serif mb-4">Trending Now</h2>
//           <p className="text-gray-600">Most sought-after styles this season</p>
//         </motion.div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//           {trendingProducts.flat().map((product, i) => (
//             <ProductCard key={`trending-${product.id}`} product={product} index={i} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// const WhyChooseUs = () => {
//   return (
//     <section className="py-24 bg-[#f5f3f0]">
//       <div className="container mx-auto px-6">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-serif mb-4">Why Choose Eye Studio</h2>
//           <p className="text-gray-600">Experience the difference of true luxury eyewear</p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {features.map((feature, idx) => (
//             <motion.div
//               key={feature.title}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: idx * 0.1 }}
//               className="group text-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
//             >
//               <div className="inline-flex p-3 bg-black rounded-full mb-4 text-white group-hover:scale-110 transition-transform text-2xl">
//                 {feature.icon}
//               </div>
//               <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
//               <p className="text-gray-500 text-sm">{feature.description}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// const BrandStory = () => {
//   return (
//     <section className="py-24 bg-white">
//       <div className="container mx-auto px-6">
//         <div className="flex flex-col md:flex-row gap-12 items-center">
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             className="md:w-1/2"
//           >
//             <img
//               src="https://images.unsplash.com/photo-1591076482161-42ce6da69f67?q=80&w=2071&auto=format"
//               alt="Craftsmanship"
//               className="rounded-2xl shadow-2xl w-full object-cover h-[500px]"
//             />
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             className="md:w-1/2 space-y-6"
//           >
//             <h2 className="text-4xl md:text-5xl font-serif">The Art of Vision</h2>
//             <p className="text-gray-600 leading-relaxed">
//               At Eye Studio, we believe eyewear is more than a necessity—it's an expression of self.
//               Each frame is meticulously crafted using Japanese titanium and Italian acetate,
//               combining centuries-old techniques with modern innovation.
//             </p>
//             <p className="text-gray-600 leading-relaxed">
//               Our commitment to excellence extends beyond aesthetics. Every pair is engineered for
//               all-day comfort, featuring precision hinges and anti-reflective lenses that protect
//               your eyes while elevating your style.
//             </p>
//             <button className="px-8 py-3 border border-black text-black hover:bg-black hover:text-white transition-all duration-300 text-sm tracking-wide">
//               Discover Our Story
//             </button>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// const Testimonials = () => {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % testimonials.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   const testimonial = testimonials[current];

//   return (
//     <section className="py-24 bg-[#f5f3f0]">
//       <div className="container mx-auto px-6">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-serif mb-4">What Our Clients Say</h2>
//           <p className="text-gray-600">Trusted by visionaries worldwide</p>
//         </motion.div>

//         <div className="max-w-4xl mx-auto">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={current}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               className="text-center"
//             >
//               <img
//                 src={testimonial.image}
//                 alt={testimonial.name}
//                 className="w-20 h-20 rounded-full mx-auto mb-6 object-cover"
//               />
//               <div className="flex justify-center gap-1 mb-6">
//                 {[...Array(testimonial.rating)].map((_, i) => (
//                   <span key={i} className="text-yellow-500 text-xl">★</span>
//                 ))}
//               </div>
//               <p className="text-xl md:text-2xl italic font-serif text-gray-700 mb-8">
//                 "{testimonial.content}"
//               </p>
//               <h4 className="font-medium text-lg">{testimonial.name}</h4>
//               <p className="text-gray-500 text-sm">{testimonial.role}</p>
//             </motion.div>
//           </AnimatePresence>

//           <div className="flex justify-center gap-2 mt-10">
//             {testimonials.map((_, idx) => (
//               <button
//                 key={idx}
//                 onClick={() => setCurrent(idx)}
//                 className={`w-2 h-2 rounded-full transition-all ${
//                   idx === current ? 'w-8 bg-black' : 'bg-gray-300'
//                 }`}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// const InstagramGallery = () => {
//   return (
//     <section className="py-24 bg-white">
//       <div className="container mx-auto px-6">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-4xl md:text-5xl font-serif mb-4">@eyestudio</h2>
//           <p className="text-gray-600">Follow us for daily inspiration</p>
//         </motion.div>

//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
//           {instagramPosts.map((post, idx) => (
//             <motion.div
//               key={idx}
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ delay: idx * 0.05 }}
//               className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer"
//             >
//               <img src={post} alt="Instagram" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
//               <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
//                 <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
//                 </svg>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// const Newsletter = () => {
//   return (
//     <section className="py-20 bg-black text-white">
//       <div className="container mx-auto px-6 text-center">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="max-w-2xl mx-auto"
//         >
//           <h2 className="text-3xl md:text-4xl font-serif mb-4">Join the Studio</h2>
//           <p className="text-white/60 mb-8">Be the first to discover new arrivals and exclusive offers</p>
//           <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
//             <input
//               type="email"
//               placeholder="Your email address"
//               className="flex-1 px-6 py-3 bg-white/10 border border-white/20 rounded-full text-white placeholder-white/50 focus:outline-none focus:border-white/50"
//             />
//             <button className="px-8 py-3 bg-white text-black rounded-full hover:bg-gray-100 transition">
//               Subscribe
//             </button>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// // --- Main Home Component (NO Navbar, NO Footer — handled by App.jsx) ---
// const Home = () => {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   return (
//     <div className="font-sans antialiased">
//       <Hero />
//       <FeaturedCategories />
//       <TrendingProducts />
//       <WhyChooseUs />
//       <BrandStory />
//       <Testimonials />
//       <InstagramGallery />
//       <Newsletter />
//     </div>
//   );
// };

// export default Home;








import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { products } from '../data/product';

// --- Hero Slides ---
const heroSlides = [
  {
    id: 1,
    title: "Visionary Elegance",
    subtitle: "Autumn/Winter 2024",
    description: "Discover frames that redefine luxury",
    ctaPrimary: "Shop Collection",
    ctaSecondary: "Explore Luxury",
    image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=2070&auto=format",
    gradient: "from-black/70 via-black/40 to-transparent"
  },
  {
    id: 2,
    title: "Minimalist Icon",
    subtitle: "The New Classic",
    description: "Where craftsmanship meets modern design",
    ctaPrimary: "Discover Now",
    ctaSecondary: "Shop Now",
    image: "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?q=80&w=2071&auto=format",
    gradient: "from-black/60 via-black/30 to-transparent"
  },
  {
    id: 3,
    title: "Timeless Craft",
    subtitle: "Limited Edition",
    description: "Handcrafted perfection for the discerning",
    ctaPrimary: "Shop Limited",
    ctaSecondary: "Learn More",
    image: "https://images.unsplash.com/photo-1577803645773-f96470509666?q=80&w=2070&auto=format",
    gradient: "from-black/70 via-black/40 to-transparent"
  }
];

// --- Categories ---
const categories = [
  { id: 1, name: "Men", image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=1887&auto=format", link: "/shop/men" },
  { id: 2, name: "Women", image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format", link: "/shop/women" },
  { id: 3, name: "Sunglasses", image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=2070&auto=format", link: "/shop/sunglasses" },
  { id: 4, name: "Kids", image: "/happy-kid.jpg", link: "/shop/kids" }
];

// --- Mapped product helpers ---
const mapProduct = (p, fallbackRating = 4.8, fallbackReviews = 124) => ({
  ...p,
  price: p.pricing?.discounted || 0,
  originalPrice: p.pricing?.original || 0,
  discount: p.pricing?.discount_percent || 0,
  image: p.cardImage || '/placeholder.jpg',
  rating: fallbackRating,
  reviews: fallbackReviews,
});

// Filter by category string — adjust the strings to match YOUR product data's category values
const menProducts = products
  .filter(p => {
    const cat = (p.category || '').toLowerCase();
    const gender = (p.gender || '').toLowerCase();
    return cat.includes('men') || gender === 'men' || gender === 'male';
  })
  .slice(0, 4)
  .map(p => mapProduct(p, 4.8, 124));

const womenProducts = products
  .filter(p => {
    const cat = (p.category || '').toLowerCase();
    const gender = (p.gender || '').toLowerCase();
    return cat.includes('women') || cat.includes('woman') || gender === 'women' || gender === 'female';
  })
  .slice(0, 4)
  .map(p => mapProduct(p, 4.9, 98));

const kidsProducts = products
  .filter(p => {
    const cat = (p.category || '').toLowerCase();
    const gender = (p.gender || '').toLowerCase();
    return cat.includes('kid') || cat.includes('child') || cat.includes('junior') || gender === 'kids';
  })
  .slice(0, 4)
  .map(p => mapProduct(p, 4.7, 56));

// Fallback: if your filters return 0 products, slice from the full array
const menFinal   = menProducts.length   > 0 ? menProducts   : products.slice(0, 4).map(p => mapProduct(p, 4.8, 124));
const womenFinal = womenProducts.length > 0 ? womenProducts : products.slice(4, 8).map(p => mapProduct(p, 4.9, 98));
const kidsFinal  = kidsProducts.length  > 0 ? kidsProducts  : products.slice(8, 12).map(p => mapProduct(p, 4.7, 56));

// --- Features ---
const features = [
  { icon: "🚚", title: "Express Delivery", description: "Free shipping on all orders over Rs. 5,000" },
  { icon: "🛡️", title: "Authenticity Guaranteed", description: "100% original luxury products" },
  { icon: "🏆", title: "Premium Quality", description: "Handcrafted with Japanese titanium" },
  { icon: "✨", title: "Lifetime Comfort", description: "Ergonomic design for daily wear" }
];

// --- Testimonials ---
const testimonials = [
  { id: 1, name: "Fatima Khan", role: "Fashion Blogger", content: "Eye Studio has the best collection I've seen. The quality is exceptional and the style is incredible. Highly recommend!", rating: 5, image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format" },
  { id: 2, name: "Ali Hassan", role: "Business Owner", content: "I've tried many eyewear brands but Eye Studio stands out. The comfort and design are unmatched. Worth every penny!", rating: 5, image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format" },
  { id: 3, name: "Ayesha Malik", role: "Doctor", content: "My whole family uses Eye Studio glasses. Great quality, perfect fit, and amazing designs. Best choice for eye care!", rating: 5, image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1887&auto=format" }
];

// --- Instagram Posts ---
const instagramPosts = [
  "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=2070&auto=format",
  "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?q=80&w=2071&auto=format",
  "https://images.unsplash.com/photo-1577803645773-f96470509666?q=80&w=2070&auto=format",
  "https://images.unsplash.com/photo-1594938378606-c8141f7e2b88?q=80&w=1887&auto=format",
  "https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=2070&auto=format",
  "https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=1887&auto=format"
];

// ─── HERO ────────────────────────────────────────────────────────────────────
const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const slide = heroSlides[currentSlide];

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
          <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient}`} />
        </motion.div>
      </AnimatePresence>

      <motion.div style={{ y }} className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="max-w-2xl"
          >
            <p className="text-white/80 text-sm tracking-[0.3em] mb-4">{slide.subtitle}</p>
            <h1 className="text-6xl md:text-8xl font-serif text-white mb-6 leading-tight">
              {slide.title}
            </h1>
            <p className="text-white/90 text-lg md:text-xl mb-10 font-light">{slide.description}</p>
            <div className="flex gap-4">
              <button className="px-8 py-3 bg-white text-black hover:bg-black hover:text-white transition-all duration-300 text-sm tracking-wide">
                {slide.ctaPrimary}
              </button>
              <button className="px-8 py-3 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 text-sm tracking-wide backdrop-blur-sm">
                {slide.ctaSecondary}
              </button>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20"
      >
        <div className="flex gap-6">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                idx === currentSlide ? 'w-8 bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

// ─── FEATURED CATEGORIES ─────────────────────────────────────────────────────
const FeaturedCategories = () => {
  const navigate = useNavigate();

  const handleShopNow = (categoryName) => {
    navigate(`/products?category=${categoryName.toLowerCase()}`);
  };

  return (
    <section className="py-24 bg-[#f5f3f0]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-4">Discover Collections</h2>
          <p className="text-gray-600 max-w-lg mx-auto">Curated for every style and occasion</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.slice(0, 3).map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => handleShopNow(cat.name)}
              className="group relative overflow-hidden rounded-2xl cursor-pointer h-[400px]"
            >
              <img src={cat.image} alt={cat.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-3xl font-serif mb-2">{cat.name}</h3>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleShopNow(cat.name);
                  }}
                  className="inline-block text-sm tracking-wide border-b border-white/50 pb-1 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:border-white bg-transparent text-white cursor-pointer"
                >
                  Shop Now →
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {categories.slice(3, 5).map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + idx * 0.1 }}
              onClick={() => handleShopNow(cat.name)}
              className="group relative overflow-hidden rounded-2xl cursor-pointer h-[300px]"
            >
              <img src={cat.image} alt={cat.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-3xl font-serif mb-2">{cat.name}</h3>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleShopNow(cat.name);
                  }}
                  className="inline-block text-sm tracking-wide border-b border-white/50 pb-1 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:border-white bg-transparent text-white cursor-pointer"
                >
                  Shop Now →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── CATEGORY PRODUCT ROW ─────────────────────────────────────────────────────
const CategoryProductRow = ({ label, title, subtitle, products: rowProducts, sectionIdx }) => {
  const { addToCart } = useCart();
  const [addedId, setAddedId] = useState(null);

  const handleAddToCart = (product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    });
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 2000);
  };

  if (!rowProducts || rowProducts.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: sectionIdx * 0.05 }}
      className="mb-20 last:mb-0"
    >
      {/* Section Header */}
      <div className="mb-10">
        <p className="text-xs tracking-[0.25em] uppercase text-gray-400 mb-3 flex items-center gap-2">
          <span className="inline-block w-5 h-px bg-gray-300" />
          {label}
        </p>
        <h2 className="text-4xl md:text-5xl font-serif leading-none mb-2">{title}</h2>
        <p className="text-gray-500 text-sm">{subtitle}</p>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-gray-100 mb-10" />

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-7">
        {rowProducts.map((product, i) => (
          <motion.div
            key={`${title}-${product.id}-${i}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
            className="group cursor-pointer"
          >
            {/* Image */}
            <div className="relative overflow-hidden bg-[#f0ede8] rounded-2xl aspect-square mb-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Discount badge */}
              {product.discount > 0 && (
                <span className="absolute top-3 left-3 bg-black text-white text-[10px] tracking-wider px-2.5 py-1 rounded-full font-medium">
                  -{product.discount}%
                </span>
              )}

              {/* Add to cart — slides up on hover */}
              <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out p-3">
                <button
                  onClick={() => handleAddToCart(product)}
                  className="w-full bg-black text-white text-xs tracking-widest uppercase py-2.5 rounded-xl hover:bg-gray-800 transition-colors"
                >
                  {addedId === product.id ? '✓ Added' : 'Add to Cart'}
                </button>
              </div>
            </div>

            {/* Info */}
            <div>
              <h4 className="text-sm font-medium tracking-wide truncate mb-1">{product.name}</h4>
              <div className="flex items-center gap-2">
                {product.originalPrice > 0 && product.originalPrice !== product.price && (
                  <span className="text-xs text-gray-400 line-through">
                    Rs. {product.originalPrice.toLocaleString('en-PK')}
                  </span>
                )}
                <span className="text-sm font-serif">
                  Rs. {product.price.toLocaleString('en-PK')}
                </span>
              </div>
              <div className="flex items-center gap-1 mt-1">
                <span className="text-yellow-400 text-xs">★</span>
                <span className="text-xs text-gray-400">{product.rating} ({product.reviews})</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

// ─── TRENDING PRODUCTS (3 category rows) ─────────────────────────────────────
const TrendingProducts = () => {
  const categorySections = [
    {
      label: "Trending Now",
      title: "Men's Sunglasses",
      subtitle: "Bold frames built for the modern man",
      products: menFinal,
    },
    {
      label: "New Arrivals",
      title: "Women's Sunglasses",
      subtitle: "Elegant designs that turn heads",
      products: womenFinal,
    },
    {
      label: "Young Vision",
      title: "Kids' Sunglasses",
      subtitle: "Durable, playful & UV-protected",
      products: kidsFinal,
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {categorySections.map((cat, idx) => (
          <CategoryProductRow
            key={cat.title}
            label={cat.label}
            title={cat.title}
            subtitle={cat.subtitle}
            products={cat.products}
            sectionIdx={idx}
          />
        ))}
      </div>
    </section>
  );
};

// ─── WHY CHOOSE US ────────────────────────────────────────────────────────────
const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-[#f5f3f0]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-4">Why Choose Eye Studio</h2>
          <p className="text-gray-600">Experience the difference of true luxury eyewear</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group text-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="inline-flex p-3 bg-black rounded-full mb-4 text-white group-hover:scale-110 transition-transform text-2xl">
                {feature.icon}
              </div>
              <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
              <p className="text-gray-500 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── BRAND STORY ──────────────────────────────────────────────────────────────
const BrandStory = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <img
              src="https://images.unsplash.com/photo-1591076482161-42ce6da69f67?q=80&w=2071&auto=format"
              alt="Craftsmanship"
              className="rounded-2xl shadow-2xl w-full object-cover h-[500px]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-1/2 space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-serif">The Art of Vision</h2>
            <p className="text-gray-600 leading-relaxed">
              At Eye Studio, we believe eyewear is more than a necessity—it's an expression of self.
              Each frame is meticulously crafted using Japanese titanium and Italian acetate,
              combining centuries-old techniques with modern innovation.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our commitment to excellence extends beyond aesthetics. Every pair is engineered for
              all-day comfort, featuring precision hinges and anti-reflective lenses that protect
              your eyes while elevating your style.
            </p>
            <button className="px-8 py-3 border border-black text-black hover:bg-black hover:text-white transition-all duration-300 text-sm tracking-wide">
              Discover Our Story
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ─── TESTIMONIALS ─────────────────────────────────────────────────────────────
const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const testimonial = testimonials[current];

  return (
    <section className="py-24 bg-[#f5f3f0]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-4">What Our Clients Say</h2>
          <p className="text-gray-600">Trusted by visionaries worldwide</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mx-auto mb-6 object-cover"
              />
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-500 text-xl">★</span>
                ))}
              </div>
              <p className="text-xl md:text-2xl italic font-serif text-gray-700 mb-8">
                "{testimonial.content}"
              </p>
              <h4 className="font-medium text-lg">{testimonial.name}</h4>
              <p className="text-gray-500 text-sm">{testimonial.role}</p>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-2 mt-10">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === current ? 'w-8 bg-black' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── INSTAGRAM GALLERY ────────────────────────────────────────────────────────
const InstagramGallery = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-4">@eyestudio</h2>
          <p className="text-gray-600">Follow us for daily inspiration</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramPosts.map((post, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer"
            >
              <img src={post} alt="Instagram" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── NEWSLETTER ───────────────────────────────────────────────────────────────
const Newsletter = () => {
  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Join the Studio</h2>
          <p className="text-white/60 mb-8">Be the first to discover new arrivals and exclusive offers</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-6 py-3 bg-white/10 border border-white/20 rounded-full text-white placeholder-white/50 focus:outline-none focus:border-white/50"
            />
            <button className="px-8 py-3 bg-white text-black rounded-full hover:bg-gray-100 transition">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// ─── MAIN HOME COMPONENT ──────────────────────────────────────────────────────
const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-sans antialiased">
      <Hero />
      <FeaturedCategories />
      <TrendingProducts />
      <WhyChooseUs />
      <BrandStory />
      <Testimonials />
      <InstagramGallery />
      <Newsletter />
    </div>
  );
};

export default Home;




