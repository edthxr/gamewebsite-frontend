import React from 'react';

const Cut = () => {
  return (
    <footer className="bg-gray-800 py-10 text-white ">
      <div className="container mx-auto text-center">
        <h3 className="text-lg font-bold">Sunset Grove</h3>
        <p className="text-sm mb-2">© {new Date().getFullYear()} Sunset Grove. All rights reserved.</p>
        <div className="flex justify-center space-x-4">
          <a href="https://twitter.com/SunsetGroveGame" className="text-gray-300 hover:text-white">Twitter</a>
          <a href="https://instagram.com/SunsetGroveOfficial" className="text-gray-300 hover:text-white">Instagram</a>
          <a href="https://facebook.com/SunsetGroveGame" className="text-gray-300 hover:text-white">Facebook</a>
        </div>
      </div>
    </footer>
  );
}

export default Cut;
