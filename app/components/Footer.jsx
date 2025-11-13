const Footer = () => {
  return (
    <footer id="services" className="py-24 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
            <span className="text-sm font-semibold">KS</span>
          </div>
          <span className="text-sm text-muted-foreground">Our Services</span>
        </div>

        <h2 className="text-5xl md:text-6xl font-bold mb-16">
          See our all services
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div>
            <h3 className="font-semibold mb-4">Design</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>UI/UX Design</li>
              <li>Brand Identity</li>
              <li>Product Design</li>
              <li>Design Systems</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Development</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>Web Development</li>
              <li>Mobile Apps</li>
              <li>E-commerce</li>
              <li>Custom Solutions</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Strategy</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>Digital Strategy</li>
              <li>Brand Strategy</li>
              <li>Consulting</li>
              <li>Analytics</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>Maintenance</li>
              <li>Optimization</li>
              <li>Training</li>
              <li>Documentation</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border">
          <div className="mb-4 md:mb-0">
            <p className="text-2xl font-bold">Kenzo®</p>
            <p className="text-sm text-muted-foreground">Design & Development Studio</p>
          </div>
          
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-foreground transition-colors">Contact</a>
          </div>
        </div>

        <div className="text-center mt-8 text-sm text-muted-foreground">
          © 2024 Kenzo Studio. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
