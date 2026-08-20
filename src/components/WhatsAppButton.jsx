import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton({
  message = "Hello NatyaShri, I would like to enquire about Bharatanatyam classes."
}) {
  const whatsappNumber = "919172890424";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-floating"
      aria-label="Chat with NatyaShri on WhatsApp"
    >
      <FaWhatsapp className="whatsapp-icon" />
    </a>
  );
}

export default WhatsAppButton;