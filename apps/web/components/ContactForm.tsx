import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

interface ContactFormProps {
    onClose: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onClose }) => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="modal">
            <div className="modal-content dark-theme">
                <span className="close" onClick={onClose}>&times;</span>
                <div className="contact-container">
                    <div className="info-column">
                        <h2 className="info-title"><b>Contact Information</b></h2>
                        <p>
                            <FaMapMarkerAlt className="info-icon" size={40} />
                            <strong> Location:</strong><br /> Kolkata - 700121
                        </p>
                        <br />
                        <p>
                            <FaPhone className="info-icon" size={40} />
                            <strong> Phone:</strong><br /> +123 456 7890
                        </p>
                        <br />
                        <p>
                            <FaEnvelope className="info-icon" size={40} />
                            <strong> Email:</strong><br /> puskarroy600@gmail.com
                        </p>
                    </div>
                    <div className="separator" /> {/* Added separator */}
                    <div className="form-column">
                        {submitted ? (
                            <div className="success-message">Thank you for contacting us!</div>
                        ) : (
                            <form onSubmit={handleSubmit}>
                                <h2 className="form-title neon-title">Contact Us</h2>
                                <label htmlFor="name">Name:</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="form-input neon-input"
                                />
                                <label htmlFor="email">Email:</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="form-input neon-input"
                                />
                                <label htmlFor="message">Message:</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="form-textarea neon-input"
                                ></textarea>
                                <button type="submit" className="submit-button neon-button">Send Message</button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
