import { Card, CardContent } from "./ui/card";

export default function ProcessSection() {
  const processes = [
    {
      number: "01",
      title: "Consultation",
      description: "We begin with a detailed consultation to understand your specific requirements and project goals.",
    },
    {
      number: "02",
      title: "Design & Engineering",
      description: "Our engineering team works on the design, ensuring optimal manufacturability and performance.",
    },
    {
      number: "03",
      title: "Precision Manufacturing",
      description: "Using advanced laser cutting technology, we fabricate components with exceptional accuracy.",
    },
    {
      number: "04",
      title: "Surface Treatment",
      description: "Components undergo powder coating or zinc plating for enhanced durability and aesthetics.",
    },
    {
      number: "05",
      title: "Quality Inspection",
      description: "Rigorous quality control ensures every component meets precise specifications and standards.",
    },
    {
      number: "06",
      title: "Delivery",
      description: "The finished products are carefully packaged and delivered to your location on schedule.",
    },
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Manufacturing Process</h2>
          <div className="section-divider mx-auto"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-6">
            A systematic approach to delivering precision sheet metal components
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processes.map((process, index) => (
            <Card key={index} className="border-none bg-background">
              <CardContent className="p-8">
                <div className="text-5xl font-bold text-primary/20 mb-4">{process.number}</div>
                <h3 className="text-xl font-bold mb-3">{process.title}</h3>
                <p className="text-muted-foreground">{process.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
