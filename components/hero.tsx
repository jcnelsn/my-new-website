import Image from "next/image"

export default function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 relative pt-24 lg:pt-24">
        {/* Main Content */}
        <div className="grid grid-cols-[minmax(200px,1fr),auto,minmax(200px,1fr)] gap-4 lg:gap-16 items-center">
          {/* Left Text */}
          <div className="flex flex-col items-end space-y-8 lg:space-y-24 justify-self-end max-w-xl ml-auto relative z-10 mt-[8rem] pl-4 lg:pl-24">
            <div className="self-start">
              <div className="inline-flex items-center px-3 lg:px-4 py-1 lg:py-1.5 rounded-full border border-orange-600/20 bg-orange-50/95">
                <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-orange-600 mr-1.5 lg:mr-2" />
                <span className="text-[10px] lg:text-sm text-orange-900 whitespace-nowrap">Available for new opportunities</span>
              </div>
            </div>
            <div className="self-start">
              <h2 className="text-4xl md:text-5xl lg:text-8xl font-bold tracking-tight text-orange-950 whitespace-nowrap">
                Hi,
              </h2>
              <h2 className="text-4xl md:text-5xl lg:text-8xl font-bold tracking-tight text-orange-950 whitespace-nowrap">
                I&apos;m Jack
              </h2>
            </div>
          </div>

          {/* Center Image */}
          <div className="relative w-[280px] sm:w-[350px] md:w-[400px] h-[500px] md:h-[600px] lg:w-[570px] lg:h-[900px] mt-[-8rem] lg:mt-[-12rem]">
            <Image
              src="/images/headshot.png"
              alt="Portrait"
              fill
              className="object-cover object-[100%_center]"
              priority
            />
            <div 
              className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-orange-50/90 opacity-100" 
              style={{ 
                maskImage: 'linear-gradient(to bottom, transparent 85%, black)',
                WebkitMaskImage: 'linear-gradient(to bottom, transparent 85%, black)'
              }}
            />
          </div>

          {/* Right Text */}
          <div className="flex flex-col max-w-[150px] lg:max-w-sm mt-[8rem]">
            <p className="text-[10px] lg:text-sm text-orange-800 max-w-[280px] mb-[8rem] lg:mb-[11.5rem]">
              Specialized in UI/UX Design, Product Strategy, and AI Solutions.
            </p>
            
            <h2 className="text-lg lg:text-4xl font-medium tracking-tight text-orange-900 max-w-[200px]">
              PRODUCT
              <br />
              MANAGER
            </h2>
          </div>
        </div>
      </div>
    </div>
  )
}

