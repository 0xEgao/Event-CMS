"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarIcon, Plus, Trash2, ArrowRight } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"
import ImageUpload from "@/components/image-upload"
import { v4 as uuidv4 } from "uuid"

// Initial form state
const initialEventData = {
  id: "",
  title: "",
  description: "",
  longDescription: "",
  category: "",
  date: "",
  time: "",
  location: "",
  address: "",
  image: null,
  status: "active",
  ticketsSold: 0,
  totalTickets: 0,
  revenue: "0 ETH",
  attendees: 0,
  ticketTiers: [{ id: uuidv4(), name: "General Admission", price: "", quantity: "", description: "" }],
  royaltyPercentage: "",
  blockchain: "ethereum",
}

export default function CreateEventPage() {
  const router = useRouter()
  const [date, setDate] = useState<Date | undefined>()
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [eventData, setEventData] = useState(initialEventData)
  const [imageFile, setImageFile] = useState<File | null>(null)

  // Update the date in the form data when it changes
  useEffect(() => {
    if (date) {
      setEventData((prev) => ({
        ...prev,
        date: format(date, "MMMM d, yyyy"),
      }))
    }
  }, [date])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setEventData((prev) => ({
      ...prev,
      [id]: value,
    }))
  }

  const handleSelectChange = (id: string, value: string) => {
    setEventData((prev) => ({
      ...prev,
      [id]: value,
    }))
  }

  const handleImageChange = (file: File | null) => {
    setImageFile(file)
    // Create a preview URL for the image
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setEventData((prev) => ({
          ...prev,
          image: reader.result as string,
        }))
      }
      reader.readAsDataURL(file)
    } else {
      setEventData((prev) => ({
        ...prev,
        image: null,
      }))
    }
  }

  const addTicketTier = () => {
    setEventData((prev) => ({
      ...prev,
      ticketTiers: [...prev.ticketTiers, { id: uuidv4(), name: "", price: "", quantity: "", description: "" }],
    }))
  }

  const removeTicketTier = (index: number) => {
    setEventData((prev) => {
      const newTiers = [...prev.ticketTiers]
      newTiers.splice(index, 1)
      return {
        ...prev,
        ticketTiers: newTiers,
      }
    })
  }

  const updateTicketTier = (index: number, field: string, value: string) => {
    setEventData((prev) => {
      const newTiers = [...prev.ticketTiers]
      newTiers[index] = { ...newTiers[index], [field]: value }
      return {
        ...prev,
        ticketTiers: newTiers,
      }
    })
  }

  const calculateTotalTickets = () => {
    return eventData.ticketTiers.reduce((total, tier) => {
      return total + (Number.parseInt(tier.quantity) || 0)
    }, 0)
  }

  const handleSubmit = () => {
    setIsSubmitting(true)

    // Generate a unique ID for the event
    const eventId = uuidv4()

    // Calculate total tickets
    const totalTickets = calculateTotalTickets()

    // Prepare the final event data
    const finalEventData = {
      ...eventData,
      id: eventId,
      totalTickets,
      attendees: totalTickets, // Set attendees to match total tickets
      status: "active",
      ticketsSold: 0,
      revenue: "0 ETH",
      // If no image was uploaded, use a placeholder
      image: eventData.image || "/placeholder.svg?height=400&width=600",
    }

    // In a real app, we would send this data to an API
    console.log("Creating event:", finalEventData)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)

      // Store the event data in localStorage so we can access it later
      // In a real app, this would be stored in a database
      const existingEvents = JSON.parse(localStorage.getItem("ticketifyEvents") || "[]")
      localStorage.setItem("ticketifyEvents", JSON.stringify([...existingEvents, finalEventData]))

      // Redirect to the event page or my events page
      router.push(`/events/${eventId}?created=true`)
    }, 1500)
  }

  const isStepValid = (step: number) => {
    switch (step) {
      case 1:
        return eventData.title && eventData.category && eventData.description && eventData.date && eventData.location
      case 2:
        return eventData.ticketTiers.every((tier) => tier.name && tier.price && tier.quantity)
      default:
        return true
    }
  }

  return (
    <div className="container py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Create Event</h1>
        <p className="text-muted-foreground">Create a new event and mint NFT tickets</p>
      </div>

      <div className="mb-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div
              className={cn(
                "flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium",
                currentStep >= 1 ? "bg-primary text-primary-foreground" : "border border-input bg-background",
              )}
            >
              1
            </div>
            <span className={currentStep >= 1 ? "font-medium" : "text-muted-foreground"}>Event Details</span>
          </div>
          <div className="hidden sm:block h-0.5 w-10 bg-muted"></div>
          <div className="flex items-center space-x-2">
            <div
              className={cn(
                "flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium",
                currentStep >= 2 ? "bg-primary text-primary-foreground" : "border border-input bg-background",
              )}
            >
              2
            </div>
            <span className={currentStep >= 2 ? "font-medium" : "text-muted-foreground"}>Ticket Setup</span>
          </div>
          <div className="hidden sm:block h-0.5 w-10 bg-muted"></div>
          <div className="flex items-center space-x-2">
            <div
              className={cn(
                "flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium",
                currentStep >= 3 ? "bg-primary text-primary-foreground" : "border border-input bg-background",
              )}
            >
              3
            </div>
            <span className={currentStep >= 3 ? "font-medium" : "text-muted-foreground"}>Review & Mint</span>
          </div>
        </div>
      </div>

      {currentStep === 1 && (
        <div className="space-y-8">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="title">Event Name</Label>
              <Input id="title" placeholder="Enter event name" value={eventData.title} onChange={handleInputChange} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select value={eventData.category} onValueChange={(value) => handleSelectChange("category", value)}>
                <SelectTrigger id="category">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="music">Music</SelectItem>
                  <SelectItem value="sports">Sports</SelectItem>
                  <SelectItem value="arts">Arts & Theater</SelectItem>
                  <SelectItem value="conference">Conference</SelectItem>
                  <SelectItem value="workshop">Workshop</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Event Description</Label>
            <Textarea
              id="description"
              placeholder="Describe your event"
              className="min-h-[120px]"
              value={eventData.description}
              onChange={handleInputChange}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="longDescription">Detailed Description (Optional)</Label>
            <Textarea
              id="longDescription"
              placeholder="Provide more details about your event"
              className="min-h-[120px]"
              value={eventData.longDescription}
              onChange={handleInputChange}
            />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label>Event Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : "Select date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                </PopoverContent>
              </Popover>
            </div>
            <div className="space-y-2">
              <Label htmlFor="time">Event Time</Label>
              <Input id="time" type="time" value={eventData.time} onChange={handleInputChange} />
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="location">Venue Name</Label>
              <Input
                id="location"
                placeholder="Enter venue name"
                value={eventData.location}
                onChange={handleInputChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="address">Venue Address</Label>
              <Input
                id="address"
                placeholder="Enter venue address"
                value={eventData.address}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="eventImage">Event Image</Label>
            <ImageUpload onChange={handleImageChange} value={eventData.image} />
          </div>

          <div className="flex justify-end">
            <Button onClick={() => setCurrentStep(2)} disabled={!isStepValid(1)}>
              Next Step
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      )}

      {currentStep === 2 && (
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold">Ticket Tiers</h2>
              <Button variant="outline" size="sm" onClick={addTicketTier}>
                <Plus className="mr-2 h-4 w-4" />
                Add Tier
              </Button>
            </div>

            {eventData.ticketTiers.map((tier, index) => (
              <Card key={tier.id}>
                <CardHeader>
                  <CardTitle className="text-lg">Ticket Tier {index + 1}</CardTitle>
                  <CardDescription>Define the details for this ticket tier</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor={`tierName-${index}`}>Tier Name</Label>
                      <Input
                        id={`tierName-${index}`}
                        value={tier.name}
                        onChange={(e) => updateTicketTier(index, "name", e.target.value)}
                        placeholder="e.g., General Admission, VIP"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor={`tierPrice-${index}`}>Price (ETH)</Label>
                      <Input
                        id={`tierPrice-${index}`}
                        value={tier.price}
                        onChange={(e) => updateTicketTier(index, "price", e.target.value)}
                        placeholder="0.1"
                      />
                    </div>
                  </div>
                  <div className="mt-4 space-y-2">
                    <Label htmlFor={`tierQuantity-${index}`}>Quantity Available</Label>
                    <Input
                      id={`tierQuantity-${index}`}
                      value={tier.quantity}
                      onChange={(e) => updateTicketTier(index, "quantity", e.target.value)}
                      placeholder="100"
                    />
                  </div>
                  <div className="mt-4 space-y-2">
                    <Label htmlFor={`tierDescription-${index}`}>Description</Label>
                    <Textarea
                      id={`tierDescription-${index}`}
                      value={tier.description}
                      onChange={(e) => updateTicketTier(index, "description", e.target.value)}
                      placeholder="What's included with this ticket"
                    />
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => removeTicketTier(index)}
                    disabled={eventData.ticketTiers.length === 1}
                  >
                    <Trash2 className="mr-2 h-4 w-4" />
                    Remove
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold">NFT Settings</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="royaltyPercentage">Royalty Percentage</Label>
                <Input
                  id="royaltyPercentage"
                  placeholder="e.g., 10"
                  value={eventData.royaltyPercentage}
                  onChange={handleInputChange}
                />
                <p className="text-xs text-muted-foreground">
                  Percentage of secondary sales you'll receive as royalties
                </p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="blockchain">Blockchain</Label>
                <Select value={eventData.blockchain} onValueChange={(value) => handleSelectChange("blockchain", value)}>
                  <SelectTrigger id="blockchain">
                    <SelectValue placeholder="Select blockchain" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ethereum">Ethereum</SelectItem>
                    <SelectItem value="polygon">Polygon</SelectItem>
                    <SelectItem value="solana">Solana</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div className="flex justify-between">
            <Button variant="outline" onClick={() => setCurrentStep(1)}>
              Previous Step
            </Button>
            <Button onClick={() => setCurrentStep(3)} disabled={!isStepValid(2)}>
              Next Step
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      )}

      {currentStep === 3 && (
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Review Your Event</CardTitle>
              <CardDescription>Please review all details before minting your NFT tickets</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="event">
                <TabsList className="mb-4">
                  <TabsTrigger value="event">Event Details</TabsTrigger>
                  <TabsTrigger value="tickets">Ticket Tiers</TabsTrigger>
                  <TabsTrigger value="nft">NFT Settings</TabsTrigger>
                </TabsList>
                <TabsContent value="event" className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-medium">Event Name</h3>
                      <p className="text-muted-foreground">{eventData.title || "Not specified"}</p>
                    </div>
                    <div>
                      <h3 className="font-medium">Category</h3>
                      <p className="text-muted-foreground">{eventData.category || "Not specified"}</p>
                    </div>
                    <div>
                      <h3 className="font-medium">Date & Time</h3>
                      <p className="text-muted-foreground">
                        {eventData.date} {eventData.time ? `at ${eventData.time}` : ""}
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium">Venue</h3>
                      <p className="text-muted-foreground">
                        {eventData.location}
                        {eventData.address ? `, ${eventData.address}` : ""}
                      </p>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium">Description</h3>
                    <p className="text-muted-foreground">{eventData.description || "No description provided"}</p>
                  </div>
                  {eventData.longDescription && (
                    <div>
                      <h3 className="font-medium">Detailed Description</h3>
                      <p className="text-muted-foreground">{eventData.longDescription}</p>
                    </div>
                  )}
                  {eventData.image && (
                    <div>
                      <h3 className="font-medium">Event Image</h3>
                      <div className="mt-2 relative h-[150px] w-[300px] overflow-hidden rounded-lg">
                        <img
                          src={eventData.image || "/placeholder.svg"}
                          alt="Event preview"
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </div>
                  )}
                </TabsContent>
                <TabsContent value="tickets" className="space-y-4">
                  {eventData.ticketTiers.map((tier, index) => (
                    <div key={tier.id} className="border rounded-lg p-4">
                      <h3 className="font-medium">{tier.name || `Ticket Tier ${index + 1}`}</h3>
                      <div className="grid grid-cols-2 gap-2 mt-2">
                        <div>
                          <span className="text-sm text-muted-foreground">Price:</span>
                          <span className="ml-2">{tier.price || "0"} ETH</span>
                        </div>
                        <div>
                          <span className="text-sm text-muted-foreground">Quantity:</span>
                          <span className="ml-2">{tier.quantity || "0"}</span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">
                        {tier.description || "No description provided"}
                      </p>
                    </div>
                  ))}
                  <div className="mt-4 p-4 bg-muted rounded-lg">
                    <div className="font-medium">Total Tickets: {calculateTotalTickets()}</div>
                  </div>
                </TabsContent>
                <TabsContent value="nft" className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-medium">Royalty Percentage</h3>
                      <p className="text-muted-foreground">{eventData.royaltyPercentage || "0"}%</p>
                    </div>
                    <div>
                      <h3 className="font-medium">Blockchain</h3>
                      <p className="text-muted-foreground">{eventData.blockchain}</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium">Gas Fees (estimated)</h3>
                    <p className="text-muted-foreground">0.005 ETH</p>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter>
              <p className="text-sm text-muted-foreground">
                By creating this event, you agree to our terms of service and platform fees.
              </p>
            </CardFooter>
          </Card>

          <div className="flex justify-between">
            <Button variant="outline" onClick={() => setCurrentStep(2)}>
              Previous Step
            </Button>
            <Button onClick={handleSubmit} disabled={isSubmitting}>
              {isSubmitting ? "Creating Event..." : "Create Event & Mint Tickets"}
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

