import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Shield, BarChart, Sparkles, Globe, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';

const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const features = [
    {
      icon: <BarChart className="h-8 w-8" />,
      title: 'Real-Time Analytics',
      description: 'Access verified economic indicators with interactive visualizations',
      color: 'emerald'
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: 'Growth Insights',
      description: 'Track GDP, inflation and key macro-economic metrics',
      color: 'blue'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Secure Platform',
      description: 'Authentication, encryption and reliable access controls',
      color: 'red'
    }
  ];

  const stats = [
    { value: '8.2%', label: 'GDP Growth', icon: <TrendingUp /> },
    { value: '₹296T', label: 'Economy Size', icon: <Globe /> },
    { value: '5.4%', label: 'Inflation Rate', icon: <Zap /> },
    { value: '100+', label: 'Indicators', icon: <BarChart /> }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden selection:bg-primary selection:text-primary-foreground">

      {/* Subtle Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50"
          style={{
            left: mousePosition.x - 200,
            top: mousePosition.y - 200,
            transition: 'all 0.1s ease-out' // Faster transition for less lag
          }}
        />
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 left-1/3 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px]" />
      </div>

      {/* Hero Section */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div
          className="text-center transition-all duration-700 ease-out"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }} // Subtler parallax
        >
          <div className="inline-flex items-center space-x-2 bg-muted/50 backdrop-blur-md border border-border/50 rounded-full px-6 py-2 mb-8 shadow-sm">
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-muted-foreground">
              Powered by Verified Indian Economic Data
            </span>
          </div>

          {/* Website Name */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight leading-[1.1]">
            <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-emerald-300">
              ArthaVision
            </span>
            <br />
            <span className="text-4xl md:text-6xl font-semibold text-muted-foreground">
              India’s Economic Intelligence Hub
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            Visualize, analyze, and understand India's national accounts with secure access and meaningful insights.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-20">
            <Link
              to="/signup"
              className="px-8 py-4 text-lg font-semibold bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all hover:scale-105 shadow-lg shadow-primary/20"
            >
              Start Exploring
            </Link>

            <Link
              to="/login"
              className="px-8 py-4 text-lg font-semibold bg-background border border-border text-foreground rounded-full hover:bg-muted transition-all hover:scale-105"
            >
              Sign In
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-card/30 backdrop-blur-md border border-border/50 rounded-2xl p-6 hover:bg-card/50 transition-all duration-300 hover:border-primary/30 group cursor-default"
              >
                <div className="text-primary mb-3 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-foreground tracking-tight">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary tracking-tight">
            Powerful Features
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to understand India's economy
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative bg-card/60 backdrop-blur-sm border border-border/50 rounded-3xl p-8 hover:bg-card hover:border-border transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
            >
              <div className={`inline-flex p-4 rounded-2xl bg-${feature.color}-500/10 text-${feature.color}-500 mb-6 bg-muted`}>
                {feature.icon}
              </div>

              <h3 className="text-2xl font-bold mb-3 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* DATA PREVIEW SECTION */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-card/40 backdrop-blur-md border border-border/50 rounded-[2.5rem] p-12 overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-50" />
          
          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <h2 className="text-4xl font-bold mb-8 text-foreground tracking-tight">
                Comprehensive Data Coverage
              </h2>
              <ul className="space-y-5">
                {[
                  'GDP & Growth Rates',
                  'State-wise Analysis',
                  'Trade & Export Data',
                  'Employment Statistics',
                  'Fiscal Indicators',
                  'Periodic Updates'
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center text-muted-foreground hover:text-foreground transition-colors group cursor-default"
                  >
                    <div className="w-2.5 h-2.5 bg-primary rounded-full mr-4 group-hover:scale-150 transition-transform shadow-sm shadow-primary/50" />
                    <span className="text-lg font-medium group-hover:translate-x-1 transition-transform">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mock Dashboard */}
            <div className="relative group perspective-1000">
               {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-1000" />
              
              <div className="relative bg-card/90 border border-border rounded-2xl p-6 shadow-2xl transform transition-transform duration-700 group-hover:rotate-y-2 group-hover:rotate-x-2">
                <div className="flex items-center justify-between mb-6">
                  <div className="h-4 w-32 bg-primary/20 rounded-full" />
                  <div className="flex space-x-2">
                    <div className="h-3 w-3 bg-red-500/50 rounded-full" />
                    <div className="h-3 w-3 bg-yellow-500/50 rounded-full" />
                    <div className="h-3 w-3 bg-green-500/50 rounded-full" />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="h-20 bg-muted/50 rounded-xl border border-border/50" />
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-28 bg-muted/50 rounded-xl border border-border/50" />
                    <div className="h-28 bg-muted/50 rounded-xl border border-border/50" />
                  </div>
                  <div className="h-32 bg-muted/50 rounded-xl border border-border/50" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA SECTION */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 mb-20">
        <div className="relative bg-primary rounded-[2.5rem] p-12 overflow-hidden text-center group">
          {/* Decorative Pattern */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
             <div className="absolute -right-20 -top-20 w-96 h-96 bg-white rounded-full blur-3xl" />
             <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-white rounded-full blur-3xl" />
          </div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
              Ready to Explore India's Economy?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto">
              Join analysts, researchers and learners gaining meaningful insights
            </p>

            <Link
              to="/signup"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-primary bg-white rounded-full hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-xl"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
