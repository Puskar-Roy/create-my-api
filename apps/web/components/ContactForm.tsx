// Import necessary modules from React
import React, { useState } from 'react';

// Interface to define the props for ContactForm
interface ContactFormProps {
    onClose: () => void; // Function to handle modal close event
}

// Functional component definition for ContactForm
const ContactForm: React.FC<ContactFormProps> = ({ onClose }) => {
    // State to manage form data (name, email, and message)
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    // State to track if the form has been submitted
    const [submitted, setSubmitted] = useState(false);

    // Event handler for input and textarea changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target; // Destructure name and value from the target element
        setFormData((prev) => ({ ...prev, [name]: value })); // Update the form state dynamically
    };

    // Event handler for form submission
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevent default form submission behavior
        console.log(formData); // Log form data (can be replaced with API call)
        setSubmitted(true); // Set the submitted state to true
        setFormData({ name: '', email: '', message: '' }); // Reset form fields after submission
    };

    return (
        <div className="modal">
            <div className="modal-content dark-theme">
                {/* Close button for the modal */}
                <span className="close" onClick={onClose}>&times;</span>

                {/* Conditional rendering based on form submission status */}
                {submitted ? (
                    <div className="success-message">Thank you for contacting us!</div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <h2 className="form-title neon-title">Contact Us</h2>

                        {/* Name Input Field */}
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

                        {/* Email Input Field */}
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

                        {/* Message Textarea */}
                        <label htmlFor="message">Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="form-textarea neon-input"
                        ></textarea>

                        {/* Submit Button */}
                        <button type="submit" className="submit-button neon-button">
                            Send Message
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default ContactForm; // Export the ContactForm component
