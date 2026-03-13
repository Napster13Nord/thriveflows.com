"use client";

import { FloatingWhatsApp } from "react-floating-whatsapp";

export default function WhatsAppButton() {
  return (
    <FloatingWhatsApp
      phoneNumber="3584578337530"
      accountName="André"
      avatar="/profile-photo.webp"
      chatMessage="Hi there! 👋 How can I help you recover lost revenue?"
      statusMessage="Typically replies within minutes"
      placeholder="Type a message..."
      darkMode
      notification={false}
      allowClickAway={false}
    />
  );
}
