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
      color: 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/40'
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Phone',
      detail: '+91 93488 25087',
      link: 'tel:+919348825087',
      color: 'bg-blue-500/15 text-blue-400 border border-blue-500/40'
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Address',
      detail: 'Ministry of Statistics, New Delhi, India',
      link: null,
      color: 'bg-red-500/15 text-red-400 border border-red-500/40'
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Working Hours',
      detail: 'Mon - Fri: 9:00 AM - 6:00 PM',
      link: null,
      color: 'bg-yellow-500/15 text-yellow-400 border border-yellow-500/40'
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
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <div className="bg-card border-b border-border py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="text-muted-foreground mt-3">
            We're here to help with your queries about national economic intelligence
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Info Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, i) => (
            <div
              key={i}
              className="bg-card/60 backdrop-blur-xl border border-border/50 rounded-xl shadow-xl p-6 hover:-translate-y-1 transition hover:border-border"
            >
              <div className={`${info.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                {info.icon}
              </div>
              <h3 className="font-semibold mb-1 text-foreground">{info.title}</h3>
              {info.link ? (
                <a href={info.link} className="text-primary hover:underline text-sm">
                  {info.detail}
                </a>
              ) : (
                <p className="text-muted-foreground text-sm">{info.detail}</p>
              )}
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Form */}
          <div className="bg-card/60 backdrop-blur-xl border border-border/50 rounded-xl p-8 shadow-xl">
            <div className="flex items-center space-x-3 mb-6">
              <MessageSquare className="h-8 w-8 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">Send us a Message</h2>
            </div>

            {submitted && (
              <div className="mb-6 bg-emerald-500/10 border border-emerald-500/40 text-emerald-500 px-4 py-3 rounded-lg flex items-center space-x-2">
                <CheckCircle className="h-5 w-5" />
                <span>Your message has been sent successfully.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <input name="name" value={formData.name} onChange={handleChange} required
                placeholder="Full Name *"
                className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:ring-2 focus:ring-primary text-foreground placeholder:text-muted-foreground"
              />

              <input name="email" value={formData.email} onChange={handleChange} required
                placeholder="Email *"
                type="email"
                className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:ring-2 focus:ring-primary text-foreground placeholder:text-muted-foreground"
              />

              <input name="subject" value={formData.subject} onChange={handleChange} required
                placeholder="Subject *"
                className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:ring-2 focus:ring-primary text-foreground placeholder:text-muted-foreground"
              />

              <textarea name="message" value={formData.message} onChange={handleChange} required rows={5}
                placeholder="Your Message *"
                className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:ring-2 focus:ring-primary text-foreground placeholder:text-muted-foreground"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 rounded-full font-semibold flex items-center justify-center gap-2 disabled:opacity-50 shadow-lg shadow-primary/20"
              >
                {loading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary-foreground" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* FAQ + Map */}
          <div>
            <div className="bg-card/60 backdrop-blur-xl border border-border/50 rounded-xl p-8 shadow-xl mb-8">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Frequently Asked Questions</h2>

              <div className="space-y-6">
                {faqs.map((faq, i) => (
                  <div key={i} className="border-b border-border/50 pb-5">
                    <h3 className="font-semibold mb-1 text-foreground">{faq.question}</h3>
                    <p className="text-muted-foreground text-sm">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card/60 backdrop-blur-xl border border-border/50 rounded-xl p-8 shadow-xl">
              <h3 className="text-xl font-bold mb-4 text-foreground">Visit Us</h3>
              <div className="bg-muted/50 border border-border/50 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <MapPin className="h-12 w-12 mx-auto mb-2 text-primary" />
                  <p>Ministry of Statistics</p>
                  <p className="text-sm">Sardar Patel Bhawan, New Delhi</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Support Banner */}
        <div className="mt-16 bg-card border border-border rounded-xl p-8 text-center shadow-xl">
          <h2 className="text-2xl font-bold mb-2 text-foreground">Need Immediate Assistance?</h2>
          <p className="text-muted-foreground mb-6">
            Our team is available during business hours to support you
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <a href="tel:+919348825087"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-full font-semibold shadow-lg shadow-primary/20">
              Call Now
            </a>

            <a href="mailto:nationalacdashboard2025@gmail.com"
              className="bg-secondary hover:bg-secondary/80 text-secondary-foreground px-6 py-3 rounded-full font-semibold">
              Email Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
