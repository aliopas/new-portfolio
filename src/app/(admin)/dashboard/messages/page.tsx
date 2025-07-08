"use client"

import { useState } from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MoreHorizontal, MailOpen, Trash2 } from "lucide-react"
import { messages as initialMessages } from "@/lib/data"
import type { Message } from "@/lib/types"
import { PageHeader } from "@/components/admin/page-header"
import { formatDistanceToNow } from "date-fns"
import { useToast } from "@/hooks/use-toast"
import { Card } from "@/components/ui/card"

export default function MessagesPage() {
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const { toast } = useToast()

  const handleMarkAsRead = (messageId: string) => {
    setMessages(
      messages.map((m) => (m.id === messageId ? { ...m, read: true } : m))
    )
    toast({ title: "Message marked as read." })
  }
  
  const handleDelete = (messageId: string) => {
    setMessages(messages.filter(m => m.id !== messageId));
    toast({ title: "Message Deleted", description: "The message has been successfully deleted." });
  }

  return (
    <>
      <PageHeader
        title="Messages"
        description="Here are the messages from your contact form."
      />
      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Status</TableHead>
              <TableHead>Contact</TableHead>
              <TableHead>Message</TableHead>
              <TableHead className="hidden md:table-cell">Received</TableHead>
              <TableHead className="w-[50px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {messages.map((message) => (
              <TableRow key={message.id} className={!message.read ? "bg-muted/50" : ""}>
                <TableCell>
                  <Badge variant={message.read ? "secondary" : "default"}>
                    {message.read ? "Read" : "Unread"}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="font-medium">{message.name}</div>
                  <div className="hidden text-sm text-muted-foreground sm:block">
                    {message.email}
                  </div>
                </TableCell>
                <TableCell>
                  <p className="max-w-xs truncate">{message.message}</p>
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {formatDistanceToNow(new Date(message.createdAt), {
                    addSuffix: true,
                  })}
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      {!message.read && (
                        <DropdownMenuItem onClick={() => handleMarkAsRead(message.id)}>
                          <MailOpen className="mr-2 h-4 w-4" />
                          Mark as read
                        </DropdownMenuItem>
                      )}
                      <DropdownMenuItem className="text-destructive" onClick={() => handleDelete(message.id)}>
                        <Trash2 className="mr-2 h-4 w-4" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </>
  )
}
