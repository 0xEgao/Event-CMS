import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CalendarDays, Clock, MapPin, Share2, Users } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export default function EventPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch the event data based on the ID
  const event = events.find((e) => e.id === params.id) || events[0]

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b bg-white">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500"></div>
            <span className="text-xl font-semibold">Eventify</span>
          </Link>
          <nav className="flex gap-4 sm:gap-6">
            <Link href="/events" className="text-sm font-medium hover:underline">
              Explore Events
            </Link>
            <Link href="/auth/signin" className="text-sm font-medium hover:underline">
              Sign In
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <div className="container px-4 py-6 md:px-6 md:py-12">
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
            <div className="lg:col-span-2">
              <div className="mb-4 flex items-center gap-2">
                <Link href="/events" className="text-sm text-gray-500 hover:underline">
                  Events
                </Link>
                <span className="text-sm text-gray-500">/</span>
                <span className="text-sm">{event.title}</span>
              </div>
              <div className="mb-6 overflow-hidden rounded-lg">
                <Image
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  width={1200}
                  height={600}
                  className="w-full object-cover"
                />
              </div>
              <div className="mb-6">
                <h1 className="mb-2 text-3xl font-bold">{event.title}</h1>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="flex items-center gap-1">
                    <CalendarDays className="h-3 w-3" />
                    {event.date}
                  </Badge>
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {event.time}
                  </Badge>
                  <Badge variant="outline" className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {event.location}
                  </Badge>
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    {event.attendees} attendees
                  </Badge>
                </div>
              </div>
              <div className="mb-8">
                <h2 className="mb-4 text-xl font-semibold">About this event</h2>
                <div className="prose max-w-none">
                  <p>{event.description}</p>
                </div>
              </div>
              <div className="mb-8">
                <h2 className="mb-4 text-xl font-semibold">Organizer</h2>
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt={event.organizer.name} />
                    <AvatarFallback>{event.organizer.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">{event.organizer.name}</div>
                    <div className="text-sm text-gray-500">{event.organizer.events} events hosted</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="sticky top-6 rounded-lg border bg-white p-6 shadow-sm">
                <div className="mb-4">
                  <div className="mb-1 text-xl font-bold">{event.price}</div>
                  <div className="text-sm text-gray-500">{event.ticketsLeft} spots left</div>
                </div>
                <Separator className="my-4" />
                <div className="mb-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <CalendarDays className="h-4 w-4 text-gray-500" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-gray-500" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-gray-500" />
                    <span>{event.location}</span>
                  </div>
                </div>
                <Button className="mb-2 w-full">Apply to Attend</Button>
                <Button variant="outline" className="w-full">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share Event
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="border-t bg-white">
        <div className="container flex flex-col gap-4 py-10 md:flex-row md:items-center md:gap-8 md:py-12">
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-full bg-gradient-to-br from-blue-400 to-purple-500"></div>
              <span className="text-lg font-semibold">Eventify</span>
            </div>
          </div>
          <nav className="flex gap-4 sm:gap-6">
            <Link href="#" className="text-sm font-medium hover:underline">
              Terms
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline">
              Privacy
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline">
              Help
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

const events = [
  {
    id: "1",
    title: "Summer Party at Ocean Beach",
    date: "July 23, 2023",
    time: "2:00 PM - 8:00 PM",
    location: "Ocean Beach, San Francisco",
    description:
      "Join us for a fun-filled summer party at Ocean Beach! We'll have music, games, food, and drinks. Bring your friends and family for a day of sun, sand, and surf. Don't forget your sunscreen and beach towels!\n\nThis event is open to all ages. Children under 12 must be accompanied by an adult. No pets allowed on the beach during the event.\n\nIn case of bad weather, the event will be postponed to the following weekend. All ticket holders will be notified via email.",
    attendees: 120,
    price: "Free",
    ticketsLeft: 30,
    image: "/placeholder.svg?height=600&width=1200",
    organizer: {
      name: "Beach Events Co.",
      events: 15,
    },
  },
  {
    id: "2",
    title: "Tech Conference 2023",
    date: "August 15, 2023",
    time: "9:00 AM - 5:00 PM",
    location: "Convention Center, New York",
    description:
      "Tech Conference 2023 brings together the brightest minds in technology for a day of learning, networking, and inspiration. Featuring keynote speakers from leading tech companies, hands-on workshops, and panel discussions on the latest trends and innovations in the industry.\n\nTicket includes access to all sessions, workshops, lunch, and networking reception. Early bird pricing ends July 15.",
    attendees: 500,
    price: "$299",
    ticketsLeft: 75,
    image: "/placeholder.svg?height=600&width=1200",
    organizer: {
      name: "TechEvents NYC",
      events: 32,
    },
  },
  {
    id: "3",
    title: "Yoga Retreat Weekend",
    date: "September 10-12, 2023",
    time: "All day",
    location: "Mountain View Resort",
    description:
      "Escape the hustle and bustle of daily life with our rejuvenating yoga retreat weekend. Immerse yourself in nature, practice yoga twice daily, enjoy healthy meals, and connect with like-minded individuals.\n\nAll levels welcome, from beginners to advanced practitioners. Accommodation and meals included in the ticket price. Space is limited to ensure an intimate and personalized experience.",
    attendees: 50,
    price: "$599",
    ticketsLeft: 8,
    image: "/placeholder.svg?height=600&width=1200",
    organizer: {
      name: "Mindful Retreats",
      events: 24,
    },
  },
]

