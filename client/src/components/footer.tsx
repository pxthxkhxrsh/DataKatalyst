export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Data <span className="text-gradient">Katalyst</span>
          </h3>
          <p className="text-gray-600 mb-8">Ignite Intelligence. Empower Decisions. Transform Possibilities.</p>
          
          <div className="flex justify-center space-x-8 mb-8">
            <button 
              onClick={() => scrollToSection('overview')}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Overview
            </button>
            <button 
              onClick={() => scrollToSection('pillars')}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Pillars
            </button>
            <button 
              onClick={() => scrollToSection('features')}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Contact
            </button>
          </div>
          
          <div className="border-t border-gray-200 pt-8">
            <p className="text-gray-500 text-sm">&copy; 2024 Data Katalyst. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
