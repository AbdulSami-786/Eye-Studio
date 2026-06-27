// // // WhatsApp Order Integration
// // // Sends order details to WhatsApp Business Number

// // const WHATSAPP_BUSINESS_NUMBER = "+923183140548"; // Eye Studio WhatsApp Number

// // export const formatOrderMessage = (orderData) => {
// //   const {
// //     fullName,
// //     email,
// //     phone,
// //     address,
// //     city,
// //     postalCode,
// //     items,
// //     subtotal,
// //     shippingCost,
// //     total,
// //     paymentMethod,
// //   } = orderData;

// //   let message = `*🛍️ NEW ORDER FROM EYE STUDIO*\n\n`;
// //   message += `*Customer Details:*\n`;
// //   message += `📝 Name: ${fullName}\n`;
// //   message += `📧 Email: ${email}\n`;
// //   message += `📱 Phone: ${phone}\n`;
// //   message += `📍 Address: ${address}, ${city} ${postalCode}\n\n`;

// //   message += `*Items Ordered:*\n`;
// //   items.forEach((item, index) => {
// //     message += `${index + 1}. ${item.name},${item.id}\n`;
// //     message += `   Qty: ${item.quantity} × Rs. ${item.price.toLocaleString('en-PK')}\n`;
// //     if (item.selectedVariant?.colorName) {
// //       message += `   Color: ${item.selectedVariant.colorName}\n`;
// //     }
// //     if (item.prescription?.lensName) {
// //       message += `   Lens: ${item.prescription.lensName} (+Rs. ${item.prescription.lensPrice})\n`;
// //     }
// //     message += `   Total: Rs. ${(item.price * item.quantity).toLocaleString('en-PK')}\n\n`;
// //   });

// //   message += `*Order Summary:*\n`;
// //   message += `Subtotal: Rs. ${subtotal.toLocaleString('en-PK')}\n`;
// //   message += `Shipping: ${shippingCost === 0 ? 'FREE' : `Rs. ${shippingCost}`}\n`;
// //   message += `*Total: Rs. ${total.toLocaleString('en-PK')}*\n\n`;

// //   message += `*Payment Method:* ${paymentMethod === 'cod' ? 'Cash on Delivery' : 'Card Payment'}\n\n`;

// //   message += `Please confirm this order at your earliest convenience.\n`;
// //   message += `Thank you for shopping with Eye Studio! 😊`;

// //   return message;
// // };

// // export const sendOrderToWhatsApp = (orderData) => {
// //   const message = formatOrderMessage(orderData);
// //   const encodedMessage = encodeURIComponent(message);
  
// //   // WhatsApp API URL (opens WhatsApp with pre-filled message)
// //   const whatsappLink = `https://wa.me/${WHATSAPP_BUSINESS_NUMBER.replace(/[^\d]/g, '')}?text=${encodedMessage}`;
  
// //   return whatsappLink;
// // };

// // export const openWhatsAppOrder = (orderData) => {
// //   const whatsappLink = sendOrderToWhatsApp(orderData);
// //   window.open(whatsappLink, '_blank');
// // };

// // // Alternative: Send order to backend API if you have WhatsApp Business API integration
// // export const sendOrderViaAPI = async (orderData) => {
// //   try {
// //     const response = await fetch('/api/send-order', {
// //       method: 'POST',
// //       headers: {
// //         'Content-Type': 'application/json',
// //       },
// //       body: JSON.stringify({
// //         ...orderData,
// //         whatsappNumber: WHATSAPP_BUSINESS_NUMBER,
// //       }),
// //     });

// //     if (!response.ok) {
// //       throw new Error('Failed to send order');
// //     }

// //     return await response.json();
// //   } catch (error) {
// //     console.error('Error sending order:', error);
// //     throw error;
// //   }
// // };

// // export default {
// //   formatOrderMessage,
// //   sendOrderToWhatsApp,
// //   openWhatsAppOrder,
// //   sendOrderViaAPI,
// //   WHATSAPP_BUSINESS_NUMBER,
// // };




















// // WhatsApp Order Integration
// // Sends order details to WhatsApp Business Number

// const WHATSAPP_BUSINESS_NUMBER = "+923183140548"; // Eye Studio WhatsApp Number

// // Builds a short one-line prescription summary, e.g.
// // "Prescription attached, PD: 62mm" or "Prescription attached"
// // Returns null if there's no usable prescription data.
// const getPrescriptionSummary = (prescription) => {
//   if (!prescription) return null;

//   const { rightEye, leftEye, pd, notes } = prescription;

//   const hasEyeValue = (eye) =>
//     eye && (eye.sph || eye.cyl || eye.axis || eye.add);

//   const hasAnyData =
//     hasEyeValue(rightEye) || hasEyeValue(leftEye) || pd || notes;

//   if (!hasAnyData) return null;

//   let summary = "Prescription attached";
//   if (pd) {
//     summary += `, PD: ${pd}mm`;
//   }

//   return summary;
// };

// export const formatOrderMessage = (orderData) => {
//   const {
//     fullName,
//     email,
//     phone,
//     address,
//     city,
//     postalCode,
//     items,
//     subtotal,
//     shippingCost,
//     total,
//     paymentMethod,
//   } = orderData;

//   let message = `*🛍️ NEW ORDER FROM EYE STUDIO*\n\n`;
//   message += `*Customer Details:*\n`;
//   message += `📝 Name: ${fullName}\n`;
//   message += `📧 Email: ${email}\n`;
//   message += `📱 Phone: ${phone}\n`;
//   message += `📍 Address: ${address}, ${city} ${postalCode}\n\n`;

//   message += `*Items Ordered:*\n`;
//   items.forEach((item, index) => {
//     message += `${index + 1}. ${item.name},${item.id}\n`;
//     message += `   Qty: ${item.quantity} × Rs. ${item.price.toLocaleString('en-PK')}\n`;
//     if (item.selectedVariant?.colorName) {
//       message += `   Color: ${item.selectedVariant.colorName}\n`;
//     }

//     // Lens type shown as its own line in the order summary (with price)
//     if (item.lensType) {
//       message += `   Lens Type: ${item.lensType} (+Rs. ${(item.lensPrice || 0).toLocaleString('en-PK')})\n`;
//     }

//     // Short prescription summary, only if prescription data exists
//     const prescriptionSummary = getPrescriptionSummary(item.prescription);
//     if (prescriptionSummary) {
//       message += `   ${prescriptionSummary}\n`;
//     }

//     message += `   Total: Rs. ${(item.price * item.quantity).toLocaleString('en-PK')}\n\n`;
//   });

//   message += `*Order Summary:*\n`;
//   message += `Subtotal: Rs. ${subtotal.toLocaleString('en-PK')}\n`;
//   message += `Shipping: ${shippingCost === 0 ? 'FREE' : `Rs. ${shippingCost}`}\n`;
//   message += `*Total: Rs. ${total.toLocaleString('en-PK')}*\n\n`;

//   message += `*Payment Method:* ${paymentMethod === 'cod' ? 'Cash on Delivery' : 'Card Payment'}\n\n`;

//   message += `Please confirm this order at your earliest convenience.\n`;
//   message += `Thank you for shopping with Eye Studio! 😊`;

//   return message;
// };

// export const sendOrderToWhatsApp = (orderData) => {
//   const message = formatOrderMessage(orderData);
//   const encodedMessage = encodeURIComponent(message);
  
//   // WhatsApp API URL (opens WhatsApp with pre-filled message)
//   const whatsappLink = `https://wa.me/${WHATSAPP_BUSINESS_NUMBER.replace(/[^\d]/g, '')}?text=${encodedMessage}`;
  
//   return whatsappLink;
// };

// export const openWhatsAppOrder = (orderData) => {
//   const whatsappLink = sendOrderToWhatsApp(orderData);
//   window.open(whatsappLink, '_blank');
// };

// // Alternative: Send order to backend API if you have WhatsApp Business API integration
// export const sendOrderViaAPI = async (orderData) => {
//   try {
//     const response = await fetch('/api/send-order', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         ...orderData,
//         whatsappNumber: WHATSAPP_BUSINESS_NUMBER,
//       }),
//     });

//     if (!response.ok) {
//       throw new Error('Failed to send order');
//     }

//     return await response.json();
//   } catch (error) {
//     console.error('Error sending order:', error);
//     throw error;
//   }
// };

// export default {
//   formatOrderMessage,
//   sendOrderToWhatsApp,
//   openWhatsAppOrder,
//   sendOrderViaAPI,
//   WHATSAPP_BUSINESS_NUMBER,
// };
















































// WhatsApp Order Integration
// Sends order details to WhatsApp Business Number

const WHATSAPP_BUSINESS_NUMBER = "+923183140548"; // Eye Studio WhatsApp Number

// Builds a full prescription summary showing exact Right Eye / Left Eye
// numbers (SPH, CYL, AXIS, ADD) together, plus PD and notes if present.
// Returns null if there's no usable prescription data at all.
const hasEyeValue = (eye) =>
  eye && (eye.sph || eye.cyl || eye.axis || eye.add);

// Formats one eye's values into a single compact line, e.g.
// "SPH: -1.00, CYL: -0.50, AXIS: 90, ADD: +1.00"
// Skips any field that wasn't filled in.
const formatEyeValues = (eye) => {
  if (!eye) return null;

  const parts = [];
  if (eye.sph) parts.push(`SPH: ${eye.sph}`);
  if (eye.cyl) parts.push(`CYL: ${eye.cyl}`);
  if (eye.axis) parts.push(`AXIS: ${eye.axis}`);
  if (eye.add) parts.push(`ADD: ${eye.add}`);

  return parts.length > 0 ? parts.join(', ') : null;
};

const getPrescriptionSummary = (prescription) => {
  if (!prescription) return null;

  const { rightEye, leftEye, pd, notes } = prescription;

  const hasAnyData =
    hasEyeValue(rightEye) || hasEyeValue(leftEye) || pd || notes;

  if (!hasAnyData) return null;

  const lines = [`   👓 Prescription:`];

  const rightLine = formatEyeValues(rightEye);
  lines.push(`     R (OD): ${rightLine || 'N/A'}`);

  const leftLine = formatEyeValues(leftEye);
  lines.push(`     L (OS): ${leftLine || 'N/A'}`);

  if (pd) {
    lines.push(`     PD: ${pd}mm`);
  }

  if (notes) {
    lines.push(`     Notes: ${notes}`);
  }

  return lines.join('\n');
};

export const formatOrderMessage = (orderData) => {
  const {
    fullName,
    email,
    phone,
    address,
    city,
    postalCode,
    items,
    subtotal,
    shippingCost,
    total,
    paymentMethod,
  } = orderData;

  let message = `*🛍️ NEW ORDER FROM EYE STUDIO*\n\n`;
  message += `*Customer Details:*\n`;
  message += `📝 Name: ${fullName}\n`;
  message += `📧 Email: ${email}\n`;
  message += `📱 Phone: ${phone}\n`;
  message += `📍 Address: ${address}, ${city} ${postalCode}\n\n`;

  message += `*Items Ordered:*\n`;
  items.forEach((item, index) => {
    message += `${index + 1}. ${item.name},${item.id}\n`;
    message += `   Qty: ${item.quantity} × Rs. ${item.price.toLocaleString('en-PK')}\n`;
    if (item.selectedVariant?.colorName) {
      message += `   Color: ${item.selectedVariant.colorName}\n`;
    }

    // Lens type shown as its own line in the order summary (with price)
    if (item.lensType) {
      message += `   Lens Type: ${item.lensType} (+Rs. ${(item.lensPrice || 0).toLocaleString('en-PK')})\n`;
    }

    // Full prescription summary (R & L eye numbers together), only if prescription data exists
    const prescriptionSummary = getPrescriptionSummary(item.prescription);
    if (prescriptionSummary) {
      message += `${prescriptionSummary}\n`;
    }

    message += `   Total: Rs. ${(item.price * item.quantity).toLocaleString('en-PK')}\n\n`;
  });

  message += `*Order Summary:*\n`;
  message += `Subtotal: Rs. ${subtotal.toLocaleString('en-PK')}\n`;
  message += `Shipping: ${shippingCost === 0 ? 'FREE' : `Rs. ${shippingCost}`}\n`;
  message += `*Total: Rs. ${total.toLocaleString('en-PK')}*\n\n`;

  message += `*Payment Method:* ${paymentMethod === 'cod' ? 'Cash on Delivery' : 'Card Payment'}\n\n`;

  message += `Please confirm this order at your earliest convenience.\n`;
  message += `Thank you for shopping with Eye Studio! 😊`;

  return message;
};

export const sendOrderToWhatsApp = (orderData) => {
  const message = formatOrderMessage(orderData);
  const encodedMessage = encodeURIComponent(message);
  
  // WhatsApp API URL (opens WhatsApp with pre-filled message)
  const whatsappLink = `https://wa.me/${WHATSAPP_BUSINESS_NUMBER.replace(/[^\d]/g, '')}?text=${encodedMessage}`;
  
  return whatsappLink;
};

export const openWhatsAppOrder = (orderData) => {
  const whatsappLink = sendOrderToWhatsApp(orderData);
  window.open(whatsappLink, '_blank');
};

// Alternative: Send order to backend API if you have WhatsApp Business API integration
export const sendOrderViaAPI = async (orderData) => {
  try {
    const response = await fetch('/api/send-order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...orderData,
        whatsappNumber: WHATSAPP_BUSINESS_NUMBER,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to send order');
    }

    return await response.json();
  } catch (error) {
    console.error('Error sending order:', error);
    throw error;
  }
};

export default {
  formatOrderMessage,
  sendOrderToWhatsApp,
  openWhatsAppOrder,
  sendOrderViaAPI,
  WHATSAPP_BUSINESS_NUMBER,
};