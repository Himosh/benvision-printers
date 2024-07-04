import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactSection.css';
import ContactImg from '../../Assets/LandingPage/ContactImg.png';
import Modal from '../Modal/Modal';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const validate = () => {
        const errors = {};
        if (!formData.name) {
            errors.name = "Name is required";
        }
        if (!formData.email) {
            errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = "Email is invalid";
        }
        if (!formData.phone) {
            errors.phone = "Phone number is required";
        } else if (!/^\d+$/.test(formData.phone)) {
            errors.phone = "Phone number is invalid";
        }
        if (!formData.message) {
            errors.message = "Message is required";
        }
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            emailjs.send('service_dir800i', 'template_58p36wj', formData, 'GUdObcS3xb-HzmRbQ')
                .then((response) => {
                    console.log('Email sent successfully!', response.status, response.text);
                    setModalMessage('Email sent successfully!');
                    setIsModalOpen(true);
                    setFormData({ name: '', email: '', phone: '', message: '' }); // Clear the form
                })
                .catch((error) => {
                    console.error('Failed to send email:', error);
                    setModalMessage('Failed to send email.');
                    setIsModalOpen(true);
                });
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <section className="contact-section">
            <div className="contact-image">
                <img src={ContactImg} alt="Contact" />
            </div>
            <div className="contact-section-head">
                <h2>Reach out to us</h2>
                <p>Fill up the form and we will get back to you within 24 hours.</p>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="form-label" htmlFor="name">Name</label>
                        <input
                            className="form-input"
                            id="name"
                            name="name"
                            type="text"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        {errors.name && <span className="error">{errors.name}</span>}
                    </div>

                    <div className="form-group">
                        <label className="form-label" htmlFor="email">Email Address</label>
                        <input
                            className="form-input"
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {errors.email && <span className="error">{errors.email}</span>}
                    </div>

                    <div className="form-group">
                        <label className="form-label" htmlFor="phone">Phone no</label>
                        <input
                            className="form-input"
                            id="phone"
                            name="phone"
                            type="text"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                        {errors.phone && <span className="error">{errors.phone}</span>}
                    </div>

                    <div className="form-group">
                        <label className="form-label" htmlFor="message">Message</label>
                        <textarea
                            className="form-input form-input-message"
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                        />
                        {errors.message && <span className="error">{errors.message}</span>}
                    </div>

                    <div className="form-group">
                        <button className="submit-button" type="submit">Submit</button>
                    </div>
                </form>

                {isModalOpen && (
                    <Modal message={modalMessage} onClose={() => setIsModalOpen(false)} />
                )}
            </div>
        </section>
    );
}

export default ContactSection;
