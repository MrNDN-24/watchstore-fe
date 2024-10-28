import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="content">
        {/* Nội dung chính của bạn */}
      </div>
      <Footer />
    </div>
  );
};

export default App;
