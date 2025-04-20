import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Search, Filter, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function EventsPage() {
  return (
    <div className="container py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Explore Events</h1>
        <p className="text-muted-foreground">Discover and purchase NFT tickets for upcoming events</p>
      </div>

      {/* Search and filter */}
      <div className="mb-8 flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Search events, artists, venues..." className="pl-10" />
        </div>
        <Button variant="outline" className="md:w-auto w-full">
          <Filter className="mr-2 h-4 w-4" />
          Filters
        </Button>
      </div>

      {/* Event categories */}
      <Tabs defaultValue="all" className="mb-8">
        <TabsList className="mb-4">
          <TabsTrigger value="all">All Events</TabsTrigger>
          <TabsTrigger value="music">Music</TabsTrigger>
          <TabsTrigger value="sports">Sports</TabsTrigger>
          <TabsTrigger value="arts">Arts & Theater</TabsTrigger>
          <TabsTrigger value="conferences">Conferences</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="mt-0">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Event Card 1 */}
            <Link href="/events/1" className="group">
              <div className="overflow-hidden rounded-lg border bg-card shadow-sm transition-all hover:shadow-md">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/solana.webp?height=400&width=600"
                    alt="Tech Conference 2025"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-primary hover:bg-primary/80">Technology</Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold">Tech Conference 2025</h3>
                  <div className="mb-4 space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>May 15-17, 2025</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>San Francisco, CA</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span>5,000 attendees</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-sm text-muted-foreground">Starting from</div>
                      <div className="text-lg font-bold">0.1 ETH</div>
                    </div>
                    <Button>View Tickets</Button>
                  </div>
                </div>
              </div>
            </Link>

            {/* Event Card 2 */}
            <Link href="/events/2" className="group">
              <div className="overflow-hidden rounded-lg border bg-card shadow-sm transition-all hover:shadow-md">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/music.jpg?height=400&width=600"
                    alt="Summer Music Festival"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-primary hover:bg-primary/80">Music</Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold">Summer Music Festival</h3>
                  <div className="mb-4 space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>July 10-12, 2025</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>Austin, TX</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span>25,000 attendees</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-sm text-muted-foreground">Starting from</div>
                      <div className="text-lg font-bold">0.2 ETH</div>
                    </div>
                    <Button>View Tickets</Button>
                  </div>
                </div>
              </div>
            </Link>

            {/* Event Card 3 */}
            <Link href="/events/3" className="group">
              <div className="overflow-hidden rounded-lg border bg-card shadow-sm transition-all hover:shadow-md">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/nft.jpg?height=400&width=600"
                    alt="Art Exhibition"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-primary hover:bg-primary/80">Art</Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold">Digital Art Exhibition</h3>
                  <div className="mb-4 space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>September 5-20, 2025</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>New York, NY</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span>3,000 attendees</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-sm text-muted-foreground">Starting from</div>
                      <div className="text-lg font-bold">0.05 ETH</div>
                    </div>
                    <Button>View Tickets</Button>
                  </div>
                </div>
              </div>
            </Link>

            {/* Event Card 4 */}
            <Link href="/events/4" className="group">
              <div className="overflow-hidden rounded-lg border bg-card shadow-sm transition-all hover:shadow-md">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/nba.jpeg?height=400&width=600"
                    alt="Basketball Championship"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-primary hover:bg-primary/80">Sports</Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold">Basketball Championship</h3>
                  <div className="mb-4 space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>June 5, 2025</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>Chicago, IL</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span>15,000 attendees</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-sm text-muted-foreground">Starting from</div>
                      <div className="text-lg font-bold">0.15 ETH</div>
                    </div>
                    <Button>View Tickets</Button>
                  </div>
                </div>
              </div>
            </Link>


            {/* Event Card 6 */}
            <Link href="/events/6" className="group">
              <div className="overflow-hidden rounded-lg border bg-card shadow-sm transition-all hover:shadow-md">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/blockchain.JPG?height=400&width=600"
                    alt="Blockchain Summit"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-primary hover:bg-primary/80">Conference</Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold">Blockchain Summit 2025</h3>
                  <div className="mb-4 space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>October 10-12, 2025</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>Bennett University,India</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span>250 attendees</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-sm text-muted-foreground">Starting from</div>
                      <div className="text-lg font-bold">Free</div>
                    </div>
                    <Button>View Tickets</Button>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </TabsContent>

        {/* Other tabs would have similar content but filtered by category */}
        <TabsContent value="music" className="mt-0">
          <div className="text-center py-8">
            <p>Showing music events...</p>
          </div>
        </TabsContent>
        <TabsContent value="sports" className="mt-0">
          <div className="text-center py-8">
            <p>Showing sports events...</p>
          </div>
        </TabsContent>
        <TabsContent value="arts" className="mt-0">
          <div className="text-center py-8">
            <p>Showing arts & theater events...</p>
          </div>
        </TabsContent>
        <TabsContent value="conferences" className="mt-0">
          <div className="text-center py-8">
            <p>Showing conference events...</p>
          </div>
        </TabsContent>
      </Tabs>

      {/* Pagination */}
      <div className="flex items-center justify-center space-x-2 py-8">
        <Button variant="outline" size="sm" disabled>
          Previous
        </Button>
        <Button variant="outline" size="sm" className="bg-primary text-primary-foreground">
          1
        </Button>
        <Button variant="outline" size="sm">
          2
        </Button>
        <Button variant="outline" size="sm">
          3
        </Button>
        <Button variant="outline" size="sm">
          Next
        </Button>
      </div>
    </div>
  )
}

