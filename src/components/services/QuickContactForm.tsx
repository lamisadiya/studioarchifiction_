// src/components/services/QuickContactForm.tsx
"use client";

import { useState } from "react";
import { ArrowRight, Phone, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { QUICK_CONTACT } from "@/lib/constants";

export default function QuickContactForm() {
  const [need, setNeed] = useState("office-interior-design");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  if (isSubmitted) {
    return (
      <section className="py-24 lg:py-32 bg-linear-to-br from-red-600 to-red-700 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <CheckCircle2 className="w-16 h-16 mx-auto mb-6 text-white/90" />
          <h2 className="text-3xl lg:text-4xl font-black mb-4">Thank You!</h2>
          <p className="text-base lg:text-lg opacity-90">
            We’ve received your inquiry.<br />
            Someone from Studio Archifiction will call you within{" "}
            <strong className="text-white">2 hours</strong>.
          </p>
          <p className="mt-6 text-sm">
            Call us now →{" "}
            <a href="tel:+8801678568811" className="font-bold underline">
              01678-568811
            </a>
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 lg:py-28 bg-linear-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-xs font-bold text-red-600 tracking-wider uppercase mb-3">
            Get Expert Advice • Free • No Obligation
          </p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
            Let’s Talk About<br />
            <span className="text-red-600">Your Dream Office</span>
          </h2>

          <p className="mt-5 text-sm lg:text-base text-gray-600 max-w-3xl mx-auto">
            Fill in your details — we reply in{" "}
            <strong className="text-red-600">under 2 hours</strong>
          </p>

          <div className="flex items-center justify-center gap-2 mt-5">
            <Phone className="w-4 h-4 text-red-600" />
            <a
              href="tel:+8801678568811"
              className="text-sm font-bold text-red-600 hover:underline"
            >
              01678-568811
            </a>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-xl overflow-hidden border-l-16 border-red-600"
        >
          <div className="p-6 lg:p-10 space-y-8">

            {/* Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label className="text-xs font-medium text-gray-700">
                  First Name <span className="text-red-600">*</span>
                </Label>
                <Input
                  required
                  placeholder="John"
                  className="mt-2 h-12 text-sm border-2 focus:border-red-600"
                />
              </div>
              <div>
                <Label className="text-xs font-medium text-gray-700">
                  Last Name
                </Label>
                <Input
                  placeholder="Doe (optional)"
                  className="mt-2 h-12 text-sm border-2"
                />
              </div>
            </div>

            {/* Contact */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label className="text-xs font-medium text-gray-700">
                  Email Address <span className="text-red-600">*</span>
                </Label>
                <Input
                  type="email"
                  required
                  placeholder="john@company.com"
                  className="mt-2 h-12 text-sm border-2 focus:border-red-600"
                />
              </div>
              <div>
                <Label className="text-xs font-medium text-gray-700">
                  Phone Number <span className="text-red-600">*</span>
                </Label>
                <Input
                  type="tel"
                  required
                  placeholder="+880 1XXX-XXXXXX"
                  className="mt-2 h-12 text-sm border-2 focus:border-red-600"
                />
              </div>
            </div>

            {/* Services */}
            <div>
              <Label className="text-xs font-medium text-gray-700 mb-3 block">
                What can we help you with?
              </Label>
              <RadioGroup value={need} onValueChange={setNeed}>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {QUICK_CONTACT.needs.map((item) => (
                    <Label
                      key={item.value}
                      htmlFor={item.value}
                      className={`text-center px-3 py-2 rounded-lg text-xs font-medium cursor-pointer transition ${
                        need === item.value
                          ? "bg-red-600 text-white"
                          : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {item.label}
                    </Label>
                  ))}
                </div>
              </RadioGroup>
            </div>

            {/* Message */}
            <div>
              <Label className="text-xs font-medium text-gray-700">
                Tell us about your project <span className="text-red-600">*</span>
              </Label>
              <Textarea
                rows={4}
                required
                placeholder="Office size, timeline, budget..."
                className="mt-2 text-sm resize-none border-2 focus:border-red-600"
              />
            </div>

            {/* Submit */}
            <div className="text-center pt-4">
              <Button
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white font-bold text-sm px-6 py-3 rounded-full shadow-md group flex items-center mx-auto"
              >
                Send Message
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition" />
              </Button>
              <p className="mt-4 text-xs text-gray-600">
                Expect a call in{" "}
                <strong className="text-red-600">under 2 hours</strong>
              </p>
            </div>

          </div>
        </form>

      </div>
    </section>
  );
}
