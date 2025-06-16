import React from 'react';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-9xl font-extrabold text-red-600 mb-4">404</h1>
      <p className="text-2xl font-semibold text-gray-700 mb-6">Oops! Page Not Found</p>
      <p className="text-gray-600 mb-8 max-w-md text-center">
        The page you are looking for does not exist or has been moved.
      </p>
      <a
        href="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
      >
        Go to Home
      </a>
    </div>
  );
};

export default NotFound;
