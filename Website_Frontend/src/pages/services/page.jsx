import { Card, CardContent } from "../../components/ui/card"
import { Button } from "../../components/ui/button"
import { ArrowRight, Layers, Zap, Shield } from "lucide-react"
// import Image from "next/image"
import {Link} from "react-router-dom"

export default function ServicesPage() {
  const services = [
    {
      id: "laser-cutting",
      title: "Laser Metal Cutting",
      icon: <Zap className="h-8 w-8 text-primary" />,
      description:
        "Precision laser cutting services for a wide range of metals with exceptional accuracy and edge quality.",
      features: [
        "High-precision cutting with ±0.1mm accuracy",
        "Capability to cut various materials including stainless steel, mild steel, aluminum",
        "Complex shape cutting with minimal material waste",
        "Thickness range from 0.5mm to 20mm",
        "Rapid turnaround times for urgent projects",
      ],
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "powder-coating",
      title: "Powder Coating",
      icon: <Layers className="h-8 w-8 text-primary" />,
      description: "Premium powder coating services that provide durable, attractive finishes for metal components.",
      features: [
        "Wide range of colors and finishes available",
        "Environmentally friendly process with no VOCs",
        "Superior durability and corrosion resistance",
        "Even coating application for consistent results",
        "Quick curing process for efficient production",
      ],
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "zinc-plating",
      title: "Zinc Plating",
      icon: <Shield className="h-8 w-8 text-primary" />,
      description: "Professional zinc plating services that enhance corrosion resistance and extend product lifespan.",
      features: [
        "Excellent corrosion protection for steel components",
        "Uniform coating thickness for consistent protection",
        "Available in clear, yellow, and black passivation",
        "Compliant with RoHS and REACH regulations",
        "Suitable for both decorative and functional applications",
      ],
      image: "/placeholder.svg?height=600&width=800",
    },
  ]

  return (
    <div className="container mx-auto py-16 px-4">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
        <div className="section-divider mx-auto"></div>
        <p className="text-muted-foreground max-w-3xl mx-auto mt-6">
          Comprehensive sheet metal manufacturing solutions with cutting-edge technology and exceptional quality
        </p>
      </div>

      <div className="space-y-24">
        {services.map((service, index) => (
          <div key={service.id} id={service.id} className="scroll-mt-20">
            <div
              className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
            >
              <div className={index % 2 === 1 ? "md:order-2" : ""}>
                <div className="flex items-center mb-4">
                  {service.icon}
                  <h2 className="text-3xl font-bold ml-3">{service.title}</h2>
                </div>
                <div className="section-divider"></div>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact">
                  <Button className="group">
                    Request Quote
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
              <div
                className={`relative h-[400px] rounded-lg overflow-hidden shadow-xl ${index % 2 === 1 ? "md:order-1" : ""}`}
              >
                
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-24 bg-secondary rounded-lg p-8 md:p-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">Custom Manufacturing Solutions</h2>
          <div className="section-divider mx-auto"></div>
          <p className="text-muted-foreground max-w-3xl mx-auto mt-6">
            Need a specialized solution? We offer custom manufacturing services tailored to your specific requirements.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-background border-none">
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-2">Prototyping</h3>
              <p className="text-muted-foreground mb-4">
                Rapid prototyping services to bring your concepts to life quickly and efficiently.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-background border-none">
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-2">Small Batch Production</h3>
              <p className="text-muted-foreground mb-4">
                Cost-effective small batch manufacturing with the same quality as large production runs.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-background border-none">
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-2">Design Assistance</h3>
              <p className="text-muted-foreground mb-4">
                Expert design consultation to optimize your components for manufacturing.
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="text-center mt-8">
          <Link href="/contact">
            <Button variant="outline" className="group">
              Discuss Your Project
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
