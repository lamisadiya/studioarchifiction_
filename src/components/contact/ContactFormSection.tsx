"use client";

import { useState } from "react";
import { Button } from "@/components/ui";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Mail, Phone, User, Building2, MessageSquare, Send } from "lucide-react";

export default function ContactFormSection() {
  const [enquiryType, setEnquiryType] = useState("office-fitout");

  const enquiryOptions = [
    { value: "office-fitout", label: "Full Office Fit-Out" },
    { value: "furniture", label: "Custom Furniture" },
    { value: "renovation", label: "Renovation Project" },
    { value: "consultation", label: "Free Consultation" },
  ];

  return (
    <section className="py-8 lg:py-12 bg-linear-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 lg:px-6">

        {/* Elegant Heading */}
        <div className="text-center mb-10 lg:mb-12">
          <p className="text-xs font-semibold text-red-600 tracking-wider uppercase mb-2">
            Let’s Build Your Dream Workspace
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
            Start Your Project Today
          </h2>
          <p className="mt-3 text-sm text-gray-600 max-w-xl mx-auto">
            Tell us about your office — we’ll reply within 2 hours with concepts and pricing.
          </p>
        </div>

        {/* Premium Form Card */}
        <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
          <div className="p-6 lg:p-10">
            <form className="space-y-6">

              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <Label htmlFor="firstName" className="text-sm font-semibold text-gray-800">
                    First Name <span className="text-red-600">*</span>
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <Input
                      id="firstName"
                      required
                      placeholder="John"
                      className="pl-10 h-12 text-sm border-gray-300 focus:border-red-600 focus:ring-red-600"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <Label htmlFor="lastName" className="text-sm font-semibold text-gray-800">
                    Last Name
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <Input
                      id="lastName"
                      placeholder="Doe"
                      className="pl-10 h-12 text-sm border-gray-300"
                    />
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <Label htmlFor="email" className="text-sm font-semibold text-gray-800">
                    Email Address <span className="text-red-600">*</span>
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <Input
                      id="email"
                      type="email"
                      required
                      placeholder="john@company.com"
                      className="pl-10 h-12 text-sm border-gray-300 focus:border-red-600 focus:ring-red-600"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <Label htmlFor="phone" className="text-sm font-semibold text-gray-800">
                    Phone Number <span className="text-red-600">*</span>
                  </Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <Input
                      id="phone"
                      type="tel"
                      required
                      placeholder="+880 17XXX XXXXX"
                      className="pl-10 h-12 text-sm border-gray-300 focus:border-red-600 focus:ring-red-600"
                    />
                  </div>
                </div>
              </div>

              {/* Company */}
              <div className="space-y-1">
                <Label htmlFor="company" className="text-sm font-semibold text-gray-800">
                  Company / Organization
                </Label>
                <div className="relative">
                  <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  <Input
                    id="company"
                    placeholder="ABC Corporation Ltd."
                    className="pl-10 h-12 text-sm border-gray-300"
                  />
                </div>
              </div>

              {/* Enquiry Type */}
              <div className="space-y-2">
                <Label className="text-sm font-semibold text-gray-800">
                  I’m interested in
                </Label>
                <RadioGroup value={enquiryType} onValueChange={setEnquiryType} className="flex flex-wrap gap-2">
                  {enquiryOptions.map((option) => (
                    <div key={option.value} className="flex items-center">
                      <RadioGroupItem value={option.value} id={option.value} className="sr-only" />
                      <Label
                        htmlFor={option.value}
                        className={`px-4 py-2 rounded-full cursor-pointer font-semibold text-sm transition-all duration-300 ${
                          enquiryType === option.value
                            ? "bg-red-600 text-white shadow ring-2 ring-red-600/20"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {option.label}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              {/* Message */}
              <div className="space-y-1">
                <Label htmlFor="message" className="text-sm font-semibold text-gray-800">
                  Tell us about your project <span className="text-red-600">*</span>
                </Label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
                  <Textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="Office size, location, timeline, budget range, or any specific requirements..."
                    className="pl-10 pt-3 text-sm resize-none border-gray-300 focus:border-red-600 focus:ring-red-600"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4 text-center">
                <Button
                  type="submit"
                  size="sm"
                  className="bg-red-600 hover:bg-red-700 text-white font-bold text-sm px-4 py-2 rounded-full shadow transition flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                </Button>

                <p className="mt-3 text-xs text-gray-500">
                  We reply within <span className="font-bold text-red-600">2 hours</span> during business hours
                </p>
              </div>
            </form>
          </div>
        </div>

        {/* Trust Note */}
        <div className="text-center mt-6">
          <p className="text-xs text-gray-600">
            Or call us directly at{" "}
            <a href="tel:+8801716501213" className="font-bold text-red-600 hover:underline">
              +880 1716 501213
            </a>
            {" "}• Available 7 days a week
          </p>
        </div>
      </div>
    </section>
  );
}
