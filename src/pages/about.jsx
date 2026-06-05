// import { Link } from 'react-router-dom';
// import { Award, ShieldCheck, Heart, Sparkles, Car, Home, Package, Truck } from 'lucide-react';

// const About = () => {
//   const brandName = "Eye-Studio";

//   const storyPoints = [
//     { 
//       title: 'The Vision', 
//       description: 'Eye Studio was founded with a vision to provide premium optical eyewear that combines luxury craftsmanship with modern innovation. We believe everyone deserves eyewear that reflects their personality and style.'
//     },
//     { 
//       title: 'Our Heritage', 
//       description: 'With decades of combined expertise in optical craftsmanship, our team brings Japanese precision and Italian design philosophy to every frame we create. Quality is at the heart of everything we do.'
//     },
//     { 
//       title: 'Our Commitment', 
//       description: 'We are committed to delivering authentic luxury eyewear using only the finest materials. From titanium hinges to premium acetate, every detail is meticulously crafted for your vision and comfort.'
//     }
//   ];

//   const products = [
//     { icon: <Car size={32} strokeWidth={1}/>, title: 'Prescription Frames', description: 'Personalized eyewear crafted to your optical needs' },
//     { icon: <Home size={32} strokeWidth={1}/>, title: 'Sunglasses', description: 'Premium UV protection with timeless style' },
//     { icon: <Package size={32} strokeWidth={1}/>, title: 'Luxury Collection', description: 'Limited edition frames with exclusive designs' }
//   ];

//   const values = [
//     { icon: <Sparkles size={32} strokeWidth={1}/>, title: 'Exceptional Craftsmanship', description: 'Premium eyewear crafted with Japanese precision and Italian design excellence' },
//     { icon: <Heart size={32} strokeWidth={1}/>, title: 'Personal Style', description: 'Frames designed for every personality and face shape with multiple collections' },
//     { icon: <ShieldCheck size={32} strokeWidth={1}/>, title: 'Authentic Materials', description: 'Japanese titanium and premium acetate sourced from trusted partners worldwide' },
//     { icon: <Truck size={32} strokeWidth={1}/>, title: 'Convenient Service', description: 'Cash on Delivery and virtual try-on for your peace of mind' }
//   ];

//   return (
//     <div className="bg-[#faf9f7] text-black font-sans">
//       {/* 1. HERO SECTION */}
//       <div className="relative h-[60vh] flex items-center justify-center bg-black overflow-hidden">
//         <div className="absolute inset-0 opacity-50">
//           <img 
//             src="./b1.jpg" 
//             className="w-full h-full object-cover" 
//             alt="Eye Studio Eyewear Collection"
//           />
//         </div>
//         <div className="relative z-10 text-center px-4">
//           <h2 className="text-[10px] tracking-[0.5em] text-white uppercase mb-4 font-bold">LUXURY EYEWEAR SINCE 2026</h2>
//           <h1 className="text-5xl md:text-7xl font-serif italic text-white mb-6">Our Story</h1>
//           <div className="w-16 h-px bg-white mx-auto"></div>
//         </div>
//       </div>

//       <div className="container mx-auto px-4 py-20">
//         {/* 2. BRAND INTRODUCTION */}
//         <div className="max-w-4xl mx-auto text-center mb-20">
//           <h2 className="text-3xl font-serif italic mb-8 uppercase tracking-widest">Welcome to Eye Studio</h2>
//           <p className="text-gray-600 text-lg leading-relaxed mb-6">
//             Eye Studio is a luxury eyewear brand dedicated to providing premium frames that combine exquisite craftsmanship with timeless design. Our mission is to help you see the world in style while enjoying superior comfort and vision quality.
//           </p>
//           <p className="text-gray-500 italic">
//             Founded in Karachi, Pakistan, we cater to discerning customers who appreciate fine craftsmanship, premium materials, and eyewear that truly reflects their personality.
//           </p>
//         </div>

//         {/* 3. THE STORY - Three Column Layout */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-32">
//           {storyPoints.map((point, idx) => (
//             <div key={idx} className="text-center p-8 border border-gray-100 hover:border-black transition-colors duration-500">
//               <div className="w-12 h-12 bg-black rounded-full mx-auto mb-6 flex items-center justify-center">
//                 <span className="text-white font-serif italic">{idx + 1}</span>
//               </div>
//               <h3 className="text-sm tracking-[0.3em] font-bold uppercase mb-4">{point.title}</h3>
//               <p className="text-gray-500 text-sm leading-relaxed">{point.description}</p>
//             </div>
//           ))}
//         </div>

//         {/* 4. OUR PRODUCTS */}
//         <div className="mb-32">
//           <h2 className="text-center text-2xl font-serif italic tracking-widest mb-4 uppercase">Our Collections</h2>
//           <p className="text-center text-gray-400 text-xs tracking-[0.2em] uppercase mb-16">Discover eyewear for every lifestyle and occasion</p>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
//             {products.map((product, idx) => (
//               <div key={idx} className="text-center group">
//                 <div className="mb-6 flex justify-center text-gray-600 group-hover:text-black transition-colors duration-500">
//                   {product.icon}
//                 </div>
//                 <h3 className="text-sm tracking-[0.3em] font-bold uppercase mb-4">{product.title}</h3>
//                 <p className="text-xs text-gray-500 leading-relaxed max-w-xs mx-auto">{product.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* 5. CORE VALUES */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-32 border-y border-gray-100 py-20">
//           {values.map((val, idx) => (
//             <div key={idx} className="text-center group">
//               <div className="mb-6 flex justify-center text-gray-400 group-hover:text-black transition-colors duration-500">
//                 {val.icon}
//               </div>
//               <h3 className="text-xs tracking-[0.3em] font-bold uppercase mb-4">{val.title}</h3>
//               <p className="text-[11px] text-gray-500 leading-relaxed uppercase tracking-tighter">{val.description}</p>
//             </div>
//           ))}
//         </div>

//         {/* 6. OUR MESSAGE */}
//         <div className="bg-gray-50 p-20 mb-20 text-center max-w-4xl mx-auto">
//           <h2 className="text-2xl font-serif italic mb-8 uppercase tracking-widest">Our Philosophy</h2>
//           <p className="text-gray-700 text-lg leading-relaxed italic">
//             "Great eyewear is more than a visual aid—it's a statement of style and sophistication. Your frames should enhance not just your vision, but your entire presence."
//           </p>
//         </div>

//         {/* 7. STATS - Clean Banner */}
//         <div className="bg-black text-white py-20 px-4 mb-20">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center max-w-5xl mx-auto">
//             <div>
//               <div className="text-3xl font-serif mb-2 italic">Premium</div>
//               <div className="text-[9px] tracking-[0.4em] uppercase opacity-60">Materials Used</div>
//             </div>
//             <div>
//               <div className="text-3xl font-serif mb-2 italic">100%</div>
//               <div className="text-[9px] tracking-[0.4em] uppercase opacity-60">Authentic</div>
//             </div>
//             <div>
//               <div className="text-3xl font-serif mb-2 italic">2026</div>
//               <div className="text-[9px] tracking-[0.4em] uppercase opacity-60">Founded</div>
//             </div>
//             <div>
//               <div className="text-3xl font-serif mb-2 italic">Luxury</div>
//               <div className="text-[9px] tracking-[0.4em] uppercase opacity-60">Craftsmanship</div>
//             </div>
//           </div>
//         </div>

//         {/* 8. VISION SECTION */}
//         <div className="text-center py-10 mb-10">
//           <h2 className="text-2xl font-serif italic mb-6 uppercase tracking-widest">Our Vision</h2>
//           <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
//             To become the leading luxury eyewear brand in South Asia, recognized for our commitment to 
//             craftsmanship, innovation, and timeless design. We envision a world where everyone experiences 
//             the perfect blend of style, comfort, and visual excellence.
//           </p>
//         </div>

//         {/* 9. CALL TO ACTION */}
//         <div className="text-center py-20 border border-gray-100">
//           <h2 className="text-3xl font-serif italic mb-6">Find Your Perfect Frame</h2>
//           <p className="text-gray-400 text-xs tracking-[0.2em] uppercase mb-10 max-w-lg mx-auto leading-loose">
//             Explore our luxury collections, try frames virtually, and discover eyewear that defines your style
//           </p>
//           <div className="flex flex-col md:flex-row justify-center gap-6">
//             <Link 
//               to="/products" 
//               className="bg-black text-white px-12 py-4 text-[10px] tracking-[0.3em] font-bold uppercase hover:bg-gray-800 transition shadow-xl"
//             >
//               Explore Collection
//             </Link>
//             <Link 
//               to="/contact" 
//               className="border border-black text-black px-12 py-4 text-[10px] tracking-[0.3em] font-bold uppercase hover:bg-black hover:text-white transition"
//             >
//               Order via WhatsApp
//             </Link>
//           </div>
//           <p className="text-gray-400 text-xs mt-6">Cash on Delivery available for your convenience</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;
















// import { Link } from 'react-router-dom';
// import { Award, ShieldCheck, Heart, Sparkles, Car, Home, Package, Truck, Eye, Star, Zap } from 'lucide-react';

// const About = () => {
//   const storyPoints = [
//     { 
//       title: 'The Vision', 
//       description: 'Eye Studio was founded with a vision to provide premium optical eyewear that combines luxury craftsmanship with modern innovation. We believe everyone deserves eyewear that reflects their personality and style.'
//     },
//     { 
//       title: 'Our Heritage', 
//       description: 'With decades of combined expertise in optical craftsmanship, our team brings Japanese precision and Italian design philosophy to every frame we create. Quality is at the heart of everything we do.'
//     },
//     { 
//       title: 'Our Commitment', 
//       description: 'We are committed to delivering authentic luxury eyewear using only the finest materials. From titanium hinges to premium acetate, every detail is meticulously crafted for your vision and comfort.'
//     }
//   ];

//   const products = [
//     { icon: <Eye size={32} strokeWidth={1.2}/>, title: 'Prescription Frames', description: 'Personalized eyewear crafted to your optical needs with precision lenses' },
//     { icon: <Sun size={32} strokeWidth={1.2}/>, title: 'Sunglasses', description: 'Premium UV protection with timeless style and polarized options' },
//     { icon: <Star size={32} strokeWidth={1.2}/>, title: 'Luxury Collection', description: 'Limited edition frames with exclusive designs and hand-finished details' }
//   ];

//   const values = [
//     { icon: <Sparkles size={32} strokeWidth={1.2}/>, title: 'Exceptional Craftsmanship', description: 'Premium eyewear crafted with Japanese precision and Italian design excellence' },
//     { icon: <Heart size={32} strokeWidth={1.2}/>, title: 'Personal Style', description: 'Frames designed for every personality and face shape with multiple collections' },
//     { icon: <ShieldCheck size={32} strokeWidth={1.2}/>, title: 'Authentic Materials', description: 'Japanese titanium and premium acetate sourced from trusted partners worldwide' },
//     { icon: <Truck size={32} strokeWidth={1.2}/>, title: 'Convenient Service', description: 'Cash on Delivery and virtual try-on for your peace of mind' }
//   ];

//   const eyewearImages = [
//     { url: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=800&q=80', label: 'Titanium Collection' },
//     { url: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&q=80', label: 'Classic Sunglasses' },
//     { url: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?w=800&q=80', label: 'Luxury Frames' },
//     { url: 'https://images.unsplash.com/photo-1508296695146-257a814070b4?w=800&q=80', label: 'Designer Series' },
//   ];

//   return (
//     <div style={{ 
//       background: '#FCFAF5', 
//       color: '#2C2418', 
//       fontFamily: "'Cormorant Garamond', 'Georgia', serif", 
//       overflowX: 'hidden' 
//     }}>

//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Montserrat:wght@200;300;400;500;600;700&display=swap');

//         .es-hero-img { transition: transform 10s ease-out; }
//         .es-hero-img:hover { transform: scale(1.04); }

//         .es-gallery-item { overflow: hidden; position: relative; cursor: pointer; border-radius: 16px; }
//         .es-gallery-item img { transition: transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94); display: block; width: 100%; height: 100%; object-fit: cover; }
//         .es-gallery-item:hover img { transform: scale(1.06); }
//         .es-gallery-label { 
//           position: absolute; bottom: 0; left: 0; right: 0; padding: 2rem 1.5rem 1.2rem; 
//           background: linear-gradient(to top, rgba(252,250,245,0.95), transparent); 
//           color: #8B7A5B; font-family: 'Montserrat', sans-serif; font-size: 10px; 
//           letter-spacing: 0.35em; text-transform: uppercase; opacity: 0; 
//           transition: opacity 0.4s ease; font-weight: 500;
//         }
//         .es-gallery-item:hover .es-gallery-label { opacity: 1; }

//         .es-story-card { 
//           background: #FFFFFF; border-radius: 24px; padding: 2rem 2rem; 
//           transition: all 0.35s ease; border: 1px solid #EFE8DD; box-shadow: 0 2px 8px rgba(0,0,0,0.02);
//         }
//         .es-story-card:hover { border-color: #D4C5A8; transform: translateY(-5px); box-shadow: 0 20px 30px -12px rgba(0,0,0,0.08); }

//         .es-value-item { transition: transform 0.3s; background: #FFFFFF; border-radius: 20px; padding: 2rem 1.5rem; border: 1px solid #EFE8DD; }
//         .es-value-item:hover { transform: translateY(-6px); border-color: #CBBE9E; box-shadow: 0 12px 24px -12px rgba(0,0,0,0.06); }

//         .es-line-anim { width: 0; height: 2px; background: #CBB27A; animation: lineGrow 1s ease forwards 0.3s; }
//         @keyframes lineGrow { to { width: 70px; } }

//         .es-owner-frame { border: 1px solid #E3D8C8; padding: 6px; background: #FFFFFF; border-radius: 4px; }
//         .es-cta-btn-primary { 
//           background: #2C2418; color: #FCFAF5; padding: 14px 42px; font-family: 'Montserrat', sans-serif; 
//           font-size: 10px; letter-spacing: 0.4em; font-weight: 600; text-transform: uppercase; 
//           text-decoration: none; display: inline-block; transition: all 0.3s; border: 1px solid #2C2418; border-radius: 40px;
//         }
//         .es-cta-btn-primary:hover { background: transparent; color: #2C2418; }
//         .es-cta-btn-outline { 
//           background: transparent; color: #6B5D48; padding: 14px 42px; font-family: 'Montserrat', sans-serif; 
//           font-size: 10px; letter-spacing: 0.4em; font-weight: 600; text-transform: uppercase; 
//           text-decoration: none; display: inline-block; border: 1px solid #D4C5A8; border-radius: 40px;
//           transition: all 0.3s;
//         }
//         .es-cta-btn-outline:hover { background: #F5F0E8; border-color: #B8A77D; color: #2C2418; }

//         .es-divider { width: 45px; height: 1px; background: #DBCAA2; margin: 1.2rem auto; }
//         .es-tag { font-family: 'Montserrat', sans-serif; font-size: 10px; letter-spacing: 0.45em; text-transform: uppercase; color: #9B8B62; font-weight: 500; }
        
//         .stat-card { background: #FFFFFF; padding: 1.8rem; border-radius: 28px; text-align: center; border: 1px solid #EFE6DB; transition: all 0.2s; }
//         .stat-card:hover { border-color: #D4C29C; transform: scale(1.02); }
//       `}</style>

//       {/* ========== 1. HERO SECTION - LIGHT THEME ========== */}
//       <div style={{ position: 'relative', height: '85vh', minHeight: '600px', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', overflow: 'hidden' }}>
//         <img
//           src="./aboutus-banner.webp"
//           alt="Eye Studio luxury eyewear"
//           className="es-hero-img"
//           style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.75) contrast(1.05)' }}
//         />
//         <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #FCFAF5 8%, rgba(252,250,245,0.2) 55%)' }} />

//         <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', paddingBottom: '5rem', paddingLeft: '1rem', paddingRight: '1rem' }}>
//           <p className="es-tag" style={{ marginBottom: '1.2rem', background: 'rgba(252,250,245,0.75)', padding: '0.4rem 1.2rem', borderRadius: '40px', display: 'inline-block', backdropFilter: 'blur(4px)' }}>
//             Luxury Eyewear · Karachi · Est. 2026
//           </p>
//           <h1 style={{ fontSize: 'clamp(3.5rem, 8vw, 6.5rem)', fontWeight: 400, fontStyle: 'italic', margin: '0.5rem 0 1.2rem', lineHeight: 1, color: '#1F1A10', letterSpacing: '-0.01em' }}>
//             Our Story
//           </h1>
//           <div className="es-line-anim" style={{ margin: '0 auto' }} />
//         </div>
//       </div>

//       {/* ========== 2. BRAND INTRO ========== */}
//       <div style={{ maxWidth: '780px', margin: '0 auto', padding: '6rem 2rem 5rem', textAlign: 'center' }}>
//         <p className="es-tag" style={{ marginBottom: '1rem' }}>Welcome to Eye Studio</p>
//         <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 400, fontStyle: 'italic', margin: '0 0 1.5rem', lineHeight: 1.3, color: '#2C2418' }}>
//           Where Vision Meets Artistry
//         </h2>
//         <div className="es-divider" />
//         <p style={{ color: '#6B5D48', fontFamily: "'Montserrat', sans-serif", fontSize: '14px', lineHeight: 1.9, fontWeight: 400, marginTop: '2rem' }}>
//           Eye Studio is a luxury eyewear brand dedicated to providing premium frames that combine exquisite craftsmanship with timeless design. Founded in Karachi, Pakistan, we cater to discerning customers who appreciate fine craftsmanship, premium materials, and eyewear that truly reflects their personality.
//         </p>
//       </div>

//       {/* ========== 3. GALLERY GRID ========== */}
//       <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px', maxWidth: '1100px', margin: '0 auto 6rem', padding: '0 1.5rem' }}>
//         {eyewearImages.map((img, i) => (
//           <div key={i} className="es-gallery-item" style={{ height: i < 2 ? '400px' : '260px', background: '#E8E0D2', borderRadius: '16px' }}>
//             <img src={img.url} alt={img.label} style={{ borderRadius: '16px' }} />
//             <div className="es-gallery-label">{img.label}</div>
//           </div>
//         ))}
//       </div>

//       {/* ========== 4. STORY CARDS ========== */}
//       <div style={{ maxWidth: '1100px', margin: '0 auto 7rem', padding: '0 1.5rem' }}>
//         <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
//           <p className="es-tag" style={{ marginBottom: '0.8rem' }}>The Journey</p>
//           <h2 style={{ fontSize: 'clamp(1.8rem, 2.8vw, 2.6rem)', fontWeight: 400, fontStyle: 'italic', color: '#2C2418', margin: 0 }}>Behind the Brand</h2>
//           <div className="es-divider" style={{ marginTop: '1rem' }} />
//         </div>
//         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '2rem' }}>
//           {storyPoints.map((point, idx) => (
//             <div key={idx} className="es-story-card">
//               <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
//                 <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2.4rem', fontWeight: 400, color: '#CBB27A', lineHeight: 1 }}>0{idx + 1}</span>
//                 <div style={{ height: '1px', flex: 1, background: '#E8DFD0' }} />
//               </div>
//               <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '11px', letterSpacing: '0.35em', textTransform: 'uppercase', color: '#9B8B62', marginBottom: '1rem', fontWeight: 600 }}>{point.title}</h3>
//               <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '13px', color: '#5E5340', lineHeight: 1.8, fontWeight: 400 }}>{point.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* ========== 5. OWNER SECTION - LIGHT ========== */}
//       <div style={{ background: '#F8F5EF', borderTop: '1px solid #EBE2D5', borderBottom: '1px solid #EBE2D5', margin: '0 0 7rem', padding: '5rem 1.5rem' }}>
//         <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
//           <div style={{ textAlign: 'center' }}>
//             <div className="es-owner-frame" style={{ display: 'inline-block', position: 'relative' }}>
//               <img
//                 src="https://images.unsplash.com/photo-1609602644879-15a0cbf02a57?w=600&q=85"
//                 alt="Eye Studio Founder"
//                 style={{ width: '100%', maxWidth: '340px', height: '400px', objectFit: 'cover', display: 'block', filter: 'contrast(1.02)', borderRadius: '2px' }}
//               />
//               <span style={{ position: 'absolute', top: '-6px', left: '-6px', width: '22px', height: '22px', borderTop: '2px solid #CBB27A', borderLeft: '2px solid #CBB27A' }} />
//               <span style={{ position: 'absolute', bottom: '-6px', right: '-6px', width: '22px', height: '22px', borderBottom: '2px solid #CBB27A', borderRight: '2px solid #CBB27A' }} />
//             </div>
//           </div>
//           <div>
//             <p className="es-tag" style={{ marginBottom: '1rem' }}>Meet the Founder</p>
//             <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 400, fontStyle: 'italic', color: '#2C2418', margin: '0 0 0.3rem', lineHeight: 1.1 }}>
//               Ahmad Raza
//             </h2>
//             <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '11px', letterSpacing: '0.3em', color: '#9B8B62', textTransform: 'uppercase', marginBottom: '1.8rem', fontWeight: 500 }}>Founder & Creative Director</p>
//             <div style={{ width: '45px', height: '2px', background: '#CBB27A', marginBottom: '1.8rem' }} />
//             <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '14px', color: '#5E5340', lineHeight: 1.85, fontWeight: 400, marginBottom: '1.5rem' }}>
//               "I started Eye Studio with one belief — that luxury eyewear should be accessible to every person who values style and quality. Each frame we carry is chosen with obsessive attention to detail, because your eyewear is the first thing the world notices."
//             </p>
//             <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '14px', color: '#7A6B52', lineHeight: 1.85, fontWeight: 400 }}>
//               With a passion for Japanese craftsmanship and Italian design, Ahmad curates every collection personally — ensuring Eye Studio remains Karachi's most trusted name in luxury eyewear.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* ========== 6. COLLECTIONS ========== */}
//       <div style={{ maxWidth: '1100px', margin: '0 auto 7rem', padding: '0 1.5rem' }}>
//         <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
//           <p className="es-tag" style={{ marginBottom: '0.8rem' }}>What We Offer</p>
//           <h2 style={{ fontSize: 'clamp(1.8rem, 2.8vw, 2.6rem)', fontWeight: 400, fontStyle: 'italic', color: '#2C2418', margin: 0 }}>Our Collections</h2>
//           <div className="es-divider" />
//         </div>
//         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: '2rem' }}>
//           {products.map((product, idx) => (
//             <div key={idx} style={{ textAlign: 'center', padding: '2.2rem 1.5rem', background: '#FFFFFF', borderRadius: '24px', border: '1px solid #EFE8DD', transition: 'all 0.3s' }}>
//               <div style={{ color: '#CBB27A', marginBottom: '1.5rem', display: 'inline-block' }}>
//                 {product.icon}
//               </div>
//               <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '11px', letterSpacing: '0.35em', textTransform: 'uppercase', color: '#6B5D48', marginBottom: '1rem', fontWeight: 600 }}>{product.title}</h3>
//               <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '13px', color: '#8A7A5C', lineHeight: 1.8 }}>{product.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* ========== 7. CORE VALUES ========== */}
//       <div style={{ borderTop: '1px solid #EBE2D5', borderBottom: '1px solid #EBE2D5', background: '#FCFAF5', padding: '5rem 1.5rem', marginBottom: '7rem' }}>
//         <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
//           <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
//             <p className="es-tag">Our Ethos</p>
//             <h2 style={{ fontSize: 'clamp(1.8rem, 2.8vw, 2.4rem)', fontWeight: 400, fontStyle: 'italic', color: '#2C2418', marginTop: '0.5rem' }}>Guiding Principles</h2>
//             <div className="es-divider" />
//           </div>
//           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '2rem' }}>
//             {values.map((val, idx) => (
//               <div key={idx} className="es-value-item">
//                 <div style={{ color: '#CBB27A', marginBottom: '1.2rem', display: 'flex', justifyContent: 'center' }}>{val.icon}</div>
//                 <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '10px', letterSpacing: '0.35em', textTransform: 'uppercase', color: '#6B5D48', marginBottom: '1rem', fontWeight: 600 }}>{val.title}</h3>
//                 <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '12px', color: '#8A7A5C', lineHeight: 1.8, fontWeight: 400 }}>{val.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* ========== 8. PHILOSOPHY QUOTE ========== */}
//       <div style={{ maxWidth: '750px', margin: '0 auto 7rem', padding: '0 2rem', textAlign: 'center' }}>
//         <span style={{ fontSize: '5rem', fontFamily: 'Georgia, serif', color: '#E8DDD0', lineHeight: 1, display: 'block', marginBottom: '-1.5rem' }}>"</span>
//         <blockquote style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', fontWeight: 400, fontStyle: 'italic', color: '#4A3F2C', lineHeight: 1.6, margin: '0 0 2rem', fontFamily: "'Cormorant Garamond', serif" }}>
//           Great eyewear is more than a visual aid — it's a statement of style and sophistication. Your frames should enhance not just your vision, but your entire presence.
//         </blockquote>
//         <div className="es-divider" />
//         <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '10px', letterSpacing: '0.4em', color: '#9B8B62', textTransform: 'uppercase', marginTop: '1.5rem', fontWeight: 500 }}>Ahmad Raza · Founder</p>
//       </div>

//       {/* ========== 9. STATS SECTION - LIGHT ========== */}
//       <div style={{ background: '#F8F5EF', padding: '5rem 1.5rem', marginBottom: '7rem' }}>
//         <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '2rem', textAlign: 'center' }}>
//           {[
//             { val: 'Premium', sub: 'Materials Used' },
//             { val: '100%', sub: 'Authentic' },
//             { val: '2026', sub: 'Founded' },
//             { val: 'Luxury', sub: 'Craftsmanship' },
//           ].map((s, i) => (
//             <div key={i} className="stat-card">
//               <div style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 400, fontStyle: 'italic', color: '#CBB27A', marginBottom: '0.6rem', fontFamily: "'Cormorant Garamond', serif" }}>{s.val}</div>
//               <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '9px', letterSpacing: '0.4em', textTransform: 'uppercase', color: '#8A7A5C', fontWeight: 500 }}>{s.sub}</div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* ========== 10. VISION ========== */}
//       <div style={{ maxWidth: '720px', margin: '0 auto 7rem', padding: '0 2rem', textAlign: 'center' }}>
//         <p className="es-tag" style={{ marginBottom: '1rem' }}>Looking Ahead</p>
//         <h2 style={{ fontSize: 'clamp(1.8rem, 2.8vw, 2.5rem)', fontWeight: 400, fontStyle: 'italic', color: '#2C2418', margin: '0 0 1.2rem' }}>Our Vision</h2>
//         <div className="es-divider" />
//         <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '14px', color: '#6B5D48', lineHeight: 1.9, fontWeight: 400, marginTop: '2rem' }}>
//           To become the leading luxury eyewear brand in South Asia, recognized for our commitment to craftsmanship, innovation, and timeless design. We envision a world where everyone experiences the perfect blend of style, comfort, and visual excellence.
//         </p>
//       </div>

//       {/* ========== 11. FEATURE IMAGE ========== */}
//       <div style={{ maxWidth: '1100px', margin: '0 auto 7rem', padding: '0 1.5rem' }}>
//         <div style={{ position: 'relative', overflow: 'hidden', height: '480px', borderRadius: '28px' }}>
//           <img
//             src="https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=1400&q=85"
//             alt="Eye Studio craftsmanship"
//             style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.7) sepia(0.05)' }}
//           />
//           <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', background: 'rgba(252,250,245,0.15)' }}>
//             <p className="es-tag" style={{ marginBottom: '1rem', color: '#FCFAF5', background: 'rgba(0,0,0,0.3)', padding: '0.3rem 1rem', borderRadius: '30px' }}>Karachi, Pakistan</p>
//             <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 400, fontStyle: 'italic', color: '#FFFFFF', margin: 0, lineHeight: 1.2, textShadow: '0 2px 10px rgba(0,0,0,0.2)' }}>
//               Crafted for<br />Those Who See Differently
//             </h2>
//           </div>
//         </div>
//       </div>

//       {/* ========== 12. CTA ========== */}
//       <div style={{ textAlign: 'center', padding: '4rem 2rem 7rem', borderTop: '1px solid #EBE2D5', background: '#FCFAF5' }}>
//         <p className="es-tag" style={{ marginBottom: '1rem' }}>Begin Your Journey</p>
//         <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, fontStyle: 'italic', color: '#2C2418', margin: '0 0 1rem' }}>Find Your Perfect Frame</h2>
//         <div className="es-divider" />
//         <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '12px', color: '#8A7A5C', letterSpacing: '0.2em', textTransform: 'uppercase', margin: '2rem auto 2.5rem', maxWidth: '460px', lineHeight: 2, fontWeight: 500 }}>
//           Explore our luxury collections, try frames virtually, and discover eyewear that defines your style
//         </p>
//         <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.2rem' }}>
//           <Link to="/products" className="es-cta-btn-primary">Explore Collection</Link>
//           <Link to="/contact" className="es-cta-btn-outline">Order via WhatsApp</Link>
//         </div>
//         <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '11px', color: '#B8A77D', marginTop: '2rem', letterSpacing: '0.2em', fontWeight: 400 }}>Cash on Delivery available · Karachi & nationwide</p>
//       </div>
//     </div>
//   );
// };

// // Helper component for Sun icon (since it wasn't imported)
// const Sun = ({ size, strokeWidth }) => (
//   <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
//     <circle cx="12" cy="12" r="4"/>
//     <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
//   </svg>
// );

// export default About;




















import { Link } from 'react-router-dom';
import { ShieldCheck, Heart, Sparkles, Truck, Eye, Star } from 'lucide-react';

const About = () => {
  const storyPoints = [
    { 
      title: 'The Vision', 
      description: 'Eye Studio was founded with a vision to provide premium optical eyewear that combines luxury craftsmanship with modern innovation. We believe everyone deserves eyewear that reflects their personality and style.'
    },
    { 
      title: 'Our Heritage', 
      description: 'With decades of combined expertise in optical craftsmanship, our team brings Japanese precision and Italian design philosophy to every frame we create. Quality is at the heart of everything we do.'
    },
    { 
      title: 'Our Commitment', 
      description: 'We are committed to delivering authentic luxury eyewear using only the finest materials. From titanium hinges to premium acetate, every detail is meticulously crafted for your vision and comfort.'
    }
  ];

  const products = [
    { icon: <Eye size={32} strokeWidth={1.2}/>, title: 'Prescription Frames', description: 'Personalized eyewear crafted to your optical needs with precision lenses' },
    { icon: <Sun size={32} strokeWidth={1.2}/>, title: 'Sunglasses', description: 'Premium UV protection with timeless style and polarized options' },
    { icon: <Star size={32} strokeWidth={1.2}/>, title: 'Luxury Collection', description: 'Limited edition frames with exclusive designs and hand-finished details' }
  ];

  const values = [
    { icon: <Sparkles size={32} strokeWidth={1.2}/>, title: 'Exceptional Craftsmanship', description: 'Premium eyewear crafted with Japanese precision and Italian design excellence' },
    { icon: <Heart size={32} strokeWidth={1.2}/>, title: 'Personal Style', description: 'Frames designed for every personality and face shape with multiple collections' },
    { icon: <ShieldCheck size={32} strokeWidth={1.2}/>, title: 'Authentic Materials', description: 'Japanese titanium and premium acetate sourced from trusted partners worldwide' },
    { icon: <Truck size={32} strokeWidth={1.2}/>, title: 'Convenient Service', description: 'Cash on Delivery and virtual try-on for your peace of mind' }
  ];

  const eyewearImages = [
    { url: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=800&q=80', label: 'Titanium Collection' },
    { url: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&q=80', label: 'Classic Sunglasses' },
    { url: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?w=800&q=80', label: 'Luxury Frames' },
    { url: 'https://images.unsplash.com/photo-1508296695146-257a814070b4?w=800&q=80', label: 'Designer Series' },
  ];

  const shopImages = [
    { url: './public/shop-1.jpeg', label: 'Frames Display', num: '01' },
    { url: './public/shop-2.jpeg', label: 'Interior', num: '02' },
    { url: './public/shop-3.jpeg', label: 'Interior', num: '03' },
    { url: './public/shop-4.jpeg', label: 'Interior', num: '04' },
  ];

  return (
    <div style={{ 
      background: '#FCFAF5', 
      color: '#2C2418', 
      fontFamily: "'Cormorant Garamond', 'Georgia', serif", 
      overflowX: 'hidden' 
    }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Montserrat:wght@200;300;400;500;600;700&display=swap');

        .es-hero-img { transition: transform 10s ease-out; }
        .es-hero-img:hover { transform: scale(1.04); }

        .es-gallery-item { overflow: hidden; position: relative; cursor: pointer; border-radius: 16px; }
        .es-gallery-item img { transition: transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94); display: block; width: 100%; height: 100%; object-fit: cover; }
        .es-gallery-item:hover img { transform: scale(1.06); }
        .es-gallery-label { 
          position: absolute; bottom: 0; left: 0; right: 0; padding: 2rem 1.5rem 1.2rem; 
          background: linear-gradient(to top, rgba(252,250,245,0.95), transparent); 
          color: #8B7A5B; font-family: 'Montserrat', sans-serif; font-size: 10px; 
          letter-spacing: 0.35em; text-transform: uppercase; opacity: 0; 
          transition: opacity 0.4s ease; font-weight: 500;
        }
        .es-gallery-item:hover .es-gallery-label { opacity: 1; }

        .es-story-card { 
          background: #FFFFFF; border-radius: 24px; padding: 2rem 2rem; 
          transition: all 0.35s ease; border: 1px solid #EFE8DD; box-shadow: 0 2px 8px rgba(0,0,0,0.02);
        }
        .es-story-card:hover { border-color: #D4C5A8; transform: translateY(-5px); box-shadow: 0 20px 30px -12px rgba(0,0,0,0.08); }

        .es-value-item { transition: transform 0.3s; background: #FFFFFF; border-radius: 20px; padding: 2rem 1.5rem; border: 1px solid #EFE8DD; }
        .es-value-item:hover { transform: translateY(-6px); border-color: #CBBE9E; box-shadow: 0 12px 24px -12px rgba(0,0,0,0.06); }

        .es-line-anim { width: 0; height: 2px; background: #CBB27A; animation: lineGrow 1s ease forwards 0.3s; }
        @keyframes lineGrow { to { width: 70px; } }

        .es-cta-btn-primary { 
          background: #2C2418; color: #FCFAF5; padding: 14px 42px; font-family: 'Montserrat', sans-serif; 
          font-size: 10px; letter-spacing: 0.4em; font-weight: 600; text-transform: uppercase; 
          text-decoration: none; display: inline-block; transition: all 0.3s; border: 1px solid #2C2418; border-radius: 40px;
        }
        .es-cta-btn-primary:hover { background: transparent; color: #2C2418; }
        .es-cta-btn-outline { 
          background: transparent; color: #6B5D48; padding: 14px 42px; font-family: 'Montserrat', sans-serif; 
          font-size: 10px; letter-spacing: 0.4em; font-weight: 600; text-transform: uppercase; 
          text-decoration: none; display: inline-block; border: 1px solid #D4C5A8; border-radius: 40px;
          transition: all 0.3s;
        }
        .es-cta-btn-outline:hover { background: #F5F0E8; border-color: #B8A77D; color: #2C2418; }

        .es-divider { width: 45px; height: 1px; background: #DBCAA2; margin: 1.2rem auto; }
        .es-tag { font-family: 'Montserrat', sans-serif; font-size: 10px; letter-spacing: 0.45em; text-transform: uppercase; color: #9B8B62; font-weight: 500; }
        
        .stat-card { background: #FFFFFF; padding: 1.8rem; border-radius: 28px; text-align: center; border: 1px solid #EFE6DB; transition: all 0.2s; }
        .stat-card:hover { border-color: #D4C29C; transform: scale(1.02); }

        .shop-item { position: relative; overflow: hidden; border-radius: 14px; background: #E8E0D2; border: 1px solid #EBE2D5; cursor: pointer; }
        .shop-item img { width: 100%; height: 200px; object-fit: cover; display: block; transition: transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94); filter: brightness(0.96) contrast(1.02); border-radius: 14px; }
        .shop-item:hover img { transform: scale(1.06); }
        .shop-overlay { position: absolute; bottom: 0; left: 0; right: 0; padding: 1.5rem 1rem 0.8rem; background: linear-gradient(to top, rgba(44,36,24,0.85), transparent); opacity: 0; transition: opacity 0.4s ease; }
        .shop-item:hover .shop-overlay { opacity: 1; }
        .shop-overlay span { font-family: 'Montserrat', sans-serif; font-size: 9px; letter-spacing: 0.3em; text-transform: uppercase; color: #F5EDD8; font-weight: 500; }
        .shop-num { position: absolute; top: 10px; left: 12px; font-family: 'Cormorant Garamond', serif; font-size: 1.1rem; font-style: italic; color: rgba(255,255,255,0.8); z-index: 2; }
      `}</style>

      {/* ========== 1. HERO SECTION ========== */}
      <div style={{ position: 'relative', height: '85vh', minHeight: '600px', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', overflow: 'hidden' }}>
        <img
          src="./aboutus-banner.webp"
          alt="Eye Studio luxury eyewear"
          className="es-hero-img"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.75) contrast(1.05)' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #FCFAF5 8%, rgba(252,250,245,0.2) 55%)' }} />

        <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', paddingBottom: '5rem', paddingLeft: '1rem', paddingRight: '1rem' }}>
          <p className="es-tag" style={{ marginBottom: '1.2rem', background: 'rgba(252,250,245,0.75)', padding: '0.4rem 1.2rem', borderRadius: '40px', display: 'inline-block', backdropFilter: 'blur(4px)' }}>
            Luxury Eyewear · Karachi · Est. 2026
          </p>
          <h1 style={{ fontSize: 'clamp(3.5rem, 8vw, 6.5rem)', fontWeight: 400, fontStyle: 'italic', margin: '0.5rem 0 1.2rem', lineHeight: 1, color: '#1F1A10', letterSpacing: '-0.01em' }}>
            Our Story
          </h1>
          <div className="es-line-anim" style={{ margin: '0 auto' }} />
        </div>
      </div>

      {/* ========== 2. BRAND INTRO ========== */}
      <div style={{ maxWidth: '780px', margin: '0 auto', padding: '6rem 2rem 5rem', textAlign: 'center' }}>
        <p className="es-tag" style={{ marginBottom: '1rem' }}>Welcome to Eye Studio</p>
        <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 400, fontStyle: 'italic', margin: '0 0 1.5rem', lineHeight: 1.3, color: '#2C2418' }}>
          Where Vision Meets Artistry
        </h2>
        <div className="es-divider" />
        <p style={{ color: '#6B5D48', fontFamily: "'Montserrat', sans-serif", fontSize: '14px', lineHeight: 1.9, fontWeight: 400, marginTop: '2rem' }}>
          Eye Studio is a luxury eyewear brand dedicated to providing premium frames that combine exquisite craftsmanship with timeless design. Founded in Karachi, Pakistan, we cater to discerning customers who appreciate fine craftsmanship, premium materials, and eyewear that truly reflects their personality.
        </p>
      </div>

      {/* ========== 3. GALLERY GRID ========== */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px', maxWidth: '1100px', margin: '0 auto 6rem', padding: '0 1.5rem' }}>
        {eyewearImages.map((img, i) => (
          <div key={i} className="es-gallery-item" style={{ height: i < 2 ? '400px' : '260px', background: '#E8E0D2', borderRadius: '16px' }}>
            <img src={img.url} alt={img.label} style={{ borderRadius: '16px' }} />
            <div className="es-gallery-label">{img.label}</div>
          </div>
        ))}
      </div>

      {/* ========== 4. STORY CARDS ========== */}
      <div style={{ maxWidth: '1100px', margin: '0 auto 7rem', padding: '0 1.5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <p className="es-tag" style={{ marginBottom: '0.8rem' }}>The Journey</p>
          <h2 style={{ fontSize: 'clamp(1.8rem, 2.8vw, 2.6rem)', fontWeight: 400, fontStyle: 'italic', color: '#2C2418', margin: 0 }}>Behind the Brand</h2>
          <div className="es-divider" style={{ marginTop: '1rem' }} />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '2rem' }}>
          {storyPoints.map((point, idx) => (
            <div key={idx} className="es-story-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2.4rem', fontWeight: 400, color: '#CBB27A', lineHeight: 1 }}>0{idx + 1}</span>
                <div style={{ height: '1px', flex: 1, background: '#E8DFD0' }} />
              </div>
              <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '11px', letterSpacing: '0.35em', textTransform: 'uppercase', color: '#9B8B62', marginBottom: '1rem', fontWeight: 600 }}>{point.title}</h3>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '13px', color: '#5E5340', lineHeight: 1.8, fontWeight: 400 }}>{point.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ========== 5. FOUNDER STORY + SHOP IMAGES ========== */}
      <div style={{ background: '#F8F5EF', borderTop: '1px solid #EBE2D5', borderBottom: '1px solid #EBE2D5', margin: '0 0 7rem', padding: '6rem 1.5rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

          {/* Founder Story — full width text */}
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <p className="es-tag" style={{ marginBottom: '1rem' }}>The Face Behind Eye Studio</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: 400, fontStyle: 'italic', color: '#2C2418', margin: '0.5rem 0 0' }}>
              Daniyal Nadeem
            </h2>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '10px', letterSpacing: '0.35em', color: '#CBB27A', textTransform: 'uppercase', fontWeight: 500, margin: '0.6rem 0 0' }}>
              Founder & Creative Director
            </p>
            <div className="es-divider" style={{ marginTop: '1.5rem' }} />
          </div>

          <div style={{ maxWidth: '820px', margin: '0 auto 5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2.5rem' }}>
            <div>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '14px', color: '#5E5340', lineHeight: 1.9, fontWeight: 400, marginBottom: '1.4rem' }}>
                Eye Studio was born from Daniyal's lifelong obsession with the art of eyewear — the belief that the right frame doesn't just correct your vision, it tells your story. Growing up in Karachi, he saw a gap between world-class eyewear he admired internationally and what was available locally.
              </p>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '14px', color: '#5E5340', lineHeight: 1.9, fontWeight: 400 }}>
                After years of studying optical craftsmanship and building relationships with the finest manufacturers across Japan and Italy, Daniyal founded Eye Studio in 2026 — bringing luxury eyewear directly to Karachi's discerning customers, without compromise.
              </p>
            </div>
            <div>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '14px', color: '#5E5340', lineHeight: 1.9, fontWeight: 400, marginBottom: '1.4rem' }}>
                Every frame on our shelves passes through Daniyal's personal selection process. He visits the studio daily, assists customers himself, and believes that great service is as important as a great product.
              </p>
              <blockquote style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.2rem', fontStyle: 'italic', color: '#7A6540', lineHeight: 1.65, borderLeft: '2px solid #CBB27A', paddingLeft: '1.2rem', margin: '1.5rem 0 0' }}>
                "Eyewear is the one accessory you wear every single day. It deserves to be chosen with intention — and crafted to last a lifetime."
              </blockquote>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '10px', letterSpacing: '0.3em', color: '#9B8B62', textTransform: 'uppercase', marginTop: '1rem', fontWeight: 500 }}>— Daniyal Nadeem</p>
            </div>
          </div>

          {/* Shop Images Grid */}
          <div>
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <p className="es-tag" style={{ marginBottom: '0.6rem' }}>The Studio</p>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', fontWeight: 400, fontStyle: 'italic', color: '#2C2418', margin: 0 }}>Inside Our Store</h3>
              <div className="es-divider" style={{ marginTop: '1rem' }} />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px' }}>
              {shopImages.map((shop, i) => (
                <div key={i} className="shop-item">
                  <span className="shop-num">{shop.num}</span>
                  <img src={shop.url} alt={shop.label} />
                  <div className="shop-overlay"><span>{shop.label}</span></div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ========== 6. COLLECTIONS ========== */}
      <div style={{ maxWidth: '1100px', margin: '0 auto 7rem', padding: '0 1.5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <p className="es-tag" style={{ marginBottom: '0.8rem' }}>What We Offer</p>
          <h2 style={{ fontSize: 'clamp(1.8rem, 2.8vw, 2.6rem)', fontWeight: 400, fontStyle: 'italic', color: '#2C2418', margin: 0 }}>Our Collections</h2>
          <div className="es-divider" />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: '2rem' }}>
          {products.map((product, idx) => (
            <div key={idx} style={{ textAlign: 'center', padding: '2.2rem 1.5rem', background: '#FFFFFF', borderRadius: '24px', border: '1px solid #EFE8DD', transition: 'all 0.3s' }}>
              <div style={{ color: '#CBB27A', marginBottom: '1.5rem', display: 'inline-block' }}>
                {product.icon}
              </div>
              <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '11px', letterSpacing: '0.35em', textTransform: 'uppercase', color: '#6B5D48', marginBottom: '1rem', fontWeight: 600 }}>{product.title}</h3>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '13px', color: '#8A7A5C', lineHeight: 1.8 }}>{product.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ========== 7. CORE VALUES ========== */}
      <div style={{ borderTop: '1px solid #EBE2D5', borderBottom: '1px solid #EBE2D5', background: '#FCFAF5', padding: '5rem 1.5rem', marginBottom: '7rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p className="es-tag">Our Ethos</p>
            <h2 style={{ fontSize: 'clamp(1.8rem, 2.8vw, 2.4rem)', fontWeight: 400, fontStyle: 'italic', color: '#2C2418', marginTop: '0.5rem' }}>Guiding Principles</h2>
            <div className="es-divider" />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '2rem' }}>
            {values.map((val, idx) => (
              <div key={idx} className="es-value-item">
                <div style={{ color: '#CBB27A', marginBottom: '1.2rem', display: 'flex', justifyContent: 'center' }}>{val.icon}</div>
                <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '10px', letterSpacing: '0.35em', textTransform: 'uppercase', color: '#6B5D48', marginBottom: '1rem', fontWeight: 600 }}>{val.title}</h3>
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '12px', color: '#8A7A5C', lineHeight: 1.8, fontWeight: 400 }}>{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ========== 8. PHILOSOPHY QUOTE ========== */}
      <div style={{ maxWidth: '750px', margin: '0 auto 7rem', padding: '0 2rem', textAlign: 'center' }}>
        <span style={{ fontSize: '5rem', fontFamily: 'Georgia, serif', color: '#E8DDD0', lineHeight: 1, display: 'block', marginBottom: '-1.5rem' }}>"</span>
        <blockquote style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', fontWeight: 400, fontStyle: 'italic', color: '#4A3F2C', lineHeight: 1.6, margin: '0 0 2rem', fontFamily: "'Cormorant Garamond', serif" }}>
          Great eyewear is more than a visual aid — it's a statement of style and sophistication. Your frames should enhance not just your vision, but your entire presence.
        </blockquote>
        <div className="es-divider" />
        <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '10px', letterSpacing: '0.4em', color: '#9B8B62', textTransform: 'uppercase', marginTop: '1.5rem', fontWeight: 500 }}>Daniyal Nadeem · Founder</p>
      </div>

      {/* ========== 9. STATS SECTION ========== */}
      <div style={{ background: '#F8F5EF', padding: '5rem 1.5rem', marginBottom: '7rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '2rem', textAlign: 'center' }}>
          {[
            { val: 'Premium', sub: 'Materials Used' },
            { val: '100%', sub: 'Authentic' },
            { val: '2026', sub: 'Founded' },
            { val: 'Luxury', sub: 'Craftsmanship' },
          ].map((s, i) => (
            <div key={i} className="stat-card">
              <div style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 400, fontStyle: 'italic', color: '#CBB27A', marginBottom: '0.6rem', fontFamily: "'Cormorant Garamond', serif" }}>{s.val}</div>
              <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '9px', letterSpacing: '0.4em', textTransform: 'uppercase', color: '#8A7A5C', fontWeight: 500 }}>{s.sub}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ========== 10. VISION ========== */}
      <div style={{ maxWidth: '720px', margin: '0 auto 7rem', padding: '0 2rem', textAlign: 'center' }}>
        <p className="es-tag" style={{ marginBottom: '1rem' }}>Looking Ahead</p>
        <h2 style={{ fontSize: 'clamp(1.8rem, 2.8vw, 2.5rem)', fontWeight: 400, fontStyle: 'italic', color: '#2C2418', margin: '0 0 1.2rem' }}>Our Vision</h2>
        <div className="es-divider" />
        <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '14px', color: '#6B5D48', lineHeight: 1.9, fontWeight: 400, marginTop: '2rem' }}>
          To become the leading luxury eyewear brand in South Asia, recognized for our commitment to craftsmanship, innovation, and timeless design. We envision a world where everyone experiences the perfect blend of style, comfort, and visual excellence.
        </p>
      </div>

      {/* ========== 11. FEATURE IMAGE ========== */}
      <div style={{ maxWidth: '1100px', margin: '0 auto 7rem', padding: '0 1.5rem' }}>
        <div style={{ position: 'relative', overflow: 'hidden', height: '480px', borderRadius: '28px' }}>
          <img
            src="https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=1400&q=85"
            alt="Eye Studio craftsmanship"
            style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.7) sepia(0.05)' }}
          />
          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', background: 'rgba(252,250,245,0.15)' }}>
            <p className="es-tag" style={{ marginBottom: '1rem', color: '#FCFAF5', background: 'rgba(0,0,0,0.3)', padding: '0.3rem 1rem', borderRadius: '30px' }}>Karachi, Pakistan</p>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 400, fontStyle: 'italic', color: '#FFFFFF', margin: 0, lineHeight: 1.2, textShadow: '0 2px 10px rgba(0,0,0,0.2)' }}>
              Crafted for<br />Those Who See Differently
            </h2>
          </div>
        </div>
      </div>

      {/* ========== 12. CTA ========== */}
      <div style={{ textAlign: 'center', padding: '4rem 2rem 7rem', borderTop: '1px solid #EBE2D5', background: '#FCFAF5' }}>
        <p className="es-tag" style={{ marginBottom: '1rem' }}>Begin Your Journey</p>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, fontStyle: 'italic', color: '#2C2418', margin: '0 0 1rem' }}>Find Your Perfect Frame</h2>
        <div className="es-divider" />
        <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '12px', color: '#8A7A5C', letterSpacing: '0.2em', textTransform: 'uppercase', margin: '2rem auto 2.5rem', maxWidth: '460px', lineHeight: 2, fontWeight: 500 }}>
          Explore our luxury collections, try frames virtually, and discover eyewear that defines your style
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.2rem' }}>
          <Link to="/products" className="es-cta-btn-primary">Explore Collection</Link>
          <Link to="/contact" className="es-cta-btn-outline">Order via WhatsApp</Link>
        </div>
        <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '11px', color: '#B8A77D', marginTop: '2rem', letterSpacing: '0.2em', fontWeight: 400 }}>Cash on Delivery available · Karachi & nationwide</p>
      </div>
    </div>
  );
};

// Helper Sun icon
const Sun = ({ size, strokeWidth }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4"/>
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
  </svg>
);

export default About;