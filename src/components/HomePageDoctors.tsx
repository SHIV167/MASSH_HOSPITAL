export default function HomePageDoctors() {
  const doctors = [
    { name: "Dr. Sumit Paria", specialization: "General Surgery" },
    { name: "Dr. Priya Tayal", specialization: "Urology" },
    { name: "Dr. Varun Rehani", specialization: "Orthopaedics" },
    { name: "Dr. Abhinav Gupta", specialization: "Laparoscopy" },
    { name: "Dr. Dheeraj Shamsukha", specialization: "Gynaecology" },
    { name: "Dr. Vikas Jindal", specialization: "Bariatric Surgery" },
    { name: "Dr. Pushpinder Singh", specialization: "Urology" },
    { name: "Dr. Nitin Tandon", specialization: "Neurology" },
    { name: "Dr. Adil Khan", specialization: "General Surgery" },
    { name: "Dr. Anunai Srivastava", specialization: "Critical Care" },
    { name: "Dr. Abhijit Kumar", specialization: "Orthopaedics" },
    { name: "Dr. Amit Kumar", specialization: "Urology" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet our Doctors
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Our team of highly skilled and experienced medical professionals dedicated to providing exceptional patient care
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 text-center hover:shadow-2xl transition-all cursor-pointer border border-gray-100 hover:border-teal-200 transform hover:-translate-y-1 group"
            >
              <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center text-5xl shadow-lg group-hover:shadow-xl transition-all">
                👨‍⚕️
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-teal-700 transition-colors">
                {doctor.name}
              </h3>
              <p className="text-teal-600 text-sm font-medium">
                {doctor.specialization}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-teal-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-teal-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            View All Doctors
          </button>
        </div>
      </div>
    </section>
  );
}
