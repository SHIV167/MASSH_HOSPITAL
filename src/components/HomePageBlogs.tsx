export default function HomePageBlogs() {
  const blogs = [
    {
      title: "Learn About The Crucial Gallbladder Stone Symptoms in Women",
      category: "Health"
    },
    {
      title: "Appendix Pain: Location, Symptoms & When to See a Doctor",
      category: "Health"
    },
    {
      title: "10 Early Signs of Kidney Stones You Should Never Ignore",
      category: "Urology"
    },
    {
      title: "Fatty Liver Symptoms You Should Not Ignore",
      category: "Gastroenterology"
    },
    {
      title: "7 Signs Your Stomach Pain Could Be Serious",
      category: "General"
    },
    {
      title: "Best Laser Treatment for Fissure Pain in Delhi",
      category: "Treatment"
    },
    {
      title: "Uterine Fibroid Treatment in Delhi",
      category: "Gynaecology"
    },
    {
      title: "Bariatric Surgery in Delhi: Cost, Eligibility & Best Hospital",
      category: "Surgery"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Health Blogs
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogs.map((blog, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all border border-gray-100 hover:border-teal-200 transform hover:-translate-y-1 group cursor-pointer">
              <div className="h-40 bg-gradient-to-br from-teal-100 to-teal-200 flex items-center justify-center">
                <span className="text-5xl">📝</span>
              </div>
              <div className="p-6">
                <span className="text-teal-600 text-xs font-bold uppercase tracking-wide">
                  {blog.category}
                </span>
                <h3 className="text-lg font-bold text-gray-900 mt-2 mb-4 group-hover:text-teal-700 transition-colors line-clamp-3 leading-snug">
                  {blog.title}
                </h3>
                <div className="text-teal-600 font-semibold flex items-center group-hover:text-teal-700 transition-colors">
                  Read More 
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="border-2 border-teal-600 text-teal-600 px-8 py-4 rounded-xl font-bold hover:bg-teal-600 hover:text-white transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            View All Blogs
          </button>
        </div>
      </div>
    </section>
  );
}
