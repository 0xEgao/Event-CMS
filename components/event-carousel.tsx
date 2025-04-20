"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Calendar, MapPin } from "lucide-react"

const events = [
  {
    id: 1,
    title: "Music Festival",
    date: "Mar 24-26, 2025",
    location: "Miami, FL",
    image: "/music.jpg?height=400&width=600",
    category: "Music",
  },
  {
    id: 2,
    title: "Comic Con International",
    date: "Jul 18-21, 2025",
    location: "San Diego, CA",
    image: "/nft2.jpeg?height=400&width=600",
    category: "Convention",
  },
  {
    id: 3,
    title: "NBA All-Star Weekend",
    date: "Feb 14-16, 2025",
    location: "Los Angeles, CA",
    image: "/nba.jpeg?height=400&width=600",
    category: "Sports",
  },
  {
    id: 4,
    title: "TED Conference",
    date: "Apr 10-14, 2025",
    location: "Vancouver, Canada",
    image: "/solana.webp?height=400&width=600",
    category: "Conference",
  },
  {
    id: 5,
    title: "Coachella Valley Music Festival",
    date: "Apr 10-19, 2025",
    location: "Indio, CA",
    image: "/nft3.webp?height=400&width=600",
    category: "Music",
  },
]

export default function EventCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const maxIndex = events.length - 1
  const carouselRef = useRef<HTMLDivElement>(null)
  const [autoplay, setAutoplay] = useState(true)

  const nextSlide = () => {
    setCurrentIndex(currentIndex === maxIndex ? 0 : currentIndex + 1)
  }

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? maxIndex : currentIndex - 1)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [currentIndex, autoplay])

  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="mb-12 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Trending Events</h2>
            <p className="mt-2 text-muted-foreground">Discover the hottest events with NFT tickets</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="icon" onClick={prevSlide} aria-label="Previous slide">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={nextSlide} aria-label="Next slide">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="relative overflow-hidden" ref={carouselRef}>
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {events.map((event) => (
              <div
                key={event.id}
                className="w-full flex-shrink-0 px-4"
                onMouseEnter={() => setAutoplay(false)}
                onMouseLeave={() => setAutoplay(true)}
              >
                <div className="grid gap-6 md:grid-cols-2 items-center">
                  <div className="relative h-[300px] overflow-hidden rounded-lg">
                    <Image
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 rounded-full bg-primary/90 px-3 py-1 text-xs font-medium text-primary-foreground">
                      {event.category}
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold">{event.title}</h3>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                    <p className="text-muted-foreground">
                      Secure your spot at this exclusive event with our limited edition NFT tickets. Each ticket grants
                      you access and becomes a collectible after the event.
                    </p>
                    <Button>View NFT Tickets</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {events.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 w-2 rounded-full ${index === currentIndex ? "bg-primary" : "bg-muted-foreground/30"}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

