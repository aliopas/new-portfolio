import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { StatCard } from "@/components/admin/stat-card"
import { PageHeader } from "@/components/admin/page-header"
import { FolderKanban, MessageSquare, Users, TrendingUp } from "lucide-react"
import { projects, messages } from "@/lib/data"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"
import type { ChartConfig } from "@/components/ui/chart"

const chartData = [
  { month: "January", visitors: 186 },
  { month: "February", visitors: 305 },
  { month: "March", visitors: 237 },
  { month: "April", visitors: 273 },
  { month: "May", visitors: 209 },
  { month: "June", visitors: 214 },
]

const chartConfig = {
  visitors: {
    label: "Visitors",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig

export default function DashboardPage() {
  const unreadMessages = messages.filter(m => !m.read).length;
  const recentMessages = messages.slice(0, 5);

  return (
    <>
      <PageHeader title="Dashboard" description="An overview of your portfolio's performance." />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <StatCard 
          title="Total Projects"
          value={projects.length.toString()}
          icon={<FolderKanban className="h-4 w-4" />}
          description="Total number of projects in your portfolio."
        />
        <StatCard
          title="Unread Messages"
          value={unreadMessages.toString()}
          icon={<MessageSquare className="h-4 w-4" />}
          description="Messages from your contact form."
        />
        <StatCard
          title="Total Visitors"
          value="1,234"
          icon={<Users className="h-4 w-4" />}
          description="Total unique visitors (demo data)."
        />
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7 mt-8">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" /> Visitor Analytics
            </CardTitle>
            <CardDescription>
              A demo chart showing visitor trends over time.
            </CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <ChartContainer config={chartConfig} className="h-[250px] w-full">
                <AreaChart
                  data={chartData}
                  margin={{
                    left: 12,
                    right: 12,
                  }}
                >
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    tickFormatter={(value) => value.slice(0, 3)}
                  />
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent indicator="dot" />}
                  />
                  <Area
                    dataKey="visitors"
                    type="natural"
                    fill="var(--color-visitors)"
                    fillOpacity={0.4}
                    stroke="var(--color-visitors)"
                    stackId="a"
                  />
                </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>
        <Card className="col-span-4 lg:col-span-3">
          <CardHeader>
            <CardTitle>Recent Messages</CardTitle>
            <CardDescription>
              The 5 most recent messages from your contact form.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>From</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentMessages.map((message) => (
                  <TableRow key={message.id}>
                    <TableCell>
                      <div className="font-medium">{message.name}</div>
                      <div className="hidden text-sm text-muted-foreground md:inline">
                        {message.email}
                      </div>
                    </TableCell>
                     <TableCell>
                      <Badge variant={message.read ? "secondary" : "default"}>
                        {message.read ? "Read" : "Unread"}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
