// import React from 'react'

// const TestimonialsSection = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default TestimonialsSection



'use client';

import React from 'react';
import {
  FilePlus,
  Stethoscope,
  Locate,
  ShieldCheck
} from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Request a Doctor',
    description: 'Describe your symptoms or upload medical reports through our platform.',
    icon: <FilePlus className="w-10 h-10 text-blue-100" />
  },
  {
    id: 2,
    title: 'Doctor Matching',
    description: 'We match you with a qualified doctor based on your medical needs.',
    icon: <Stethoscope className="w-10 h-10 text-white" />
  },
  {
    id: 3,
    title: 'Track Your Doctor',
    description: "Follow your doctor's location in real-time as they travel to your home.",
    icon: <Locate className="w-10 h-10 text-white" />
  },
  {
    id: 4,
    title: 'Get Treatment',
    description: 'Receive professional medical care and treatment in the comfort of your home.',
    icon: <ShieldCheck className="w-10 h-10 text-white" />
  }
];

const HowItWorks: React.FC = () => {
  return (
    <div className="py-16 md:py-24">
      <div className="px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How DocVisit Works</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Our simple process brings qualified healthcare professionals to your doorstep in just a few steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.id} className="text-center">
              <div className="relative inline-block mb-6">
                <div className="bg-blue-500 w-20 h-20 rounded-full flex items-center justify-center relative z-10">
                  {step.icon}
                </div>
                <div className="absolute inset-0 rounded-full bg-primary-600 opacity-20 animate-pulse-ring"></div>
                <div className="absolute -top-2 -right-2 w-8 h-8  rounded-full border-2 flex items-center justify-center font-bold">
                  {step.id}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="hidden lg:flex justify-between items-center mt-4 px-16">
          <div className="flex-1 h-1 bg-blue-600 relative">
            <div className="absolute top-1/2 left-0 w-2 h-2 rounded-full bg-blue-600 transform -translate-y-1/2"></div>
            <div className="absolute top-1/2 right-0 w-2 h-2 rounded-full bg-blue-600 transform -translate-y-1/2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
