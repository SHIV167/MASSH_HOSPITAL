export default function KeyProcedures() {
  const procedures = [
    "3D Laparoscopy",
    "Laser",
    "Bone & Joint",
    "Cancer Care",
    "Gall Bladder Stone",
    "Hernia",
    "Fibroid Removal",
    "Bariatric Surgery",
    "Ovarian Cyst",
    "Appendicitis",
    "Kidney Stone",
    "Enlarged Prostate - BPH",
    "Ureteric Stricture",
    "Piles",
    "Arthritis",
    "Frozen Shoulder",
    "Disc Tear",
    "Sports Injuries",
    "Sciatica",
    "Back, Hip & Knee Pain",
    "Breast Cancer",
    "Colorectal Cancer",
    "Bladder Cancer",
    "Prostate Cancer",
    "Cervical Cancer",
    "Kidney Cancer"
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Key Procedures and Treatments
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Experience medical care that is at par with international standards at MASSH Group of Hospitals. With cutting-edge equipment and world-class surgical techniques, we ensure groundbreaking medical advancements and exceptional outcomes for your health and well-being.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {procedures.map((procedure, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer text-center"
            >
              <span className="text-gray-800 font-medium text-sm">{procedure}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
