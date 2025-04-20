"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, CreditCard, Wallet, Info } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import WalletConnect from "@/components/WalletConnect"



// Function to get event and ticket data
const getTicketData = (eventId: string, tierId: string) => {
  // First check localStorage for custom events
  const storedEvents = JSON.parse(localStorage.getItem("ticketifyEvents") || "[]")
  const customEvent = storedEvents.find((e: any) => e.id === eventId)

  if (customEvent) {
    // Find the specific ticket tier
    const ticketTier = customEvent.ticketTiers.find((t: any) => t.id === tierId) || customEvent.ticketTiers[0]

    return {
      id: ticketTier.id,
      eventId: customEvent.id,
      eventTitle: customEvent.title,
      name: ticketTier.name,
      description: ticketTier.description || "Standard admission ticket",
      price: `${ticketTier.price} ETH`,
      fiatPrice: `$${Number.parseFloat(ticketTier.price) * 2000}`, // Mock conversion rate
      image: customEvent.image || "/placeholder.svg?height=400&width=400",
      date: customEvent.date,
      location: `${customEvent.location}${customEvent.address ? `, ${customEvent.address}` : ""}`,
    }
  }

  // If not found or not a custom event, return mock data based on tierId
  // This is for the default mock events
  if (tierId === "1") {
    return {
      id: 1,
      eventId: eventId,
      eventTitle: "Tech Conference 2025",
      name: "General Admission",
      description: "Access to all general sessions and expo hall",
      price: "0.1 ETH",
      fiatPrice: "$200",
      image: "/placeholder.svg?height=400&width=400",
      date: "May 15-17, 2025",
      location: "Moscone Center, San Francisco, CA",
    }
  } else if (tierId === "2") {
    return {
      id: 2,
      eventId: eventId,
      eventTitle: "Tech Conference 2025",
      name: "VIP Pass",
      description: "General admission plus VIP lounge access, exclusive workshops, and after-party",
      price: "0.3 ETH",
      fiatPrice: "$600",
      image: "/placeholder.svg?height=400&width=400",
      date: "May 15-17, 2025",
      location: "Moscone Center, San Francisco, CA",
    }
  } else {
    return {
      id: 3,
      eventId: eventId,
      eventTitle: "Tech Conference 2025",
      name: "Workshop Pass",
      description: "General admission plus access to all workshops and hands-on sessions",
      price: "0.2 ETH",
      fiatPrice: "$400",
      image: "/placeholder.svg?height=400&width=400",
      date: "May 15-17, 2025",
      location: "Moscone Center, San Francisco, CA",
    }
  }
}

export default function BuyTicketPage({ params }: { params: { id: string; tierId: string } }) {
  const router = useRouter()
  const [quantity, setQuantity] = useState(1)
  const [paymentMethod, setPaymentMethod] = useState("crypto")
  const [isProcessing, setIsProcessing] = useState(false)
  const [ticketData, setTicketData] = useState<any>(null)

  useEffect(() => {
    // Get the ticket data when the component mounts
    const data = getTicketData(params.id, params.tierId)
    setTicketData(data)
  }, [params.id, params.tierId])

  const handlePurchase = () => {
    setIsProcessing(true)
    // Simulate API call
    setTimeout(() => {
      setIsProcessing(false)
      router.push(`/my-tickets?purchased=true&eventId=${params.id}`)
    }, 2000)
  }

  // Show loading state while ticket data is being fetched
  if (!ticketData) {
    return <div className="container py-10">Loading ticket information...</div>
  }

  return (
    <div className="container py-10">
      <div className="mb-6">
        <Button variant="ghost" asChild className="mb-4">
          <Link href={`/events/${params.id}`}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Event
          </Link>
        </Button>
        <h1 className="text-3xl font-bold tracking-tight">Purchase Ticket</h1>
        <p className="text-muted-foreground">
          You're purchasing a {ticketData.name} for {ticketData.eventTitle}
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-3">
        {/* Ticket details */}
        <div className="lg:col-span-2 space-y-8">
          <div className="rounded-lg border p-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="relative h-[200px] overflow-hidden rounded-lg">
                <Image
                  src={ticketData.image || "/placeholder.svg"}
                  alt={ticketData.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-xl font-bold">{ticketData.name}</h2>
                <p className="text-muted-foreground mb-4">{ticketData.description}</p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Event:</span>
                    <span className="font-medium">{ticketData.eventTitle}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Date:</span>
                    <span className="font-medium">{ticketData.date}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Location:</span>
                    <span className="font-medium">{ticketData.location}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Price:</span>
                    <span className="font-medium">
                      {ticketData.price} ({ticketData.fiatPrice})
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg border p-6">
            <h2 className="text-xl font-bold mb-4">Ticket Details</h2>
            <div className="space-y-4">
              <div>
                <Label htmlFor="quantity">Quantity</Label>
                <div className="flex items-center mt-1">
                  <Button variant="outline" size="sm" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                    -
                  </Button>
                  <Input
                    id="quantity"
                    type="number"
                    min="1"
                    max="10"
                    value={quantity}
                    onChange={(e) => setQuantity(Number.parseInt(e.target.value) || 1)}
                    className="w-16 mx-2 text-center"
                  />
                  <Button variant="outline" size="sm" onClick={() => setQuantity(Math.min(10, quantity + 1))}>
                    +
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg border p-6">
            <h2 className="text-xl font-bold mb-4">Payment Method</h2>
            <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
              <div className="flex items-center space-x-2 mb-4">
                <RadioGroupItem value="crypto" id="crypto" />
                <Label htmlFor="crypto" className="flex items-center">
                  <Wallet className="mr-2 h-4 w-4" />
                  Cryptocurrency Wallet
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="card" id="card" />
                <Label htmlFor="card" className="flex items-center">
                  <CreditCard className="mr-2 h-4 w-4" />
                  Credit/Debit Card
                </Label>
              </div>
            </RadioGroup>

            {paymentMethod === "crypto" && (
              <div className="mt-4 p-4 bg-muted rounded-lg">
                <div className="flex items-center mb-2">
                  <Info className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    Connect your wallet to purchase with cryptocurrency
                  </span>
                </div>
                <WalletConnect></WalletConnect>
              </div>
            )}

            {paymentMethod === "card" && (
              <div className="mt-4 space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="cardName">Name on Card</Label>
                  <Input id="cardName" placeholder="John Doe" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="expiry">Expiry Date</Label>
                    <Input id="expiry" placeholder="MM/YY" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="cvc">CVC</Label>
                    <Input id="cvc" placeholder="123" />
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="rounded-lg border p-6">
            <h2 className="text-xl font-bold mb-4">Terms & Conditions</h2>
            <div className="space-y-4">
              <div className="flex items-top space-x-2">
                <Checkbox id="terms" />
                <div className="grid gap-1.5 leading-none">
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    I agree to the terms and conditions
                  </label>
                  <p className="text-sm text-muted-foreground">
                    By purchasing this NFT ticket, you agree to our terms of service and privacy policy. NFT tickets are
                    non-refundable within 7 days of the event.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Order summary */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 rounded-lg border bg-card p-6 shadow-sm">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>
                  {ticketData.name} x {quantity}
                </span>
                <span>{quantity === 1 ? ticketData.price : `${quantity} × ${ticketData.price}`}</span>
              </div>
              <div className="flex justify-between">
                <span>Platform Fee</span>
                <span>0.01 ETH</span>
              </div>
              <Separator />
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>
                  {(Number.parseFloat(ticketData.price.replace(" ETH", "")) * quantity + 0.01).toFixed(2)} ETH
                </span>
              </div>
              <Button className="w-full mt-4" size="lg" onClick={handlePurchase} disabled={isProcessing}>
                {isProcessing ? "Processing..." : "Complete Purchase"}
              </Button>
              <p className="text-xs text-center text-muted-foreground mt-2">
                You'll receive your NFT ticket in your connected wallet after purchase
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

