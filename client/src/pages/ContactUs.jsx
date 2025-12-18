import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, CheckCircle } from 'lucide-react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { sendContactMessage } = await import('../services/api');
      await sendContactMessage(formData);
      
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      alert(error.response?.data?.message || 'Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email',
      detail: 'nationalacdashboard2025@gmail.com',
      link: 'mailto:nationalacdashboard2025@gmail.com',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Phone',
      detail: '+91 93488 25087',
      link: 'tel:+919348825087',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Address',
      detail: 'Ministry of Statistics, New Delhi, India',
      link: null,
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Working Hours',
      detail: 'Mon - Fri: 9:00 AM - 6:00 PM',
      link: null,
      color: 'bg-orange-100 text-orange-600'
    }
  ];

  const faqs = [
    {
      question: 'How often is the data updated?',
      answer: 'Economic data is updated quarterly with preliminary estimates, followed by revised estimates annually.'
    },
    {
      question: 'Can I download historical data?',
      answer: 'Yes, historical data from 2000 onwards is available for download in the Reports section.'
    },
    {
      question: 'Is there an API for developers?',
      answer: 'API access is available for registered institutions. Please contact us for API documentation.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-blue-100">
            We're here to help with your queries about national accounts data
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className={`${info.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                {info.icon}
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{info.title}</h3>
              {info.link ? (
                <a
                  href={info.link}
                  className="text-blue-600 hover:text-blue-700 text-sm"
                >
                  {info.detail}
                </a>
              ) : (
                <p className="text-gray-600 text-sm">{info.detail}</p>
              )}
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center space-x-3 mb-6">
              <MessageSquare className="h-8 w-8 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">Send us a Message</h2>
            </div>

            {submitted && (
              <div className="mb-6 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg flex items-center space-x-2">
                <CheckCircle className="h-5 w-5" />
                <span>Thank you! Your message has been sent successfully.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Please describe your inquiry..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {loading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* FAQ Section */}
          <div>
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b pb-6 last:border-b-0 last:pb-0">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 text-sm">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Visit Us</h3>
              <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin className="h-12 w-12 mx-auto mb-2" />
                  <p>Map Integration</p>
                  <p className="text-sm">Ministry of Statistics</p>
                  <p className="text-sm">Sardar Patel Bhawan, New Delhi</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Support Section */}
        <div className="mt-16 bg-blue-600 rounded-xl shadow-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Need Immediate Assistance?</h2>
          <p className="mb-6 text-blue-100">
            Our support team is available during business hours to help you with any urgent queries
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+919348825087"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition font-semibold"
            >
              Call Now
            </a>
            <a
              href="mailto:nationalacdashboard2025@gmail.com"
              className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition font-semibold"
            >
              Email Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;