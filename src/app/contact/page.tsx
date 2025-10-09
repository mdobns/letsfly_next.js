'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would send to a backend
    alert('Thank you for your message! We will contact you soon.')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <h1 className="text-4xl font-bold text-center mb-8 text-teal-700">Contact Us</h1>

      {/* Office Address Highlight */}
      <div className="mb-8 text-center bg-gradient-to-r from-teal-50 to-blue-50 p-6 rounded-lg border-2 border-teal-200">
        <h2 className="text-2xl font-bold text-teal-700 mb-3 flex items-center justify-center">
          <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
          Visit Our Office
        </h2>
        <p className="text-xl font-bold text-gray-800 mb-2">📍 Nimnagar Balubari, Dinajpur</p>
        <p className="text-gray-600 mb-4">Visit us for ticket booking and visa assistance</p>
        <a 
          href="https://maps.app.goo.gl/ocwtiPCMQvzTFssB6" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block bg-teal-600 text-white px-6 py-3 rounded-full font-bold hover:bg-teal-700 transition duration-300"
        >
          🗺️ Open in Google Maps
        </a>
      </div>

      {/* Google Maps */}
      <div className="mb-8 rounded-xl overflow-hidden shadow-lg border-4 border-teal-200">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.5977777777778!2d88.63333333333334!3d25.633333333333333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fb51c6c6c6c6c7%3A0x1234567890abcdef!2sNimnagar%20Balubari%2C%20Dinajpur!5e0!3m2!1sen!2sbd!4v1234567890123!5m2!1sen!2sbd"
          width="100%" 
          height="400" 
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Lets Fly Office Location"
        />
      </div>

      {/* Contact Information */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-lg text-center border-2 border-teal-100">
          <div className="text-4xl mb-3">📞</div>
          <h3 className="font-bold text-lg mb-2">Phone</h3>
          <a href="tel:01550077404" className="block text-teal-600 hover:text-teal-800">01550077404</a>
          <a href="tel:01550077411" className="block text-teal-600 hover:text-teal-800">01550077411</a>
          <a href="tel:01550077413" className="block text-teal-600 hover:text-teal-800">01550077413</a>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg text-center border-2 border-teal-100">
          <div className="text-4xl mb-3">✉️</div>
          <h3 className="font-bold text-lg mb-2">Email</h3>
          <a href="mailto:bdletsfly@gmail.com" className="text-teal-600 hover:text-teal-800">
            bdletsfly@gmail.com
          </a>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg text-center border-2 border-teal-100">
          <div className="text-4xl mb-3">💬</div>
          <h3 className="font-bold text-lg mb-2">WhatsApp</h3>
          <a 
            href="https://wa.me/8801550077404" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-teal-600 hover:text-teal-800"
          >
            Chat with us
          </a>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-teal-100">
        <h2 className="text-2xl font-bold text-center mb-6 text-teal-700">Send Us a Message</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
              Your Name *
            </label>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="01XXXXXXXXX"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
              Message *
            </label>
            <textarea
              id="message"
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Tell us about your travel plans..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-teal-600 text-white font-bold py-3 rounded-lg hover:bg-teal-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}
