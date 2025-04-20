"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    quote:
      "Ticketify transformed how we handle event ticketing. The NFT tickets added a new revenue stream through royalties from resales, and our attendees love the collectible aspect.",
    name: "Sarah Johnson",
    title: "Festival Director, SoundWave Music Festival",
    avatar: "/music.jpg?height=100&width=100",
  },
  {
    id: 2,
    quote:
      "As a concert promoter, I've dealt with counterfeit tickets for years. With Ticketify's NFT tickets, that problem disappeared overnight. The verification process is seamless.",
    name: "Michael Chen",
    title: "CEO, Global Concert Productions",
    avatar: "/nft2.jpeg?height=100&width=100",
  },
  {
    id: 3,
    quote:
      "I purchased an NFT ticket for a sold-out show and later had to sell it. The process was simple, secure, and I loved that the artist still got a cut from my resale.",
    name: "Alex Rivera",
    title: "Music Fan & NFT Collector",
    avatar: "/nft3.webp?height=100&width=100",
  },
]

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      nextSlide()
    }, 6000)

    return () => clearInterval(interval)
  }, [currentIndex, autoplay])

  return (
    <section className="py-20">
      <div className="container">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">What Our Users Say</h2>
            <p className="mt-4 text-muted-foreground">Hear from event organizers and attendees who use Ticketify</p>
          </div>

          <div
            className="relative overflow-hidden rounded-xl border bg-card shadow-sm"
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
          >
            <div className="absolute left-6 top-6 text-primary">
              <Quote className="h-10 w-10 opacity-50" />
            </div>

            <div className="relative min-h-[300px]">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === currentIndex ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="flex h-full flex-col items-center justify-center p-12 text-center">
                    <blockquote className="mb-8 text-xl italic">"{testimonial.quote}"</blockquote>
                    <div className="flex items-center gap-4">
                      <div className="relative h-12 w-12 overflow-hidden rounded-full">
                        <Image
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="text-left">
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="absolute bottom-4 right-4 flex gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                className="h-8 w-8 rounded-full"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextSlide}
                className="h-8 w-8 rounded-full"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

