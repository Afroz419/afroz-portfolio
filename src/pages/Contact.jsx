import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Message sent successfully!');
    setTimeout(() => setStatus(''), 3000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: 'https://linkedin.com',
      color: 'hover:bg-blue-700'
    },
    {
      name: 'GitHub',
      icon: FaGithub,
      url: 'https://github.com',
      color: 'hover:bg-slate-700'
    },
    {
      name: 'Email',
      icon: FaEnvelope,
      url: 'mailto:afrozansary07@gmail.com',
      color: 'hover:bg-blue-800'
    }
  ];

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      detail: 'contact@example.com'
    },
    {
      icon: FaPhone,
      title: 'Phone',
      detail: '+977 980-7297180'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      detail: 'Jeetpur-6, Bara-Nepal'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Get In Touch
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            {/* Contact Details */}
            <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-blue-600">
              <h2 className="text-2xl font-semibold text-slate-900 mb-6">
                Contact Information
              </h2>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-blue-600 text-white p-3 rounded-lg">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-900">
                        {item.title}
                      </p>
                      <p className="text-slate-600">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                Connect With Me
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`bg-blue-600 text-white p-3 rounded-lg transition-all duration-300 ${social.color} transform hover:scale-110`}
                    aria-label={social.name}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-900 rounded-lg shadow-lg p-6 text-white">
              <h3 className="text-xl font-semibold mb-3">
                Response Time
              </h3>
              <p className="text-blue-100">
                I typically respond within 24 hours during business days.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-6">
                Send a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all outline-none"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all outline-none"
                      placeholder="someone@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all outline-none"
                    placeholder="How can I help you?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all outline-none resize-none"
                    placeholder="Write your message here..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-blue-900 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Send Message
                </button>

                {status && (
                  <div className="bg-blue-50 border border-blue-600 text-blue-800 px-4 py-3 rounded-lg text-center">
                    {status}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 bg-slate-800 rounded-lg shadow-lg p-8 text-center">
          <h3 className="text-2xl font-semibold text-white mb-4">
            Let's Build Something Amazing Together
          </h3>
          <p className="text-slate-300 max-w-2xl mx-auto mb-6">
            Whether you have a project in mind or just want to connect, I'm always open to discussing new opportunities and creative ideas.
          </p>
          <div className="flex justify-center space-x-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-700 text-white p-3 rounded-lg hover:bg-blue-600 transition-all duration-300"
                aria-label={social.name}
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;