'use client';

import { useState, FormEvent } from 'react';

interface ContactFormProps {
  variant?: 'newsletter' | 'full';
}

export default function ContactForm({ variant = 'newsletter' }: ContactFormProps) {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  // Full form states
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleNewsletterSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setLoading(false);
    setSuccess(true);
    setEmail('');
  };

  const handleFullFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    if (!name.trim()) {
      setError('Please enter your name');
      return;
    }

    if (!message.trim()) {
      setError('Please enter a message');
      return;
    }

    setLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setLoading(false);
    setSuccess(true);
    setEmail('');
    setName('');
    setCompany('');
    setMessage('');
  };

  if (variant === 'newsletter') {
    return (
      <form className="w-full relative" onSubmit={handleNewsletterSubmit} aria-label="Newsletter signup">
        <div className="flex border-b border-gray-700 pb-2 items-center">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 bg-transparent text-[#EBE6DF] placeholder-gray-500 outline-none text-lg"
            aria-label="Email address for newsletter"
          />
          <button
            type="submit"
            disabled={loading}
            className="cta-button ml-4 text-sm uppercase tracking-widest text-[#CCAA6E] hover:text-white transition-colors disabled:opacity-50"
          >
            {loading ? 'Subscribing...' : 'Subscribe'}
          </button>
          {loading && (
            <div className="absolute right-0 top-1/2 -translate-y-1/2">
              <svg className="animate-spin h-4 w-4 text-[#CCAA6E]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </div>
          )}
        </div>
        {error && (
          <p role="alert" className="text-red-400 text-sm mt-2">{error}</p>
        )}
        {success && (
          <p role="status" className="text-green-400 text-sm mt-2">Thank you for subscribing!</p>
        )}
      </form>
    );
  }

  // Full contact form
  return (
    <form className="w-full" onSubmit={handleFullFormSubmit} aria-label="Contact form">
      <div className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm uppercase tracking-widest text-gray-500 mb-2">
            Name *
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-transparent border-b border-gray-700 text-[#EBE6DF] py-2 outline-none focus:border-[#B35A46] transition-colors"
            required
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm uppercase tracking-widest text-gray-500 mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-transparent border-b border-gray-700 text-[#EBE6DF] py-2 outline-none focus:border-[#B35A46] transition-colors"
            required
          />
        </div>
        
        <div>
          <label htmlFor="company" className="block text-sm uppercase tracking-widest text-gray-500 mb-2">
            Company
          </label>
          <input
            type="text"
            id="company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="w-full bg-transparent border-b border-gray-700 text-[#EBE6DF] py-2 outline-none focus:border-[#B35A46] transition-colors"
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm uppercase tracking-widest text-gray-500 mb-2">
            Message *
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            className="w-full bg-transparent border-b border-gray-700 text-[#EBE6DF] py-2 outline-none focus:border-[#B35A46] transition-colors resize-none"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="cta-button bg-[#B35A46] text-white px-8 py-4 text-base font-medium hover:bg-[#963D30] disabled:opacity-50"
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </div>

      {error && (
        <p role="alert" className="text-red-400 text-sm mt-4">{error}</p>
      )}
      {success && (
        <p role="status" className="text-green-400 text-sm mt-4">Thank you! Your message has been sent.</p>
      )}
    </form>
  );
}