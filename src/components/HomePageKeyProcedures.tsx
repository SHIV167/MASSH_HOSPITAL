export default function HomePageKeyProcedures() {
  const categories = [
    {
      name: "3D Laparoscopy",
      procedures: [
        { name: "Gall Bladder Stone", link: "/specialities/laparoscopic-general-surgery/gallstones" },
        { name: "Hernia", link: "/specialities/laparoscopic-general-surgery/hernia" },
        { name: "Fibroid Removal", link: "/specialities/laparoscopic-gynaecology-and-obstretics/fibroids" },
        { name: "Bariatric Surgery", link: "/specialities/metabolic-bariatric-surgery" },
        { name: "Ovarian Cyst", link: "#" },
        { name: "Appendicitis", link: "/specialities/laparoscopic-general-surgery/appendicitis" }
      ]
    },
    {
      name: "Laser",
      procedures: [
        { name: "Kidney Stone", link: "/specialities/urology/kidney-stones" },
        { name: "Enlarged Prostate - BPH", link: "/specialities/urology/benign-prostatic-hyperplasia-bph" },
        { name: "Ureteric Stricture", link: "/specialities/urology/ureteric-stricture" },
        { name: "Piles", link: "/specialities/laparoscopic-general-surgery/haemorrhoids" }
      ]
    },
    {
      name: "Bone & Joint",
      procedures: [
        { name: "Arthritis", link: "/specialities/orthopaedics-spine-and-sports-injury/arthritis" },
        { name: "Frozen Shoulder", link: "/specialities/orthopaedics-spine-and-sports-injury/frozen-shoulder" },
        { name: "Disc Tear", link: "/specialities/orthopaedics-spine-and-sports-injury/disc-tear" },
        { name: "Sports Injuries", link: "/specialities/orthopaedics-spine-and-sports-injury/sports-injuries" },
        { name: "Sciatica", link: "/specialities/orthopaedics-spine-and-sports-injury/sciatica" },
        { name: "Back, Hip & Knee Pain", link: "#" }
      ]
    },
    {
      name: "Cancer Care",
      procedures: [
        { name: "Breast Cancer", link: "#" },
        { name: "Colorectal Cancer", link: "#" },
        { name: "Bladder Cancer", link: "#" },
        { name: "Prostate Cancer", link: "#" },
        { name: "Cervical Cancer", link: "#" },
        { name: "Kidney Cancer", link: "#" }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Key Procedures and Treatments
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Experience medical care that is at par with international standards at MASSH Group of Hospitals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border border-gray-100">
              <h3 className="text-2xl font-bold text-teal-600 mb-6 pb-4 border-b-2 border-teal-100">
                {category.name}
              </h3>
              <ul className="space-y-4">
                {category.procedures.map((procedure, pIndex) => (
                  <li key={pIndex}>
                    <a
                      href={procedure.link}
                      className="text-gray-700 hover:text-teal-600 transition-colors text-sm font-medium flex items-center group"
                    >
                      <span className="w-2 h-2 bg-teal-500 rounded-full mr-3 group-hover:bg-teal-600 transition-colors"></span>
                      {procedure.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
