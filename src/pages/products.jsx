// // import React, { useState, useMemo, useEffect } from 'react';
// // import { useNavigate, useSearchParams } from 'react-router-dom';
// // import ProductCard from '../components/ProductCard';
// // import { products } from '../data/product';

// // const ProductsPage = () => {
// //   const navigate = useNavigate();
// //   const [searchParams] = useSearchParams();
// //   const [selectedCategory, setSelectedCategory] = useState('all');
// //   const [selectedShape, setSelectedShape] = useState('all');
// //   const [selectedGender, setSelectedGender] = useState('all');
// //   const [sortBy, setSortBy] = useState('newest');
// //   const [showFilters, setShowFilters] = useState(false);

// //   // Set category from URL parameter on mount
// //   useEffect(() => {
// //     const categoryParam = searchParams.get('category');
// //     if (categoryParam) {
// //       setSelectedCategory(categoryParam.toLowerCase());
// //     }
// //   }, [searchParams]);

// //   // Get unique categories
// //   const categories = useMemo(() => {
// //     let availableProducts = products;

// //     // Filter by shape and gender to show only relevant categories
// //     if (selectedShape !== 'all') {
// //       availableProducts = availableProducts.filter(p => p.style && p.style.toLowerCase() === selectedShape);
// //     }
// //     if (selectedGender !== 'all') {
// //       availableProducts = availableProducts.filter(p => p.subcategory && p.subcategory.toLowerCase() === selectedGender);
// //     }

// //     const uniqueCategories = Array.from(new Set(availableProducts.map(p => p.category)));

// //     return [
// //       { id: 'all', name: 'All Products' },
// //       ...uniqueCategories.map(cat => ({
// //         id: cat,
// //         name: cat.charAt(0).toUpperCase() + cat.slice(1)
// //       }))
// //     ];
// //   }, [selectedShape, selectedGender]);

// //   // Get unique shapes based on category and gender
// //   const shapes = useMemo(() => {
// //     let availableProducts = products;

// //     // Filter by category and gender to show only relevant shapes
// //     if (selectedCategory !== 'all') {
// //       availableProducts = availableProducts.filter(p => p.category === selectedCategory);
// //     }
// //     if (selectedGender !== 'all') {
// //       availableProducts = availableProducts.filter(p => p.subcategory && p.subcategory.toLowerCase() === selectedGender);
// //     }

// //     const uniqueShapes = Array.from(new Set(availableProducts.map(p => p.style).filter(s => s)));

// //     return [
// //       { id: 'all', name: 'All Shapes' },
// //       ...uniqueShapes.map(shape => ({
// //         id: shape.toLowerCase(),
// //         name: shape
// //       }))
// //     ];
// //   }, [selectedCategory, selectedGender]);

// //   // Get unique genders based on category and shape
// //   const genders = useMemo(() => {
// //     let availableProducts = products;

// //     // Filter by category and shape to show only relevant genders
// //     if (selectedCategory !== 'all') {
// //       availableProducts = availableProducts.filter(p => p.category === selectedCategory);
// //     }
// //     if (selectedShape !== 'all') {
// //       availableProducts = availableProducts.filter(p => p.style && p.style.toLowerCase() === selectedShape);
// //     }

// //     const uniqueGenderValues = Array.from(new Set(availableProducts.map(p => p.subcategory?.toLowerCase()).filter(s => s)));

// //     const allGenders = [
// //       { id: 'all', name: 'All' },
// //       { id: 'gents', name: 'Men' },
// //       { id: 'womens', name: 'Women', includeAlso: ['ladies'] },
// //       { id: 'unisex', name: 'Unisex' }
// //     ];

// //     return allGenders.filter(g => g.id === 'all' || uniqueGenderValues.includes(g.id) || (g.includeAlso && g.includeAlso.some(v => uniqueGenderValues.includes(v))));
// //   }, [selectedCategory, selectedShape]);

// //   // Reset filters if they're not in available options
// //   useEffect(() => {
// //     const availableShapeIds = shapes.map(s => s.id);
// //     if (!availableShapeIds.includes(selectedShape)) {
// //       setSelectedShape('all');
// //     }
// //   }, [shapes, selectedShape]);

// //   useEffect(() => {
// //     const availableCategoryIds = categories.map(c => c.id);
// //     if (!availableCategoryIds.includes(selectedCategory)) {
// //       setSelectedCategory('all');
// //     }
// //   }, [categories, selectedCategory]);

// //   useEffect(() => {
// //     const availableGenderIds = genders.map(g => g.id);
// //     // Special handling for womens (includes ladies)
// //     if (selectedGender === 'womens') {
// //       const hasWomensOrLadies = availableGenderIds.includes('womens');
// //       if (!hasWomensOrLadies) {
// //         setSelectedGender('all');
// //       }
// //     } else if (!availableGenderIds.includes(selectedGender)) {
// //       setSelectedGender('all');
// //     }
// //   }, [genders, selectedGender]);

// //   // Filter and sort products
// //   const filteredProducts = useMemo(() => {
// //     let result = products;

// //     // Filter by category
// //     if (selectedCategory !== 'all') {
// //       result = result.filter(p => p.category === selectedCategory);
// //     }

// //     // Filter by shape
// //     if (selectedShape !== 'all') {
// //       result = result.filter(p => p.style && p.style.toLowerCase() === selectedShape);
// //     }

// //     // Filter by gender/subcategory (treat womens and ladies as same)
// //     if (selectedGender !== 'all') {
// //       result = result.filter(p => {
// //         const subcat = p.subcategory?.toLowerCase();
// //         if (selectedGender === 'womens') {
// //           return subcat === 'womens' || subcat === 'ladies';
// //         }
// //         return subcat === selectedGender;
// //       });
// //     }

// //     // Sort
// //     switch (sortBy) {
// //       case 'price-asc':
// //         result.sort((a, b) => (a.pricing?.discounted || 0) - (b.pricing?.discounted || 0));
// //         break;
// //       case 'price-desc':
// //         result.sort((a, b) => (b.pricing?.discounted || 0) - (a.pricing?.discounted || 0));
// //         break;
// //       case 'newest':
// //       default:
// //         break;
// //     }

// //     return result;
// //   }, [selectedCategory, selectedShape, selectedGender, sortBy]);

// //   return (
// //     <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
// //       {/* Header */}
// //       <div className="bg-black text-white py-12 md:py-16">
// //         <div className="container mx-auto px-4">
// //           <button
// //             onClick={() => navigate('/')}
// //             className="flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors"
// //           >
// //             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
// //             </svg>
// //             Back
// //           </button>
// //           <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Collection</h1>
// //           <p className="text-gray-400 text-lg max-w-2xl">
// //             Discover premium eyewear crafted with precision and style. From timeless classics to modern innovations.
// //           </p>
// //         </div>
// //       </div>

// //       {/* Main Content */}
// //       <div className="container mx-auto px-4 py-12">
// //         <div className="flex flex-col lg:flex-row gap-8">
// //           {/* Sidebar Filters */}
// //           <div className={`lg:w-64 flex-shrink-0 ${showFilters ? 'block' : 'hidden lg:block'}`}>
// //             <div className="bg-white rounded-2xl p-6 shadow-sm sticky top-24">
// //               {/* Close button for mobile */}
// //               <button
// //                 onClick={() => setShowFilters(false)}
// //                 className="lg:hidden absolute top-4 right-4 text-gray-500 hover:text-gray-900"
// //               >
// //                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
// //                 </svg>
// //               </button>

// //               {/* Categories */}
// //               <div className="mb-8">
// //                 <h3 className="font-bold text-lg mb-4 text-gray-900">Categories</h3>
// //                 <div className="space-y-2">
// //                   {categories.map(cat => (
// //                     <button
// //                       key={cat.id}
// //                       onClick={() => {
// //                         setSelectedCategory(cat.id);
// //                         setShowFilters(false);
// //                       }}
// //                       className={`w-full text-left px-4 py-2 rounded-lg font-medium transition-all ${
// //                         selectedCategory === cat.id
// //                           ? 'bg-black text-white'
// //                           : 'text-gray-700 hover:bg-gray-100'
// //                       }`}
// //                     >
// //                       {cat.name}
// //                     </button>
// //                   ))}
// //                 </div>
// //               </div>

// //               {/* Gender Filter */}
// //               <div className="mb-8">
// //                 <h3 className="font-bold text-lg mb-4 text-gray-900">Gender</h3>
// //                 <div className="space-y-2">
// //                   {genders.map(gender => (
// //                     <button
// //                       key={gender.id}
// //                       onClick={() => {
// //                         setSelectedGender(gender.id);
// //                         setShowFilters(false);
// //                       }}
// //                       className={`w-full text-left px-4 py-2 rounded-lg font-medium transition-all ${
// //                         selectedGender === gender.id
// //                           ? 'bg-black text-white'
// //                           : 'text-gray-700 hover:bg-gray-100'
// //                       }`}
// //                     >
// //                       {gender.name}
// //                     </button>
// //                   ))}
// //                 </div>
// //               </div>

// //               {/* Shape Filter */}
// //               <div className="mb-8">
// //                 <h3 className="font-bold text-lg mb-4 text-gray-900">Shape</h3>
// //                 <div className="space-y-2">
// //                   {shapes.map(shape => (
// //                     <button
// //                       key={shape.id}
// //                       onClick={() => {
// //                         setSelectedShape(shape.id);
// //                         setShowFilters(false);
// //                       }}
// //                       className={`w-full text-left px-4 py-2 rounded-lg font-medium transition-all ${
// //                         selectedShape === shape.id
// //                           ? 'bg-black text-white'
// //                           : 'text-gray-700 hover:bg-gray-100'
// //                       }`}
// //                     >
// //                       {shape.name}
// //                     </button>
// //                   ))}
// //                 </div>
// //               </div>

// //               {/* Sort Options */}
// //               <div>
// //                 <h3 className="font-bold text-lg mb-4 text-gray-900">Sort By</h3>
// //                 <div className="space-y-2">
// //                   {[
// //                     { id: 'newest', label: 'Newest' },
// //                     { id: 'price-asc', label: 'Price: Low to High' },
// //                     { id: 'price-desc', label: 'Price: High to Low' }
// //                   ].map(option => (
// //                     <button
// //                       key={option.id}
// //                       onClick={() => setSortBy(option.id)}
// //                       className={`w-full text-left px-4 py-2 rounded-lg font-medium transition-all ${
// //                         sortBy === option.id
// //                           ? 'bg-black text-white'
// //                           : 'text-gray-700 hover:bg-gray-100'
// //                       }`}
// //                     >
// //                       {option.label}
// //                     </button>
// //                   ))}
// //                 </div>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Products Grid */}
// //           <div className="flex-1">
// //             {/* Mobile Filter Button */}
// //             <div className="lg:hidden mb-6">
// //               <button
// //                 onClick={() => setShowFilters(true)}
// //                 className="w-full flex items-center justify-center gap-2 bg-black text-white px-4 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
// //               >
// //                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6z" />
// //                 </svg>
// //                 Filters & Sort
// //               </button>
// //             </div>

// //             {/* Results Info */}
// //             <div className="mb-6 flex items-center justify-between flex-wrap gap-2">
// //               <p className="text-gray-600 font-medium">
// //                 Showing <span className="font-bold text-black">{filteredProducts.length}</span> products
// //               </p>
// //               <div className="flex flex-wrap gap-2">
// //                 {selectedCategory !== 'all' && (
// //                   <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-medium text-sm">
// //                     {categories.find(c => c.id === selectedCategory)?.name}
// //                   </span>
// //                 )}
// //                 {selectedGender !== 'all' && (
// //                   <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-medium text-sm">
// //                     {genders.find(g => g.id === selectedGender)?.name}
// //                   </span>
// //                 )}
// //                 {selectedShape !== 'all' && (
// //                   <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-medium text-sm">
// //                     {shapes.find(s => s.id === selectedShape)?.name}
// //                   </span>
// //                 )}
// //               </div>
// //             </div>

// //             {/* Products Grid */}
// //             {filteredProducts.length > 0 ? (
// //               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
// //                 {filteredProducts.map(product => (
// //                   <ProductCard key={product.id} product={product} />
// //                 ))}
// //               </div>
// //             ) : (
// //               <div className="flex flex-col items-center justify-center py-16 text-center">
// //                 <svg className="w-16 h-16 text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 7l-8-4-8 4m0 0l8 4m-8-4v10l8 4m0-10l8 4m-8-4v10M7 11l8 4m0 0l8-4" />
// //                 </svg>
// //                 <h3 className="text-xl font-bold text-gray-800 mb-2">No Products Found</h3>
// //                 <p className="text-gray-500 mb-6">Try adjusting your filters or browse all products</p>
// //                 <button
// //                   onClick={() => setSelectedCategory('all')}
// //                   className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors"
// //                 >
// //                   View All Products
// //                 </button>
// //               </div>
// //             )}
// //           </div>
// //         </div>
// //       </div>

// //       {/* Bottom CTA */}
// //       <section className="bg-black text-white py-12 mt-16">
// //         <div className="container mx-auto px-4 text-center">
// //           <h2 className="text-3xl md:text-4xl font-bold mb-4">Can't Find What You're Looking For?</h2>
// //           <p className="text-gray-400 mb-2 max-w-2xl mx-auto">
// //             Contact our customer support team. We're here to help you find the perfect eyewear.
// //           </p>
// //           <p className="text-gray-500 text-sm mb-6 max-w-2xl mx-auto">
// //             📍 Shop No. 2, Sadiq Heights, Opposite Balad Trade Centre, Bahadurabad, Karachi, Pakistan
// //           </p>
// //           <a
// //             href="https://wa.me/923183140548"
// //             target="_blank"
// //             rel="noopener noreferrer"
// //             className="inline-block bg-green-500 text-black px-8 py-3 rounded-full font-bold hover:bg-green-400 transition-colors"
// //           >
// //             Chat on WhatsApp: 0318-3140548
// //           </a>
// //           <p className="text-gray-500 text-xs mt-4">💚 Delivery: Rs. 250 | Free above Rs. 5000</p>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // };

// // export default ProductsPage;



























// import React, { useState, useMemo, useEffect } from 'react';
// import { useNavigate, useSearchParams } from 'react-router-dom';
// import ProductCard from '../components/ProductCard';
// import { products } from '../data/product';

// const FilterSection = ({ title, children }) => (
//   <div className="mb-6">
//     <h3 className="font-bold text-sm uppercase tracking-widest mb-3 text-gray-400">{title}</h3>
//     <div className="max-h-48 overflow-y-auto pr-1 space-y-1 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
//       {children}
//     </div>
//   </div>
// );

// const FilterButton = ({ active, onClick, children }) => (
//   <button
//     onClick={onClick}
//     className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all ${
//       active ? 'bg-black text-white' : 'text-gray-700 hover:bg-gray-100'
//     }`}
//   >
//     {children}
//   </button>
// );

// const ProductsPage = () => {
//   const navigate = useNavigate();
//   const [searchParams] = useSearchParams();
//   const [selectedCategory, setSelectedCategory] = useState('all');
//   const [selectedShape, setSelectedShape] = useState('all');
//   const [selectedGender, setSelectedGender] = useState('all');
//   const [selectedMaterial, setSelectedMaterial] = useState('all');
//   const [sortBy, setSortBy] = useState('newest');
//   const [showFilters, setShowFilters] = useState(false);

//   useEffect(() => {
//     const categoryParam = searchParams.get('category');
//     if (categoryParam) setSelectedCategory(categoryParam.toLowerCase());
//   }, [searchParams]);

//   // ── Categories ──────────────────────────────────────────────
//   const categories = useMemo(() => {
//     let pool = products;
//     if (selectedShape !== 'all') pool = pool.filter(p => p.style?.toLowerCase() === selectedShape);
//     if (selectedGender !== 'all') pool = pool.filter(p => {
//       const s = p.subcategory?.toLowerCase();
//       return selectedGender === 'womens' ? s === 'womens' || s === 'ladies' : s === selectedGender;
//     });
//     if (selectedMaterial !== 'all') pool = pool.filter(p => p.material?.toLowerCase() === selectedMaterial);
//     const unique = [...new Set(pool.map(p => p.category))];
//     return [{ id: 'all', name: 'All Products' }, ...unique.map(c => ({ id: c, name: c.charAt(0).toUpperCase() + c.slice(1) }))];
//   }, [selectedShape, selectedGender, selectedMaterial]);

//   // ── Materials ────────────────────────────────────────────────
//   const materials = useMemo(() => {
//     let pool = products;
//     if (selectedCategory !== 'all') pool = pool.filter(p => p.category === selectedCategory);
//     if (selectedGender !== 'all') pool = pool.filter(p => {
//       const s = p.subcategory?.toLowerCase();
//       return selectedGender === 'womens' ? s === 'womens' || s === 'ladies' : s === selectedGender;
//     });
//     if (selectedShape !== 'all') pool = pool.filter(p => p.style?.toLowerCase() === selectedShape);

//     // Normalize: keep only Plastic and Metal (merge variants like "Mixed", "Plastic Front...")
//     const raw = [...new Set(pool.map(p => p.material).filter(Boolean))];
//     const normalized = new Set();
//     raw.forEach(m => {
//       const lower = m.toLowerCase();
//       if (lower.includes('plastic')) normalized.add('plastic');
//       else if (lower.includes('metal')) normalized.add('metal');
//       else normalized.add(lower);
//     });

//     const labelMap = { plastic: 'Plastic', metal: 'Metal', mixed: 'Mixed' };
//     return [
//       { id: 'all', name: 'All Types' },
//       ...[...normalized].map(m => ({ id: m, name: labelMap[m] || m.charAt(0).toUpperCase() + m.slice(1) }))
//     ];
//   }, [selectedCategory, selectedGender, selectedShape]);

//   // ── Shapes ───────────────────────────────────────────────────
//   const shapes = useMemo(() => {
//     let pool = products;
//     if (selectedCategory !== 'all') pool = pool.filter(p => p.category === selectedCategory);
//     if (selectedGender !== 'all') pool = pool.filter(p => {
//       const s = p.subcategory?.toLowerCase();
//       return selectedGender === 'womens' ? s === 'womens' || s === 'ladies' : s === selectedGender;
//     });
//     if (selectedMaterial !== 'all') pool = pool.filter(p => p.material?.toLowerCase().includes(selectedMaterial));
//     const unique = [...new Set(pool.map(p => p.style).filter(Boolean))];
//     return [{ id: 'all', name: 'All Shapes' }, ...unique.map(s => ({ id: s.toLowerCase(), name: s }))];
//   }, [selectedCategory, selectedGender, selectedMaterial]);

//   // ── Genders ──────────────────────────────────────────────────
//   const genders = useMemo(() => {
//     let pool = products;
//     if (selectedCategory !== 'all') pool = pool.filter(p => p.category === selectedCategory);
//     if (selectedShape !== 'all') pool = pool.filter(p => p.style?.toLowerCase() === selectedShape);
//     if (selectedMaterial !== 'all') pool = pool.filter(p => p.material?.toLowerCase().includes(selectedMaterial));
//     const vals = [...new Set(pool.map(p => p.subcategory?.toLowerCase()).filter(Boolean))];
//     return [
//       { id: 'all', name: 'All' },
//       { id: 'gents', name: 'Men' },
//       { id: 'womens', name: 'Women', includeAlso: ['ladies'] },
//       { id: 'unisex', name: 'Unisex' },
//       { id: 'kids', name: 'Kids' },
//     ].filter(g => g.id === 'all' || vals.includes(g.id) || g.includeAlso?.some(v => vals.includes(v)));
//   }, [selectedCategory, selectedShape, selectedMaterial]);

//   // ── Reset stale filters ──────────────────────────────────────
//   useEffect(() => {
//     if (!shapes.find(s => s.id === selectedShape)) setSelectedShape('all');
//   }, [shapes]);
//   useEffect(() => {
//     if (!categories.find(c => c.id === selectedCategory)) setSelectedCategory('all');
//   }, [categories]);
//   useEffect(() => {
//     if (!genders.find(g => g.id === selectedGender)) setSelectedGender('all');
//   }, [genders]);
//   useEffect(() => {
//     if (!materials.find(m => m.id === selectedMaterial)) setSelectedMaterial('all');
//   }, [materials]);

//   // ── Filtered & sorted products ───────────────────────────────
//   const filteredProducts = useMemo(() => {
//     let result = products;
//     if (selectedCategory !== 'all') result = result.filter(p => p.category === selectedCategory);
//     if (selectedShape !== 'all') result = result.filter(p => p.style?.toLowerCase() === selectedShape);
//     if (selectedGender !== 'all') result = result.filter(p => {
//       const s = p.subcategory?.toLowerCase();
//       return selectedGender === 'womens' ? s === 'womens' || s === 'ladies' : s === selectedGender;
//     });
//     if (selectedMaterial !== 'all') result = result.filter(p => p.material?.toLowerCase().includes(selectedMaterial));

//     if (sortBy === 'price-asc') result = [...result].sort((a, b) => (a.pricing?.discounted || 0) - (b.pricing?.discounted || 0));
//     else if (sortBy === 'price-desc') result = [...result].sort((a, b) => (b.pricing?.discounted || 0) - (a.pricing?.discounted || 0));

//     return result;
//   }, [selectedCategory, selectedShape, selectedGender, selectedMaterial, sortBy]);

//   const resetAll = () => {
//     setSelectedCategory('all');
//     setSelectedShape('all');
//     setSelectedGender('all');
//     setSelectedMaterial('all');
//     setSortBy('newest');
//   };

//   const activeFilterCount = [selectedCategory, selectedShape, selectedGender, selectedMaterial].filter(v => v !== 'all').length;

//   // ── Sidebar content ──────────────────────────────────────────
//   const SidebarContent = () => (
//     <div className="bg-white rounded-2xl p-5 shadow-sm sticky top-24">
//       {/* Header */}
//       <div className="flex items-center justify-between mb-5">
//         <span className="font-bold text-base text-gray-900">Filters</span>
//         {activeFilterCount > 0 && (
//           <button onClick={resetAll} className="text-xs text-gray-400 hover:text-black transition-colors underline underline-offset-2">
//             Clear all
//           </button>
//         )}
//       </div>

//       {/* Divider */}
//       <div className="h-px bg-gray-100 mb-5" />

//       <FilterSection title="Category">
//         {categories.map(cat => (
//           <FilterButton key={cat.id} active={selectedCategory === cat.id} onClick={() => { setSelectedCategory(cat.id); setShowFilters(false); }}>
//             {cat.name}
//           </FilterButton>
//         ))}
//       </FilterSection>

//       <div className="h-px bg-gray-100 mb-5" />

//       <FilterSection title="Type / Material">
//         {materials.map(mat => (
//           <FilterButton key={mat.id} active={selectedMaterial === mat.id} onClick={() => { setSelectedMaterial(mat.id); setShowFilters(false); }}>
//             {mat.name}
//           </FilterButton>
//         ))}
//       </FilterSection>

//       <div className="h-px bg-gray-100 mb-5" />

//       <FilterSection title="Gender">
//         {genders.map(g => (
//           <FilterButton key={g.id} active={selectedGender === g.id} onClick={() => { setSelectedGender(g.id); setShowFilters(false); }}>
//             {g.name}
//           </FilterButton>
//         ))}
//       </FilterSection>

//       <div className="h-px bg-gray-100 mb-5" />

//       <FilterSection title="Frame Shape">
//         {shapes.map(s => (
//           <FilterButton key={s.id} active={selectedShape === s.id} onClick={() => { setSelectedShape(s.id); setShowFilters(false); }}>
//             {s.name}
//           </FilterButton>
//         ))}
//       </FilterSection>

//       <div className="h-px bg-gray-100 mb-5" />

//       <FilterSection title="Sort By">
//         {[
//           { id: 'newest', label: 'Newest' },
//           { id: 'price-asc', label: 'Price: Low to High' },
//           { id: 'price-desc', label: 'Price: High to Low' },
//         ].map(opt => (
//           <FilterButton key={opt.id} active={sortBy === opt.id} onClick={() => setSortBy(opt.id)}>
//             {opt.label}
//           </FilterButton>
//         ))}
//       </FilterSection>
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
//       {/* Header */}
//       <div className="bg-black text-white py-12 md:py-16">
//         <div className="container mx-auto px-4">
//           <button onClick={() => navigate('/')} className="flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors">
//             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
//             </svg>
//             Back
//           </button>
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Collection</h1>
//           <p className="text-gray-400 text-lg max-w-2xl">
//             Discover premium eyewear crafted with precision and style. From timeless classics to modern innovations.
//           </p>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="container mx-auto px-4 py-12">
//         <div className="flex flex-col lg:flex-row gap-8">

//           {/* Desktop Sidebar */}
//           <div className="hidden lg:block lg:w-56 flex-shrink-0">
//             <SidebarContent />
//           </div>

//           {/* Mobile Filter Drawer */}
//           {showFilters && (
//             <div className="fixed inset-0 z-50 flex lg:hidden">
//               <div className="absolute inset-0 bg-black/50" onClick={() => setShowFilters(false)} />
//               <div className="relative ml-auto w-72 h-full bg-white overflow-y-auto p-5 shadow-2xl">
//                 <div className="flex items-center justify-between mb-4">
//                   <span className="font-bold text-lg">Filters</span>
//                   <button onClick={() => setShowFilters(false)}>
//                     <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//                     </svg>
//                   </button>
//                 </div>
//                 <SidebarContent />
//               </div>
//             </div>
//           )}

//           {/* Products Section */}
//           <div className="flex-1">
//             {/* Toolbar */}
//             <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
//               {/* Mobile filter btn */}
//               <button
//                 onClick={() => setShowFilters(true)}
//                 className="lg:hidden flex items-center gap-2 bg-black text-white px-4 py-2.5 rounded-lg text-sm font-semibold"
//               >
//                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4h18M6 8h12M9 12h6M12 16h0" />
//                 </svg>
//                 Filters {activeFilterCount > 0 && <span className="bg-white text-black rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">{activeFilterCount}</span>}
//               </button>

//               <p className="text-gray-500 text-sm">
//                 Showing <span className="font-bold text-black">{filteredProducts.length}</span> products
//               </p>

//               {/* Active filter chips */}
//               <div className="flex flex-wrap gap-2">
//                 {selectedCategory !== 'all' && (
//                   <span onClick={() => setSelectedCategory('all')} className="cursor-pointer flex items-center gap-1 bg-black text-white px-3 py-1 rounded-full text-xs font-medium">
//                     {categories.find(c => c.id === selectedCategory)?.name}
//                     <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" /></svg>
//                   </span>
//                 )}
//                 {selectedMaterial !== 'all' && (
//                   <span onClick={() => setSelectedMaterial('all')} className="cursor-pointer flex items-center gap-1 bg-black text-white px-3 py-1 rounded-full text-xs font-medium">
//                     {materials.find(m => m.id === selectedMaterial)?.name}
//                     <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" /></svg>
//                   </span>
//                 )}
//                 {selectedGender !== 'all' && (
//                   <span onClick={() => setSelectedGender('all')} className="cursor-pointer flex items-center gap-1 bg-black text-white px-3 py-1 rounded-full text-xs font-medium">
//                     {genders.find(g => g.id === selectedGender)?.name}
//                     <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" /></svg>
//                   </span>
//                 )}
//                 {selectedShape !== 'all' && (
//                   <span onClick={() => setSelectedShape('all')} className="cursor-pointer flex items-center gap-1 bg-black text-white px-3 py-1 rounded-full text-xs font-medium">
//                     {shapes.find(s => s.id === selectedShape)?.name}
//                     <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" /></svg>
//                   </span>
//                 )}
//               </div>
//             </div>

//             {/* Grid */}
//             {filteredProducts.length > 0 ? (
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {filteredProducts.map(product => (
//                   <ProductCard key={product.id} product={product} />
//                 ))}
//               </div>
//             ) : (
//               <div className="flex flex-col items-center justify-center py-20 text-center">
//                 <svg className="w-14 h-14 text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                 </svg>
//                 <h3 className="text-xl font-bold text-gray-800 mb-2">No Products Found</h3>
//                 <p className="text-gray-500 mb-6">Try adjusting your filters to find what you're looking for.</p>
//                 <button onClick={resetAll} className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors">
//                   Clear All Filters
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Bottom CTA */}
//       <section className="bg-black text-white py-12 mt-16">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">Can't Find What You're Looking For?</h2>
//           <p className="text-gray-400 mb-2 max-w-2xl mx-auto">
//             Contact our customer support team. We're here to help you find the perfect eyewear.
//           </p>
//           <p className="text-gray-500 text-sm mb-6 max-w-2xl mx-auto">
//             📍 Shop No. 2, Sadiq Heights, Opposite Balad Trade Centre, Bahadurabad, Karachi, Pakistan
//           </p>
//           <a
//             href="https://wa.me/923183140548"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-block bg-green-500 text-black px-8 py-3 rounded-full font-bold hover:bg-green-400 transition-colors"
//           >
//             Chat on WhatsApp: 0318-3140548
//           </a>
//           <p className="text-gray-500 text-xs mt-4">💚 Delivery: Rs. 250 | Free above Rs. 5000</p>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ProductsPage;






















import React, { useState, useMemo, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../data/product';

const FilterSection = ({ title, children }) => (
  <div className="mb-6">
    <h3 className="font-bold text-sm uppercase tracking-widest mb-3 text-gray-400">{title}</h3>
    <div className="space-y-1">
      {children}
    </div>
  </div>
);

const FilterButton = ({ active, onClick, children }) => (
  <button
    onClick={onClick}
    className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all ${
      active ? 'bg-black text-white' : 'text-gray-700 hover:bg-gray-100'
    }`}
  >
    {children}
  </button>
);

const ProductsPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedShape, setSelectedShape] = useState('all');
  const [selectedGender, setSelectedGender] = useState('all');
  const [selectedMaterial, setSelectedMaterial] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) setSelectedCategory(categoryParam.toLowerCase());
  }, [searchParams]);

  // ── Categories ──────────────────────────────────────────────
  const categories = useMemo(() => {
    let pool = products;
    if (selectedShape !== 'all') pool = pool.filter(p => p.style?.toLowerCase() === selectedShape);
    if (selectedGender !== 'all') pool = pool.filter(p => {
      const s = p.subcategory?.toLowerCase();
      return selectedGender === 'womens' ? s === 'womens' || s === 'ladies' : s === selectedGender;
    });
    if (selectedMaterial !== 'all') pool = pool.filter(p => p.material?.toLowerCase() === selectedMaterial);
    const unique = [...new Set(pool.map(p => p.category))];
    return [{ id: 'all', name: 'All Products' }, ...unique.map(c => ({ id: c, name: c.charAt(0).toUpperCase() + c.slice(1) }))];
  }, [selectedShape, selectedGender, selectedMaterial]);

  // ── Materials ────────────────────────────────────────────────
  const materials = useMemo(() => {
    let pool = products;
    if (selectedCategory !== 'all') pool = pool.filter(p => p.category === selectedCategory);
    if (selectedGender !== 'all') pool = pool.filter(p => {
      const s = p.subcategory?.toLowerCase();
      return selectedGender === 'womens' ? s === 'womens' || s === 'ladies' : s === selectedGender;
    });
    if (selectedShape !== 'all') pool = pool.filter(p => p.style?.toLowerCase() === selectedShape);

    const raw = [...new Set(pool.map(p => p.material).filter(Boolean))];
    const normalized = new Set();
    raw.forEach(m => {
      const lower = m.toLowerCase();
      if (lower.includes('plastic')) normalized.add('plastic');
      else if (lower.includes('metal')) normalized.add('metal');
      else normalized.add(lower);
    });

    const labelMap = { plastic: 'Plastic', metal: 'Metal', mixed: 'Mixed' };
    return [
      { id: 'all', name: 'All Types' },
      ...[...normalized].map(m => ({ id: m, name: labelMap[m] || m.charAt(0).toUpperCase() + m.slice(1) }))
    ];
  }, [selectedCategory, selectedGender, selectedShape]);

  // ── Shapes ───────────────────────────────────────────────────
  const shapes = useMemo(() => {
    let pool = products;
    if (selectedCategory !== 'all') pool = pool.filter(p => p.category === selectedCategory);
    if (selectedGender !== 'all') pool = pool.filter(p => {
      const s = p.subcategory?.toLowerCase();
      return selectedGender === 'womens' ? s === 'womens' || s === 'ladies' : s === selectedGender;
    });
    if (selectedMaterial !== 'all') pool = pool.filter(p => p.material?.toLowerCase().includes(selectedMaterial));
    const unique = [...new Set(pool.map(p => p.style).filter(Boolean))];
    return [{ id: 'all', name: 'All Shapes' }, ...unique.map(s => ({ id: s.toLowerCase(), name: s }))];
  }, [selectedCategory, selectedGender, selectedMaterial]);

  // ── Genders ──────────────────────────────────────────────────
  const genders = useMemo(() => {
    let pool = products;
    if (selectedCategory !== 'all') pool = pool.filter(p => p.category === selectedCategory);
    if (selectedShape !== 'all') pool = pool.filter(p => p.style?.toLowerCase() === selectedShape);
    if (selectedMaterial !== 'all') pool = pool.filter(p => p.material?.toLowerCase().includes(selectedMaterial));
    const vals = [...new Set(pool.map(p => p.subcategory?.toLowerCase()).filter(Boolean))];
    return [
      { id: 'all', name: 'All' },
      { id: 'gents', name: 'Men' },
      { id: 'womens', name: 'Women', includeAlso: ['ladies'] },
      { id: 'unisex', name: 'Unisex' },
      { id: 'kids', name: 'Kids' },
    ].filter(g => g.id === 'all' || vals.includes(g.id) || g.includeAlso?.some(v => vals.includes(v)));
  }, [selectedCategory, selectedShape, selectedMaterial]);

  // ── Reset stale filters ──────────────────────────────────────
  useEffect(() => {
    if (!shapes.find(s => s.id === selectedShape)) setSelectedShape('all');
  }, [shapes]);
  useEffect(() => {
    if (!categories.find(c => c.id === selectedCategory)) setSelectedCategory('all');
  }, [categories]);
  useEffect(() => {
    if (!genders.find(g => g.id === selectedGender)) setSelectedGender('all');
  }, [genders]);
  useEffect(() => {
    if (!materials.find(m => m.id === selectedMaterial)) setSelectedMaterial('all');
  }, [materials]);

  // ── Filtered & sorted products ───────────────────────────────
  const filteredProducts = useMemo(() => {
    let result = products;
    if (selectedCategory !== 'all') result = result.filter(p => p.category === selectedCategory);
    if (selectedShape !== 'all') result = result.filter(p => p.style?.toLowerCase() === selectedShape);
    if (selectedGender !== 'all') result = result.filter(p => {
      const s = p.subcategory?.toLowerCase();
      return selectedGender === 'womens' ? s === 'womens' || s === 'ladies' : s === selectedGender;
    });
    if (selectedMaterial !== 'all') result = result.filter(p => p.material?.toLowerCase().includes(selectedMaterial));

    if (sortBy === 'price-asc') result = [...result].sort((a, b) => (a.pricing?.discounted || 0) - (b.pricing?.discounted || 0));
    else if (sortBy === 'price-desc') result = [...result].sort((a, b) => (b.pricing?.discounted || 0) - (a.pricing?.discounted || 0));

    return result;
  }, [selectedCategory, selectedShape, selectedGender, selectedMaterial, sortBy]);

  const resetAll = () => {
    setSelectedCategory('all');
    setSelectedShape('all');
    setSelectedGender('all');
    setSelectedMaterial('all');
    setSortBy('newest');
  };

  const activeFilterCount = [selectedCategory, selectedShape, selectedGender, selectedMaterial].filter(v => v !== 'all').length;

  // ── Sidebar content ──────────────────────────────────────────
  const SidebarContent = () => (
    <div className="bg-white rounded-2xl shadow-sm sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto">
      <div className="p-5">
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <span className="font-bold text-base text-gray-900">Filters</span>
          {activeFilterCount > 0 && (
            <button onClick={resetAll} className="text-xs text-gray-400 hover:text-black transition-colors underline underline-offset-2">
              Clear all
            </button>
          )}
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-100 mb-5" />

        <FilterSection title="Category">
          {categories.map(cat => (
            <FilterButton key={cat.id} active={selectedCategory === cat.id} onClick={() => { setSelectedCategory(cat.id); setShowFilters(false); }}>
              {cat.name}
            </FilterButton>
          ))}
        </FilterSection>

        <div className="h-px bg-gray-100 mb-5" />

        <FilterSection title="Type / Material">
          {materials.map(mat => (
            <FilterButton key={mat.id} active={selectedMaterial === mat.id} onClick={() => { setSelectedMaterial(mat.id); setShowFilters(false); }}>
              {mat.name}
            </FilterButton>
          ))}
        </FilterSection>

        <div className="h-px bg-gray-100 mb-5" />

        <FilterSection title="Gender">
          {genders.map(g => (
            <FilterButton key={g.id} active={selectedGender === g.id} onClick={() => { setSelectedGender(g.id); setShowFilters(false); }}>
              {g.name}
            </FilterButton>
          ))}
        </FilterSection>

        <div className="h-px bg-gray-100 mb-5" />

        <FilterSection title="Frame Shape">
          {shapes.map(s => (
            <FilterButton key={s.id} active={selectedShape === s.id} onClick={() => { setSelectedShape(s.id); setShowFilters(false); }}>
              {s.name}
            </FilterButton>
          ))}
        </FilterSection>

        <div className="h-px bg-gray-100 mb-5" />

        <FilterSection title="Sort By">
          {[
            { id: 'newest', label: 'Newest' },
            { id: 'price-asc', label: 'Price: Low to High' },
            { id: 'price-desc', label: 'Price: High to Low' },
          ].map(opt => (
            <FilterButton key={opt.id} active={sortBy === opt.id} onClick={() => setSortBy(opt.id)}>
              {opt.label}
            </FilterButton>
          ))}
        </FilterSection>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Header */}
      <div className="bg-black text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <button onClick={() => navigate('/')} className="flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </button>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Collection</h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Discover premium eyewear crafted with precision and style. From timeless classics to modern innovations.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Desktop Sidebar */}
          <div className="hidden lg:block lg:w-56 flex-shrink-0">
            <SidebarContent />
          </div>

          {/* Mobile Filter Drawer */}
          {showFilters && (
            <div className="fixed inset-0 z-50 flex lg:hidden">
              <div className="absolute inset-0 bg-black/50" onClick={() => setShowFilters(false)} />
              <div className="relative ml-auto w-72 h-full bg-white overflow-y-auto p-5 shadow-2xl">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-bold text-lg">Filters</span>
                  <button onClick={() => setShowFilters(false)}>
                    <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <SidebarContent />
              </div>
            </div>
          )}

          {/* Products Section */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
              {/* Mobile filter btn */}
              <button
                onClick={() => setShowFilters(true)}
                className="lg:hidden flex items-center gap-2 bg-black text-white px-4 py-2.5 rounded-lg text-sm font-semibold"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4h18M6 8h12M9 12h6M12 16h0" />
                </svg>
                Filters {activeFilterCount > 0 && <span className="bg-white text-black rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">{activeFilterCount}</span>}
              </button>

              <p className="text-gray-500 text-sm">
                Showing <span className="font-bold text-black">{filteredProducts.length}</span> products
              </p>

              {/* Active filter chips */}
              <div className="flex flex-wrap gap-2">
                {selectedCategory !== 'all' && (
                  <span onClick={() => setSelectedCategory('all')} className="cursor-pointer flex items-center gap-1 bg-black text-white px-3 py-1 rounded-full text-xs font-medium">
                    {categories.find(c => c.id === selectedCategory)?.name}
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" /></svg>
                  </span>
                )}
                {selectedMaterial !== 'all' && (
                  <span onClick={() => setSelectedMaterial('all')} className="cursor-pointer flex items-center gap-1 bg-black text-white px-3 py-1 rounded-full text-xs font-medium">
                    {materials.find(m => m.id === selectedMaterial)?.name}
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" /></svg>
                  </span>
                )}
                {selectedGender !== 'all' && (
                  <span onClick={() => setSelectedGender('all')} className="cursor-pointer flex items-center gap-1 bg-black text-white px-3 py-1 rounded-full text-xs font-medium">
                    {genders.find(g => g.id === selectedGender)?.name}
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" /></svg>
                  </span>
                )}
                {selectedShape !== 'all' && (
                  <span onClick={() => setSelectedShape('all')} className="cursor-pointer flex items-center gap-1 bg-black text-white px-3 py-1 rounded-full text-xs font-medium">
                    {shapes.find(s => s.id === selectedShape)?.name}
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" /></svg>
                  </span>
                )}
              </div>
            </div>

            {/* Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <svg className="w-14 h-14 text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-xl font-bold text-gray-800 mb-2">No Products Found</h3>
                <p className="text-gray-500 mb-6">Try adjusting your filters to find what you're looking for.</p>
                <button onClick={resetAll} className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors">
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <section className="bg-black text-white py-12 mt-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Can't Find What You're Looking For?</h2>
          <p className="text-gray-400 mb-2 max-w-2xl mx-auto">
            Contact our customer support team. We're here to help you find the perfect eyewear.
          </p>
          <p className="text-gray-500 text-sm mb-6 max-w-2xl mx-auto">
            📍 Shop No. 2, Sadiq Heights, Opposite Balad Trade Centre, Bahadurabad, Karachi, Pakistan
          </p>
          <a
            href="https://wa.me/923183140548"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 text-black px-8 py-3 rounded-full font-bold hover:bg-green-400 transition-colors"
          >
            Chat on WhatsApp: 0318-3140548
          </a>
          <p className="text-gray-500 text-xs mt-4">💚 Delivery: Rs. 250 | Free above Rs. 5000</p>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;