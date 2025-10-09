export default function Reviews() {
  const reviews = [
    {
      name: 'Mohammad Rahman',
      location: 'Dhaka',
      rating: 5,
      date: 'January 2025',
      comment: 'Excellent service! Booked my Dubai trip with EMI facility. Very professional and helpful staff.',
      service: 'International Ticketing'
    },
    {
      name: 'Fatima Khatun',
      location: 'Dinajpur',
      rating: 5,
      date: 'December 2024',
      comment: 'Got my tourist visa for Thailand very quickly. The team guided me through every step.',
      service: 'Visa Processing'
    },
    {
      name: 'Abdul Karim',
      location: 'Rangpur',
      rating: 5,
      date: 'November 2024',
      comment: 'Best prices for domestic flights! Saved a lot on Dhaka-Cox\'s Bazar tickets.',
      service: 'Domestic Ticketing'
    },
    {
      name: 'Ayesha Begum',
      location: 'Dinajpur',
      rating: 5,
      date: 'October 2024',
      comment: 'Booked Umrah package for my parents. Everything was perfectly organized!',
      service: 'Hajj & Umrah'
    },
    {
      name: 'Kamal Hossain',
      location: 'Sylhet',
      rating: 5,
      date: 'September 2024',
      comment: 'EMI facility made my Malaysia trip affordable. Great customer support!',
      service: 'International Ticketing'
    },
    {
      name: 'Nasrin Akter',
      location: 'Dinajpur',
      rating: 5,
      date: 'August 2024',
      comment: 'Very responsive on WhatsApp. Got all my queries answered promptly.',
      service: 'Customer Service'
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <h1 className="text-4xl font-bold text-center mb-4 text-teal-700">Customer Reviews</h1>
      <p className="text-center text-gray-600 mb-12">See what our satisfied customers have to say</p>

      {/* Overall Rating */}
      <div className="bg-gradient-to-r from-teal-600 to-green-600 text-white p-8 rounded-xl shadow-lg mb-12 text-center">
        <div className="text-6xl font-bold mb-2">5.0</div>
        <div className="text-2xl mb-2">⭐⭐⭐⭐⭐</div>
        <p className="text-lg">Based on {reviews.length}+ reviews</p>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-lg border-2 border-teal-100 hover:border-teal-300 transition duration-300">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="font-bold text-lg text-gray-800">{review.name}</h3>
                <p className="text-sm text-gray-500">{review.location}</p>
              </div>
              <div className="flex items-center bg-yellow-100 px-2 py-1 rounded">
                <span className="text-yellow-600 font-bold">{review.rating}.0</span>
                <span className="ml-1">⭐</span>
              </div>
            </div>

            {/* Rating Stars */}
            <div className="text-yellow-500 mb-3">
              {'⭐'.repeat(review.rating)}
            </div>

            {/* Comment */}
            <p className="text-gray-700 mb-4 italic">"{review.comment}"</p>

            {/* Footer */}
            <div className="pt-4 border-t border-gray-200">
              <div className="flex items-center justify-between text-sm">
                <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full font-semibold">
                  {review.service}
                </span>
                <span className="text-gray-500">{review.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Review CTA */}
      <div className="mt-12 bg-gradient-to-r from-teal-50 to-blue-50 p-8 rounded-xl text-center border-2 border-teal-200">
        <h2 className="text-2xl font-bold mb-4 text-teal-700">Had a great experience with us?</h2>
        <p className="text-gray-700 mb-6">Share your feedback and help others make informed decisions</p>
        <a 
          href="/contact" 
          className="inline-block bg-teal-600 text-white px-8 py-3 rounded-full font-bold hover:bg-teal-700 transition duration-300"
        >
          Share Your Review
        </a>
      </div>

      {/* Trust Badges */}
      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="text-3xl font-bold text-teal-600">500+</div>
          <div className="text-sm text-gray-600">Happy Customers</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="text-3xl font-bold text-teal-600">5.0</div>
          <div className="text-sm text-gray-600">Average Rating</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="text-3xl font-bold text-teal-600">100%</div>
          <div className="text-sm text-gray-600">Satisfaction Rate</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="text-3xl font-bold text-teal-600">24/7</div>
          <div className="text-sm text-gray-600">Customer Support</div>
        </div>
      </div>
    </div>
  )
}
