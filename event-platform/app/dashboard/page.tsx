import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarDays, MapPin, Plus, Users } from "lucide-react"

export default function DashboardPage() {
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
            <Link href="/dashboard" className="text-sm font-medium hover:underline">
              Dashboard
            </Link>
            <Link href="/profile" className="text-sm font-medium hover:underline">
              Profile
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <div className="container px-4 py-6 md:px-6 md:py-12">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h1 className="text-3xl font-bold">Dashboard</h1>
              <p className="text-gray-500">Manage your events and registrations</p>
            </div>
            <Button asChild>
              <Link href="/events/create">
                <Plus className="mr-2 h-4 w-4" />
                Create Event
              </Link>
            </Button>
          </div>
          <Tabs defaultValue="my-events">
            <TabsList className="mb-8">
              <TabsTrigger value="my-events">My Events</TabsTrigger>
              <TabsTrigger value="registered">Registered</TabsTrigger>
              <TabsTrigger value="past-events">Past Events</TabsTrigger>
            </TabsList>
            <TabsContent value="my-events">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {myEvents.map((event) => (
                  <Link key={event.id} href={`/events/${event.id}`}>
                    <Card className="h-full overflow-hidden">
                      <div className="aspect-video overflow-hidden">
                        <Image
                          src={event.image || "/placeholder.svg"}
                          alt={event.title}
                          width={600}
                          height={400}
                          className="object-cover transition-transform hover:scale-105"
                        />
                      </div>
                      <CardHeader className="p-4 pb-2">
                        <CardTitle className="text-lg">{event.title}</CardTitle>
                        <CardDescription>
                          <div className="flex items-center text-sm">
                            <CalendarDays className="mr-1 h-4 w-4" />
                            {event.date}
                          </div>
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-sm text-gray-500">
                            <Users className="mr-1 h-4 w-4" />
                            {event.attendees} attendees
                          </div>
                          <div className="text-sm font-medium">{event.status}</div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="registered">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {registeredEvents.map((event) => (
                  <Link key={event.id} href={`/events/${event.id}`}>
                    <Card className="h-full overflow-hidden">
                      <div className="aspect-video overflow-hidden">
                        <Image
                          src={event.image || "/placeholder.svg"}
                          alt={event.title}
                          width={600}
                          height={400}
                          className="object-cover transition-transform hover:scale-105"
                        />
                      </div>
                      <CardHeader className="p-4 pb-2">
                        <CardTitle className="text-lg">{event.title}</CardTitle>
                        <CardDescription>
                          <div className="flex items-center text-sm">
                            <CalendarDays className="mr-1 h-4 w-4" />
                            {event.date}
                          </div>
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-sm text-gray-500">
                            <MapPin className="mr-1 h-4 w-4" />
                            {event.location}
                          </div>
                          <div className="text-sm font-medium">{event.status}</div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="past-events">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {pastEvents.map((event) => (
                  <Link key={event.id} href={`/events/${event.id}`}>
                    <Card className="h-full overflow-hidden">
                      <div className="aspect-video overflow-hidden">
                        <Image
                          src={event.image || "/placeholder.svg"}
                          alt={event.title}
                          width={600}
                          height={400}
                          className="object-cover transition-transform hover:scale-105 grayscale"
                        />
                      </div>
                      <CardHeader className="p-4 pb-2">
                        <CardTitle className="text-lg">{event.title}</CardTitle>
                        <CardDescription>
                          <div className="flex items-center text-sm">
                            <CalendarDays className="mr-1 h-4 w-4" />
                            {event.date}
                          </div>
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-sm text-gray-500">
                            <MapPin className="mr-1 h-4 w-4" />
                            {event.location}
                          </div>
                          <div className="text-sm font-medium">{event.status}</div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </TabsContent>
          </Tabs>
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

const myEvents = [
  {
    id: "1",
    title: "Summer Party at Ocean Beach",
    date: "July 23, 2023",
    attendees: 120,
    status: "Active",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "4",
    title: "Photography Workshop",
    date: "August 5, 2023",
    attendees: 30,
    status: "Active",
    image: "/placeholder.svg?height=400&width=600",
  },
]

const registeredEvents = [
  {
    id: "2",
    title: "Tech Conference 2023",
    date: "August 15, 2023",
    location: "Convention Center, New York",
    status: "Confirmed",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "3",
    title: "Yoga Retreat Weekend",
    date: "September 10-12, 2023",
    location: "Mountain View Resort",
    status: "Pending",
    image: "/placeholder.svg?height=400&width=600",
  },
]

const pastEvents = [
  {
    id: "5",
    title: "Web Development Bootcamp",
    date: "May 15, 2023",
    location: "Online",
    status: "Completed",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "6",
    title: "Startup Networking Mixer",
    date: "June 12, 2023",
    location: "Innovation Hub, Austin",
    status: "Completed",
    image: "/placeholder.svg?height=400&width=600",
  },
]

