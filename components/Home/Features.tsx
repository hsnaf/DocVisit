// import React from 'react'

// const Features = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Features

'use client';

import React from 'react';
import {
  Home,
  FileText,
  ShieldCheck,
  MapPin
} from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Home className="w-12 h-12 text-blue-800" />,
      title: 'Home Visits',
      description: 'Qualified doctors visit your home for personalized medical care and consultations.',
    },
    {
      icon: <FileText className="w-12 h-12 text-green-800" />,
      title: 'Report Analysis',
      description: 'Upload your medical reports and our doctors will analyze them for accurate diagnosis.',
    },
    {
      icon: <ShieldCheck className="w-12 h-12 text-red-800" />,
      title: 'Verified Doctors',
      description: 'All our doctors are verified professionals with valid medical qualifications.',
    },
    {
      icon: <MapPin className="w-12 h-12 text-yellow-800" />,
      title: 'Track Doctor',
      description: 'Real-time tracking of your doctor\'s location and estimated time of arrival.',
    },
  ];

  return (
    <div className="py-16 md:py-24">
      <div className="px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose DocVisit?</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            We bring qualified healthcare to your doorstep with our innovative on-demand doctor visit service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-xl p-6 shadow-lg border border-gray-100 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="mb-5">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
