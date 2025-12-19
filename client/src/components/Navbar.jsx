import { useContext, useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { BarChart3, LogOut, User } from 'lucide-react';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const location = useLocation();
  const [hidden, setHidden] = useState(false);
  const hideTimeout = useRef(null);
  const lastScrollY = useRef(typeof window !== 'undefined' ? window.scrollY : 0);

  useEffect(() => {
    // Show navbar when route changes (navigation)
    setHidden(false);
    // clear any pending timeouts
    if (hideTimeout.current) clearTimeout(hideTimeout.current);
  }, [location]);

  const showNavbar = () => {
    if (hideTimeout.current) clearTimeout(hideTimeout.current);
    setHidden(false);
  };

  const scheduleHide = (delay = 1200) => {
    if (hideTimeout.current) clearTimeout(hideTimeout.current);
    hideTimeout.current = setTimeout(() => setHidden(true), delay);
  };

  const onNavLinkClick = () => {
    // hide when user navigates via links
    setHidden(true);
  };

  // Hide on scroll down, show on scroll up and when near top
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      const y = window.scrollY || window.pageYOffset;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (y <= 10) {
            // at the very top, always show
            showNavbar();
          } else if (y > lastScrollY.current && y > 100) {
            // scrolling down -> hide
            if (hideTimeout.current) clearTimeout(hideTimeout.current);
            setHidden(true);
          } else if (y < lastScrollY.current) {
            // scrolling up -> reveal
            showNavbar();
            // schedule a hide after a short delay so it doesn't flicker
            scheduleHide(1200);
          }

          lastScrollY.current = y;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Invisible hotspot at the very top that reveals the navbar on hover */}
      <div
        className="fixed top-0 left-0 w-full h-3 z-40"
        onMouseEnter={showNavbar}
        onMouseLeave={() => scheduleHide(400)}
        onFocus={showNavbar}
        tabIndex={-1}
        aria-hidden="true"
      />

      <nav
        onMouseEnter={showNavbar}
        onMouseLeave={() => scheduleHide()}
        className={`fixed top-4 left-1/2 transform -translate-x-1/2 ${hidden ? '-translate-y-24' : 'translate-y-0'} w-[calc(100%-2rem)] max-w-7xl bg-white/80 dark:bg-gray-900/60 backdrop-blur-md border border-gray-200/40 dark:border-gray-700/40 rounded-lg shadow-lg z-50 transition-all duration-300 ease-in-out`}
      >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <BarChart3 className="h-8 w-8 text-blue-500" />
              <span className="font-extrabold text-2xl tracking-tight text-blue-700">National Accounts</span>
            </Link>
          </div>

          <div className="flex items-center space-x-6 md:space-x-8 lg:space-x-10">
            <Link
              to="/contact"
              onClick={onNavLinkClick}
              className="text-gray-700 dark:text-gray-300 hover:text-white hover:bg-blue-500/90 px-3 py-2 rounded-md text-sm font-medium transition-transform transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
            >
              Contact
            </Link>
            
            {user ? (
              <>
                <Link to="/dashboard" onClick={onNavLinkClick} className="hidden md:inline-flex text-gray-700 dark:text-gray-300 hover:text-white hover:bg-blue-500/90 px-3 py-2 rounded-md text-sm font-medium transition-transform transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400">
                  Dashboard
                </Link>
                <div className="flex items-center space-x-3 text-gray-800 dark:text-gray-200 flex-shrink-0">
                  <User className="h-5 w-5 text-gray-700 dark:text-gray-200 flex-shrink-0" />
                  <span className="text-sm font-medium px-3 py-1 rounded-full bg-blue-600 text-white shadow-sm whitespace-nowrap overflow-hidden truncate max-w-[9rem]">{user.name}</span>
                </div>
                <button
                  onClick={() => { logout(); setHidden(true); }}
                  className="flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition-transform transform hover:-translate-y-0.5 shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400 flex-shrink-0"
                >
                  <LogOut className="h-4 w-4" />
                  <span className="font-medium">Logout</span>
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  onClick={onNavLinkClick}
                  className="text-gray-700 dark:text-gray-200 hover:text-white hover:bg-blue-500/90 px-3 py-2 rounded-md text-sm font-medium transition-transform transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 flex-shrink-0"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  onClick={onNavLinkClick}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full transition-shadow shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 flex-shrink-0"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar;