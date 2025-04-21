import { Card, CardContent } from "./ui/card"
import { Quote } from "lucide-react"

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Ashirwad Enterprises has consistently delivered high-quality sheet metal components for our projects. Their precision and attention to detail are exceptional.",
      author: "Rajesh Kumar",
      position: "Production Manager, Automotive Solutions Ltd.",
    },
    {
      quote:
        "We've been working with Ashirwad for over 5 years. Their laser cutting capabilities and powder coating quality have been crucial for our product line.",
      author: "Priya Sharma",
      position: "Director, Industrial Equipment Co.",
    },
    {
      quote:
        "The team at Ashirwad Enterprises is professional, responsive, and committed to quality. They've become an essential partner for our manufacturing needs.",
      author: "Vikram Singh",
      position: "CEO, Tech Innovations Pvt. Ltd.",
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <div className="section-divider mx-auto"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-6">
            Hear from our satisfied clients about their experience working with Ashirwad Enterprises
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none bg-secondary">
              <CardContent className="p-8">
                <Quote className="h-8 w-8 text-primary/40 mb-4" />
                <p className="mb-6 italic">{testimonial.quote}</p>
                <div>
                  <div className="font-bold">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
