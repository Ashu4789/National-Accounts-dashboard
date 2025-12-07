import React from "react";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <header
        className="relative h-screen w-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://imgs.search.brave.com/XQHpfC7S_L7xa1tUWvDYKFEjSemGK0a4RJ4q4DgBYsA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzJkL2I0/LzIyLzJkYjQyMjkw/NmEwODAxMzFjNDhk/Y2M3YmU0NTFkYTU0/LmpwZw')",
        }}
      >
       {/* Overlay */}
<div className="absolute inset-0 bg-black opacity-50 pointer-events-none"></div>

{/* Top-right buttons */}
<div className="absolute top-6 right-6 flex gap-4 z-20">
  <a
    href="/login"
    className="bg-white text-green-600 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition transform hover:scale-105 cursor-pointer z-30"
  >
    Login
  </a>
  <a
    href="/signup"
    className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition transform hover:scale-105 cursor-pointer z-30"
  >
    Sign Up
  </a>
</div>



        {/* Hero content */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            National Accounts Dashboard
          </h1>
          <p className="text-lg md:text-2xl max-w-xl mx-auto text-white">
            Analyze economic indicators, manage datasets, and gain insights with ease.
          </p>
        </div>
      </header>

      {/* Features Section */}
      <section id="about" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
          Key Features
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">Interactive Charts</h3>
            <p className="text-gray-600">
              Visualize economic data dynamically to gain insights at a glance.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">Dataset Management</h3>
            <p className="text-gray-600">
              Easily manage and explore multiple datasets for different indicators.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">Responsive UI</h3>
            <p className="text-gray-600">
              Works seamlessly on desktop, tablet, and mobile devices.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="contact" className="bg-blue-300 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="mb-6">
          Have questions or need support? Reach out to our team.
        </p>
        <a
          href="/contact"
          className="bg-white text-green-600 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition transform hover:scale-105"
        >
          Contact Us
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-6 text-center">
        &copy; 2025 National Accounts Dashboard
      </footer>
    </div>
  );
};

export default HomePage;
