"use client"

import React from "react"

import { useState } from "react"
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { Textarea } from "../../components/ui/textarea"
import { Card, CardContent } from "../../components/ui/card"
import { MapPin, Phone, Clock, Send } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    })

    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false)
    }, 5000)
  }

  return (
    <div className="container mx-auto py-16 px-4">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
        <div className="section-divider mx-auto"></div>
        <p className="text-muted-foreground max-w-3xl mx-auto mt-6">
          Get in touch with our team for inquiries, quotes, or to discuss your project requirements
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        <Card className="bg-secondary border-none">
          <CardContent className="pt-6 flex flex-col items-center text-center">
            <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <MapPin className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Our Location</h3>
            <p className="text-muted-foreground">
              123 Industrial Area, Phase II
              <br />
              Panchkula, Haryana 134109
              <br />
              India
            </p>
          </CardContent>
        </Card>

        <Card className="bg-secondary border-none">
          <CardContent className="pt-6 flex flex-col items-center text-center">
            <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Phone className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Phone & Email</h3>
            <p className="text-muted-foreground mb-1">+91 98765 43210</p>
            <p className="text-muted-foreground">info@ashirwadenterprises.com</p>
          </CardContent>
        </Card>

        <Card className="bg-secondary border-none">
          <CardContent className="pt-6 flex flex-col items-center text-center">
            <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Clock className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Business Hours</h3>
            <p className="text-muted-foreground">
              Monday - Friday: 9:00 AM - 6:00 PM
              <br />
              Saturday: 9:00 AM - 2:00 PM
              <br />
              Sunday: Closed
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
          <div className="section-divider"></div>

          <form onSubmit={handleSubmit} className="mt-6 space-y-6">
            {isSubmitted && (
              <div className="bg-green-500/20 border border-green-500 text-green-700 p-4 rounded-md mb-6">
                Thank you for your message! We'll get back to you shortly.
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Full Name <span className="text-primary">*</span>
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email Address <span className="text-primary">*</span>
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-medium">
                  Company Name
                </label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your Company Ltd."
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message <span className="text-primary">*</span>
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell us about your project requirements..."
                rows={6}
              />
            </div>
            <Button type="submit" className="w-full md:w-auto" disabled={isSubmitting}>
              {isSubmitting ? (
                <>Processing...</>
              ) : (
                <>
                  Send Message <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </form>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-6">Request a Quote</h2>
          <div className="section-divider"></div>
          <p className="text-muted-foreground mb-6">
            For detailed quotes on our sheet metal manufacturing services, please provide the following information:
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Project specifications and requirements</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Material type and thickness</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Quantity needed</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Surface finish requirements</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Project timeline</span>
            </li>
          </ul>
          <p className="text-muted-foreground mb-6">
            You can attach technical drawings or specifications to your message for a more accurate quote.
          </p>
          <div className="bg-secondary p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Quick Response Guarantee</h3>
            <p className="text-muted-foreground">
              We aim to respond to all inquiries within 24 hours during business days. For urgent requests, please call
              us directly.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16 h-[400px] rounded-lg overflow-hidden">
        {/* Replace with actual Google Maps embed */}
        <div className="w-full h-full bg-secondary flex items-center justify-center">
          <p className="text-muted-foreground">Google Maps Location Embed</p>
        </div>
      </div>
    </div>
  )
}
