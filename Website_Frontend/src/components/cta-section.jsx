// import Link from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "./ui/button"
import { ArrowRight } from "lucide-react"

export default function CtaSection() {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
        <p className="text-white/80 max-w-2xl mx-auto mb-8">
          Contact us today to discuss your sheet metal manufacturing requirements and get a customized quote for your
          project.
        </p>
        
        <Link to="/contact">
          <Button
            size="lg"
            variant="outline"
            className="bg-transparent text-white border-white hover:bg-white/10 hover:text-white group"
          >
            Contact Us Now
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </div>
    </section>
  )
}
