const Footer = () => {
  return (
    <footer id="services" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background border-t border-border px-4 sm:px-6 md:px-8 lg:px-10">
      <div className="max-w-[1390px] mx-auto">
        <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-muted flex items-center justify-center">
            <span className="text-xs sm:text-sm font-semibold">KS</span>
          </div>
          <span className="text-xs sm:text-sm text-muted-foreground">Our Services</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 sm:mb-12 md:mb-16">
          See our all services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Design</h3>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-muted-foreground">
              <li>UI/UX Design</li>
              <li>Brand Identity</li>
              <li>Product Design</li>
              <li>Design Systems</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Development</h3>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-muted-foreground">
              <li>Web Development</li>
              <li>Mobile Apps</li>
              <li>E-commerce</li>
              <li>Custom Solutions</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Strategy</h3>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-muted-foreground">
              <li>Digital Strategy</li>
              <li>Brand Strategy</li>
              <li>Consulting</li>
              <li>Analytics</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Support</h3>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-muted-foreground">
              <li>Maintenance</li>
              <li>Optimization</li>
              <li>Training</li>
              <li>Documentation</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-6 sm:pt-8 border-t border-border gap-4 sm:gap-6">
          <div className="text-center md:text-left">
            <p className="text-xl sm:text-2xl font-bold">Kenzo®</p>
            <p className="text-xs sm:text-sm text-muted-foreground">Design & Development Studio</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-foreground transition-colors">Contact</a>
          </div>
        </div>

        <div className="text-center mt-6 sm:mt-8 text-xs sm:text-sm text-muted-foreground">
          © 2024 Kenzo Studio. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
