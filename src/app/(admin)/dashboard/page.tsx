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
import { FolderKanban, MessageSquare, Users } from "lucide-react"
import { getProjects } from "@/services/projects"
import { getMessages } from "@/services/messages"
import { VisitorChart } from "@/components/admin/visitor-chart"

export default async function DashboardPage() {
  const projects = await getProjects();
  const messages = await getMessages();
  
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
        <VisitorChart />
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
