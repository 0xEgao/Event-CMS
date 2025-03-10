import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CalendarDays, MapPin, Users } from "lucide-react"

export default function Home() {
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
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Delightful events
                <span className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">
                  {" "}
                  start here.
                </span>
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Set up an event page, invite friends and sell tickets. Host a memorable event today.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" asChild>
                  <Link href="/events/create">Create Your First Event</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative h-[500px] w-[350px]">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-200 to-pink-200 blur-3xl opacity-70"></div>
                <div className="relative h-full w-full">
                  <Image
                    src="/placecholder1.jpg?height=600&width=400"
                    alt="Event app preview"
                    width={600}
                    height={1000}
                    className="mx-auto object-contain rounded-m"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full bg-gray-50 py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Events</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover exciting events happening around you
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {featuredEvents.map((event) => (
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
        </section>
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

const featuredEvents = [
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
]

