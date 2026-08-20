import React, { useState } from 'react';
import '../styles/ContactModal.css'; // підключіть ваші стилі
import { sendContactInformation } from '../utils/ContactInformation';

export const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    email: '',
    telegram: '',
    phone: '',
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
    sendContactInformation(formData);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      {/* e.stopPropagation() блокує закриття при кліку всередині модалки */}
      <div className="contact-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ×
        </button>

        <div className="section-label">CONTACT US</div>

        <h2>Let's talk.</h2>

        <p>Tell us how we can help your business become more visible to AI.</p>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="telegram"
            placeholder="Telegram"
            value={formData.telegram}
            onChange={handleChange}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone number"
            value={formData.phone}
            onChange={handleChange}
          />

          <button type="submit">Send request →</button>
        </form>
      </div>
    </div>
  );
};