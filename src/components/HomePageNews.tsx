export default function HomePageNews() {
  const news = [
    {
      title: "MASSH Prolife Hospital, in association with IMA organises a CME programme",
      description: "MASSH PROLIFE Hospital, in association with IMA, hosted a CME programme in Ludhiana to enhance medical expertise and knowledge sharing among healthcare professionals.",
      date: "Recent"
    },
    {
      title: "Patient Success Story: Emergency Bariatric Surgery",
      description: "A successful emergency bariatric surgery performed at MASSH, saving a patient's life and improving their quality of life significantly.",
      date: "Recent"
    },
    {
      title: "Successful RIRS Surgery for Large Kidney Stone",
      description: "Our expert urology team successfully performed RIRS surgery for a large kidney stone, providing relief to the patient with minimal invasion.",
      date: "Recent"
    },
    {
      title: "MASSH - PROLIFE Hospital Launching ROSA Robot",
      description: "MASSH-PROLIFE Hospital announces the launch of ROSA Robot for advanced orthopedic surgeries, bringing cutting-edge technology to patients.",
      date: "Recent"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            News & Events
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {news.map((item, index) => (
            <div key={index} className="bg-gradient-to-br from-teal-50 to-white rounded-2xl p-8 hover:shadow-2xl transition-all border border-teal-100 hover:border-teal-300 transform hover:-translate-y-1 group">
              <div className="flex items-center mb-4">
                <span className="bg-teal-600 text-white text-xs font-bold px-4 py-2 rounded-full">
                  {item.date}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-teal-700 transition-colors cursor-pointer group-hover:text-teal-700">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="border-2 border-teal-600 text-teal-600 px-8 py-4 rounded-xl font-bold hover:bg-teal-600 hover:text-white transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            View All News
          </button>
        </div>
      </div>
    </section>
  );
}
