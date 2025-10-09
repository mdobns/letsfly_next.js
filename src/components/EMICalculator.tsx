'use client'

import { useState, ChangeEvent } from 'react'

interface BankRate {
  [key: string]: { [tenure: string]: number }
}

const directBankRates: BankRate = {
  mutual: { '3': 0, '6': 6, '9': 8.5, '12': 11, '18': 14, '24': 17, '30': 20, '36': 23 },
  ebl: { '3': 1.99, '6': 5.5, '9': 7.5, '12': 10, '18': 13.5, '24': 17.5, '30': 20.5, '36': 23.5 },
  ab: { '3': 3, '6': 6, '9': 8, '12': 11, '18': 14.5, '24': 18.5, '30': 21, '36': 24 },
  pubali: { '3': 2.5, '6': 5, '9': 7.5, '12': 10, '18': 13, '24': 16, '30': 19, '36': 22 },
}

const sslRates: { [key: string]: number } = {
  '3': 3.09, '6': 4.71, '9': 6.95, '12': 9.29,
  '18': 12.99, '24': 18.34, '30': 19.76, '36': 24.22
}

export default function EMICalculator() {
  const [directAmount, setDirectAmount] = useState<string>('')
  const [selectedBank, setSelectedBank] = useState<string>('')
  const [selectedTenure, setSelectedTenure] = useState<string>('')
  const [directResult, setDirectResult] = useState<string>('')

  const [sslAmount, setSSLAmount] = useState<string>('')
  const [sslTenure, setSSLTenure] = useState<string>('3')
  const [sslResult, setSSLResult] = useState<string>('')

  const calculateDirectEMI = () => {
    const amount = parseFloat(directAmount)
    if (isNaN(amount) || amount < 5000) {
      setDirectResult('Please enter an amount of at least BDT 5,000')
      return
    }

    if (!selectedBank || !selectedTenure) {
      setDirectResult('Please select a bank and tenure')
      return
    }

    const rate = directBankRates[selectedBank][selectedTenure]
    const interest = (amount * rate) / 100
    const totalAmount = amount + interest
    const monthlyEMI = totalAmount / parseInt(selectedTenure)

    setDirectResult(
      `Monthly EMI: BDT ${monthlyEMI.toFixed(2)} | Total Interest: BDT ${interest.toFixed(2)} | Total Amount: BDT ${totalAmount.toFixed(2)}`
    )
  }

  const calculateSSLEMI = () => {
    const amount = parseFloat(sslAmount)
    if (isNaN(amount) || amount < 5000) {
      setSSLResult('Please enter an amount of at least BDT 5,000')
      return
    }

    const rate = sslRates[sslTenure]
    const interest = (amount * rate) / 100
    const totalAmount = amount + interest
    const monthlyEMI = totalAmount / parseInt(sslTenure)

    setSSLResult(
      `Monthly EMI: BDT ${monthlyEMI.toFixed(2)} | Total Interest: BDT ${interest.toFixed(2)} | Total Amount: BDT ${totalAmount.toFixed(2)}`
    )
  }

  return (
    <section id="emi-section" className="bg-gray-50 rounded-xl mx-4 sm:mx-auto max-w-5xl my-8 shadow-lg px-6 py-8">
      <h2 className="text-3xl font-semibold text-center mb-8">EMI Calculators</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Direct EMI Calculator */}
        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col">
          <h3 className="text-2xl font-semibold mb-4 text-center">Direct EMI Calculator</h3>
          <div className="flex-1 flex flex-col">
            <input
              type="number"
              value={directAmount}
              onChange={(e) => {
                setDirectAmount(e.target.value)
                calculateDirectEMI()
              }}
              placeholder="Enter Amount"
              min="5000"
              className="w-full p-3 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <select
              value={selectedBank}
              onChange={(e) => {
                setSelectedBank(e.target.value)
                setSelectedTenure('')
              }}
              className="w-full p-3 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <option value="">Select Bank</option>
              <option value="mutual">Mutual Trust Bank</option>
              <option value="ebl">Eastern Bank PLC</option>
              <option value="ab">AB Bank PLC</option>
              <option value="pubali">Pubali Bank</option>
            </select>
            <select
              value={selectedTenure}
              onChange={(e) => {
                setSelectedTenure(e.target.value)
                if (selectedBank && directAmount) calculateDirectEMI()
              }}
              disabled={!selectedBank}
              className="w-full p-3 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 disabled:opacity-50"
            >
              <option value="">Select Tenure</option>
              {selectedBank && Object.keys(directBankRates[selectedBank]).map((tenure) => (
                <option key={tenure} value={tenure}>
                  {tenure} Months @ {directBankRates[selectedBank][tenure]}%
                </option>
              ))}
            </select>
            <div className="emi-result p-4 bg-gray-100 rounded-lg min-h-[80px] flex items-center justify-center text-sm">
              {directResult || 'Enter details to calculate'}
            </div>
          </div>
        </div>

        {/* SSLCommerz EMI Calculator */}
        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col">
          <h3 className="text-2xl font-semibold mb-4 text-center">EMI with SSLCommerz</h3>
          <div className="flex-1 flex flex-col">
            <input
              type="number"
              value={sslAmount}
              onChange={(e) => setSSLAmount(e.target.value)}
              placeholder="Enter Amount"
              min="5000"
              className="w-full p-3 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <select
              value={sslTenure}
              onChange={(e) => setSSLTenure(e.target.value)}
              className="w-full p-3 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              {Object.entries(sslRates).map(([months, rate]) => (
                <option key={months} value={months}>
                  {months} Months @ {rate}%
                </option>
              ))}
            </select>
            <button
              onClick={calculateSSLEMI}
              className="w-full bg-teal-600 text-white font-bold py-3 rounded-lg hover:bg-teal-700 transition duration-300 mb-4"
            >
              Calculate SSLCommerz EMI
            </button>
            <div className="emi-result p-4 bg-gray-100 rounded-lg min-h-[80px] flex items-center justify-center text-sm">
              {sslResult || 'Enter amount and calculate'}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
