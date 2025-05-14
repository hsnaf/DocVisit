// import React from 'react';
// import Link from 'next/link';

// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-gray-300">
//       <div className="container-custom py-12">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           {/* Brand */}
//           <div className="col-span-1 md:col-span-1">
//             <div className="flex items-center">
//               <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
//                 <span className="text-white font-bold text-xl">D</span>
//               </div>
//               <span className="ml-2 text-xl font-bold text-white">DocVisit</span>
//             </div>
//             <p className="mt-4 text-gray-400 text-sm">
//               Bringing qualified healthcare to your doorstep. Our mission is to make healthcare accessible to everyone in India.
//             </p>
//           </div>
          
//           {/* Links */}
//           <div>
//             <h3 className="text-white font-semibold text-lg mb-4">Services</h3>
//             <ul className="space-y-2">
//               <li>
//                 <Link href="/request-doctor">
//                   <a className="text-gray-400 hover:text-white transition">Home Doctor Visit</a>
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/discover">
//                   <a className="text-gray-400 hover:text-white transition">Specialist Doctors</a>
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/">
//                   <a className="text-gray-400 hover:text-white transition">Upload Medical Reports</a>
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/">
//                   <a className="text-gray-400 hover:text-white transition">Doctor Tracking</a>
//                 </Link>
//               </li>
//             </ul>
//           </div>
          
//           {/* Support */}
//           <div>
//             <h3 className="text-white font-semibold text-lg mb-4">Support</h3>
//             <ul className="space-y-2">
//               <li>
//                 <a href="#" className="text-gray-400 hover:text-white transition">
//                   Help Center
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-400 hover:text-white transition">
//                   Privacy Policy
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-400 hover:text-white transition">
//                   Terms of Service
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-400 hover:text-white transition">
//                   FAQs
//                 </a>
//               </li>
//             </ul>
//           </div>
          
//           {/* Contact */}
//           <div>
//             <h3 className="text-white font-semibold text-lg mb-4">Contact</h3>
//             <ul className="space-y-2">
//               <li className="flex items-center">
//                 <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//                 </svg>
//                 <span>+91 98765 43210</span>
//               </li>
//               <li className="flex items-center">
//                 <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                 </svg>
//                 <span>contact@docvisit.in</span>
//               </li>
//               <li className="flex items-center">
//                 <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                 </svg>
//                 <span>Mumbai, Maharashtra, India</span>
//               </li>
//             </ul>
//           </div>
//         </div>
        
//         {/* Bottom */}
//         <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
//           <p>© {new Date().getFullYear()} DocVisit. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 px-4 md:pb-0 pb-10">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">D</span>
              </div>
              <span className="ml-2 text-xl font-bold text-white">DocVisit</span>
            </div>
            <p className="mt-4 text-gray-400 text-sm">
              Bringing qualified healthcare to your doorstep. Our mission is to make healthcare accessible to everyone in India.
            </p>
          </div>
          
          {/* Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/request-doctor" className="text-gray-400 hover:text-white transition">
                  Home Doctor Visit
                </Link>
              </li>
              <li>
                <Link href="/discover" className="text-gray-400 hover:text-white transition">
                  Specialist Doctors
                </Link>
              </li>
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition">
                  Upload Medical Reports
                </Link>
              </li>
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition">
                  Doctor Tracking
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>contact@docvisit.in</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Mumbai, Maharashtra, India</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} DocVisit. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
