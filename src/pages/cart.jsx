// // pages/Cart.jsx
// import { useCart } from '../context/CartContext';
// import { Link } from 'react-router-dom';
// import { useState } from 'react';
// import { Minus, Plus, Trash2, ArrowLeft, ShoppingBag, Eye } from 'lucide-react';

// const Cart = () => {
//   const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();
//   const [promoCode, setPromoCode] = useState('');
//   const [promoApplied, setPromoApplied] = useState(false);
//   const [promoError, setPromoError] = useState('');
//   const [showPrescription, setShowPrescription] = useState({});

//   // Helper function to get image
//   const getItemImage = (item) => {
//     if (item.mainImage) return item.mainImage;
//     if (item.image) return item.image;
//     if (item.variant?.image) return item.variant.image;
//     if (item.variants?.[0]?.image) return item.variants[0].image;
//     return '/placeholder.jpg';
//   };

//   // Helper function to get item price
//   const getItemPrice = (item) => {
//     if (item.price) return item.price;
//     if (item.discountPrice) return parseFloat(item.discountPrice);
//     return 0;
//   };

//   // Format price
//   const formatPrice = (price) => {
//     return new Intl.NumberFormat('en-PK', {
//       style: 'currency',
//       currency: 'PKR',
//       minimumFractionDigits: 0,
//       maximumFractionDigits: 0
//     }).format(price);
//   };

//   // Check if item has prescription
//   const hasPrescription = (item) => {
//     return item.prescription && Object.values(item.prescription).some(v => v);
//   };

//   // Get prescription summary
//   const getPrescriptionSummary = (prescription) => {
//     if (!prescription) return null;
//     const parts = [];
//     if (prescription.sphereLeft || prescription.sphereRight) {
//       parts.push(`SPH: L:${prescription.sphereLeft || '0'} R:${prescription.sphereRight || '0'}`);
//     }
//     if (prescription.cylinderLeft || prescription.cylinderRight) {
//       parts.push(`CYL: L:${prescription.cylinderLeft || '0'} R:${prescription.cylinderRight || '0'}`);
//     }
//     if (prescription.axisLeft || prescription.axisRight) {
//       parts.push(`AXIS: L:${prescription.axisLeft || '0'}° R:${prescription.axisRight || '0'}°`);
//     }
//     if (prescription.pd) {
//       parts.push(`PD: ${prescription.pd}mm`);
//     }
//     return parts.join(' | ');
//   };

//   const shippingCost = cartTotal > 5000 ? 0 : 200;
//   const discountedTotal = promoApplied ? cartTotal * 0.9 : cartTotal;
//   const grandTotal = discountedTotal + shippingCost;

//   const handlePromoApply = () => {
//     if (promoCode.toUpperCase() === 'EYESTUDIO10') {
//       setPromoApplied(true);
//       setPromoError('');
//     } else {
//       setPromoError('Invalid invitation code');
//     }
//   };

//   const togglePrescription = (itemId) => {
//     setShowPrescription(prev => ({
//       ...prev,
//       [itemId]: !prev[itemId]
//     }));
//   };

//   if (cartItems.length === 0) {
//     return (
//       <div className="bg-[#faf9f7] min-h-screen flex items-center justify-center">
//         <div className="text-center px-4">
//           <ShoppingBag size={48} strokeWidth={1} className="mx-auto mb-6 text-gray-300" />
//           <h2 className="text-2xl font-serif italic mb-4 uppercase tracking-widest">Your Bag is Empty</h2>
//           <p className="text-[10px] tracking-[0.2em] uppercase text-gray-400 mb-8">Find your perfect frame today</p>
//           <Link 
//             to="/products" 
//             className="inline-block bg-black text-white px-10 py-4 text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-gray-800 transition"
//           >
//             Explore Collection
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-[#FCFCFC] min-h-screen text-black font-sans pb-20">
//       {/* 1. Minimal Header */}
//       <div className="bg-white border-b border-gray-100">
//         <div className="container mx-auto px-4 py-16 text-center">
//           <h1 className="text-3xl font-serif italic tracking-widest uppercase">Shopping Bag</h1>
//           <p className="text-[10px] tracking-[0.3em] uppercase text-gray-400 mt-4">
//             {cartItems.length} {cartItems.length === 1 ? 'Selection' : 'Selections'}
//           </p>
//         </div>
//       </div>

//       <div className="container mx-auto px-4 py-12">
//         <div className="flex flex-col lg:flex-row gap-16">
//           {/* 2. Items List */}
//           <div className="lg:w-2/3">
//             <div className="hidden md:grid grid-cols-12 gap-4 pb-4 border-b border-gray-100 text-[10px] tracking-[0.2em] font-bold uppercase text-gray-400">
//               <div className="col-span-7">Product</div>
//               <div className="col-span-2 text-center">Price</div>
//               <div className="col-span-3 text-right">Subtotal</div>
//             </div>

//             <div className="divide-y divide-gray-100">
//               {cartItems.map(item => {
//                 const itemPrice = getItemPrice(item);
//                 const hasPresc = hasPrescription(item);
//                 const prescSummary = getPrescriptionSummary(item.prescription);
//                 const imageUrl = getItemImage(item);
                
//                 return (
//                   <div key={item.cartItemId || item.id} className="py-8 group">
//                     <div className="grid grid-cols-12 gap-4 items-start">
//                       {/* Image & Detail */}
//                       <div className="col-span-12 md:col-span-7 flex items-start gap-6">
//                         <div className="w-24 h-32 bg-gray-50 overflow-hidden shrink-0">
//                           <img 
//                             src={imageUrl} 
//                             alt={item.name} 
//                             className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
//                             onError={(e) => {
//                               e.target.src = '/placeholder.jpg';
//                             }}
//                           />
//                         </div>
//                         <div className="flex-1">
//                           <h3 className="text-xs font-bold tracking-widest uppercase mb-1">{item.name}</h3>
//                           <p className="text-[10px] text-gray-400 uppercase tracking-tighter">
//                             {item.category || 'Unisex'}
//                           </p>
                          
//                           {/* Variant/Color info */}
//                           {item.variant?.colorName && (
//                             <p className="text-[9px] text-gray-400 mt-1">
//                               Color: {item.variant.colorName}
//                             </p>
//                           )}
                          
//                           {/* Shape info */}
//                           {item.shape && (
//                             <p className="text-[9px] text-gray-400">
//                               Shape: {item.shape}
//                             </p>
//                           )}

//                           {/* Prescription Badge & Toggle */}
//                           {hasPresc && (
//                             <div className="mt-2">
//                               <button
//                                 onClick={() => togglePrescription(item.cartItemId || item.id)}
//                                 className="flex items-center gap-1 text-[9px] bg-blue-50 text-blue-700 px-2 py-1 rounded hover:bg-blue-100 transition"
//                               >
//                                 <Eye size={10} />
//                                 {showPrescription[item.cartItemId || item.id] ? 'Hide Prescription' : 'View Prescription'}
//                               </button>
                              
//                               {showPrescription[item.cartItemId || item.id] && (
//                                 <div className="mt-2 p-2 bg-gray-50 text-[9px] rounded">
//                                   <p className="font-semibold mb-1">👓 Prescription Details:</p>
//                                   <div className="space-y-0.5 text-gray-600">
//                                     {item.prescription.sphereLeft && (
//                                       <div>Sphere (Left): {item.prescription.sphereLeft}</div>
//                                     )}
//                                     {item.prescription.sphereRight && (
//                                       <div>Sphere (Right): {item.prescription.sphereRight}</div>
//                                     )}
//                                     {item.prescription.cylinderLeft && (
//                                       <div>Cylinder (Left): {item.prescription.cylinderLeft}</div>
//                                     )}
//                                     {item.prescription.cylinderRight && (
//                                       <div>Cylinder (Right): {item.prescription.cylinderRight}</div>
//                                     )}
//                                     {item.prescription.axisLeft && (
//                                       <div>Axis (Left): {item.prescription.axisLeft}°</div>
//                                     )}
//                                     {item.prescription.axisRight && (
//                                       <div>Axis (Right): {item.prescription.axisRight}°</div>
//                                     )}
//                                     {item.prescription.pd && (
//                                       <div>PD: {item.prescription.pd}mm</div>
//                                     )}
//                                   </div>
//                                 </div>
//                               )}
//                             </div>
//                           )}
                          
//                           {/* Quantity Controls */}
//                           <div className="flex items-center border border-gray-200 w-fit mt-3">
//                             <button 
//                               onClick={() => updateQuantity(item.cartItemId || item.id, Math.max(1, item.quantity - 1))}
//                               className="p-2 hover:bg-gray-50 transition"
//                             >
//                               <Minus size={12} />
//                             </button>
//                             <span className="px-4 text-[11px] font-bold">{item.quantity}</span>
//                             <button 
//                               onClick={() => updateQuantity(item.cartItemId || item.id, item.quantity + 1)}
//                               className="p-2 hover:bg-gray-50 transition"
//                             >
//                               <Plus size={12} />
//                             </button>
//                           </div>
//                         </div>
//                       </div>

//                       {/* Desktop Price */}
//                       <div className="hidden md:block md:col-span-2 text-center">
//                         <p className="text-xs font-serif italic text-gray-500">
//                           {formatPrice(itemPrice)}
//                         </p>
//                         {hasPresc && (
//                           <p className="text-[8px] text-blue-600 mt-1">+Prescription</p>
//                         )}
//                       </div>

//                       {/* Total & Remove */}
//                       <div className="col-span-12 md:col-span-3 flex md:flex-col justify-between items-center md:items-end gap-4">
//                         <button 
//                           onClick={() => removeFromCart(item.cartItemId || item.id)}
//                           className="text-black hover:text-gray-600 transition order-2 md:order-1"
//                         >
//                           <Trash2 size={18} strokeWidth={2} />
//                         </button>
//                         <p className="font-serif italic text-sm order-1 md:order-2">
//                           {formatPrice(itemPrice * item.quantity)}
//                         </p>
//                       </div>
//                     </div>
                    
//                     {/* Mobile Prescription Summary */}
//                     {hasPresc && (
//                       <div className="mt-3 pt-3 border-t border-gray-100 md:hidden">
//                         <p className="text-[8px] text-gray-500 uppercase tracking-wider">Prescription</p>
//                         <p className="text-[9px] text-gray-600">{prescSummary}</p>
//                       </div>
//                     )}
//                   </div>
//                 );
//               })}
//             </div>

//             <Link to="/products" className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase mt-10 hover:text-gray-500 transition">
//               <ArrowLeft size={14} /> Back to Collection
//             </Link>
//           </div>

//           {/* 3. Summary Section */}
//           <div className="lg:w-1/3">
//             <div className="bg-white border border-gray-100 p-8 sticky top-10">
//               <h3 className="text-xs tracking-[0.3em] font-bold uppercase mb-8">Summary</h3>
              
//               {/* Promo Code Boutique Style */}
//               <div className="mb-10">
//                 <div className="flex border-b border-gray-200 focus-within:border-black transition-colors">
//                   <input
//                     type="text"
//                     value={promoCode}
//                     onChange={(e) => setPromoCode(e.target.value)}
//                     placeholder="INVITATION CODE"
//                     className="flex-1 bg-transparent py-2 text-[10px] tracking-widest uppercase outline-none"
//                   />
//                   <button
//                     onClick={handlePromoApply}
//                     className="text-[10px] font-bold tracking-widest uppercase px-4 hover:text-gray-500 transition"
//                   >
//                     Apply
//                   </button>
//                 </div>
//                 {promoError && <p className="text-red-500 text-[9px] tracking-widest uppercase mt-2">{promoError}</p>}
//                 {promoApplied && <p className="text-gray-400 text-[9px] tracking-widest uppercase mt-2">Privilege Discount Applied</p>}
//               </div>

//               {/* Breakdown */}
//               <div className="space-y-4 text-[10px] tracking-[0.2em] uppercase border-b border-gray-50 pb-8 mb-8">
//                 <div className="flex justify-between">
//                   <span className="text-gray-400">Subtotal</span>
//                   <span>{formatPrice(cartTotal)}</span>
//                 </div>
//                 {promoApplied && (
//                   <div className="flex justify-between text-gray-400 italic">
//                     <span>Discount (10%)</span>
//                     <span>-{formatPrice(cartTotal * 0.1)}</span>
//                   </div>
//                 )}
//                 <div className="flex justify-between">
//                   <span className="text-gray-400">Delivery</span>
//                   <span>{shippingCost === 0 ? 'Complimentary' : formatPrice(shippingCost)}</span>
//                 </div>
//                 {shippingCost > 0 && (
//                   <p className="text-[8px] italic text-gray-400 normal-case tracking-normal">
//                     Complimentary delivery for orders above Rs.5,000
//                   </p>
//                 )}
//               </div>

//               <div className="flex justify-between items-baseline mb-10">
//                 <span className="text-[10px] tracking-[0.3em] font-bold uppercase">Estimated Total</span>
//                 <span className="text-xl font-serif italic">
//                   {formatPrice(grandTotal)}
//                 </span>
//               </div>

//               <Link
//                 to="/checkout"
//                 className="block w-full bg-black text-white text-center py-5 text-[11px] font-bold tracking-[0.4em] uppercase hover:bg-gray-900 transition shadow-xl"
//               >
//                 Proceed to Checkout
//               </Link>

//               {/* Trust Badges */}
//               <div className="mt-10 flex justify-center gap-6 opacity-20 grayscale">
//                 <span className="text-xs uppercase tracking-tighter font-bold">Secure</span>
//                 <span className="text-xs uppercase tracking-tighter font-bold">Authentic</span>
//                 <span className="text-xs uppercase tracking-tighter font-bold">Premium</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;


















// pages/Cart.jsx — Enhanced UI (logic unchanged)
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Minus, Plus, Trash2, ArrowLeft, ShoppingBag, Eye, Tag, ChevronRight } from 'lucide-react';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoError, setPromoError] = useState('');
  const [showPrescription, setShowPrescription] = useState({});

  const getItemImage = (item) => {
    if (item.mainImage) return item.mainImage;
    if (item.image) return item.image;
    if (item.variant?.image) return item.variant.image;
    if (item.variants?.[0]?.image) return item.variants[0].image;
    return '/placeholder.jpg';
  };

  const getItemPrice = (item) => {
    if (item.price) return item.price;
    if (item.discountPrice) return parseFloat(item.discountPrice);
    return 0;
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-PK', {
      style: 'currency',
      currency: 'PKR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const hasPrescription = (item) =>
    item.prescription && Object.values(item.prescription).some((v) => v);

  const getPrescriptionSummary = (prescription) => {
    if (!prescription) return null;
    const parts = [];
    if (prescription.sphereLeft || prescription.sphereRight)
      parts.push(`SPH: L:${prescription.sphereLeft || '0'} R:${prescription.sphereRight || '0'}`);
    if (prescription.cylinderLeft || prescription.cylinderRight)
      parts.push(`CYL: L:${prescription.cylinderLeft || '0'} R:${prescription.cylinderRight || '0'}`);
    if (prescription.axisLeft || prescription.axisRight)
      parts.push(`AXIS: L:${prescription.axisLeft || '0'}° R:${prescription.axisRight || '0'}°`);
    if (prescription.pd) parts.push(`PD: ${prescription.pd}mm`);
    return parts.join(' · ');
  };

  const shippingCost = cartTotal > 5000 ? 0 : 200;
  const discountedTotal = promoApplied ? cartTotal * 0.9 : cartTotal;
  const grandTotal = discountedTotal + shippingCost;

  const handlePromoApply = () => {
    if (promoCode.toUpperCase() === 'EYESTUDIO10') {
      setPromoApplied(true);
      setPromoError('');
    } else {
      setPromoError('Invalid invitation code');
    }
  };

  const togglePrescription = (itemId) => {
    setShowPrescription((prev) => ({ ...prev, [itemId]: !prev[itemId] }));
  };

  /* ── EMPTY STATE ── */
  if (cartItems.length === 0) {
    return (
      <div style={s.page}>
        <style>{fonts + keyframes}</style>
        <div style={s.emptyWrap}>
          <div style={s.emptyIconRing}>
            <ShoppingBag size={36} color="#CBB27A" strokeWidth={1.2} />
          </div>
          <h2 style={s.emptyTitle}>Your Bag is Empty</h2>
          <p style={s.emptySub}>Discover frames crafted for the discerning eye</p>
          <Link to="/products" style={s.emptyBtn}>
            Explore Collection <ChevronRight size={14} style={{ marginLeft: 6 }} />
          </Link>
        </div>
      </div>
    );
  }

  /* ── MAIN CART ── */
  return (
    <div style={s.page}>
      <style>{fonts + keyframes}</style>

      {/* ── HEADER ── */}
      <div style={s.header}>
        <div style={s.headerInner}>
          <Link to="/products" style={s.backLink}>
            <ArrowLeft size={14} style={{ marginRight: 6 }} />
            Continue Shopping
          </Link>
          <div style={s.headerCenter}>
            <p style={s.headerEyebrow}>Eye Studio</p>
            <h1 style={s.headerTitle}>Shopping Bag</h1>
          </div>
          <div style={s.headerCount}>
            {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}
          </div>
        </div>
        {/* progress bar */}
        <div style={s.progressWrap}>
          <div style={{ ...s.progressFill, width: cartTotal > 5000 ? '100%' : `${Math.min((cartTotal / 5000) * 100, 100)}%` }} />
        </div>
        {cartTotal < 5000 && (
          <p style={s.progressLabel}>
            Add {formatPrice(5000 - cartTotal)} more for <strong>free delivery</strong>
          </p>
        )}
        {cartTotal >= 5000 && (
          <p style={{ ...s.progressLabel, color: '#7A9E7E' }}>🎉 You've unlocked free delivery!</p>
        )}
      </div>

      {/* ── BODY ── */}
      <div style={s.body}>

        {/* LEFT: Items */}
        <div style={s.itemsCol}>
          {cartItems.map((item, idx) => {
            const itemPrice = getItemPrice(item);
            const hasPresc = hasPrescription(item);
            const itemId = item.cartItemId || item.id;
            const imageUrl = getItemImage(item);
            const isExpanded = showPrescription[itemId];

            return (
              <div
                key={itemId}
                style={{ ...s.itemCard, animationDelay: `${idx * 60}ms` }}
              >
                {/* Image */}
                <div style={s.imgWrap}>
                  <img
                    src={imageUrl}
                    alt={item.name}
                    style={s.img}
                    onError={(e) => { e.target.src = '/placeholder.jpg'; }}
                  />
                  {hasPresc && (
                    <div style={s.rxBadge}>Rx</div>
                  )}
                </div>

                {/* Info */}
                <div style={s.itemInfo}>
                  <div style={s.itemTop}>
                    <div>
                      <h3 style={s.itemName}>{item.name}</h3>
                      <p style={s.itemMeta}>
                        {item.category || 'Unisex'}
                        {item.variant?.colorName && ` · ${item.variant.colorName}`}
                        {item.shape && ` · ${item.shape}`}
                      </p>
                    </div>
                    <button
                      onClick={() => removeFromCart(itemId)}
                      style={s.removeBtn}
                      onMouseEnter={e => e.currentTarget.style.color = '#C0392B'}
                      onMouseLeave={e => e.currentTarget.style.color = '#C8B99A'}
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>

                  {/* Prescription toggle */}
                  {hasPresc && (
                    <div style={{ marginBottom: 10 }}>
                      <button
                        onClick={() => togglePrescription(itemId)}
                        style={s.rxToggle}
                      >
                        <Eye size={11} style={{ marginRight: 5 }} />
                        {isExpanded ? 'Hide Prescription' : 'View Prescription'}
                      </button>
                      {isExpanded && (
                        <div style={s.rxDetails}>
                          <p style={s.rxText}>{getPrescriptionSummary(item.prescription)}</p>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Bottom row: qty + price */}
                  <div style={s.itemBottom}>
                    {/* Qty stepper */}
                    <div style={s.stepper}>
                      <button
                        style={s.stepBtn}
                        onClick={() => updateQuantity(itemId, Math.max(1, item.quantity - 1))}
                        onMouseEnter={e => e.currentTarget.style.background = '#EFE8DD'}
                        onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                      >
                        <Minus size={11} />
                      </button>
                      <span style={s.stepQty}>{item.quantity}</span>
                      <button
                        style={s.stepBtn}
                        onClick={() => updateQuantity(itemId, item.quantity + 1)}
                        onMouseEnter={e => e.currentTarget.style.background = '#EFE8DD'}
                        onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                      >
                        <Plus size={11} />
                      </button>
                    </div>

                    {/* Price */}
                    <div style={{ textAlign: 'right' }}>
                      <p style={s.itemTotal}>{formatPrice(itemPrice * item.quantity)}</p>
                      {item.quantity > 1 && (
                        <p style={s.itemUnit}>{formatPrice(itemPrice)} each</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* RIGHT: Summary */}
        <div style={s.summaryCol}>
          <div style={s.summaryCard}>
            <p style={s.summaryEyebrow}>Order Summary</p>

            {/* Promo code */}
            <div style={s.promoWrap}>
              <Tag size={13} color="#CBB27A" style={{ flexShrink: 0 }} />
              <input
                type="text"
                placeholder="Invitation code"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                style={s.promoInput}
                onKeyDown={(e) => e.key === 'Enter' && handlePromoApply()}
              />
              <button
                onClick={handlePromoApply}
                style={s.promoBtn}
                onMouseEnter={e => e.currentTarget.style.background = '#2C2418'}
                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
              >
                Apply
              </button>
            </div>
            {promoError && <p style={s.promoError}>{promoError}</p>}
            {promoApplied && <p style={s.promoSuccess}>✓ 10% privilege discount applied</p>}

            {/* Divider */}
            <div style={s.divider} />

            {/* Line items */}
            <div style={s.lineItems}>
              <div style={s.lineRow}>
                <span style={s.lineLabel}>Subtotal</span>
                <span style={s.lineValue}>{formatPrice(cartTotal)}</span>
              </div>
              {promoApplied && (
                <div style={s.lineRow}>
                  <span style={{ ...s.lineLabel, color: '#7A9E7E' }}>Discount (10%)</span>
                  <span style={{ ...s.lineValue, color: '#7A9E7E' }}>−{formatPrice(cartTotal * 0.1)}</span>
                </div>
              )}
              <div style={s.lineRow}>
                <span style={s.lineLabel}>Delivery</span>
                <span style={s.lineValue}>
                  {shippingCost === 0
                    ? <span style={{ color: '#7A9E7E', fontStyle: 'italic' }}>Complimentary</span>
                    : formatPrice(shippingCost)}
                </span>
              </div>
            </div>

            <div style={s.divider} />

            {/* Total */}
            <div style={s.totalRow}>
              <span style={s.totalLabel}>Total</span>
              <span style={s.totalValue}>{formatPrice(grandTotal)}</span>
            </div>

            {/* CTA */}
            <Link
              to="/checkout"
              style={s.checkoutBtn}
              onMouseEnter={e => e.currentTarget.style.background = '#3D3020'}
              onMouseLeave={e => e.currentTarget.style.background = '#2C2418'}
            >
              Proceed to Checkout
              <ChevronRight size={14} style={{ marginLeft: 6 }} />
            </Link>

            {/* Trust row */}
            <div style={s.trustRow}>
              {['Secure', 'Authentic', 'Premium'].map((t) => (
                <span key={t} style={s.trustItem}>{t}</span>
              ))}
            </div>

            {/* COD note */}
            <p style={s.codNote}>Cash on Delivery available · Karachi & nationwide</p>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ─── STYLES ─── */
const gold = '#CBB27A';
const cream = '#FCFAF5';
const ink = '#2C2418';
const muted = '#8A7A5C';
const border = '#EBE2D5';

const fonts = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400;1,500&family=Montserrat:wght@300;400;500;600&display=swap');
`;

const keyframes = `
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0); }
  }
`;

const s = {
  page: {
    background: cream,
    minHeight: '100vh',
    fontFamily: "'Montserrat', sans-serif",
    color: ink,
  },

  /* EMPTY */
  emptyWrap: {
    display: 'flex', flexDirection: 'column', alignItems: 'center',
    justifyContent: 'center', minHeight: '80vh', gap: 16, padding: '2rem',
    textAlign: 'center',
  },
  emptyIconRing: {
    width: 88, height: 88, borderRadius: '50%',
    border: `1px solid ${border}`, background: '#F8F5EF',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    marginBottom: 8,
  },
  emptyTitle: {
    fontFamily: "'Cormorant Garamond', serif", fontSize: '2rem',
    fontWeight: 400, fontStyle: 'italic', color: ink, margin: 0,
  },
  emptySub: {
    fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase',
    color: muted, margin: 0,
  },
  emptyBtn: {
    display: 'inline-flex', alignItems: 'center',
    marginTop: 16, background: ink, color: cream,
    padding: '13px 32px', fontSize: 10, letterSpacing: '0.35em',
    textTransform: 'uppercase', fontWeight: 600, textDecoration: 'none',
    borderRadius: 40, transition: 'background 0.2s',
  },

  /* HEADER */
  header: {
    borderBottom: `1px solid ${border}`,
    background: '#FEFCF8',
    padding: '2.5rem 2rem 1rem',
    textAlign: 'center',
  },
  headerInner: {
    maxWidth: 1100, margin: '0 auto',
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    marginBottom: '1.5rem',
  },
  backLink: {
    display: 'flex', alignItems: 'center',
    fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase',
    color: muted, textDecoration: 'none', fontWeight: 500,
    transition: 'color 0.2s',
  },
  headerCenter: { textAlign: 'center' },
  headerEyebrow: {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: 9, letterSpacing: '0.5em', textTransform: 'uppercase',
    color: gold, fontWeight: 500, margin: '0 0 4px',
  },
  headerTitle: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
    fontWeight: 400, fontStyle: 'italic', color: ink, margin: 0,
  },
  headerCount: {
    fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase',
    color: muted, fontWeight: 500,
  },
  progressWrap: {
    maxWidth: 480, margin: '0 auto 8px',
    height: 2, background: border, borderRadius: 2, overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    background: `linear-gradient(90deg, ${gold}, #E8C96A)`,
    transition: 'width 0.6s ease',
    borderRadius: 2,
  },
  progressLabel: {
    fontSize: 11, color: muted, letterSpacing: '0.05em',
    marginTop: 4, marginBottom: 0,
  },

  /* BODY */
  body: {
    maxWidth: 1100, margin: '0 auto',
    display: 'flex', flexWrap: 'wrap', gap: '2rem',
    padding: '2.5rem 1.5rem',
    alignItems: 'flex-start',
  },
  itemsCol: {
    flex: '1 1 520px',
    display: 'flex', flexDirection: 'column', gap: '1px',
    background: border,
    border: `1px solid ${border}`,
    borderRadius: 20,
    overflow: 'hidden',
  },

  /* ITEM CARD */
  itemCard: {
    display: 'flex', gap: 0,
    background: '#FEFCF8',
    animation: 'fadeUp 0.4s ease both',
  },
  imgWrap: {
    width: 120, flexShrink: 0, position: 'relative',
    background: '#F5F0E8',
  },
  img: {
    width: '100%', height: '100%', objectFit: 'cover',
    display: 'block', minHeight: 140,
  },
  rxBadge: {
    position: 'absolute', top: 8, left: 8,
    background: ink, color: cream,
    fontSize: 9, fontWeight: 700, letterSpacing: '0.1em',
    padding: '2px 7px', borderRadius: 20,
  },
  itemInfo: {
    flex: 1, padding: '1.2rem 1.2rem 1.2rem 1rem',
    display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
  },
  itemTop: {
    display: 'flex', justifyContent: 'space-between',
    alignItems: 'flex-start', marginBottom: 8,
  },
  itemName: {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: 12, fontWeight: 600,
    letterSpacing: '0.12em', textTransform: 'uppercase',
    color: ink, margin: '0 0 4px',
  },
  itemMeta: {
    fontSize: 10, color: muted, letterSpacing: '0.08em',
    textTransform: 'uppercase', margin: 0,
  },
  removeBtn: {
    background: 'none', border: 'none', cursor: 'pointer',
    color: '#C8B99A', padding: 4, marginTop: -2,
    transition: 'color 0.2s', lineHeight: 1,
  },

  /* Prescription */
  rxToggle: {
    display: 'inline-flex', alignItems: 'center',
    fontSize: 9, letterSpacing: '0.15em', textTransform: 'uppercase',
    color: '#7A8B6E', fontWeight: 500,
    background: '#EEF5EC', border: 'none',
    padding: '4px 10px', borderRadius: 20, cursor: 'pointer',
  },
  rxDetails: {
    marginTop: 6, padding: '8px 10px',
    background: '#F8FBF7', borderLeft: '2px solid #A8C4A0',
    borderRadius: '0 6px 6px 0',
  },
  rxText: {
    fontSize: 10, color: '#5A7A52', margin: 0, letterSpacing: '0.05em',
  },

  /* Item bottom */
  itemBottom: {
    display: 'flex', alignItems: 'center',
    justifyContent: 'space-between', marginTop: 10,
  },
  stepper: {
    display: 'flex', alignItems: 'center',
    border: `1px solid ${border}`, borderRadius: 40, overflow: 'hidden',
  },
  stepBtn: {
    background: 'transparent', border: 'none', cursor: 'pointer',
    width: 30, height: 30, display: 'flex', alignItems: 'center',
    justifyContent: 'center', color: muted, transition: 'background 0.15s',
  },
  stepQty: {
    fontSize: 12, fontWeight: 600, color: ink,
    minWidth: 28, textAlign: 'center',
  },
  itemTotal: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: '1.15rem', fontWeight: 500, fontStyle: 'italic',
    color: ink, margin: 0,
  },
  itemUnit: {
    fontSize: 9, color: muted, margin: '2px 0 0',
    textAlign: 'right', letterSpacing: '0.05em',
  },

  /* SUMMARY */
  summaryCol: {
    flex: '0 0 320px',
    position: 'sticky', top: 24,
  },
  summaryCard: {
    background: '#FEFCF8',
    border: `1px solid ${border}`,
    borderRadius: 20,
    padding: '1.8rem',
  },
  summaryEyebrow: {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: 9, letterSpacing: '0.45em', textTransform: 'uppercase',
    color: gold, fontWeight: 600, marginBottom: '1.4rem',
  },

  /* Promo */
  promoWrap: {
    display: 'flex', alignItems: 'center', gap: 8,
    border: `1px solid ${border}`, borderRadius: 40,
    padding: '6px 6px 6px 14px',
    background: '#FAF7F2',
    marginBottom: 6,
  },
  promoInput: {
    flex: 1, background: 'none', border: 'none', outline: 'none',
    fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase',
    color: ink, fontFamily: "'Montserrat', sans-serif",
  },
  promoBtn: {
    background: 'transparent', border: `1px solid ${ink}`,
    color: ink, padding: '6px 14px',
    fontSize: 9, letterSpacing: '0.3em', textTransform: 'uppercase',
    fontWeight: 600, cursor: 'pointer', borderRadius: 30,
    transition: 'all 0.2s', fontFamily: "'Montserrat', sans-serif",
  },
  promoError: {
    fontSize: 10, color: '#C0392B', letterSpacing: '0.1em',
    textTransform: 'uppercase', margin: '4px 0 0',
  },
  promoSuccess: {
    fontSize: 10, color: '#7A9E7E', letterSpacing: '0.1em',
    textTransform: 'uppercase', margin: '4px 0 0',
  },

  divider: { height: 1, background: border, margin: '1.2rem 0' },

  /* Line items */
  lineItems: { display: 'flex', flexDirection: 'column', gap: 10 },
  lineRow: {
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
  },
  lineLabel: {
    fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase',
    color: muted, fontWeight: 400,
  },
  lineValue: {
    fontSize: 12, fontWeight: 500, color: ink,
    fontFamily: "'Montserrat', sans-serif",
  },

  /* Total */
  totalRow: {
    display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
    marginBottom: '1.4rem',
  },
  totalLabel: {
    fontSize: 10, letterSpacing: '0.35em', textTransform: 'uppercase',
    fontWeight: 600, color: ink,
  },
  totalValue: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: '1.6rem', fontStyle: 'italic', fontWeight: 400, color: ink,
  },

  /* CTA */
  checkoutBtn: {
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    background: ink, color: cream, textDecoration: 'none',
    padding: '14px 24px', borderRadius: 40,
    fontSize: 10, letterSpacing: '0.35em', textTransform: 'uppercase',
    fontWeight: 600, fontFamily: "'Montserrat', sans-serif",
    transition: 'background 0.2s', marginBottom: '1.2rem',
  },

  /* Trust */
  trustRow: {
    display: 'flex', justifyContent: 'center', gap: 16, marginBottom: 10,
  },
  trustItem: {
    fontSize: 9, letterSpacing: '0.3em', textTransform: 'uppercase',
    color: '#C8B99A', fontWeight: 500,
  },
  codNote: {
    textAlign: 'center', fontSize: 10, color: '#C8B99A',
    letterSpacing: '0.1em', margin: 0,
  },
};

export default Cart;