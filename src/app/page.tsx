import Image from 'next/image'
import Link from 'next/link'
import EMICalculator from '@/components/EMICalculator'
import CollapsibleSection from '@/components/CollapsibleSection'
import BankList from '@/components/BankList'
import BankDetails from '@/components/BankDetails'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative text-white text-center flex items-center justify-center mx-4 sm:mx-auto max-w-5xl my-8 rounded-2xl shadow-2xl overflow-hidden"
        style={{
          backgroundImage: 'url(/images/hero-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '400px',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 to-green-900/90"></div>
        <div className="relative z-10 px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
            Welcome to Lets Fly
          </h1>
          <p className="text-lg md:text-xl mb-6 drop-shadow-md">
            Your Trusted Partner for Air Tickets & Visa Services
          </p>
          <Link
            href="/contact"
            className="bg-yellow-400 text-gray-900 font-bold py-3 px-8 rounded-full hover:bg-yellow-300 transition duration-300 shadow-lg inline-block"
          >
            Book Now
          </Link>
        </div>
      </section>

      {/* Special Omrah Campaign October 2025 */}
      <section className="bg-gradient-to-br from-green-600 via-teal-600 to-green-700 text-white mx-4 sm:mx-auto max-w-5xl my-8 rounded-2xl shadow-2xl overflow-hidden px-6 py-8 relative">
        {/* Decorative Background Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full -ml-48 -mb-48"></div>
        </div>

        <div className="relative">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-block bg-yellow-400 text-green-900 px-6 py-2 rounded-full font-bold text-sm mb-4 shadow-lg animate-pulse">
              🔥 স্পেশাল অফার
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-3 drop-shadow-lg">
              পবিত্র ওমরাহ প্যাকেজ ২০২৫
            </h2>
            <div className="flex items-center justify-center space-x-2 text-xl">
              <span className="bg-white/20 px-4 py-1 rounded-full backdrop-blur-sm">🕌 অক্টোবর ২০২৫</span>
              <span className="bg-white/20 px-4 py-1 rounded-full backdrop-blur-sm">📅 ১৪ দিন</span>
            </div>
          </div>

          {/* Price Highlight */}
          <div className="text-center mb-8 bg-white/10 backdrop-blur-md rounded-2xl p-8 border-2 border-white/30">
            <p className="text-lg mb-2 opacity-90">মাত্র</p>
            <div className="text-6xl md:text-7xl font-black mb-2 drop-shadow-2xl">
              ১,৩৫,০০০/-
            </div>
            <p className="text-2xl font-semibold opacity-95">টাকা</p>
          </div>

          {/* Package Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="bg-white/10 backdrop-blur-sm p-5 rounded-xl border border-white/20 hover:bg-white/20 transition duration-300">
              <div className="flex items-start space-x-3">
                <span className="text-3xl">✈️</span>
                <div>
                  <h4 className="font-bold text-lg mb-1">এয়ার টিকেট</h4>
                  <p className="text-sm opacity-90">রিটার্ন টিকেট অন্তর্ভুক্ত</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-5 rounded-xl border border-white/20 hover:bg-white/20 transition duration-300">
              <div className="flex items-start space-x-3">
                <span className="text-3xl">🏨</span>
                <div>
                  <h4 className="font-bold text-lg mb-1">হোটেল</h4>
                  <p className="text-sm opacity-90">মক্কা ও মদিনায় থাকার ব্যবস্থা</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-5 rounded-xl border border-white/20 hover:bg-white/20 transition duration-300">
              <div className="flex items-start space-x-3">
                <span className="text-3xl">🚐</span>
                <div>
                  <h4 className="font-bold text-lg mb-1">ট্রান্সপোর্ট</h4>
                  <p className="text-sm opacity-90">এসি গাড়ি সুবিধা</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-5 rounded-xl border border-white/20 hover:bg-white/20 transition duration-300">
              <div className="flex items-start space-x-3">
                <span className="text-3xl">🛂</span>
                <div>
                  <h4 className="font-bold text-lg mb-1">ভিসা প্রসেসিং</h4>
                  <p className="text-sm opacity-90">সম্পূর্ণ ভিসা সহায়তা</p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Link
              href="/contact"
              className="inline-block bg-yellow-400 text-green-900 px-10 py-4 rounded-full font-black text-lg hover:bg-yellow-300 hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              📞 এখনই বুকিং করুন
            </Link>
            <p className="mt-4 text-sm opacity-90">
              সীমিত আসন! যোগাযোগ: 01550077404
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white rounded-xl mx-4 sm:mx-auto max-w-5xl my-8 shadow-lg px-6 py-8">
        <h2 className="text-3xl font-semibold text-center mb-4">About Us</h2>
        <p className="text-center text-lg">
          LETS FLY is your trusted partner for domestic and international air tickets. We offer the best prices, easy booking, visa support, and EMI facilities with low interest rates.
        </p>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-gray-50 rounded-xl mx-4 sm:mx-auto max-w-5xl my-8 shadow-lg px-6 py-8">
        <h2 className="text-3xl font-semibold text-center mb-6">Our Services</h2>
        <ul className="list-none p-0 space-y-2">
          <li className="p-3 rounded-lg flex items-center bg-white shadow-sm">✔ Domestic Air Tickets Booking</li>
          <li className="p-3 rounded-lg flex items-center bg-white shadow-sm">✔ International Air Tickets Booking</li>
          <li className="p-3 rounded-lg flex items-center bg-white shadow-sm">✔ Visa Consultancy & Processing</li>
          <li className="p-3 rounded-lg flex items-center bg-white shadow-sm">✔ Group & Corporate Travel</li>
          <li className="p-3 rounded-lg flex items-center bg-white shadow-sm">✔ Travel Insurance Assistance</li>
          <li className="p-3 rounded-lg flex items-center bg-white shadow-sm">✔ EMI up to 36 months with 31 banks (Interest varies by duration)</li>
          <li className="p-3 rounded-lg flex items-center bg-white shadow-sm">✔ Payments: MasterCard, Visa, Cash, Online Payment</li>
        </ul>
      </section>

      {/* Offers Section */}
      <section className="bg-white rounded-xl mx-4 sm:mx-auto max-w-5xl my-8 shadow-lg px-6 py-8">
        <h2 className="text-3xl font-semibold text-center mb-4">Special Offers</h2>
        <p className="text-center text-lg">
          • Saidpur to Cox's Bazar at <strong>BDT 7,250</strong> only!<br />
          • Dhaka to Saidpur at <strong>BDT 4,450</strong> only!
        </p>
      </section>

      {/* EMI Calculator */}
      <EMICalculator />

      {/* SSL Bank List */}
      <BankList />

      {/* Bank Details */}
      <BankDetails />

      {/* Contact Section */}
      <section id="contact" className="bg-white rounded-xl mx-4 sm:mx-auto max-w-5xl my-8 shadow-lg px-6 py-8">
        <h2 className="text-3xl font-semibold text-center mb-4">Contact Us</h2>
        
        {/* Office Address */}
        <div className="mb-6 text-center bg-gradient-to-r from-teal-50 to-blue-50 p-6 rounded-lg border-2 border-teal-200">
          <h3 className="text-xl font-bold text-teal-700 mb-3 flex items-center justify-center">
            <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            Visit Our Office
          </h3>
          <p className="text-lg font-semibold text-gray-800">📍 Nimnagar Balubari, Dinajpur</p>
          <p className="text-sm text-gray-600 mt-2">Visit us for ticket booking and visa assistance</p>
          <a 
            href="https://maps.app.goo.gl/ocwtiPCMQvzTFssB6" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block mt-3 bg-teal-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-teal-700 transition duration-300"
          >
            🗺️ Open in Google Maps
          </a>
        </div>

        {/* Google Maps Embed */}
        <div className="mb-6 rounded-xl overflow-hidden shadow-lg border-4 border-teal-200">
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
        
        <p className="text-center mb-6">
          Phone/Whatsapp:
          <a href="tel:01550077404" className="text-teal-600 hover:text-teal-800 transition duration-300 ml-1">01550077404</a>,
          <a href="tel:01550077411" className="text-teal-600 hover:text-teal-800 transition duration-300 ml-1">01550077411</a>,
          <a href="tel:01550077413" className="text-teal-600 hover:text-teal-800 transition duration-300 ml-1">01550077413</a><br />
          Email: <a href="mailto:bdletsfly@gmail.com" className="text-teal-600 hover:text-teal-800 transition duration-300">bdletsfly@gmail.com</a>
        </p>
        
        {/* Call to Action */}
        <div className="text-center max-w-2xl mx-auto bg-gradient-to-r from-teal-50 to-blue-50 p-6 rounded-lg">
          <p className="text-lg text-gray-700 mb-4">We're here to help you with all your travel needs!</p>
          <p className="text-base text-gray-600 mb-4">Feel free to reach out through phone, WhatsApp, email, or visit our office.</p>
          <Link 
            href="/contact" 
            className="inline-block bg-teal-600 text-white px-8 py-3 rounded-full font-bold hover:bg-teal-700 transition duration-300 shadow-lg"
          >
            📝 Send Us a Message
          </Link>
        </div>
      </section>
    </>
  )
}
