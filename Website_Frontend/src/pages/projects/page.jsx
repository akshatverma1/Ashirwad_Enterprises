// import Image from "next/image"
import { Button } from "../../components/ui/button"
import { Card, CardContent } from "../../components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs"
import { ArrowRight } from "lucide-react"
import {Link} from "react-router-dom"

export default function ProjectsPage() {
  const categories = [
    { id: "all", label: "All Projects" },
    { id: "automotive", label: "Automotive" },
    { id: "industrial", label: "Industrial" },
    { id: "electronics", label: "Electronics" },
    { id: "aerospace", label: "Aerospace" },
  ]

  const projects = [
    {
      id: 1,
      title: "Precision Control Panels",
      category: "industrial",
      description: "Custom fabricated control panels with powder coated finish for industrial automation systems.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 2,
      title: "Automotive Mounting Brackets",
      category: "automotive",
      description: "High-strength zinc-plated mounting brackets for automotive suspension systems.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 3,
      title: "Electronics Enclosures",
      category: "electronics",
      description: "Precision-cut sheet metal enclosures with EMI shielding for sensitive electronic components.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 4,
      title: "Aerospace Component Housings",
      category: "aerospace",
      description: "Lightweight, high-tolerance component housings for aerospace applications.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 5,
      title: "Industrial Machine Guards",
      category: "industrial",
      description: "Safety-compliant machine guards with powder coated finish for industrial equipment.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 6,
      title: "Automotive Heat Shields",
      category: "automotive",
      description: "Custom heat shields with specialized coatings for automotive exhaust systems.",
      image: "/placeholder.svg?height=600&width=800",
    },
  ]

  return (
    <div className="container mx-auto py-16 px-4">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Projects</h1>
        <div className="section-divider mx-auto"></div>
        <p className="text-muted-foreground max-w-3xl mx-auto mt-6">
          Explore our portfolio of precision sheet metal projects across various industries
        </p>
      </div>

      <Tabs defaultValue="all" className="mb-16">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8">
          {categories.map((category) => (
            <TabsTrigger key={category.id} value={category.id}>
              {category.label}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="all">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </TabsContent>

        {categories.slice(1).map((category) => (
          <TabsContent key={category.id} value={category.id}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects
                .filter((project) => project.category === category.id)
                .map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <div className="bg-secondary rounded-lg p-8 md:p-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Have a Project in Mind?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Our team of experts is ready to help bring your ideas to life with precision sheet metal manufacturing.
          </p>
          <Link href="/contact">
            <Button size="lg" className="group">
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

function ProjectCard({ project }) {
  return (
    <Card className="overflow-hidden border-none">
      <div className="relative h-64">
        <img src={project.image || "/placeholder.svg"} alt={project.title} className="object-cover" />
      </div>
      <CardContent className="p-6 bg-secondary">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-muted-foreground mb-4">{project.description}</p>
        <Button variant="link" className="p-0 h-auto group text-primary">
          View Details
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </CardContent>
    </Card>
  )
}
