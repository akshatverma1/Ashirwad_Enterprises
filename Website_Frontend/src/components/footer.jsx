import { Link } from "react-router-dom"
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-secondary pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <span className="text-2xl font-bold text-primary">Ashirwad</span>
              <span className="text-2xl font-bold">Enterprises</span>
            </Link>
            <p className="text-muted-foreground mb-6">
              Precision sheet metal manufacturing with cutting-edge laser technology, powder coating, and zinc plating
              services.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-muted-foreground hover:text-primary transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/photos" className="text-muted-foreground hover:text-primary transition-colors">
                  Photos
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/services#laser-cutting"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Laser Metal Cutting
                </Link>
              </li>
              <li>
                <Link
                  to="/services#powder-coating"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Powder Coating
                </Link>
              </li>
              <li>
                <Link
                  to="/services#zinc-plating"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Zinc Plating
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Custom Manufacturing
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Prototyping
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="h-5 w-5 text-primary mr-3 shrink-0" />
                <span className="text-muted-foreground">
                  123 Industrial Area, Phase II
                  <br />
                  Panchkula, Haryana 134109
                  <br />
                  India
                </span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 text-primary mr-3 shrink-0" />
                <span className="text-muted-foreground">+91 98765 43210</span>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 text-primary mr-3 shrink-0" />
                <span className="text-muted-foreground">info@ashirwadenterprises.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Ashirwad Enterprises. All rights reserved.
            </p>
            <div className="flex space-x-4 md:justify-end text-sm text-muted-foreground">
              <Link to="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="#" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link to="#" className="hover:text-primary transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
