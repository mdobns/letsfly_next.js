'use client'

import { useState } from 'react'

export default function BankList() {
  const [isOpen, setIsOpen] = useState(false)

  const banks = [
    'Standard Chartered Bank (SCB)',
    'Eastern Bank Limited',
    'Dutch Bangla Bank Limited',
    'Southeast Bank Limited',
    'Standard Bank Limited',
    'Mutual Trust Bank Limited',
    'LankaBangla Finance',
    'NCC Bank Limited',
    'NRB Bank Limited',
    'Meghna Bank Limited',
    'Midland Bank Limited',
    'Jamuna Bank Limited',
    'Bank Asia Limited',
    'Dhaka Bank Limited',
    'SBAC Bank Limited',
    'NRBC Bank',
    'Shahjalal Islami Bank (SJIBL)',
    'United Commercial Bank (UCB)',
    'Exim Bank',
    'Prime Bank Limited',
    'Al-Arafah Islami Bank',
    'Community Bank Bangladesh',
    'One Bank Limited',
    'Trust Bank Limited',
    'Mercantile Bank Limited',
    'Premier Bank',
    'AB Bank Limited',
    'Pubali Bank',
    'Citizens Bank PLC',
  ]

  return (
    <section id="ssl-banks" className="bg-gray-50 rounded-xl mx-4 sm:mx-auto max-w-5xl my-8 shadow-lg px-6 py-8">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left"
      >
        <h2 className="text-3xl font-semibold">EMI with SSLCommerz - Bank List</h2>
        <span className="text-3xl font-bold transition-transform duration-300" style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0)' }}>
          +
        </span>
      </button>
      {isOpen && (
        <div className="mt-6 overflow-hidden transition-all duration-500">
          <p className="text-center mb-6">These banks offer EMI facilities through SSLCommerz:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {banks.map((bank, index) => (
              <div key={index} className="p-3 bg-white rounded-lg shadow-sm">
                {index + 1}. {bank}
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
