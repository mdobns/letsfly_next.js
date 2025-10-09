export default function Services() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <h1 className="text-4xl font-bold text-center mb-8 text-teal-700">Our Services</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        
        {/* Air Ticketing Services */}
        <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-xl shadow-lg border-2 border-teal-200">
          <div className="flex items-center mb-4">
            <span className="text-4xl mr-3">✈️</span>
            <h2 className="text-2xl font-bold text-teal-700">Air Ticketing Services</h2>
          </div>
          <ul className="space-y-2 text-gray-700">
            <li>✓ Domestic Flights (All airlines)</li>
            <li>✓ International Flights Worldwide</li>
            <li>✓ Group Bookings & Corporate Travel</li>
            <li>✓ Same-day Booking Available</li>
            <li>✓ Flexible Payment Options</li>
            <li>✓ 24/7 Customer Support</li>
          </ul>
          <div className="mt-4 p-3 bg-teal-600 text-white rounded-lg">
            <p className="font-bold">Special Offers:</p>
            <p className="text-sm">• Saidpur ↔ Cox's Bazar: BDT 7,250</p>
            <p className="text-sm">• Dhaka ↔ Saidpur: BDT 4,450</p>
          </div>
        </div>

        {/* Visa Processing */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl shadow-lg border-2 border-blue-200">
          <div className="flex items-center mb-4">
            <span className="text-4xl mr-3">🛂</span>
            <h2 className="text-2xl font-bold text-blue-700">Visa Processing Services</h2>
          </div>
          <ul className="space-y-2 text-gray-700">
            <li>✓ Tourist Visa (7-15 days processing)</li>
            <li>✓ Business Visa (10-20 days)</li>
            <li>✓ Student Visa (Complete documentation)</li>
            <li>✓ Medical Visa (5-10 days)</li>
            <li>✓ Family Visa Support</li>
            <li>✓ Document Preparation Assistance</li>
          </ul>
          <div className="mt-4 p-3 bg-blue-600 text-white rounded-lg">
            <p className="font-bold">Countries We Process:</p>
            <p className="text-sm">USA, UK, Canada, Australia, Schengen, and more</p>
          </div>
        </div>

        {/* Hajj & Umrah */}
        <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl shadow-lg border-2 border-green-200 md:col-span-2">
          <div className="flex items-center mb-4 justify-center">
            <span className="text-4xl mr-3">🕋</span>
            <h2 className="text-2xl font-bold text-green-700">Hajj & Umrah Packages</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-bold text-green-700 mb-2">Package Includes:</h3>
              <ul className="space-y-1 text-gray-700">
                <li>✓ Return Air Tickets</li>
                <li>✓ Hotel Accommodation (Makkah & Madinah)</li>
                <li>✓ AC Transport</li>
                <li>✓ Visa Processing</li>
                <li>✓ Experienced Guide</li>
                <li>✓ Group Tours to Holy Sites</li>
              </ul>
            </div>
            <div>
              <div className="bg-green-600 text-white p-4 rounded-lg text-center">
                <p className="text-lg font-bold">🌟 October 2025 Special</p>
                <p className="text-4xl font-black my-2">১,৩৫,০০০/-</p>
                <p className="text-sm">(14 Days Package)</p>
                <a href="tel:01550077404" className="mt-3 inline-block bg-yellow-400 text-green-900 px-6 py-2 rounded-full font-bold hover:bg-yellow-300">
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Travel Assistance */}
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl shadow-lg border-2 border-purple-200">
          <div className="flex items-center mb-4">
            <span className="text-4xl mr-3">🧳</span>
            <h2 className="text-2xl font-bold text-purple-700">Travel Assistance</h2>
          </div>
          <ul className="space-y-2 text-gray-700">
            <li>✓ Travel Insurance</li>
            <li>✓ Hotel Reservations</li>
            <li>✓ Airport Transfers</li>
            <li>✓ Travel Consultation</li>
            <li>✓ Currency Exchange Guidance</li>
            <li>✓ Pre-departure Briefing</li>
          </ul>
        </div>
      </div>

      {/* Visa on Arrival Countries */}
      <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
        <h2 className="text-3xl font-bold text-center mb-6 text-teal-700">🌍 Visa on Arrival Countries</h2>
        <p className="text-center mb-6 text-gray-600">
          Travel hassle-free to these countries with visa on arrival facility
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { country: 'Thailand', stay: '15-30 days', fee: '$35-40' },
            { country: 'Maldives', stay: '30 days', fee: 'Free' },
            { country: 'Dubai (UAE)', stay: '14-90 days', fee: 'Varies' },
            { country: 'Turkey', stay: '90 days', fee: '$50' },
            { country: 'Malaysia', stay: '30 days', fee: 'Free' },
            { country: 'Singapore', stay: '30 days', fee: 'Free (Transit)' },
          ].map((item, index) => (
            <div key={index} className="bg-gradient-to-br from-teal-50 to-blue-50 p-4 rounded-lg border border-teal-200">
              <h3 className="font-bold text-teal-700 text-lg mb-2">{item.country}</h3>
              <p className="text-sm text-gray-600">📅 Stay: {item.stay}</p>
              <p className="text-sm text-gray-600">💵 Fee: {item.fee}</p>
            </div>
          ))}
        </div>
      </div>

      {/* EMI Information */}
      <div className="bg-gradient-to-r from-teal-600 to-green-600 text-white p-8 rounded-xl shadow-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">💳 Flexible EMI Options</h2>
        <p className="text-lg mb-4">Pay for your travel in easy installments</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-4xl font-bold">36</p>
            <p>Months Maximum</p>
          </div>
          <div>
            <p className="text-4xl font-bold">31</p>
            <p>Partner Banks</p>
          </div>
          <div>
            <p className="text-4xl font-bold">0%*</p>
            <p>Interest Available</p>
          </div>
        </div>
        <p className="mt-4 text-sm opacity-90">*Conditions apply. Interest rates vary by bank and tenure.</p>
      </div>

      {/* Contact CTA */}
      <div className="mt-12 text-center">
        <h3 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h3>
        <p className="text-gray-600 mb-6">Contact us today for personalized service and the best deals</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="tel:01550077404" className="bg-teal-600 text-white px-8 py-3 rounded-full font-bold hover:bg-teal-700 transition">
            📞 Call Us
          </a>
          <a href="https://wa.me/8801550077404" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition">
            💬 WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}
