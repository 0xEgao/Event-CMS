import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users } from "lucide-react"

export default function FeaturedEvents() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Featured Events</h2>
          <p className="mt-4 text-muted-foreground">Discover upcoming events with exclusive NFT tickets</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Event Card 1 */}
          <div className="group overflow-hidden rounded-lg border bg-card shadow-sm transition-all hover:shadow-md">
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

          {/* Event Card 2 */}
          <div className="group overflow-hidden rounded-lg border bg-card shadow-sm transition-all hover:shadow-md">
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

          {/* Event Card 3 */}
          <div className="group overflow-hidden rounded-lg border bg-card shadow-sm transition-all hover:shadow-md">
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
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg">
            View All Events
          </Button>
        </div>
      </div>
    </section>
  )
}

