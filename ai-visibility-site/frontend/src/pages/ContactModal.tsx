import React, { useState } from 'react';
import '../styles/ContactModal.css';
import { sendContactInformation } from '../utils/ContactInformation';

export const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    email: '',
    telegram: '',
    phone: '',
  });
  
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      await sendContactInformation(formData);
      setStatus('success');
      setFormData({ email: '', telegram: '', phone: '' });

      // закрити модалку через паузу, щоб користувач встиг побачити "Дякуємо"
      setTimeout(() => {
        onClose();
        setStatus('idle');
      }, 1500);
    } catch (error) {
      setStatus('error');
    }
  };

  const handleClose = () => {
    setStatus('idle');
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="contact-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={handleClose}>
          ×
        </button>

        <div className="section-label">CONTACT US</div>
        <h2>Let's talk.</h2>
        <p>Tell us how we can help your business become more visible to AI.</p>

        {status === 'success' ? (
          <p className="form-success">Дякуємо! Ми звʼяжемось з вами найближчим часом.</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={status === 'loading'}
            />

            <input
              type="text"
              name="telegram"
              placeholder="Telegram"
              value={formData.telegram}
              onChange={handleChange}
              disabled={status === 'loading'}
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone number"
              value={formData.phone}
              onChange={handleChange}
              disabled={status === 'loading'}
            />

            <button type="submit" disabled={status === 'loading'}>
              {status === 'loading' ? 'Sending...' : 'Send request →'}
            </button>

            {status === 'error' && (
              <p className="form-error">
                Щось пішло не так. Спробуйте ще раз пізніше.
              </p>
            )}
          </form>
        )}
      </div>
    </div>
  );
};