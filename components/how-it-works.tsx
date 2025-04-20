import Image from "next/image"

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-muted/30">
      <div className="container">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How Ticketify Works</h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Our platform makes it easy to create, sell, and collect NFT tickets
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-border md:block hidden"></div>

          <div className="grid gap-12">
            {/* Step 1 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="relative">
                  <div className="absolute -right-4 top-1/2 z-10 hidden h-8 w-8 -translate-y-1/2 rounded-full border-4 border-background bg-primary md:block"></div>
                  <div className="rounded-lg border bg-card p-6 shadow-sm md:mr-8">
                    <div className="mb-2 text-sm font-medium text-primary md:hidden">Step 1</div>
                    <h3 className="mb-2 text-xl font-bold">Create Your Event</h3>
                    <p className="text-muted-foreground">
                      Set up your event details, ticket tiers, pricing, and customize your NFT ticket designs. Add
                      special perks like meet-and-greets or exclusive merchandise that come with premium tickets.
                    </p>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="relative h-[250px] overflow-hidden rounded-lg">
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="relative h-[250px] overflow-hidden rounded-lg">
                </div>
              </div>
              <div>
                <div className="relative">
                  <div className="absolute -left-4 top-1/2 z-10 hidden h-8 w-8 -translate-y-1/2 rounded-full border-4 border-background bg-primary md:block"></div>
                  <div className="rounded-lg border bg-card p-6 shadow-sm md:ml-8">
                    <div className="mb-2 text-sm font-medium text-primary md:hidden">Step 2</div>
                    <h3 className="mb-2 text-xl font-bold">Mint NFT Tickets</h3>
                    <p className="text-muted-foreground">
                      With one click, create your NFT ticket collection on the blockchain. Set royalty percentages for
                      secondary sales and control the total supply of tickets.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="relative">
                  <div className="absolute -right-4 top-1/2 z-10 hidden h-8 w-8 -translate-y-1/2 rounded-full border-4 border-background bg-primary md:block"></div>
                  <div className="rounded-lg border bg-card p-6 shadow-sm md:mr-8">
                    <div className="mb-2 text-sm font-medium text-primary md:hidden">Step 3</div>
                    <h3 className="mb-2 text-xl font-bold">Sell & Distribute</h3>
                    <p className="text-muted-foreground">
                      List your tickets on our marketplace or share a direct link with your audience. Buyers can
                      purchase with crypto or credit card and receive their NFT tickets instantly.
                    </p>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="relative h-[250px] overflow-hidden rounded-lg">
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="relative h-[250px] overflow-hidden rounded-lg">
                 
                </div>
              </div>
              <div>
                <div className="relative">
                  <div className="absolute -left-4 top-1/2 z-10 hidden h-8 w-8 -translate-y-1/2 rounded-full border-4 border-background bg-primary md:block"></div>
                  <div className="rounded-lg border bg-card p-6 shadow-sm md:ml-8">
                    <div className="mb-2 text-sm font-medium text-primary md:hidden">Step 4</div>
                    <h3 className="mb-2 text-xl font-bold">Event Check-in</h3>
                    <p className="text-muted-foreground">
                      Attendees show their NFT tickets at the venue using our mobile app. Our verification system
                      instantly validates the authenticity of each ticket.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

