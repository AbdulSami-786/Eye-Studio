// WhatsApp Order Integration
// Sends order details to WhatsApp Business Number

const WHATSAPP_BUSINESS_NUMBER = "+923183140548"; // Eye Studio WhatsApp Number

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
    message += `${index + 1}. ${item.name}\n`;
    message += `   Qty: ${item.quantity} × Rs. ${item.price.toLocaleString('en-PK')}\n`;
    if (item.selectedVariant?.colorName) {
      message += `   Color: ${item.selectedVariant.colorName}\n`;
    }
    if (item.prescription?.lensName) {
      message += `   Lens: ${item.prescription.lensName} (+Rs. ${item.prescription.lensPrice})\n`;
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
