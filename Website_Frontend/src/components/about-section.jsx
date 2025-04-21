import { Link } from "react-router-dom"
import { Button } from "./ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"

export default function AboutSection() {
  const features = [
    "State-of-the-art laser cutting technology",
    "Comprehensive in-house powder coating",
    "Professional zinc plating services",
    "Experienced engineering team",
    "Strict quality control processes",
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
            <img
              src="/images/placeholder.jpg"
              alt="Ashirwad Enterprises Facility"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Ashirwad Enterprises</h2>
            <div className="section-divider"></div>
            <p className="text-muted-foreground mb-6 mt-6">
              Ashirwad Enterprises is a leading manufacturer of precision sheet metal components, specializing in laser
              cutting technology, powder coating, and zinc plating services.
            </p>
            <p className="text-muted-foreground mb-8">
              With years of experience and a commitment to quality, we deliver exceptional products that meet the
              highest standards across various industries.
            </p>
            <ul className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Link to="/about">
              <Button className="group">
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
