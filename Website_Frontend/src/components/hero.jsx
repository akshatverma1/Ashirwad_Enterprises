import { Link } from "react-router-dom"
import { Button } from "./ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center hero-pattern">
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50 z-0"></div>
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            PRECISION SHEET METAL MANUFACTURING
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8">
            Specialized in laser cutting technology, powder coating, and zinc plating for superior quality components
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/services">
              <Button size="lg" className="group">
                Our Services
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-white/10 hover:text-white"
              >
                Request Quote
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
