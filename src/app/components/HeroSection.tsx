import Image from 'next/image';

const HeroSection = () => {
  return (
    // Red to White Gradient Background
    <section className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-red-100 via-red-50 to-white text-slate-800 py-20 px-4">
      
      <div className="relative z-10 flex w-full max-w-7xl items-center justify-between gap-12 flex-col md:flex-row">
        
        {/* Left Side: Text & Services */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6 md:w-1/2">
          
          {/* Main Title with solid color for contrast */}
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter text-red-800">
            Pasifixc.
          </h1>

          {/* CONTENT & HIGHLIGHT FROM YOU INSERTED HERE */}
          <p className="font-body text-xl text-gray-700 max-w-lg">
            <span className="bg-gradient-to-r from-red-800 to-red-600 text-transparent bg-clip-text font-semibold">Editing, Motion Graphics</span>, & More in the Media Field. We can be your <span className="bg-gradient-to-r from-red-600 to-red-800 text-transparent bg-clip-text font-semibold">Third-Party Partner</span> for Multimedia Needs.
          </p>
            
          {/* Three h1 changed to a list (better structure) while maintaining style */}
          <div className='mt-2 space-y-2 text-left self-center md:self-start'>
            <p className='bg-gradient-to-r from-gray-700 to-gray-500 text-transparent bg-clip-text font-semibold'>✓ Creative Responsibility for a Class Visual</p>
            <p className='bg-gradient-to-r from-gray-700 to-gray-500 text-transparent bg-clip-text font-semibold'>✓ Creative Studio | Motion Graphic</p>
            <p className='bg-gradient-to-r from-gray-700 to-gray-500 text-transparent bg-clip-text font-semibold'>✓ Post Production | Graphic Design</p>
          </div>
          
          {/* CTA Button adjusted to new theme */}
          <a href="#contact">
            <button className="mt-6 px-10 py-3 bg-red-700 text-white font-semibold rounded-lg shadow-lg shadow-red-500/30 hover:bg-red-800 hover:scale-105 transform transition-all duration-300">
              Contact Us
            </button>
          </a>
        </div>

        {/* Right Side: Image with softer shadow */}
        <div className="md:w-1/2 flex justify-center items-center">
          <Image
            src="/psfx.png"
            alt="Pasifixc Corporation Logo"
            width={450}
            height={225}
            priority
            className="rounded-lg shadow-2xl animate-float"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;