"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Search, BarChart, Edit, Trash2, Plus } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useSearchParams } from "next/navigation"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

// Function to get events data - combines mock data with custom events from localStorage
const getEventsData = () => {
  // Default mock events
  const mockEvents = [
    {
      id: "mock-1",
      title: "Tech Conference 2025",
      date: "May 15-17, 2025",
      location: "Moscone Center, San Francisco, CA",
      image: "/solana.webp?height=400&width=600",
      status: "active",
      ticketsSold: 1250,
      totalTickets: 5000,
      revenue: "125.5 ETH",
      category: "Technology",
    },
    {
      id: "mock-2",
      title: "Blockchain Workshop",
      date: "June 10, 2025",
      location: "Virtual Event",
      image: "/placeholder.svg?height=400&width=600",
      status: "draft",
      ticketsSold: 0,
      totalTickets: 200,
      revenue: "0 ETH",
      category: "Workshop",
    },
    {
      id: "mock-3",
      title: "Music Festival 2024",
      date: "August 5-7, 2024",
      location: "Central Park, New York, NY",
      image: "/music.jpg?height=400&width=600",
      status: "completed",
      ticketsSold: 15000,
      totalTickets: 15000,
      revenue: "3000 ETH",
      category: "Music",
    },
  ]

  // Get custom events from localStorage (if any)
  if (typeof window !== "undefined") {
    const customEvents = JSON.parse(localStorage.getItem("ticketifyEvents") || "[]")
    return [...mockEvents, ...customEvents]
  }

  return mockEvents
}

export default function MyEventsPage() {
  const searchParams = useSearchParams()
  const created = searchParams.get("created")
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null)
  const [events, setEvents] = useState<any[]>([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    // Load events when component mounts
    setEvents(getEventsData())

    // Set up event listener for storage changes
    const handleStorageChange = () => {
      setEvents(getEventsData())
    }

    window.addEventListener("storage", handleStorageChange)

    return () => {
      window.removeEventListener("storage", handleStorageChange)
    }
  }, [])

  // Filter events based on search term
  const filteredEvents = events.filter((event) => event.title.toLowerCase().includes(searchTerm.toLowerCase()))

  const activeEvents = filteredEvents.filter((event) => event.status === "active")
  const draftEvents = filteredEvents.filter((event) => event.status === "draft")
  const completedEvents = filteredEvents.filter((event) => event.status === "completed")

  return (
    <div className="container py-10">
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">My Events</h1>
          <p className="text-muted-foreground">Manage your events and NFT ticket sales</p>
        </div>
        <Button asChild>
          <Link href="/create-event">
            <Plus className="mr-2 h-4 w-4" />
            Create Event
          </Link>
        </Button>
      </div>

      {created && (
        <Alert className="mb-8">
          <BarChart className="h-4 w-4" />
          <AlertTitle>Event created successfully!</AlertTitle>
          <AlertDescription>
            Your event has been created and NFT tickets have been minted. You can now manage your event and track sales.
          </AlertDescription>
        </Alert>
      )}

      <div className="mb-8 flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search your events..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <Tabs defaultValue="active">
        <TabsList className="mb-8">
          <TabsTrigger value="active">Active Events ({activeEvents.length})</TabsTrigger>
          <TabsTrigger value="draft">Drafts ({draftEvents.length})</TabsTrigger>
          <TabsTrigger value="completed">Completed ({completedEvents.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="active" className="mt-0">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {activeEvents.map((event) => (
              <Card key={event.id}>
                <div className="relative h-48 overflow-hidden">
                  <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-primary hover:bg-primary/80">{event.category}</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>{event.title}</CardTitle>
                  <CardDescription>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm mt-1">
                      <MapPin className="h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Tickets Sold:</span>
                      <span>
                        {event.ticketsSold} / {event.totalTickets}
                      </span>
                    </div>
                    <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full"
                        style={{ width: `${(event.ticketsSold / event.totalTickets) * 100}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Revenue:</span>
                      <span>{event.revenue}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/my-events/${event.id}/edit`}>
                      <Edit className="mr-2 h-4 w-4" />
                      Edit
                    </Link>
                  </Button>
                  <Button size="sm" asChild>
                    <Link href={`/events/${event.id}`}>Manage</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {activeEvents.length === 0 && (
            <div className="text-center py-12">
              <div className="mx-auto w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
                <Calendar className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-medium mb-2">No active events</h3>
              <p className="text-muted-foreground mb-4">You don't have any active events</p>
              <Button asChild>
                <Link href="/create-event">Create Event</Link>
              </Button>
            </div>
          )}
        </TabsContent>

        <TabsContent value="draft" className="mt-0">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {draftEvents.map((event) => (
              <Card key={event.id}>
                <div className="relative h-48 overflow-hidden">
                  <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <Badge variant="outline">{event.category}</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>{event.title}</CardTitle>
                  <CardDescription>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm mt-1">
                      <MapPin className="h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    This event is still in draft mode and not visible to the public.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm">
                    <Trash2 className="mr-2 h-4 w-4" />
                    Delete
                  </Button>
                  <Button size="sm" asChild>
                    <Link href={`/my-events/${event.id}/edit`}>
                      <Edit className="mr-2 h-4 w-4" />
                      Edit
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {draftEvents.length === 0 && (
            <div className="text-center py-12">
              <div className="mx-auto w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
                <Edit className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-medium mb-2">No draft events</h3>
              <p className="text-muted-foreground mb-4">You don't have any events in draft mode</p>
              <Button asChild>
                <Link href="/create-event">Create Event</Link>
              </Button>
            </div>
          )}
        </TabsContent>

        <TabsContent value="completed" className="mt-0">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {completedEvents.map((event) => (
              <Card key={event.id}>
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    fill
                    className="object-cover grayscale"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <Badge variant="secondary">{event.category}</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>{event.title}</CardTitle>
                  <CardDescription>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm mt-1">
                      <MapPin className="h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Tickets Sold:</span>
                      <span>
                        {event.ticketsSold} / {event.totalTickets}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Revenue:</span>
                      <span>{event.revenue}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm">
                    <BarChart className="mr-2 h-4 w-4" />
                    Analytics
                  </Button>
                  <Button variant="outline" size="sm">
                    Duplicate
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {completedEvents.length === 0 && (
            <div className="text-center py-12">
              <div className="mx-auto w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
                <BarChart className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-medium mb-2">No completed events</h3>
              <p className="text-muted-foreground mb-4">You don't have any completed events</p>
              <Button asChild>
                <Link href="/create-event">Create Event</Link>
              </Button>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}

