// import React from 'react'

// const SpecialistSection = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default SpecialistSection

'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  Heart,
  Syringe,
  Stethoscope,
  Droplet,
  TestTube,
  ArrowRight,
} from 'lucide-react';

const specialists = [
  {
    id: 1,
    name: 'Cardiology',
    description: 'Heart and cardiovascular specialists',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop',
    icon: <Heart className="w-6 h-6" />,
  },
  {
    id: 2,
    name: 'Diabetes',
    description: 'Diabetes management specialists',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1780&auto=format&fit=crop',
    icon: <Syringe className="w-6 h-6" />,
  },
  {
    id: 3,
    name: 'Gastroenterology',
    description: 'Digestive system specialists',
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=1931&auto=format&fit=crop',
    icon: <Stethoscope className="w-6 h-6" />,
  },
  {
    id: 4,
    name: 'Hepatology',
    description: 'Liver health specialists',
    image: 'https://images.unsplash.com/photo-1581595219315-a187dd41f7d0?q=80&w=1974&auto=format&fit=crop',
    icon: <Droplet className="w-6 h-6" />,
  },
  {
    id: 5,
    name: 'Dentistry',
    description: 'Oral health specialists',
    image: 'https://images.unsplash.com/photo-1609840113486-a4241c3e7604?q=80&w=2070&auto=format&fit=crop',
    icon: <TestTube className="w-6 h-6" />,
  },
];

export default function SpecialistSection() {
  return (
    <div className="py-16 md:py-24">
      <div className="px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Find Specialists For Your Needs</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            We connect you with the right medical specialists for your specific health conditions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialists.map((specialist) => (
            <Link
              key={specialist.id}
              href={`/discover?specialty=${specialist.name.toLowerCase()}`}
              className="group relative overflow-hidden rounded-2xl shadow-lg"
            >
              <div className="h-72 overflow-hidden">
                <Image
                  src={specialist.image}
                  alt={specialist.name}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end">
                <div className="mb-auto mt-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white">
                    {specialist.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">{specialist.name}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{specialist.description}</p>
                  <span className="inline-flex items-center text-white text-sm font-medium">
                    Find Doctors
                    <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/discover" className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition">
            View All Specialists
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
