"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Search, QrCode, Send, Download, TicketIcon } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useSearchParams } from "next/navigation"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

// Mock ticket data
const tickets = [
  {
    id: 1,
    eventId: 1,
    eventName: "Tech Conference 2025",
    ticketType: "VIP Pass",
    date: "May 15-17, 2025",
    time: "9:00 AM - 6:00 PM",
    location: "Moscone Center, San Francisco, CA",
    image: "/solana.webp?height=400&width=400",
    status: "upcoming",
    tokenId: "12345",
    qrCode: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 2,
    eventId: 2,
    eventName: "Summer Music Festival",
    ticketType: "General Admission",
    date: "July 10-12, 2025",
    time: "12:00 PM - 11:00 PM",
    location: "Zilker Park, Austin, TX",
    image: "/music.jpg?height=400&width=400",
    status: "upcoming",
    tokenId: "23456",
    qrCode: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 3,
    eventId: 3,
    eventName: "Digital Art Exhibition",
    ticketType: "Weekend Pass",
    date: "September 5-7, 2025",
    time: "10:00 AM - 8:00 PM",
    location: "Modern Art Gallery, New York, NY",
    image: "/nft.jpg?height=400&width=400",
    status: "upcoming",
    tokenId: "34567",
    qrCode: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 4,
    eventId: 4,
    eventName: "Blockchain Summit 2024",
    ticketType: "Conference Pass",
    date: "March 10-12, 2024",
    time: "9:00 AM - 5:00 PM",
    location: "Convention Center, Miami, FL",
    image: "/blockchain.JPG?height=400&width=400",
    status: "past",
    tokenId: "45678",
    qrCode: "/placeholder.svg?height=200&width=200",
  },
]

export default function MyTicketsPage() {
  const searchParams = useSearchParams()
  const purchased = searchParams.get("purchased")
  const eventId = searchParams.get("eventId")
  const [selectedTicket, setSelectedTicket] = useState<number | null>(null)

  const handleTicketClick = (id: number) => {
    setSelectedTicket(id === selectedTicket ? null : id)
  }

  const upcomingTickets = tickets.filter((ticket) => ticket.status === "upcoming")
  const pastTickets = tickets.filter((ticket) => ticket.status === "past")

  return (
    <div className="container py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-2">My Tickets</h1>
        <p className="text-muted-foreground">Manage your NFT tickets for upcoming and past events</p>
      </div>

      {purchased && (
        <Alert className="mb-8">
          <QrCode className="h-4 w-4" />
          <AlertTitle>Ticket purchased successfully!</AlertTitle>
          <AlertDescription>
            Your NFT ticket for {tickets.find((t) => t.eventId.toString() === eventId)?.eventName || "the event"} has
            been added to your wallet and is now available in your collection.
          </AlertDescription>
        </Alert>
      )}

      <div className="mb-8 flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Search your tickets..." className="pl-10" />
        </div>
      </div>

      <Tabs defaultValue="upcoming">
        <TabsList className="mb-8">
          <TabsTrigger value="upcoming">Upcoming Events ({upcomingTickets.length})</TabsTrigger>
          <TabsTrigger value="past">Past Events ({pastTickets.length})</TabsTrigger>
          <TabsTrigger value="marketplace">Marketplace</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming" className="mt-0">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {upcomingTickets.map((ticket) => (
              <div
                key={ticket.id}
                className={`overflow-hidden rounded-lg border bg-card shadow-sm transition-all hover:shadow-md cursor-pointer ${selectedTicket === ticket.id ? "ring-2 ring-primary" : ""}`}
                onClick={() => handleTicketClick(ticket.id)}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={ticket.image || "/placeholder.svg"}
                    alt={ticket.eventName}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <Badge>{ticket.ticketType}</Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold">{ticket.eventName}</h3>
                  <div className="mb-4 space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{ticket.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{ticket.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{ticket.location}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-xs text-muted-foreground">Token ID: {ticket.tokenId}</div>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/my-tickets/${ticket.id}`}>View</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {selectedTicket && (
            <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <div className="bg-card rounded-lg shadow-lg max-w-md w-full p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-xl font-bold">Ticket Details</h2>
                  <Button variant="ghost" size="sm" onClick={() => setSelectedTicket(null)}>
                    ✕
                  </Button>
                </div>

                {tickets.find((t) => t.id === selectedTicket) && (
                  <>
                    <div className="text-center mb-4">
                      <h3 className="font-bold text-lg">{tickets.find((t) => t.id === selectedTicket)?.eventName}</h3>
                      <p className="text-muted-foreground">
                        {tickets.find((t) => t.id === selectedTicket)?.ticketType}
                      </p>
                    </div>

                    <div className="flex justify-center mb-4">
                      <div className="relative h-48 w-48 overflow-hidden rounded-lg border-4 border-white">
                        <Image
                          src={tickets.find((t) => t.id === selectedTicket)?.qrCode || ""}
                          alt="QR Code"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>

                    <div className="space-y-2 mb-6">
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span>{tickets.find((t) => t.id === selectedTicket)?.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>{tickets.find((t) => t.id === selectedTicket)?.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span>{tickets.find((t) => t.id === selectedTicket)?.location}</span>
                      </div>
                    </div>

                    <div className="text-center text-xs text-muted-foreground mb-4">
                      Token ID: {tickets.find((t) => t.id === selectedTicket)?.tokenId}
                    </div>

                    <div className="flex gap-2">
                      <Button className="flex-1">
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                      <Button variant="outline" className="flex-1">
                        <Send className="mr-2 h-4 w-4" />
                        Transfer
                      </Button>
                    </div>
                  </>
                )}
              </div>
            </div>
          )}

          {upcomingTickets.length === 0 && (
            <div className="text-center py-12">
              <div className="mx-auto w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
                <TicketIcon className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-medium mb-2">No upcoming tickets</h3>
              <p className="text-muted-foreground mb-4">You don't have any tickets for upcoming events</p>
              <Button asChild>
                <Link href="/events">Browse Events</Link>
              </Button>
            </div>
          )}
        </TabsContent>

        <TabsContent value="past" className="mt-0">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pastTickets.map((ticket) => (
              <div
                key={ticket.id}
                className="overflow-hidden rounded-lg border bg-card shadow-sm transition-all hover:shadow-md"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={ticket.image || "/placeholder.svg"}
                    alt={ticket.eventName}
                    fill
                    className="object-cover grayscale"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <Badge variant="outline">{ticket.ticketType}</Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold">{ticket.eventName}</h3>
                  <div className="mb-4 space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{ticket.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{ticket.location}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-xs text-muted-foreground">Token ID: {ticket.tokenId}</div>
                    <Button variant="outline" size="sm">
                      View Collectible
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {pastTickets.length === 0 && (
            <div className="text-center py-12">
              <div className="mx-auto w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
                <TicketIcon className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-medium mb-2">No past tickets</h3>
              <p className="text-muted-foreground mb-4">You don't have any tickets from past events</p>
              <Button asChild>
                <Link href="/events">Browse Events</Link>
              </Button>
            </div>
          )}
        </TabsContent>

        <TabsContent value="marketplace" className="mt-0">
          <div className="text-center py-12">
            <div className="mx-auto w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
              <TicketIcon className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-medium mb-2">Marketplace</h3>
            <p className="text-muted-foreground mb-4">Buy and sell NFT tickets on the secondary market</p>
            <Button>List a Ticket for Sale</Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

