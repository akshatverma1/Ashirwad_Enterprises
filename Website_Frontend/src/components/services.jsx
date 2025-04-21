import { Link } from "react-router-dom"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { ArrowRight, Layers, Zap, Shield } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: "Laser Metal Cutting",
      description: "Precision cutting for various metals with exceptional accuracy and edge quality.",
      link: "/services#laser-cutting",
    },
    {
      icon: <Layers className="h-10 w-10 text-primary" />,
      title: "Powder Coating",
      description: "Durable, attractive finishes in a wide range of colors for metal components.",
      link: "/services#powder-coating",
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Zinc Plating",
      description: "Enhanced corrosion resistance and extended product lifespan for metal parts.",
      link: "/services#zinc-plating",
    },
  ]

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <div className="section-divider mx-auto"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-6">
            Comprehensive sheet metal manufacturing solutions with cutting-edge technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-none service-card">
              <CardContent className="p-8">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <Link to={service.link}>
                  <Button variant="link" className="p-0 h-auto group text-primary">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/services">
            <Button size="lg" variant="outline" className="group">
              View All Services
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
