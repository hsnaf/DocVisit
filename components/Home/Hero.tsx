import Link from 'next/link';
import Image from 'next/image';


const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-primary-50 to-primary-100 py-16 md:py-24">
      <div className="px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="gradient-text">Doctor Visits</span>
              <br />
              At Your Doorstep
            </h1>
            <p className="text-gray-600 text-lg mb-8 max-w-lg">
              Request qualified doctors to your home based on your symptoms or medical reports. Get expert medical care without leaving your comfort zone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/request-doctor" className="text-white bg-gray-700 rounded-2xl hover:bg-black text-center px-8 py-3 text-lg">
                Request Doctor
              </Link>
              <Link href="/discover" className="text-white bg-gray-700 rounded-2xl hover:bg-black text-center px-8 py-3 text-lg">
                Find Specialists
              </Link>
            </div>

            <div className="mt-12 flex items-center">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((idx) => (
                  <div
                    key={idx}
                    className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center overflow-hidden"
                  >
                    <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                ))}
              </div>
              <div className="ml-4">
                <div className="text-primary-600 font-semibold">4,500+ Users</div>
                <div className="text-gray-500 text-sm">Trust our service</div>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 relative">
            <div className="relative">
              <div className="absolute inset-0 bg-primary-500 rounded-3xl blur-xl opacity-20 transform -rotate-6"></div>
              <div className="relative bg-white rounded-3xl shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1651008376512-301d69c84757?q=80&w=1974&auto=format&fit=crop"
                  alt="Doctor with patient"
                  className="w-full h-96 object-cover object-center"
                />
                    {/* <Image
                        // src="https://images.unsplash.com/photo-1651008376512-301d69c84757?q=80&w=1974&auto=format&fit=crop"
                        //   src="https://images.unsplash.com/photo-1651008376512-301d69c84757?auto=format&fit=crop&w=1974&q=80"
                          src="https://images.unsplash.com/photo-1588776814546-b77e42de06c4?auto=format&fit=crop&w=1974&q=80"


                        alt="Doctor with patient"
                        fill
                        className="object-cover object-center rounded-3xl"
                    /> */}
                <div className="absolute -bottom-6 -right-8 bg-white rounded-lg p-4 shadow-lg w-48">
                  <div className="flex items-center mb-2">
                    <div className="w-3 h-3 bg-success-500 rounded-full mr-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success-400 opacity-75"></span>
                    </div>
                    <span className="text-success-700 text-green-800 font-medium text-sm">Available Now</span>
                  </div>
                  <div className="text-green-800 font-medium">Dr. Sharma is 20 mins away</div>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -left-6 bg-white rounded-lg p-4 shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="flex items-center justify-center w-10 h-10 bg-primary-100 rounded-full">
                  <svg className="w-6 h-6 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-blue-800">Quick Response</div>
                  <div className="font-semibold text-blue-800">Under 30 mins</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
