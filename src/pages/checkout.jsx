// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useCart } from '../context/CartContext';
// import { ArrowLeft, CheckCircle2, MessageCircle, Shield, Truck, Lock, Gift, Eye } from 'lucide-react';
// import { openWhatsAppOrder } from '../utils/whatsappOrder';

// const Checkout = () => {
//   const { cartItems, cartTotal } = useCart();
//   const [orderPlaced, setOrderPlaced] = useState(false);
//   const [paymentMethod, setPaymentMethod] = useState('cod');
//   const [errors, setErrors] = useState({});
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     phone: '',
//     address: '',
//     city: '',
//     postalCode: '',
//   });

//   const subtotal = cartTotal;
//   const shippingCost = subtotal > 5000 ? 0 : 250;
//   const total = subtotal + shippingCost;
//   const companyAddress = 'Shop No. 2, Sadiq Heights, Opposite Balad Trade Centre, Bahadurabad, Karachi, Pakistan';
//   const whatsappNumber = '03183140548';

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//     if (errors[name]) setErrors((prev) => ({ ...prev, [name]: false }));
//   };

//   const validate = () => {
//     const newErrors = {};
//     if (!formData.fullName) newErrors.fullName = true;
//     if (!formData.email) newErrors.email = true;
//     if (!formData.phone) newErrors.phone = true;
//     if (!formData.address) newErrors.address = true;
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!validate()) return;

//     const orderData = {
//       ...formData,
//       items: cartItems,
//       subtotal,
//       shippingCost,
//       total,
//       paymentMethod,
//     };

//     try {
//       openWhatsAppOrder(orderData);
//       setOrderPlaced(true);
//       localStorage.removeItem('cart');
//       setTimeout(() => { window.location.href = '/'; }, 5000);
//     } catch (error) {
//       console.error('Error sending order:', error);
//       alert('Error sending order. Please try again.');
//     }
//   };

//   /* ─── Success Screen ─── */
//   if (orderPlaced) {
//     return (
//       <div style={styles.successPage}>
//         <div style={styles.successCard}>
//           <div style={styles.successIconRing}>
//             <CheckCircle2 size={40} color="#16A34A" />
//           </div>
//           <h2 style={styles.successTitle}>Order Sent!</h2>
//           <p style={styles.successSub}>
//             Your order has been sent to Eye Studio on WhatsApp.<br />
//             Our team will confirm shortly.
//           </p>
//           <div style={styles.successDivider} />
//           <div style={styles.successFooter}>
//             <MessageCircle size={14} color="#16A34A" />
//             <span>Redirecting to home in a moment…</span>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   /* ─── Main Checkout ─── */
//   return (
//     <div style={styles.page}>
//       <div style={styles.container}>

//         {/* Header */}
//         <div style={styles.header}>
//           <Link to="/cart" style={styles.backBtn}>
//             <ArrowLeft size={15} />
//             <span>Back to cart</span>
//           </Link>
//           <div>
//             <h1 style={styles.pageTitle}>Checkout</h1>
//             <p style={styles.pageSub}>Eye Studio · Secure order</p>
//           </div>
//         </div>

//         {/* Progress */}
//         <div style={styles.progressBar}>
//           {['Cart', 'Details', 'Confirm'].map((step, i) => (
//             <div key={step} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
//               <div style={{
//                 ...styles.progDot,
//                 background: i === 0 ? '#1a1a1a' : i === 1 ? '#1a1a1a' : 'transparent',
//                 border: i === 2 ? '1.5px solid #ccc' : '1.5px solid #1a1a1a',
//                 color: i < 2 ? '#fff' : '#aaa',
//               }}>
//                 {i === 0 ? '✓' : i + 1}
//               </div>
//               <span style={{ fontSize: 12, fontWeight: i === 1 ? 600 : 400, color: i === 2 ? '#aaa' : '#1a1a1a' }}>
//                 {step}
//               </span>
//               {i < 2 && <div style={{ ...styles.progLine, background: i === 0 ? '#1a1a1a' : '#e5e5e5' }} />}
//             </div>
//           ))}
//           <span style={styles.orderNum}>#ES-{Math.floor(1000 + Math.random() * 9000)}</span>
//         </div>

//         {/* Grid */}
//         <div style={styles.grid}>

//           {/* ── LEFT: Form ── */}
//           <div>
//             <div style={styles.card}>
//               <SectionLabel icon={<Truck size={13} />} text="Shipping address" />

//               <Field label="Full name *" error={errors.fullName}>
//                 <input
//                   name="fullName" value={formData.fullName}
//                   onChange={handleInputChange} placeholder="e.g. Ayesha Khan"
//                   style={{ ...styles.input, ...(errors.fullName ? styles.inputError : {}) }}
//                 />
//               </Field>

//               <div style={styles.row2}>
//                 <Field label="Email address *" error={errors.email}>
//                   <input
//                     name="email" type="email" value={formData.email}
//                     onChange={handleInputChange} placeholder="you@email.com"
//                     style={{ ...styles.input, ...(errors.email ? styles.inputError : {}) }}
//                   />
//                 </Field>
//                 <Field label="Phone number *" error={errors.phone}>
//                   <input
//                     name="phone" type="tel" value={formData.phone}
//                     onChange={handleInputChange} placeholder="+92 300 0000000"
//                     style={{ ...styles.input, ...(errors.phone ? styles.inputError : {}) }}
//                   />
//                 </Field>
//               </div>

//               <Field label="Street address *" error={errors.address}>
//                 <input
//                   name="address" value={formData.address}
//                   onChange={handleInputChange} placeholder="House / flat, street name"
//                   style={{ ...styles.input, ...(errors.address ? styles.inputError : {}) }}
//                 />
//               </Field>

//               <div style={styles.row2}>
//                 <Field label="City">
//                   <input name="city" value={formData.city} onChange={handleInputChange}
//                     placeholder="Karachi" style={styles.input} />
//                 </Field>
//                 <Field label="Postal code">
//                   <input name="postalCode" value={formData.postalCode} onChange={handleInputChange}
//                     placeholder="75600" style={styles.input} />
//                 </Field>
//               </div>

//               <div style={styles.divider} />

//               <SectionLabel icon={<Lock size={13} />} text="Payment method" />

//               <PayOption
//                 id="cod"
//                 active={paymentMethod === 'cod'}
//                 onClick={() => setPaymentMethod('cod')}
//                 title="Cash on delivery"
//                 sub="Pay when your order arrives"
//                 icon="💵"
//               />

//               <button
//                 onClick={handleSubmit}
//                 style={styles.waBtn}
//                 onMouseEnter={e => e.currentTarget.style.background = '#15803D'}
//                 onMouseLeave={e => e.currentTarget.style.background = '#16A34A'}
//               >
//                 <MessageCircle size={18} />
//                 Send order via WhatsApp
//               </button>

//               <div style={styles.trustRow}>
//                 {[
//                   { icon: <Lock size={12} />, label: 'Secure' },
//                   { icon: <Shield size={12} />, label: 'Verified seller' },
//                   { icon: <Truck size={12} />, label: 'Fast delivery' },
//                 ].map(({ icon, label }) => (
//                   <div key={label} style={styles.trustItem}>
//                     {icon}
//                     <span>{label}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* ── RIGHT: Summary ── */}
//           <div>
//             <div style={{ ...styles.card, position: 'sticky', top: 20 }}>
//               <SectionLabel icon={<Eye size={13} />} text="Order summary" />

//               <div style={{ maxHeight: 220, overflowY: 'auto', marginBottom: 16 }}>
//                 {cartItems.length === 0 ? (
//                   <p style={{ fontSize: 13, color: '#888' }}>No items in cart</p>
//                 ) : (
//                   cartItems.map((item) => (
//                     <div key={item.id} style={styles.orderItem}>
//                       <div style={styles.itemThumb}>
//                         <Eye size={16} color="#534AB7" />
//                       </div>
//                       <div style={{ flex: 1, minWidth: 0 }}>
//                         <p style={styles.itemName}>{item.name}</p>
//                         <p style={styles.itemQty}>Qty: {item.quantity}</p>
//                       </div>
//                       <p style={styles.itemPrice}>
//                         Rs. {(item.price * item.quantity).toLocaleString('en-PK')}
//                       </p>
//                     </div>
//                   ))
//                 )}
//               </div>

//               <div style={styles.summaryDivider} />

//               <div style={styles.summaryRow}>
//                 <span>Subtotal</span>
//                 <span>Rs. {subtotal.toLocaleString('en-PK')}</span>
//               </div>
//               <div style={styles.summaryRow}>
//                 <span>Shipping</span>
//                 {shippingCost === 0
//                   ? <span style={styles.freeBadge}>FREE</span>
//                   : <span>Rs. {shippingCost}</span>}
//               </div>
//               <div style={styles.summaryTotal}>
//                 <span>Total</span>
//                 <span>Rs. {total.toLocaleString('en-PK')}</span>
//               </div>

//             {subtotal > 0 && subtotal < 5000 && (
//                 <div style={styles.freeShipBanner}>
//                   <Gift size={14} color="#0F6E56" />
//                   <span>Add Rs. {(5000 - subtotal).toLocaleString('en-PK')} more for free shipping!</span>
//                 </div>
//               )}
//               {shippingCost === 0 && subtotal > 0 && (
//                 <div style={styles.freeShipBanner}>
//                   <Gift size={14} color="#0F6E56" />
//                   <span>🎉 You've got free shipping!</span>
//                 </div>
//               )}

//               {subtotal === 0 && (
//                 <div style={styles.emptyWarning}>
//                   Your cart is empty. Add items before checkout.
//                 </div>
//               )}

//               <div style={{ ...styles.summaryDivider, marginTop: '1.25rem' }} />
//               <div style={{ marginTop: '1rem' }}>
//                 <p style={{ fontSize: 11, fontWeight: 600, color: '#888', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 6 }}>📍 PICKUP LOCATION</p>
//                 <p style={{ fontSize: 13, color: '#1a1a1a', lineHeight: 1.5, marginBottom: 8 }}>{companyAddress}</p>
//                 <a
//                   href={`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}`}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   style={{
//                     display: 'inline-flex',
//                     alignItems: 'center',
//                     gap: 6,
//                     fontSize: 12,
//                     color: '#16A34A',
//                     textDecoration: 'none',
//                     fontWeight: 600,
//                   }}
//                 >
//                   📱 {whatsappNumber}
//                 </a>
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// /* ─── Sub-components ─── */

// const SectionLabel = ({ icon, text }) => (
//   <div style={{
//     display: 'flex', alignItems: 'center', gap: 6,
//     fontSize: 11, fontWeight: 600, letterSpacing: '0.07em',
//     textTransform: 'uppercase', color: '#888', marginBottom: 16,
//   }}>
//     {icon}{text}
//   </div>
// );

// const Field = ({ label, children, error }) => (
//   <div style={{ marginBottom: 14 }}>
//     <label style={{ display: 'block', fontSize: 12, fontWeight: 500, color: error ? '#dc2626' : '#555', marginBottom: 5 }}>
//       {label}
//     </label>
//     {children}
//     {error && <p style={{ fontSize: 11, color: '#dc2626', marginTop: 4 }}>This field is required</p>}
//   </div>
// );

// const PayOption = ({ id, active, onClick, title, sub, icon }) => (
//   <div
//     onClick={onClick}
//     style={{
//       display: 'flex', alignItems: 'center', gap: 12,
//       padding: '12px 14px', borderRadius: 10, cursor: 'pointer',
//       border: active ? '1.5px solid #1a1a1a' : '1px solid #e5e5e5',
//       background: active ? '#f9f9f9' : '#fff',
//       marginBottom: 8, transition: 'all .18s',
//     }}
//   >
//     <div style={{
//       width: 18, height: 18, borderRadius: '50%', flexShrink: 0,
//       border: active ? '2px solid #1a1a1a' : '2px solid #ccc',
//       background: active ? '#1a1a1a' : 'transparent',
//       display: 'flex', alignItems: 'center', justifyContent: 'center',
//     }}>
//       {active && <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#fff' }} />}
//     </div>
//     <div style={{ flex: 1 }}>
//       <p style={{ fontSize: 13, fontWeight: 600, color: '#1a1a1a' }}>{title}</p>
//       <p style={{ fontSize: 11, color: '#888', marginTop: 1 }}>{sub}</p>
//     </div>
//     <span style={{ fontSize: 18 }}>{icon}</span>
//   </div>
// );

// /* ─── Styles ─── */
// const styles = {
//   page: {
//     background: '#f5f4f1',
//     minHeight: '100vh',
//     padding: '2.5rem 1rem',
//     fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
//   },
//   container: { maxWidth: 920, margin: '0 auto' },
//   header: { display: 'flex', alignItems: 'flex-start', gap: 16, marginBottom: '1.75rem' },
//   backBtn: {
//     display: 'inline-flex', alignItems: 'center', gap: 6,
//     fontSize: 13, color: '#555', textDecoration: 'none',
//     border: '1px solid #ddd', padding: '7px 12px',
//     borderRadius: 8, background: '#fff', transition: 'all .15s',
//   },
//   pageTitle: { fontSize: 26, fontWeight: 700, color: '#1a1a1a', letterSpacing: '-0.5px', margin: 0 },
//   pageSub: { fontSize: 13, color: '#888', marginTop: 3 },

//   progressBar: {
//     display: 'flex', alignItems: 'center', gap: 8,
//     background: '#fff', borderRadius: 10, padding: '10px 16px',
//     marginBottom: '1.5rem', border: '1px solid #eee',
//   },
//   progDot: {
//     width: 22, height: 22, borderRadius: '50%',
//     display: 'flex', alignItems: 'center', justifyContent: 'center',
//     fontSize: 10, fontWeight: 700, flexShrink: 0,
//   },
//   progLine: { width: 40, height: 1 },
//   orderNum: { marginLeft: 'auto', fontSize: 11, color: '#aaa', fontFamily: 'monospace' },

//   grid: {
//     display: 'grid',
//     gridTemplateColumns: '1fr 360px',
//     gap: '1.5rem',
//   },

//   card: {
//     background: '#fff',
//     border: '1px solid #eee',
//     borderRadius: 14,
//     padding: '1.5rem',
//   },

//   divider: { height: 1, background: '#f0f0f0', margin: '1.25rem 0' },

//   row2: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 },

//   input: {
//     width: '100%', padding: '10px 12px',
//     border: '1px solid #e0e0e0', borderRadius: 8,
//     fontSize: 14, color: '#1a1a1a',
//     background: '#fafafa', outline: 'none',
//     transition: 'border-color .15s, box-shadow .15s',
//     boxSizing: 'border-box',
//     fontFamily: 'inherit',
//   },
//   inputError: {
//     borderColor: '#dc2626',
//     boxShadow: '0 0 0 3px rgba(220,38,38,.08)',
//   },

//   waBtn: {
//     width: '100%', marginTop: 16, padding: '13px',
//     borderRadius: 10, background: '#16A34A',
//     border: 'none', color: '#fff',
//     fontSize: 14, fontWeight: 600,
//     cursor: 'pointer', display: 'flex',
//     alignItems: 'center', justifyContent: 'center',
//     gap: 8, transition: 'background .2s',
//     fontFamily: 'inherit',
//   },

//   trustRow: {
//     display: 'flex', alignItems: 'center', justifyContent: 'center',
//     gap: '1.25rem', marginTop: 12,
//   },
//   trustItem: { display: 'flex', alignItems: 'center', gap: 5, fontSize: 11, color: '#aaa' },

//   orderItem: {
//     display: 'flex', alignItems: 'center', gap: 10,
//     padding: '9px 0', borderBottom: '1px solid #f5f5f5',
//   },
//   itemThumb: {
//     width: 38, height: 38, borderRadius: 8,
//     background: '#EEEDFE', display: 'flex',
//     alignItems: 'center', justifyContent: 'center', flexShrink: 0,
//   },
//   itemName: { fontSize: 13, fontWeight: 500, color: '#1a1a1a', margin: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' },
//   itemQty: { fontSize: 11, color: '#aaa', margin: '2px 0 0' },
//   itemPrice: { fontSize: 13, fontWeight: 600, color: '#1a1a1a', whiteSpace: 'nowrap', margin: 0 },

//   summaryDivider: { height: 1, background: '#f0f0f0', margin: '12px 0' },
//   summaryRow: { display: 'flex', justifyContent: 'space-between', fontSize: 13, color: '#666', padding: '4px 0' },
//   summaryTotal: {
//     display: 'flex', justifyContent: 'space-between',
//     fontSize: 16, fontWeight: 700, color: '#1a1a1a',
//     padding: '12px 0 0', borderTop: '1px solid #eee', marginTop: 8,
//   },
//   freeBadge: {
//     fontSize: 11, fontWeight: 600, color: '#0F6E56',
//     background: '#E1F5EE', padding: '2px 9px', borderRadius: 20,
//   },
//   freeShipBanner: {
//     display: 'flex', alignItems: 'center', gap: 8,
//     background: '#f0faf6', border: '1px solid #bbf0db',
//     borderRadius: 8, padding: '9px 12px', marginTop: 12,
//     fontSize: 12, color: '#0F6E56',
//   },
//   emptyWarning: {
//     marginTop: 12, padding: '10px 12px',
//     background: '#fef2f2', border: '1px solid #fecaca',
//     borderRadius: 8, fontSize: 12, color: '#dc2626',
//   },

//   successPage: {
//     minHeight: '100vh', background: '#f5f4f1',
//     display: 'flex', alignItems: 'center', justifyContent: 'center',
//     fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
//   },
//   successCard: {
//     background: '#fff', borderRadius: 16, border: '1px solid #eee',
//     padding: '2.5rem 2rem', maxWidth: 380, width: '100%', textAlign: 'center',
//   },
//   successIconRing: {
//     width: 72, height: 72, borderRadius: '50%',
//     background: '#f0faf6', display: 'flex',
//     alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem',
//   },
//   successTitle: { fontSize: 22, fontWeight: 700, color: '#1a1a1a', margin: '0 0 8px' },
//   successSub: { fontSize: 14, color: '#666', lineHeight: 1.6, margin: 0 },
//   successDivider: { height: 1, background: '#f0f0f0', margin: '1.25rem 0' },
//   successFooter: { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, fontSize: 12, color: '#aaa' },
// };

// export default Checkout;



























import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { ArrowLeft, CheckCircle2, MessageCircle, Shield, Truck, Lock, Gift, Eye } from 'lucide-react';
import { openWhatsAppOrder } from '../utils/whatsappOrder';

/* ─── Responsive hook ─── */
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768);
  useState(() => {
    const handler = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  });
  return isMobile;
};

const Checkout = () => {
  const { cartItems, cartTotal } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
  });

  const isMobile = useIsMobile();

  const subtotal = cartTotal;
  const shippingCost = subtotal > 5000 ? 0 : 250;
  const total = subtotal + shippingCost;
  const companyAddress = 'Shop No. 2, Sadiq Heights, Opposite Balad Trade Centre, Bahadurabad, Karachi, Pakistan';
  const whatsappNumber = '03183140548';

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: false }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = true;
    if (!formData.email) newErrors.email = true;
    if (!formData.phone) newErrors.phone = true;
    if (!formData.address) newErrors.address = true;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const orderData = {
      ...formData,
      items: cartItems,
      subtotal,
      shippingCost,
      total,
      paymentMethod,
    };

    try {
      openWhatsAppOrder(orderData);
      setOrderPlaced(true);
      localStorage.removeItem('cart');
      setTimeout(() => { window.location.href = '/'; }, 5000);
    } catch (error) {
      console.error('Error sending order:', error);
      alert('Error sending order. Please try again.');
    }
  };

  /* ─── Success Screen ─── */
  if (orderPlaced) {
    return (
      <div style={styles.successPage}>
        <div style={styles.successCard}>
          <div style={styles.successIconRing}>
            <CheckCircle2 size={40} color="#16A34A" />
          </div>
          <h2 style={styles.successTitle}>Order Sent!</h2>
          <p style={styles.successSub}>
            Your order has been sent to Eye Studio on WhatsApp.<br />
            Our team will confirm shortly.
          </p>
          <div style={styles.successDivider} />
          <div style={styles.successFooter}>
            <MessageCircle size={14} color="#16A34A" />
            <span>Redirecting to home in a moment…</span>
          </div>
        </div>
      </div>
    );
  }

  /* ─── Main Checkout ─── */
  return (
    <div style={styles.page}>
      <div style={styles.container}>

        {/* Header */}
        <div style={styles.header}>
          <Link to="/cart" style={styles.backBtn}>
            <ArrowLeft size={15} />
            <span>Back to cart</span>
          </Link>
          <div>
            <h1 style={styles.pageTitle}>Checkout</h1>
            <p style={styles.pageSub}>Eye Studio · Secure order</p>
          </div>
        </div>

        {/* Progress */}
        <div style={styles.progressBar}>
          {['Cart', 'Details', 'Confirm'].map((step, i) => (
            <div key={step} style={{ display: 'flex', alignItems: 'center', gap: isMobile ? 4 : 8 }}>
              <div style={{
                ...styles.progDot,
                background: i === 0 ? '#1a1a1a' : i === 1 ? '#1a1a1a' : 'transparent',
                border: i === 2 ? '1.5px solid #ccc' : '1.5px solid #1a1a1a',
                color: i < 2 ? '#fff' : '#aaa',
              }}>
                {i === 0 ? '✓' : i + 1}
              </div>
              <span style={{ fontSize: isMobile ? 11 : 12, fontWeight: i === 1 ? 600 : 400, color: i === 2 ? '#aaa' : '#1a1a1a' }}>
                {step}
              </span>
              {i < 2 && <div style={{ ...styles.progLine, background: i === 0 ? '#1a1a1a' : '#e5e5e5', width: isMobile ? 20 : 40 }} />}
            </div>
          ))}
          {!isMobile && (
            <span style={styles.orderNum}>#ES-{Math.floor(1000 + Math.random() * 9000)}</span>
          )}
        </div>

        {/* Grid — stacks on mobile */}
        <div style={{
          ...styles.grid,
          gridTemplateColumns: isMobile ? '1fr' : '1fr 360px',
        }}>

          {/* ── LEFT: Form ── */}
          <div>
            <div style={styles.card}>
              <SectionLabel icon={<Truck size={13} />} text="Shipping address" />

              <Field label="Full name *" error={errors.fullName}>
                <input
                  name="fullName" value={formData.fullName}
                  onChange={handleInputChange} placeholder="e.g. Ayesha Khan"
                  style={{ ...styles.input, ...(errors.fullName ? styles.inputError : {}) }}
                />
              </Field>

              {/* Email + Phone: stacks on mobile */}
              <div style={{ ...styles.row2, gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr' }}>
                <Field label="Email address *" error={errors.email}>
                  <input
                    name="email" type="email" value={formData.email}
                    onChange={handleInputChange} placeholder="you@email.com"
                    style={{ ...styles.input, ...(errors.email ? styles.inputError : {}) }}
                  />
                </Field>
                <Field label="Phone number *" error={errors.phone}>
                  <input
                    name="phone" type="tel" value={formData.phone}
                    onChange={handleInputChange} placeholder="+92 300 0000000"
                    style={{ ...styles.input, ...(errors.phone ? styles.inputError : {}) }}
                  />
                </Field>
              </div>

              <Field label="Street address *" error={errors.address}>
                <input
                  name="address" value={formData.address}
                  onChange={handleInputChange} placeholder="House / flat, street name"
                  style={{ ...styles.input, ...(errors.address ? styles.inputError : {}) }}
                />
              </Field>

              {/* City + Postal: stacks on mobile */}
              <div style={{ ...styles.row2, gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr' }}>
                <Field label="City">
                  <input name="city" value={formData.city} onChange={handleInputChange}
                    placeholder="Karachi" style={styles.input} />
                </Field>
                <Field label="Postal code">
                  <input name="postalCode" value={formData.postalCode} onChange={handleInputChange}
                    placeholder="75600" style={styles.input} />
                </Field>
              </div>

              <div style={styles.divider} />

              <SectionLabel icon={<Lock size={13} />} text="Payment method" />

              <PayOption
                id="cod"
                active={paymentMethod === 'cod'}
                onClick={() => setPaymentMethod('cod')}
                title="Cash on delivery"
                sub="Pay when your order arrives"
                icon="💵"
              />

              <button
                onClick={handleSubmit}
                style={styles.waBtn}
                onMouseEnter={e => e.currentTarget.style.background = '#15803D'}
                onMouseLeave={e => e.currentTarget.style.background = '#16A34A'}
              >
                <MessageCircle size={18} />
                Send order via WhatsApp
              </button>

              <div style={styles.trustRow}>
                {[
                  { icon: <Lock size={12} />, label: 'Secure' },
                  { icon: <Shield size={12} />, label: 'Verified seller' },
                  { icon: <Truck size={12} />, label: 'Fast delivery' },
                ].map(({ icon, label }) => (
                  <div key={label} style={styles.trustItem}>
                    {icon}
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── RIGHT: Summary ── */}
          <div>
            <div style={{
              ...styles.card,
              position: isMobile ? 'static' : 'sticky',
              top: 20,
            }}>
              <SectionLabel icon={<Eye size={13} />} text="Order summary" />

              <div style={{ maxHeight: 220, overflowY: 'auto', marginBottom: 16 }}>
                {cartItems.length === 0 ? (
                  <p style={{ fontSize: 13, color: '#888' }}>No items in cart</p>
                ) : (
                  cartItems.map((item) => (
                    <div key={item.id} style={styles.orderItem}>
                      <div style={styles.itemThumb}>
                        <Eye size={16} color="#534AB7" />
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <p style={styles.itemName}>{item.name}</p>
                        <p style={styles.itemQty}>Qty: {item.quantity}</p>
                      </div>
                      <p style={styles.itemPrice}>
                        Rs. {(item.price * item.quantity).toLocaleString('en-PK')}
                      </p>
                    </div>
                  ))
                )}
              </div>

              <div style={styles.summaryDivider} />

              <div style={styles.summaryRow}>
                <span>Subtotal</span>
                <span>Rs. {subtotal.toLocaleString('en-PK')}</span>
              </div>
              <div style={styles.summaryRow}>
                <span>Shipping</span>
                {shippingCost === 0
                  ? <span style={styles.freeBadge}>FREE</span>
                  : <span>Rs. {shippingCost}</span>}
              </div>
              <div style={styles.summaryTotal}>
                <span>Total</span>
                <span>Rs. {total.toLocaleString('en-PK')}</span>
              </div>

              {subtotal > 0 && subtotal < 5000 && (
                <div style={styles.freeShipBanner}>
                  <Gift size={14} color="#0F6E56" />
                  <span>Add Rs. {(5000 - subtotal).toLocaleString('en-PK')} more for free shipping!</span>
                </div>
              )}
              {shippingCost === 0 && subtotal > 0 && (
                <div style={styles.freeShipBanner}>
                  <Gift size={14} color="#0F6E56" />
                  <span>🎉 You've got free shipping!</span>
                </div>
              )}

              {subtotal === 0 && (
                <div style={styles.emptyWarning}>
                  Your cart is empty. Add items before checkout.
                </div>
              )}

              <div style={{ ...styles.summaryDivider, marginTop: '1.25rem' }} />
              <div style={{ marginTop: '1rem' }}>
                <p style={{ fontSize: 11, fontWeight: 600, color: '#888', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 6 }}>📍 PICKUP LOCATION</p>
                <p style={{ fontSize: 13, color: '#1a1a1a', lineHeight: 1.5, marginBottom: 8 }}>{companyAddress}</p>
                <a
                  href={`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    fontSize: 12,
                    color: '#16A34A',
                    textDecoration: 'none',
                    fontWeight: 600,
                  }}
                >
                  📱 {whatsappNumber}
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── Responsive styles via <style> tag ── */}
      <style>{`
        @media (max-width: 767px) {
          .checkout-page { padding: 1.25rem 0.75rem !important; }
        }
      `}</style>
    </div>
  );
};

/* ─── Sub-components ─── */

const SectionLabel = ({ icon, text }) => (
  <div style={{
    display: 'flex', alignItems: 'center', gap: 6,
    fontSize: 11, fontWeight: 600, letterSpacing: '0.07em',
    textTransform: 'uppercase', color: '#888', marginBottom: 16,
  }}>
    {icon}{text}
  </div>
);

const Field = ({ label, children, error }) => (
  <div style={{ marginBottom: 14 }}>
    <label style={{ display: 'block', fontSize: 12, fontWeight: 500, color: error ? '#dc2626' : '#555', marginBottom: 5 }}>
      {label}
    </label>
    {children}
    {error && <p style={{ fontSize: 11, color: '#dc2626', marginTop: 4 }}>This field is required</p>}
  </div>
);

const PayOption = ({ id, active, onClick, title, sub, icon }) => (
  <div
    onClick={onClick}
    style={{
      display: 'flex', alignItems: 'center', gap: 12,
      padding: '12px 14px', borderRadius: 10, cursor: 'pointer',
      border: active ? '1.5px solid #1a1a1a' : '1px solid #e5e5e5',
      background: active ? '#f9f9f9' : '#fff',
      marginBottom: 8, transition: 'all .18s',
    }}
  >
    <div style={{
      width: 18, height: 18, borderRadius: '50%', flexShrink: 0,
      border: active ? '2px solid #1a1a1a' : '2px solid #ccc',
      background: active ? '#1a1a1a' : 'transparent',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      {active && <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#fff' }} />}
    </div>
    <div style={{ flex: 1 }}>
      <p style={{ fontSize: 13, fontWeight: 600, color: '#1a1a1a' }}>{title}</p>
      <p style={{ fontSize: 11, color: '#888', marginTop: 1 }}>{sub}</p>
    </div>
    <span style={{ fontSize: 18 }}>{icon}</span>
  </div>
);

/* ─── Styles ─── */
const styles = {
  page: {
    background: '#f5f4f1',
    minHeight: '100vh',
    padding: 'clamp(1rem, 4vw, 2.5rem) clamp(0.75rem, 4vw, 1rem)',
    fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
  },
  container: { maxWidth: 920, margin: '0 auto' },
  header: {
    display: 'flex', alignItems: 'flex-start', gap: 12,
    marginBottom: '1.25rem',
    flexWrap: 'wrap',
  },
  backBtn: {
    display: 'inline-flex', alignItems: 'center', gap: 6,
    fontSize: 13, color: '#555', textDecoration: 'none',
    border: '1px solid #ddd', padding: '7px 12px',
    borderRadius: 8, background: '#fff', transition: 'all .15s',
    whiteSpace: 'nowrap',
  },
  pageTitle: {
    fontSize: 'clamp(20px, 5vw, 26px)',
    fontWeight: 700, color: '#1a1a1a', letterSpacing: '-0.5px', margin: 0,
  },
  pageSub: { fontSize: 13, color: '#888', marginTop: 3 },

  progressBar: {
    display: 'flex', alignItems: 'center', gap: 6,
    background: '#fff', borderRadius: 10,
    padding: '10px 12px',
    marginBottom: '1.25rem', border: '1px solid #eee',
    overflowX: 'auto',
  },
  progDot: {
    width: 22, height: 22, borderRadius: '50%',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: 10, fontWeight: 700, flexShrink: 0,
  },
  progLine: { width: 40, height: 1, flexShrink: 0 },
  orderNum: { marginLeft: 'auto', fontSize: 11, color: '#aaa', fontFamily: 'monospace', whiteSpace: 'nowrap' },

  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 360px', /* overridden inline for mobile */
    gap: '1.25rem',
  },

  card: {
    background: '#fff',
    border: '1px solid #eee',
    borderRadius: 14,
    padding: 'clamp(1rem, 4vw, 1.5rem)',
  },

  divider: { height: 1, background: '#f0f0f0', margin: '1.25rem 0' },

  row2: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 },

  input: {
    width: '100%', padding: '11px 12px',
    border: '1px solid #e0e0e0', borderRadius: 8,
    fontSize: 16, /* 16px prevents iOS auto-zoom */
    color: '#1a1a1a',
    background: '#fafafa', outline: 'none',
    transition: 'border-color .15s, box-shadow .15s',
    boxSizing: 'border-box',
    fontFamily: 'inherit',
    WebkitAppearance: 'none',
  },
  inputError: {
    borderColor: '#dc2626',
    boxShadow: '0 0 0 3px rgba(220,38,38,.08)',
  },

  waBtn: {
    width: '100%', marginTop: 16,
    padding: 'clamp(12px, 3vw, 14px)',
    borderRadius: 10, background: '#16A34A',
    border: 'none', color: '#fff',
    fontSize: 'clamp(13px, 3.5vw, 14px)', fontWeight: 600,
    cursor: 'pointer', display: 'flex',
    alignItems: 'center', justifyContent: 'center',
    gap: 8, transition: 'background .2s',
    fontFamily: 'inherit',
    touchAction: 'manipulation',
  },

  trustRow: {
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    gap: '1rem', marginTop: 12, flexWrap: 'wrap',
  },
  trustItem: { display: 'flex', alignItems: 'center', gap: 5, fontSize: 11, color: '#aaa' },

  orderItem: {
    display: 'flex', alignItems: 'center', gap: 10,
    padding: '9px 0', borderBottom: '1px solid #f5f5f5',
  },
  itemThumb: {
    width: 38, height: 38, borderRadius: 8,
    background: '#EEEDFE', display: 'flex',
    alignItems: 'center', justifyContent: 'center', flexShrink: 0,
  },
  itemName: { fontSize: 13, fontWeight: 500, color: '#1a1a1a', margin: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' },
  itemQty: { fontSize: 11, color: '#aaa', margin: '2px 0 0' },
  itemPrice: { fontSize: 13, fontWeight: 600, color: '#1a1a1a', whiteSpace: 'nowrap', margin: 0 },

  summaryDivider: { height: 1, background: '#f0f0f0', margin: '12px 0' },
  summaryRow: { display: 'flex', justifyContent: 'space-between', fontSize: 13, color: '#666', padding: '4px 0' },
  summaryTotal: {
    display: 'flex', justifyContent: 'space-between',
    fontSize: 16, fontWeight: 700, color: '#1a1a1a',
    padding: '12px 0 0', borderTop: '1px solid #eee', marginTop: 8,
  },
  freeBadge: {
    fontSize: 11, fontWeight: 600, color: '#0F6E56',
    background: '#E1F5EE', padding: '2px 9px', borderRadius: 20,
  },
  freeShipBanner: {
    display: 'flex', alignItems: 'center', gap: 8,
    background: '#f0faf6', border: '1px solid #bbf0db',
    borderRadius: 8, padding: '9px 12px', marginTop: 12,
    fontSize: 12, color: '#0F6E56',
  },
  emptyWarning: {
    marginTop: 12, padding: '10px 12px',
    background: '#fef2f2', border: '1px solid #fecaca',
    borderRadius: 8, fontSize: 12, color: '#dc2626',
  },

  successPage: {
    minHeight: '100vh', background: '#f5f4f1',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
    padding: '1rem',
  },
  successCard: {
    background: '#fff', borderRadius: 16, border: '1px solid #eee',
    padding: 'clamp(1.5rem, 5vw, 2.5rem) clamp(1rem, 5vw, 2rem)',
    maxWidth: 380, width: '100%', textAlign: 'center',
  },
  successIconRing: {
    width: 72, height: 72, borderRadius: '50%',
    background: '#f0faf6', display: 'flex',
    alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem',
  },
  successTitle: { fontSize: 22, fontWeight: 700, color: '#1a1a1a', margin: '0 0 8px' },
  successSub: { fontSize: 14, color: '#666', lineHeight: 1.6, margin: 0 },
  successDivider: { height: 1, background: '#f0f0f0', margin: '1.25rem 0' },
  successFooter: { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, fontSize: 12, color: '#aaa' },
};

export default Checkout;