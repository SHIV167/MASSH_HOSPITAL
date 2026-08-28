export default function HomePageHero() {
  return (
    <section className="relative bg-gradient-to-r from-teal-600 to-teal-800 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full translate-y-1/2 -translate-x-1/2"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-40">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Minimal Access Surgery Hospital
          </h1>
          <div className="flex items-center space-x-2 mb-8">
            <span className="bg-teal-500/30 text-white px-4 py-2 rounded-full text-sm font-medium">
              South Delhi
            </span>
            <span className="bg-teal-500/30 text-white px-4 py-2 rounded-full text-sm font-medium">
              West Delhi
            </span>
            <span className="bg-teal-500/30 text-white px-4 py-2 rounded-full text-sm font-medium">
              Noida
            </span>
            <span className="bg-teal-500/30 text-white px-4 py-2 rounded-full text-sm font-medium">
              Meerut
            </span>
            <span className="bg-teal-500/30 text-white px-4 py-2 rounded-full text-sm font-medium">
              Ludhiana
            </span>
          </div>
          <p className="text-xl md:text-2xl mb-10 text-teal-100 leading-relaxed max-w-2xl">
            Bringing you the best in technology and patient care at our network of super speciality hospitals where your health is our priority.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-white text-teal-600 px-8 py-4 rounded-lg font-bold hover:bg-teal-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Book an Appointment
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-all">
              Get a Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
