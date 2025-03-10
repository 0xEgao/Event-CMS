import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CalendarDays, MapPin, Search, Users } from "lucide-react"

export default function EventsPage() {
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
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h1 className="text-3xl font-bold">Discover Events</h1>
              <p className="text-gray-500">Find and join exciting events near you</p>
            </div>
            <div className="flex w-full items-center gap-2 md:w-auto">
              <div className="relative flex-1 md:w-[300px]">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                <Input
                  type="search"
                  placeholder="Search events..."
                  className="w-full rounded-md border pl-8 md:w-[300px]"
                />
              </div>
              <Button asChild>
                <Link href="/events/create">Create Event</Link>
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => (
              <Link key={event.id} href={`/events/${event.id}`}>
                <div className="group relative overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md">
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      width={600}
                      height={400}
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold">{event.title}</h3>
                    <div className="mt-2 flex items-center text-sm text-gray-500">
                      <CalendarDays className="mr-1 h-4 w-4" />
                      {event.date}
                    </div>
                    <div className="mt-1 flex items-center text-sm text-gray-500">
                      <MapPin className="mr-1 h-4 w-4" />
                      {event.location}
                    </div>
                    <div className="mt-1 flex items-center text-sm text-gray-500">
                      <Users className="mr-1 h-4 w-4" />
                      {event.attendees} attendees
                    </div>
                  </div>
                </div>
              </Link>
            ))}
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
    location: "Ocean Beach, San Francisco",
    attendees: 120,
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "2",
    title: "Tech Conference 2023",
    date: "August 15, 2023",
    location: "Convention Center, New York",
    attendees: 500,
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "3",
    title: "Yoga Retreat Weekend",
    date: "September 10-12, 2023",
    location: "Mountain View Resort",
    attendees: 50,
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "4",
    title: "Photography Workshop",
    date: "August 5, 2023",
    location: "Downtown Gallery, Chicago",
    attendees: 30,
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "5",
    title: "Music Festival 2023",
    date: "July 29-30, 2023",
    location: "Central Park, New York",
    attendees: 2000,
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "6",
    title: "Startup Networking Mixer",
    date: "August 12, 2023",
    location: "Innovation Hub, Austin",
    attendees: 150,
    image: "/placeholder.svg?height=400&width=600",
  },
]

