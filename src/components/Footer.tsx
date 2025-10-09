import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white mt-12">
      <div className="container mx-auto px-6 py-12 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Company Info */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-3">Lets Fly</h3>
            <p className="text-gray-300 text-sm">
              Your trusted partner for domestic and international air tickets. Fly hassle-free with the best prices and EMI facilities.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-xl font-bold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/" className="hover:text-teal-400 transition duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-teal-400 transition duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-teal-400 transition duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-teal-400 transition duration-300">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="hover:text-teal-400 transition duration-300">
                  Reviews
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h3 className="text-xl font-bold mb-3">Contact Us</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <span className="block font-semibold text-white">📍 Office Location:</span>
                Nimnagar Balubari, Dinajpur
              </li>
              <li>
                <span className="block font-semibold text-white">📞 Phone:</span>
                <a href="tel:01550077404" className="hover:text-teal-400 transition">01550077404</a>, 
                <a href="tel:01550077411" className="hover:text-teal-400 transition ml-1">01550077411</a>, 
                <a href="tel:01550077413" className="hover:text-teal-400 transition ml-1">01550077413</a>
              </li>
              <li>
                <span className="block font-semibold text-white">✉️ Email:</span>
                <a href="mailto:bdletsfly@gmail.com" className="hover:text-teal-400 transition">
                  bdletsfly@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>© 2025 Lets Fly. All rights reserved.</p>
          <p className="mt-2">
            Developed by{' '}
            <a
              href="https://github.com/mdobns"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-400 hover:text-teal-300 transition duration-300 font-semibold"
            >
              mdobns
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
