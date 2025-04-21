// import Image from "next/image"
import { Button } from "./../../components/ui/button"
import { Card, CardContent } from "./../../components/ui/card"
import { ArrowRight, Award, Clock, Users } from "lucide-react"
import { Link } from "react-router-dom"

export default function AboutPage() {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Ashirwad Enterprises</h1>
        <div className="section-divider mx-auto"></div>
        <p className="text-muted-foreground max-w-3xl mx-auto mt-6">
          Delivering precision sheet metal solutions with cutting-edge technology and exceptional craftsmanship
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <div className="section-divider"></div>
          <p className="mb-4">
            Founded with a vision to revolutionize sheet metal manufacturing, Ashirwad Enterprises has grown from a
            small workshop to a leading manufacturer of precision sheet metal components.
          </p>
          <p className="mb-4">
            Our journey began with a commitment to quality and innovation. Today, we combine advanced laser cutting
            technology with traditional craftsmanship to deliver exceptional products that meet the highest standards.
          </p>
          <p className="mb-6">
            With state-of-the-art facilities for laser cutting, powder coating, and zinc plating, we offer comprehensive
            metal fabrication solutions under one roof.
          </p>
          <Link href="/services">
            <Button className="group">
              Explore Our Services
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
        <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
          {/* <Image
            src="/placeholder.svg?height=800&width=600"
            alt="Ashirwad Enterprises Facility"
            fill
            className="object-cover"
          /> */}
        </div>
      </div>

      <div className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-6">Why Choose Us</h2>
        <div className="section-divider mx-auto"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <Card className="bg-secondary border-none">
            <CardContent className="pt-6">
              <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Quality Assurance</h3>
              <p className="text-muted-foreground">
                Rigorous quality control processes ensure every component meets precise specifications and industry
                standards.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-secondary border-none">
            <CardContent className="pt-6">
              <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Timely Delivery</h3>
              <p className="text-muted-foreground">
                Our efficient production workflow and dedicated team ensure on-time delivery for all projects,
                regardless of size.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-secondary border-none">
            <CardContent className="pt-6">
              <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Expert Team</h3>
              <p className="text-muted-foreground">
                Our skilled professionals bring years of experience and technical expertise to every project we
                undertake.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="bg-secondary rounded-lg p-8 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Vision & Mission</h2>
            <div className="section-divider"></div>
            <p className="mb-4">
              <strong>Vision:</strong> To be the industry leader in sheet metal manufacturing, recognized for
              innovation, quality, and customer satisfaction.
            </p>
            <p>
              <strong>Mission:</strong> To deliver precision-engineered sheet metal components through cutting-edge
              technology, sustainable practices, and exceptional service that exceeds customer expectations.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-background rounded-lg p-6 text-center">
              <h3 className="text-4xl font-bold text-primary mb-2">15+</h3>
              <p className="text-sm">Years of Experience</p>
            </div>
            <div className="bg-background rounded-lg p-6 text-center">
              <h3 className="text-4xl font-bold text-primary mb-2">500+</h3>
              <p className="text-sm">Projects Completed</p>
            </div>
            <div className="bg-background rounded-lg p-6 text-center">
              <h3 className="text-4xl font-bold text-primary mb-2">100+</h3>
              <p className="text-sm">Satisfied Clients</p>
            </div>
            <div className="bg-background rounded-lg p-6 text-center">
              <h3 className="text-4xl font-bold text-primary mb-2">50+</h3>
              <p className="text-sm">Team Members</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
