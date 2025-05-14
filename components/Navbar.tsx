'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  HomeIcon,
  MagnifyingGlassIcon,
  ClipboardDocumentIcon,
  UserPlusIcon,
} from '@heroicons/react/24/outline';

const Navbar = () => {
  return (
    <>
      {/* Top Desktop Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-gray-950 shadow-sm ">
        <div className="max-w-7xl mx-auto px-4 py-4 border-b">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" passHref>
              <div className="flex items-center cursor-pointer">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">D</span>
                </div>
                <span className="ml-2 text-xl font-bold text-blue-600">DocVisit</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" passHref>
                <span className="text-gray-200 hover:text-blue-600 font-medium cursor-pointer">Home</span>
              </Link>
              <Link href="/discover" passHref>
                <span className="text-gray-200 hover:text-blue-600 font-medium cursor-pointer">Find Specialists</span>
              </Link>
              <Link href="/request-doctor" passHref>
                <span className="text-gray-200 hover:text-blue-600 font-medium cursor-pointer">Request Visit</span>
              </Link>
              <Link href="/request-doctor" passHref>
                <span className="bg-blue-600 text-200 font-semibold px-4 py-2 rounded hover:bg-blue-700 transition cursor-pointer">
                  Get Doctor Now
                </span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Bottom Mobile Nav */}
      <div className="fixed bottom-0 inset-x-0 bg-gray-950 shadow-t border-t md:hidden z-50">
        <div className="flex justify-between px-6 py-4">
          <Link href="/" passHref>
            <div className="flex flex-col items-center text-gray-600 hover:text-blue-600">
              <HomeIcon className="w-6 h-6" />
              <span className="text-xs">Home</span>
            </div>
          </Link>
          <Link href="/discover" passHref>
            <div className="flex flex-col items-center text-gray-600 hover:text-blue-600">
              <MagnifyingGlassIcon className="w-6 h-6" />
              <span className="text-xs">Discover</span>
            </div>
          </Link>
          <Link href="/request-doctor" passHref>
            <div className="flex flex-col items-center text-gray-600 hover:text-blue-600">
              <ClipboardDocumentIcon className="w-6 h-6" />
              <span className="text-xs">Request</span>
            </div>
          </Link>
          <Link href="/request-doctor" passHref>
            <div className="flex flex-col items-center text-blue-600 font-semibold">
              <UserPlusIcon className="w-6 h-6" />
              <span className="text-xs">Get Doctor</span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
