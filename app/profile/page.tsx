"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Switch } from "@/components/ui/switch"
import { Wallet, CreditCard, Upload, Save } from "lucide-react"

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [isSaving, setIsSaving] = useState(false)

  const handleSave = () => {
    setIsSaving(true)
    // Simulate API call
    setTimeout(() => {
      setIsSaving(false)
      setIsEditing(false)
    }, 1000)
  }

  return (
    <div className="container py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Profile Settings</h1>
        <p className="text-muted-foreground">Manage your account settings and preferences</p>
      </div>

      <Tabs defaultValue="profile" className="space-y-8">
        <TabsList>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="wallet">Wallet</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <div className="grid gap-8 md:grid-cols-[1fr_2fr]">
            <Card>
              <CardHeader>
                <CardTitle>Profile Picture</CardTitle>
                <CardDescription>Update your profile photo</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center">
                <Avatar className="h-32 w-32">
                  <AvatarImage src="/placeholder.svg?height=128&width=128" alt="Profile" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <Button variant="outline" size="sm" className="mt-4">
                  <Upload className="mr-2 h-4 w-4" />
                  Change Photo
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>Update your personal details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" defaultValue="John" disabled={!isEditing} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" defaultValue="Doe" disabled={!isEditing} />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="john@example.com" disabled={!isEditing} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea id="bio" defaultValue="Event organizer and NFT enthusiast." disabled={!isEditing} />
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input id="location" defaultValue="San Francisco, CA" disabled={!isEditing} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="website">Website</Label>
                    <Input id="website" defaultValue="https://example.com" disabled={!isEditing} />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                {isEditing ? (
                  <>
                    <Button variant="outline" onClick={() => setIsEditing(false)}>
                      Cancel
                    </Button>
                    <Button onClick={handleSave} disabled={isSaving}>
                      {isSaving ? (
                        <>Saving...</>
                      ) : (
                        <>
                          <Save className="mr-2 h-4 w-4" />
                          Save Changes
                        </>
                      )}
                    </Button>
                  </>
                ) : (
                  <Button onClick={() => setIsEditing(true)}>Edit Profile</Button>
                )}
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="wallet">
          <div className="grid gap-8 md:grid-cols-[1fr_2fr]">
            <Card>
              <CardHeader>
                <CardTitle>Connected Wallets</CardTitle>
                <CardDescription>Manage your blockchain wallets</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b pb-4">
                    <div className="flex items-center gap-2">
                      <Wallet className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Ethereum Wallet</p>
                        <p className="text-xs text-muted-foreground">0x1a2...3b4c</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Disconnect
                    </Button>
                  </div>
                  <Button className="w-full">
                    <Wallet className="mr-2 h-4 w-4" />
                    Connect New Wallet
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>NFT Collection</CardTitle>
                <CardDescription>Your NFT tickets and collectibles</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="rounded-lg border p-2">
                    <div className="relative aspect-square overflow-hidden rounded-md">
                      <img src="/placeholder.svg?height=200&width=200" alt="NFT Ticket" className="object-cover" />
                    </div>
                    <div className="mt-2">
                      <p className="text-sm font-medium truncate">Tech Conference 2025</p>
                      <p className="text-xs text-muted-foreground">VIP Pass #12345</p>
                    </div>
                  </div>
                  <div className="rounded-lg border p-2">
                    <div className="relative aspect-square overflow-hidden rounded-md">
                      <img src="/placeholder.svg?height=200&width=200" alt="NFT Ticket" className="object-cover" />
                    </div>
                    <div className="mt-2">
                      <p className="text-sm font-medium truncate">Summer Music Festival</p>
                      <p className="text-xs text-muted-foreground">GA Pass #23456</p>
                    </div>
                  </div>
                  <div className="rounded-lg border p-2">
                    <div className="relative aspect-square overflow-hidden rounded-md">
                      <img src="/placeholder.svg?height=200&width=200" alt="NFT Ticket" className="object-cover" />
                    </div>
                    <div className="mt-2">
                      <p className="text-sm font-medium truncate">Digital Art Exhibition</p>
                      <p className="text-xs text-muted-foreground">Weekend Pass #34567</p>
                    </div>
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-4">
                  View All NFTs
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>Manage how you receive notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-medium">Email Notifications</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="email-sales" className="flex-1">
                      Ticket Sales
                      <p className="text-sm font-normal text-muted-foreground">
                        Receive notifications when someone purchases a ticket
                      </p>
                    </Label>
                    <Switch id="email-sales" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="email-events" className="flex-1">
                      Event Reminders
                      <p className="text-sm font-normal text-muted-foreground">
                        Receive reminders about your upcoming events
                      </p>
                    </Label>
                    <Switch id="email-events" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="email-royalties" className="flex-1">
                      Royalty Payments
                      <p className="text-sm font-normal text-muted-foreground">
                        Receive notifications about royalty payments
                      </p>
                    </Label>
                    <Switch id="email-royalties" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="email-marketing" className="flex-1">
                      Marketing & Promotions
                      <p className="text-sm font-normal text-muted-foreground">
                        Receive updates about new features and promotions
                      </p>
                    </Label>
                    <Switch id="email-marketing" />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium">Push Notifications</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="push-sales" className="flex-1">
                      Ticket Sales
                      <p className="text-sm font-normal text-muted-foreground">
                        Receive push notifications when someone purchases a ticket
                      </p>
                    </Label>
                    <Switch id="push-sales" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="push-events" className="flex-1">
                      Event Reminders
                      <p className="text-sm font-normal text-muted-foreground">
                        Receive push reminders about your upcoming events
                      </p>
                    </Label>
                    <Switch id="push-events" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="push-royalties" className="flex-1">
                      Royalty Payments
                      <p className="text-sm font-normal text-muted-foreground">
                        Receive push notifications about royalty payments
                      </p>
                    </Label>
                    <Switch id="push-royalties" defaultChecked />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Preferences</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="security">
          <div className="grid gap-8 md:grid-cols-[1fr_2fr]">
            <Card>
              <CardHeader>
                <CardTitle>Security Settings</CardTitle>
                <CardDescription>Manage your account security</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Two-Factor Authentication</p>
                      <p className="text-sm text-muted-foreground">Add an extra layer of security</p>
                    </div>
                    <Switch id="2fa" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Login Notifications</p>
                      <p className="text-sm text-muted-foreground">Get notified of new logins</p>
                    </div>
                    <Switch id="login-notifications" defaultChecked />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Change Password</CardTitle>
                <CardDescription>Update your account password</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="current-password">Current Password</Label>
                  <Input id="current-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="new-password">New Password</Label>
                  <Input id="new-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm New Password</Label>
                  <Input id="confirm-password" type="password" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Update Password</Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="billing">
          <div className="grid gap-8 md:grid-cols-[1fr_2fr]">
            <Card>
              <CardHeader>
                <CardTitle>Payment Methods</CardTitle>
                <CardDescription>Manage your payment methods</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b pb-4">
                    <div className="flex items-center gap-2">
                      <CreditCard className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Visa ending in 4242</p>
                        <p className="text-xs text-muted-foreground">Expires 12/25</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Remove
                    </Button>
                  </div>
                  <Button className="w-full">
                    <CreditCard className="mr-2 h-4 w-4" />
                    Add Payment Method
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Billing History</CardTitle>
                <CardDescription>View your past transactions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b pb-4">
                    <div>
                      <p className="font-medium">Platform Fee - Tech Conference 2025</p>
                      <p className="text-sm text-muted-foreground">May 1, 2025</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">0.5 ETH</p>
                      <p className="text-xs text-muted-foreground">Paid</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between border-b pb-4">
                    <div>
                      <p className="font-medium">Platform Fee - Blockchain Workshop</p>
                      <p className="text-sm text-muted-foreground">April 15, 2025</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">0.2 ETH</p>
                      <p className="text-xs text-muted-foreground">Paid</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Platform Fee - Music Festival 2024</p>
                      <p className="text-sm text-muted-foreground">July 20, 2024</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">2.0 ETH</p>
                      <p className="text-xs text-muted-foreground">Paid</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

