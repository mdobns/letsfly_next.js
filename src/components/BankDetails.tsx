'use client'

import { useState } from 'react'

export default function BankDetails() {
  const [isOpen, setIsOpen] = useState(false)

  const bankAccounts = [
    { bank: 'Pubali Bank PLC', account: 'LETS FLY', number: '3923201004643', branch: 'Dinajpur' },
    { bank: 'Dutch Bangla Bank PLC', account: 'LETS FLY', number: '1721100232451', branch: 'Dinajpur' },
  ]

  return (
    <section id="bank-details" className="bg-white rounded-xl mx-4 sm:mx-auto max-w-5xl my-8 shadow-lg px-6 py-8">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left"
      >
        <h2 className="text-3xl font-semibold">Bank Details for Payment</h2>
        <span className="text-3xl font-bold transition-transform duration-300" style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0)' }}>
          +
        </span>
      </button>
      {isOpen && (
        <div className="mt-6 overflow-hidden transition-all duration-500">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300 rounded-lg">
              <thead className="bg-teal-600 text-white">
                <tr>
                  <th className="py-3 px-4 text-left border-b">Bank Name</th>
                  <th className="py-3 px-4 text-left border-b">Account Name</th>
                  <th className="py-3 px-4 text-left border-b">Account Number</th>
                  <th className="py-3 px-4 text-left border-b">Branch</th>
                </tr>
              </thead>
              <tbody>
                {bankAccounts.map((account, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">{account.bank}</td>
                    <td className="py-3 px-4 border-b">{account.account}</td>
                    <td className="py-3 px-4 border-b font-mono">{account.number}</td>
                    <td className="py-3 px-4 border-b">{account.branch}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </section>
  )
}
