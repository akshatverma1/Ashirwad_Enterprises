"use client"

import { useState } from "react"
import { Card, CardContent } from "../components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { Dialog, DialogContent, DialogTrigger } from "../components/ui/dialog"
import { Button } from "../components/ui/button"
import { X } from "lucide-react"

export default function PhotosPage() {
  const [selectedImage, setSelectedImage] = useState(null)

  const categories = [
    { id: "all", label: "All Photos" },
    { id: "facility", label: "Facility" },
    { id: "machines", label: "Machines" },
    { id: "process", label: "Manufacturing Process" },
    { id: "team", label: "Our Team" },
  ]

  const photos = [
    {
      id: 1,
      title: "Manufacturing Facility",
      category: "facility",
      description: "Our state-of-the-art manufacturing facility in Panchkula, Haryana.",
      image: "/images/placeholder.jpg",
    },
    {
      id: 2,
      title: "Laser Cutting Machine",
      category: "machines",
      description: "High-precision laser cutting machine for sheet metal components.",
      image: "/images/placeholder.jpg",
    },
    {
      id: 3,
      title: "Powder Coating Unit",
      category: "machines",
      description: "Advanced powder coating equipment for superior finish quality.",
      image: "/images/placeholder.jpg",
    },
    {
      id: 4,
      title: "Zinc Plating Process",
      category: "process",
      description: "Zinc plating process that enhances corrosion resistance of metal components.",
      image: "/images/placeholder.jpg",
    },
    {
      id: 5,
      title: "Quality Control",
      category: "process",
      description: "Rigorous quality control checks to ensure precision and consistency.",
      image: "/images/placeholder.jpg",
    },
    {
      id: 6,
      title: "Sheet Metal Fabrication",
      category: "process",
      description: "Sheet metal fabrication process with expert craftsmanship.",
      image: "/images/placeholder.jpg",
    },
    {
      id: 7,
      title: "Production Floor",
      category: "facility",
      description: "Overview of our production floor with various manufacturing stations.",
      image: "/images/placeholder.jpg",
    },
    {
      id: 8,
      title: "Engineering Team",
      category: "team",
      description: "Our skilled engineering team working on design and specifications.",
      image: "/images/placeholder.jpg",
    },
    {
      id: 9,
      title: "CNC Punching Machine",
      category: "machines",
      description: "CNC punching machine for precise sheet metal perforation.",
      image: "/images/placeholder.jpg",
    },
    {
      id: 10,
      title: "Assembly Process",
      category: "process",
      description: "Final assembly process of sheet metal components.",
      image: "/images/placeholder.jpg",
    },
    {
      id: 11,
      title: "Production Team",
      category: "team",
      description: "Our dedicated production team ensuring quality manufacturing.",
      image: "/images/placeholder.jpg",
    },
    {
      id: 12,
      title: "Warehouse",
      category: "facility",
      description: "Our organized warehouse for efficient inventory management.",
      image: "/images/placeholder.jpg",
    },
  ]

  return (
    <div className="container mx-auto py-16 px-4 mt-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Company Photos</h1>
        <div className="section-divider mx-auto"></div>
        <p className="text-muted-foreground max-w-3xl mx-auto mt-6">
          Take a visual tour of our manufacturing facility, machines, and processes
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
            {photos.map((photo) => (
              <PhotoCard key={photo.id} photo={photo} onClick={() => setSelectedImage(photo.image)} />
            ))}
          </div>
        </TabsContent>

        {categories.slice(1).map((category) => (
          <TabsContent key={category.id} value={category.id}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {photos
                .filter((photo) => photo.category === category.id)
                .map((photo) => (
                  <PhotoCard key={photo.id} photo={photo} onClick={() => setSelectedImage(photo.image)} />
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-none">
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-2 z-10 rounded-full bg-background/80 text-foreground"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Button>
          {selectedImage && (
            <div className="relative w-full h-[80vh]">
              <img
                src={selectedImage || "/images/placeholder.jpg"}
                alt="Enlarged photo"
                className="w-full h-full object-contain"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>

      <div className="bg-secondary rounded-lg p-8 md:p-12 mt-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Visit Our Facility</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Interested in seeing our manufacturing facility in person? Contact us to schedule a visit and see our
            operations firsthand.
          </p>
          <Button size="lg" className="group">
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  )
}

function PhotoCard({ photo, onClick }) {
  return (
    <Card className="overflow-hidden border-none">
      <DialogTrigger asChild onClick={onClick}>
        <div className="relative h-64 cursor-pointer transition-transform hover:scale-[1.02]">
          <img
            src={photo.image || "/images/placeholder.jpg"}
            alt={photo.title}
            className="w-full h-full object-cover"
          />
        </div>
      </DialogTrigger>
      <CardContent className="p-6 bg-secondary">
        <h3 className="text-xl font-bold mb-2">{photo.title}</h3>
        <p className="text-muted-foreground">{photo.description}</p>
      </CardContent>
    </Card>
  )
}
