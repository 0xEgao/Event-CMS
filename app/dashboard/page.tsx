import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BarChart,
  Calendar,
  CreditCard,
  DollarSign,
  Users,
  Ticket,
  ArrowUpRight,
  ArrowDownRight,
  BarChart3,
  PieChart,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function DashboardPage() {
  return (
    <div className="container py-10">
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back to your Ticketify dashboard</p>
        </div>
        <Button asChild>
          <Link href="/create-event">Create Event</Link>
        </Button>
      </div>

      <Tabs defaultValue="overview" className="space-y-8">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-8">
          {/* Stats Cards */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3,125.50 ETH</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-500 inline-flex items-center">
                    <ArrowUpRight className="mr-1 h-3 w-3" />
                    +20.1%
                  </span>{" "}
                  from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Tickets Sold</CardTitle>
                <Ticket className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">16,247</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-500 inline-flex items-center">
                    <ArrowUpRight className="mr-1 h-3 w-3" />
                    +12.5%
                  </span>{" "}
                  from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Events</CardTitle>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-red-500 inline-flex items-center">
                    <ArrowDownRight className="mr-1 h-3 w-3" />
                    -2
                  </span>{" "}
                  from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Royalties Earned</CardTitle>
                <CreditCard className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">425.75 ETH</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-500 inline-flex items-center">
                    <ArrowUpRight className="mr-1 h-3 w-3" />
                    +35.2%
                  </span>{" "}
                  from last month
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Recent Events */}
          <div>
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-bold">Recent Events</h2>
              <Button variant="outline" size="sm" asChild>
                <Link href="/my-events">View All</Link>
              </Button>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              <Card>
                <div className="relative h-32 overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Tech Conference 2025"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <CardHeader className="p-4">
                  <CardTitle className="text-base">Tech Conference 2025</CardTitle>
                  <CardDescription>May 15-17, 2025</CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Tickets Sold:</span>
                    <span>1,250 / 5,000</span>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <div className="relative h-32 overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Blockchain Workshop"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <CardHeader className="p-4">
                  <CardTitle className="text-base">Blockchain Workshop</CardTitle>
                  <CardDescription>June 10, 2025</CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Tickets Sold:</span>
                    <span>0 / 200</span>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <div className="relative h-32 overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Music Festival 2024"
                    fill
                    className="object-cover grayscale"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <CardHeader className="p-4">
                  <CardTitle className="text-base">Music Festival 2024</CardTitle>
                  <CardDescription>August 5-7, 2024</CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Tickets Sold:</span>
                    <span>15,000 / 15,000</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Recent Activity */}
          <div>
            <div className="mb-4">
              <h2 className="text-xl font-bold">Recent Activity</h2>
            </div>
            <Card>
              <CardContent className="p-0">
                <div className="divide-y">
                  <div className="flex items-center gap-4 p-4">
                    <div className="rounded-full bg-primary/10 p-2">
                      <Ticket className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Ticket Purchased</p>
                      <p className="text-xs text-muted-foreground">
                        Someone purchased a VIP ticket for Tech Conference 2025
                      </p>
                    </div>
                    <div className="text-xs text-muted-foreground">2 hours ago</div>
                  </div>
                  <div className="flex items-center gap-4 p-4">
                    <div className="rounded-full bg-primary/10 p-2">
                      <Users className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">New Follower</p>
                      <p className="text-xs text-muted-foreground">User123 is now following your events</p>
                    </div>
                    <div className="text-xs text-muted-foreground">5 hours ago</div>
                  </div>
                  <div className="flex items-center gap-4 p-4">
                    <div className="rounded-full bg-primary/10 p-2">
                      <CreditCard className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Royalty Payment</p>
                      <p className="text-xs text-muted-foreground">
                        You received 0.5 ETH in royalties from secondary sales
                      </p>
                    </div>
                    <div className="text-xs text-muted-foreground">1 day ago</div>
                  </div>
                  <div className="flex items-center gap-4 p-4">
                    <div className="rounded-full bg-primary/10 p-2">
                      <Calendar className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Event Created</p>
                      <p className="text-xs text-muted-foreground">You created a new event: Blockchain Workshop</p>
                    </div>
                    <div className="text-xs text-muted-foreground">2 days ago</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Sales Overview</CardTitle>
              <CardDescription>Your ticket sales performance over time</CardDescription>
            </CardHeader>
            <CardContent className="pl-2">
              <div className="h-[350px] w-full flex items-center justify-center border-t pt-4">
                <div className="flex flex-col items-center gap-2 text-muted-foreground">
                  <BarChart3 className="h-16 w-16" />
                  <p>Sales chart visualization would appear here</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Revenue by Event Type</CardTitle>
                <CardDescription>Distribution of revenue across event categories</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] w-full flex items-center justify-center">
                  <div className="flex flex-col items-center gap-2 text-muted-foreground">
                    <PieChart className="h-16 w-16" />
                    <p>Revenue distribution chart would appear here</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Ticket Sales by Platform</CardTitle>
                <CardDescription>Where your tickets are being purchased</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] w-full flex items-center justify-center">
                  <div className="flex flex-col items-center gap-2 text-muted-foreground">
                    <BarChart className="h-16 w-16" />
                    <p>Platform distribution chart would appear here</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="reports" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Reports</CardTitle>
              <CardDescription>Download and view reports for your events</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <h3 className="font-medium">Sales Report - May 2025</h3>
                    <p className="text-sm text-muted-foreground">Complete breakdown of all sales for the month</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Download
                  </Button>
                </div>
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <h3 className="font-medium">Attendee Demographics</h3>
                    <p className="text-sm text-muted-foreground">Analysis of your event attendees</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Download
                  </Button>
                </div>
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <h3 className="font-medium">Secondary Market Activity</h3>
                    <p className="text-sm text-muted-foreground">Report on ticket resales and royalties</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Download
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Annual Summary 2024</h3>
                    <p className="text-sm text-muted-foreground">Complete overview of your 2024 events</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Download
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Notifications</CardTitle>
              <CardDescription>Stay updated on your events and ticket sales</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-4 border-b pb-4">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Ticket className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">New Ticket Sale</p>
                    <p className="text-xs text-muted-foreground">
                      Someone purchased a VIP ticket for Tech Conference 2025
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">2 hours ago</p>
                  </div>
                  <Button variant="ghost" size="sm">
                    Mark as Read
                  </Button>
                </div>
                <div className="flex items-center gap-4 border-b pb-4">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Users className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">New Follower</p>
                    <p className="text-xs text-muted-foreground">User123 is now following your events</p>
                    <p className="text-xs text-muted-foreground mt-1">5 hours ago</p>
                  </div>
                  <Button variant="ghost" size="sm">
                    Mark as Read
                  </Button>
                </div>
                <div className="flex items-center gap-4 border-b pb-4">
                  <div className="rounded-full bg-primary/10 p-2">
                    <CreditCard className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Royalty Payment</p>
                    <p className="text-xs text-muted-foreground">
                      You received 0.5 ETH in royalties from secondary sales
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">1 day ago</p>
                  </div>
                  <Button variant="ghost" size="sm">
                    Mark as Read
                  </Button>
                </div>
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Calendar className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Event Reminder</p>
                    <p className="text-xs text-muted-foreground">
                      Your event "Blockchain Workshop" is scheduled for next week
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">2 days ago</p>
                  </div>
                  <Button variant="ghost" size="sm">
                    Mark as Read
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

