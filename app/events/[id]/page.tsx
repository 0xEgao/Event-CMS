"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, MapPin, Users, Share2, Heart, TicketIcon } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Function to get event data - in a real app, this would be an API call
const getEventData = (id: string) => {
  // First check localStorage for custom events
  const storedEvents = JSON.parse(localStorage.getItem("ticketifyEvents") || "[]")
  const customEvent = storedEvents.find((e: any) => e.id === id)

  if (customEvent) {
    // Format the ticket tiers to match our expected structure
    return {
      ...customEvent,
      attendees: customEvent.attendees || 0,
      ticketTiers: customEvent.ticketTiers.map((tier: any) => ({
        id: tier.id,
        name: tier.name,
        description: tier.description,
        price: `${tier.price} ETH`,
        available: Number.parseInt(tier.quantity),
        total: Number.parseInt(tier.quantity),
      })),
    }
  }

  // If not found, return the mock event data
  return {
    id: 1,
    title: "Tech Conference 2025",
    description:
      "Join us for the biggest tech conference of the year. Network with industry leaders, attend workshops, and learn about the latest innovations in technology.",
    longDescription:
      "The Tech Conference 2025 brings together the brightest minds in the tech industry for three days of learning, networking, and innovation. With over 100 speakers, 50 workshops, and countless networking opportunities, this is the must-attend event for anyone in the tech industry.\n\nOur keynote speakers include CEOs from major tech companies, renowned researchers, and innovative startups. Topics will cover artificial intelligence, blockchain, cybersecurity, and more.",
    date: "May 15-17, 2025",
    time: "9:00 AM - 6:00 PM",
    location: "Moscone Center",
    address: "747 Howard St, San Francisco, CA 94103",
    organizer: "TechEvents Inc.",
    category: "Technology",
    image: "/placeholder.svg?height=600&width=1200",
    attendees: 5000,
    ticketTiers: [
      {
        id: 1,
        name: "General Admission",
        description: "Access to all general sessions and expo hall",
        price: "0.1 ETH",
        available: 2000,
        total: 3000,
      },
      {
        id: 2,
        name: "VIP Pass",
        description: "General admission plus VIP lounge access, exclusive workshops, and after-party",
        price: "0.3 ETH",
        available: 150,
        total: 500,
      },
      {
        id: 3,
        name: "Workshop Pass",
        description: "General admission plus access to all workshops and hands-on sessions",
        price: "0.2 ETH",
        available: 800,
        total: 1500,
      },
    ],
  }
}

export default function EventPage({ params }: { params: { id: string } }) {
  const event = getEventData(params.id)

  // Initialize localStorage if running in the browser
  useEffect(() => {
    // This is just to ensure localStorage is available (only in browser)
    if (typeof window !== "undefined" && !localStorage.getItem("ticketifyEvents")) {
      localStorage.setItem("ticketifyEvents", JSON.stringify([]))
    }
  }, [])

  return (
    <div className="container py-10">
      <div className="grid gap-8 lg:grid-cols-3">
        {/* Event details - takes up 2/3 of the space on large screens */}
        <div className="lg:col-span-2">
          <div className="relative h-[300px] md:h-[400px] overflow-hidden rounded-lg mb-6">
            <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-4 left-4">
              <Badge className="bg-primary hover:bg-primary/80">{event.category}</Badge>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <h1 className="text-3xl font-bold tracking-tight">{event.title}</h1>
            <div className="flex gap-2">
              <Button variant="outline" size="icon">
                <Heart className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-muted-foreground" />
              <div>
                <div className="font-medium">Date</div>
                <div className="text-muted-foreground">{event.date}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-muted-foreground" />
              <div>
                <div className="font-medium">Time</div>
                <div className="text-muted-foreground">{event.time}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-muted-foreground" />
              <div>
                <div className="font-medium">Location</div>
                <div className="text-muted-foreground">{event.location}</div>
                <div className="text-sm text-muted-foreground">{event.address}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-muted-foreground" />
              <div>
                <div className="font-medium">Attendees</div>
                <div className="text-muted-foreground">{(event.attendees || 0).toLocaleString()} expected</div>
              </div>
            </div>
          </div>

          <Tabs defaultValue="about">
            <TabsList>
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="schedule">Schedule</TabsTrigger>
              <TabsTrigger value="speakers">Speakers</TabsTrigger>
              <TabsTrigger value="venue">Venue</TabsTrigger>
            </TabsList>
            <TabsContent value="about" className="mt-6">
              <h2 className="text-xl font-bold mb-4">About This Event</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>{event.description}</p>
                <p>{event.longDescription}</p>
              </div>
              <h3 className="text-lg font-bold mt-6 mb-2">Organizer</h3>
              <p className="text-muted-foreground">{event.organizer}</p>
            </TabsContent>
            <TabsContent value="schedule" className="mt-6">
              <h2 className="text-xl font-bold mb-4">Event Schedule</h2>
              <div className="space-y-4">
                <div className="rounded-lg border p-4">
                  <div className="font-bold">Day 1 - May 15, 2025</div>
                  <div className="mt-2 space-y-2">
                    <div className="flex justify-between">
                      <div>9:00 AM - 10:00 AM</div>
                      <div>Registration & Breakfast</div>
                    </div>
                    <div className="flex justify-between">
                      <div>10:00 AM - 11:30 AM</div>
                      <div>Opening Keynote</div>
                    </div>
                    <div className="flex justify-between">
                      <div>11:45 AM - 1:00 PM</div>
                      <div>Panel Discussion: Future of Tech</div>
                    </div>
                    <div className="flex justify-between">
                      <div>1:00 PM - 2:00 PM</div>
                      <div>Lunch Break</div>
                    </div>
                    <div className="flex justify-between">
                      <div>2:00 PM - 5:00 PM</div>
                      <div>Workshops & Breakout Sessions</div>
                    </div>
                    <div className="flex justify-between">
                      <div>5:30 PM - 7:30 PM</div>
                      <div>Networking Reception</div>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg border p-4">
                  <div className="font-bold">Day 2 - May 16, 2025</div>
                  <div className="mt-2 space-y-2">
                    <div className="flex justify-between">
                      <div>9:00 AM - 10:00 AM</div>
                      <div>Breakfast</div>
                    </div>
                    <div className="flex justify-between">
                      <div>10:00 AM - 12:00 PM</div>
                      <div>Technical Sessions</div>
                    </div>
                    <div className="flex justify-between">
                      <div>12:00 PM - 1:00 PM</div>
                      <div>Lunch Break</div>
                    </div>
                    <div className="flex justify-between">
                      <div>1:00 PM - 4:00 PM</div>
                      <div>Hands-on Labs</div>
                    </div>
                    <div className="flex justify-between">
                      <div>4:30 PM - 6:00 PM</div>
                      <div>Industry Roundtables</div>
                    </div>
                    <div className="flex justify-between">
                      <div>7:00 PM - 10:00 PM</div>
                      <div>VIP Dinner (VIP Pass Only)</div>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg border p-4">
                  <div className="font-bold">Day 3 - May 17, 2025</div>
                  <div className="mt-2 space-y-2">
                    <div className="flex justify-between">
                      <div>9:00 AM - 10:00 AM</div>
                      <div>Breakfast</div>
                    </div>
                    <div className="flex justify-between">
                      <div>10:00 AM - 12:00 PM</div>
                      <div>Innovation Showcase</div>
                    </div>
                    <div className="flex justify-between">
                      <div>12:00 PM - 1:00 PM</div>
                      <div>Lunch Break</div>
                    </div>
                    <div className="flex justify-between">
                      <div>1:00 PM - 3:00 PM</div>
                      <div>Closing Keynote</div>
                    </div>
                    <div className="flex justify-between">
                      <div>3:00 PM - 4:00 PM</div>
                      <div>Closing Remarks & Farewell</div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="speakers" className="mt-6">
              <h2 className="text-xl font-bold mb-4">Featured Speakers</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className="flex flex-col items-center text-center">
                  <div className="relative h-32 w-32 overflow-hidden rounded-full mb-4">
                    <Image src="/placeholder.svg?height=200&width=200" alt="Speaker 1" fill className="object-cover" />
                  </div>
                  <h3 className="font-bold">Sarah Johnson</h3>
                  <p className="text-sm text-muted-foreground">CEO, TechGiant Inc.</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="relative h-32 w-32 overflow-hidden rounded-full mb-4">
                    <Image src="/placeholder.svg?height=200&width=200" alt="Speaker 2" fill className="object-cover" />
                  </div>
                  <h3 className="font-bold">Michael Chen</h3>
                  <p className="text-sm text-muted-foreground">CTO, Future Labs</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="relative h-32 w-32 overflow-hidden rounded-full mb-4">
                    <Image src="/placeholder.svg?height=200&width=200" alt="Speaker 3" fill className="object-cover" />
                  </div>
                  <h3 className="font-bold">Alex Rivera</h3>
                  <p className="text-sm text-muted-foreground">AI Research Director, OpenMind</p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="venue" className="mt-6">
              <h2 className="text-xl font-bold mb-4">Venue Information</h2>
              <div className="relative h-[300px] overflow-hidden rounded-lg mb-4">
                <Image src="/placeholder.svg?height=600&width=1200" alt="Venue Map" fill className="object-cover" />
              </div>
              <h3 className="font-bold text-lg">{event.location}</h3>
              <p className="text-muted-foreground">{event.address}</p>
              <div className="mt-4 space-y-2">
                <h4 className="font-bold">Getting There</h4>
                <p className="text-muted-foreground">
                  The venue is easily accessible by public transportation. The Powell Street BART station is a 10-minute
                  walk away. Parking is available at the 5th & Mission Garage for $25 per day.
                </p>
                <h4 className="font-bold mt-4">Accommodations</h4>
                <p className="text-muted-foreground">
                  We've partnered with several hotels in the area to provide discounted rates for attendees. Use code
                  TECH2025 when booking at any of our partner hotels.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Ticket purchase section - takes up 1/3 of the space on large screens */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 rounded-lg border bg-card p-6 shadow-sm">
            <h2 className="text-xl font-bold mb-4">NFT Tickets</h2>
            <p className="text-sm text-muted-foreground mb-6">
              Each ticket is a unique NFT that grants you access to the event and becomes a collectible after the event.
            </p>

            <div className="space-y-4">
              {event.ticketTiers.map((tier) => (
                <div key={tier.id} className="rounded-lg border p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold">{tier.name}</h3>
                      <p className="text-sm text-muted-foreground">{tier.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="font-bold">{tier.price}</div>
                      <div className="text-xs text-muted-foreground">
                        {tier.available} of {tier.total} available
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <Button className="w-full" asChild>
                      <Link href={`/events/${params.id}/tickets/${tier.id}`}>
                        <TicketIcon className="mr-2 h-4 w-4" />
                        Buy Ticket
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 text-sm text-muted-foreground">
              <p className="mb-2">
                <strong>Refund Policy:</strong> Tickets are refundable up to 7 days before the event.
              </p>
              <p>
                <strong>Transfer Policy:</strong> NFT tickets can be transferred to another wallet at any time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

