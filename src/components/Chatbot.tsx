'use client'

import { useState } from 'react'

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hello! How can I help you today?' },
  ])
  const [inputValue, setInputValue] = useState('')

  const handleSend = () => {
    if (!inputValue.trim()) return

    // Add user message
    const userMessage = { sender: 'user', text: inputValue }
    setMessages((prev) => [...prev, userMessage])

    // Simple bot response logic
    const botResponse = getBotResponse(inputValue.toLowerCase())
    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: 'bot', text: botResponse }])
    }, 500)

    setInputValue('')
  }

  const getBotResponse = (userInput: string): string => {
    if (userInput.includes('ticket') || userInput.includes('book')) {
      return 'We offer both domestic and international air tickets. Please call us at 01550077404 for booking assistance.'
    } else if (userInput.includes('visa')) {
      return 'We provide visa processing services for various countries. Contact us at 01550077404 for more information.'
    } else if (userInput.includes('emi')) {
      return 'Yes! We offer EMI facilities up to 36 months with 31 banks. Check our EMI calculator on the homepage.'
    } else if (userInput.includes('omrah') || userInput.includes('umrah') || userInput.includes('hajj')) {
      return 'We have a special Omrah package for October 2025 at ১,৩৫,০০০/- টাকা (14 days). Contact us for details!'
    } else if (userInput.includes('price') || userInput.includes('cost')) {
      return 'Prices vary by destination and season. Please call 01550077404 or WhatsApp us for current rates.'
    } else if (userInput.includes('location') || userInput.includes('office')) {
      return 'Our office is located at Nimnagar Balubari, Dinajpur. Visit us during business hours!'
    } else {
      return 'Thank you for your question! For immediate assistance, please call us at 01550077404 or WhatsApp us.'
    }
  }

  return (
    <>
      {/* Chatbot Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-teal-600 text-white w-20 h-20 rounded-full shadow-2xl hover:bg-teal-700 hover:scale-110 transition-all duration-300 flex items-center justify-center z-50 text-2xl"
        aria-label="Open chatbot"
      >
        {isOpen ? '✕' : '💬'}
      </button>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="fixed bottom-32 right-6 w-80 md:w-96 bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden border-2 border-teal-600">
          {/* Header */}
          <div className="bg-gradient-to-r from-teal-600 to-teal-500 text-white p-4">
            <h3 className="text-lg font-bold">Lets Fly Assistant</h3>
            <p className="text-xs opacity-90">We're here to help!</p>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 space-y-3 overflow-y-auto h-80 bg-gray-50">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[75%] p-3 rounded-lg ${
                    msg.sender === 'user'
                      ? 'bg-teal-600 text-white rounded-br-none'
                      : 'bg-white text-gray-800 rounded-bl-none shadow-md'
                  }`}
                >
                  <p className="text-sm">{msg.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-3 bg-white border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
              />
              <button
                onClick={handleSend}
                className="bg-teal-600 text-white px-4 py-2 rounded-full hover:bg-teal-700 transition duration-300"
                aria-label="Send message"
              >
                ➤
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
