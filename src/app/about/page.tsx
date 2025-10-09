export default function About() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <section className="bg-white rounded-xl shadow-lg px-6 py-8 mb-8">
        <h1 className="text-4xl font-bold text-center mb-6 text-teal-700">About Lets Fly</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-gray-700 mb-4">
            <strong>Lets Fly</strong> is your trusted travel partner in Bangladesh, specializing in domestic and international air ticket booking, visa processing, and comprehensive travel services. Based in Dinajpur, we have been serving customers with dedication and professionalism.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-teal-600">Our Mission</h2>
          <p className="text-gray-700 mb-4">
            To make travel accessible and hassle-free for everyone by providing the best prices, excellent customer service, and flexible payment options including EMI facilities.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-teal-600">Why Choose Us?</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">✓</span>
              <span><strong>Best Prices:</strong> Competitive rates for all domestic and international flights</span>
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">✓</span>
              <span><strong>EMI Facilities:</strong> Up to 36 months with 31 partner banks</span>
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">✓</span>
              <span><strong>Visa Support:</strong> Complete visa processing assistance for multiple countries</span>
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">✓</span>
              <span><strong>24/7 Support:</strong> Always available via phone, WhatsApp, and email</span>
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">✓</span>
              <span><strong>Hajj & Umrah:</strong> Specialized packages for religious travel</span>
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-teal-600">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-teal-50 p-4 rounded-lg">
              <h3 className="font-bold text-teal-700 mb-2">Air Ticketing</h3>
              <p className="text-sm text-gray-600">Domestic and international flight bookings with all major airlines</p>
            </div>
            <div className="bg-teal-50 p-4 rounded-lg">
              <h3 className="font-bold text-teal-700 mb-2">Visa Processing</h3>
              <p className="text-sm text-gray-600">Tourist, business, student, medical, and family visas</p>
            </div>
            <div className="bg-teal-50 p-4 rounded-lg">
              <h3 className="font-bold text-teal-700 mb-2">Hajj & Umrah</h3>
              <p className="text-sm text-gray-600">Complete pilgrimage packages with accommodation and transport</p>
            </div>
            <div className="bg-teal-50 p-4 rounded-lg">
              <h3 className="font-bold text-teal-700 mb-2">Travel Insurance</h3>
              <p className="text-sm text-gray-600">Comprehensive travel insurance assistance</p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-teal-600">Our Location</h2>
          <p className="text-gray-700 mb-4">
            Visit our office at <strong>Nimnagar Balubari, Dinajpur</strong> for personalized service and consultation.
          </p>

          <div className="bg-teal-600 text-white p-6 rounded-lg text-center mt-8">
            <p className="text-xl font-bold mb-2">Ready to fly with us?</p>
            <p className="mb-4">Contact us today for the best travel deals!</p>
            <a href="tel:01550077404" className="bg-white text-teal-600 px-6 py-2 rounded-full font-bold inline-block hover:bg-yellow-400 transition duration-300">
              📞 Call Now: 01550077404
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
