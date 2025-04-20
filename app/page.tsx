import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle, Ticket, Zap, Globe, Shield, Coins } from "lucide-react"
import { Button } from "@/components/ui/button"
import EventCarousel from "@/components/event-carousel"
import HowItWorks from "@/components/how-it-works"
import TestimonialSlider from "@/components/testimonial-slider"
import FeaturedEvents from "@/components/featured-events"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-background z-0"></div>
        <div className="container relative z-10">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                  Revolutionize
                </span>{" "}
                Event Ticketing with NFTs
              </h1>
              <p className="text-xl text-muted-foreground">
                Create, sell, and collect verifiable NFT tickets for your events. Secure, transparent, and with built-in
                royalties for resales.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="group" asChild>
                  <Link href="/create-event">
                    Create an Event
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/events">Explore Events</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-[400px] w-full overflow-hidden rounded-lg shadow-xl">
                <Image
                  src="/music.jpg?height=800&width=600"
                  alt="NFT Ticket Example"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <div className="mb-2 text-sm font-medium text-white/80">FEATURED EVENT</div>
                  <h3 className="text-2xl font-bold text-white">Summer Music Festival 2025</h3>
                  <p className="mt-1 text-white/90">Limited edition NFT tickets available now</p>
                </div>
              </div>
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-primary/30 blur-3xl"></div>
              <div className="absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-purple-500/30 blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y bg-muted/50">
        <div className="container py-12">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="flex flex-col items-center justify-center">
              <span className="text-3xl font-bold text-primary">10K+</span>
              <span className="text-sm text-muted-foreground">Events Created</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <span className="text-3xl font-bold text-primary">1M+</span>
              <span className="text-sm text-muted-foreground">NFT Tickets Sold</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <span className="text-3xl font-bold text-primary">50K+</span>
              <span className="text-sm text-muted-foreground">Active Users</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <span className="text-3xl font-bold text-primary">100+</span>
              <span className="text-sm text-muted-foreground">Countries</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <FeaturedEvents />

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Why Choose <span className="text-primary">Ticketify</span>
            </h2>
            <p className="mt-4 text-xl text-muted-foreground">
              Our platform offers unique advantages for both event organizers and attendees
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="group rounded-lg border p-6 shadow-sm transition-all hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Secure & Verifiable</h3>
              <p className="text-muted-foreground">
                Each ticket is a unique NFT on the blockchain, making counterfeiting impossible and verification
                instant.
              </p>
            </div>
            <div className="group rounded-lg border p-6 shadow-sm transition-all hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Coins className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Built-in Royalties</h3>
              <p className="text-muted-foreground">
                Event organizers earn a percentage from secondary market sales, creating a new revenue stream.
              </p>
            </div>
            <div className="group rounded-lg border p-6 shadow-sm transition-all hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Globe className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Global Marketplace</h3>
              <p className="text-muted-foreground">
                Reach a worldwide audience of ticket buyers and collectors with our decentralized marketplace.
              </p>
            </div>
            <div className="group rounded-lg border p-6 shadow-sm transition-all hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Instant Delivery</h3>
              <p className="text-muted-foreground">
                Tickets are delivered instantly to buyers' wallets, eliminating shipping delays and lost tickets.
              </p>
            </div>
            <div className="group rounded-lg border p-6 shadow-sm transition-all hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <CheckCircle className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Easy Integration</h3>
              <p className="text-muted-foreground">
                Our platform integrates with existing event management systems and venue scanners.
              </p>
            </div>
            <div className="group rounded-lg border p-6 shadow-sm transition-all hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Ticket className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Collectible Memorabilia</h3>
              <p className="text-muted-foreground">
                Tickets remain as digital collectibles after the event, creating lasting value for attendees.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <HowItWorks />

      {/* Event Carousel */}
      <EventCarousel />

      {/* Testimonials */}
      <TestimonialSlider />

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to Transform Your Event Experience?
            </h2>
            <p className="mt-4 text-xl text-muted-foreground">
              Join thousands of event organizers who are revolutionizing ticketing with NFTs
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="group" asChild>
                <Link href="/create-event">
                  Create Your First Event
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Schedule a Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

