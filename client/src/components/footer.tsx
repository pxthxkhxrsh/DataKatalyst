export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold gradient-text mb-4">Data Katalyst</h3>
          <p className="text-slate-400 mb-6">Ignite Intelligence. Empower Decisions. Transform Possibilities.</p>
          
          <div className="flex justify-center space-x-6 mb-8">
            <button 
              onClick={() => scrollToSection('overview')}
              className="text-slate-400 hover:text-white transition-colors"
            >
              Overview
            </button>
            <button 
              onClick={() => scrollToSection('pillars')}
              className="text-slate-400 hover:text-white transition-colors"
            >
              Pillars
            </button>
            <button 
              onClick={() => scrollToSection('features')}
              className="text-slate-400 hover:text-white transition-colors"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-slate-400 hover:text-white transition-colors"
            >
              Contact
            </button>
          </div>
          
          <div className="border-t border-slate-700 pt-8">
            <p className="text-slate-500 text-sm">&copy; 2024 Data Katalyst. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
