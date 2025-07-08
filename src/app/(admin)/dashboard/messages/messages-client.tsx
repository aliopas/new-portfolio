"use client"

import { useTransition } from "react"
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
import type { Message } from "@/lib/types"
import { formatDistanceToNow } from "date-fns"
import { useToast } from "@/hooks/use-toast"
import { Card } from "@/components/ui/card"
import { deleteMessageAction, markMessageAsReadAction } from "@/app/actions/messages"

export function MessagesClient({ messages }: { messages: Message[] }) {
  const [isPending, startTransition] = useTransition()
  const { toast } = useToast()

  const handleMarkAsRead = (messageId: string) => {
    startTransition(async () => {
      const result = await markMessageAsReadAction(messageId)
      if (result.success) {
        toast({ title: "Message marked as read." })
      } else {
        toast({ title: "Error", description: result.error, variant: 'destructive' })
      }
    })
  }
  
  const handleDelete = (messageId: string) => {
    startTransition(async () => {
      const result = await deleteMessageAction(messageId)
      if (result.success) {
        toast({ title: "Message Deleted", description: "The message has been successfully deleted." })
      } else {
        toast({ title: "Error", description: result.error, variant: 'destructive' })
      }
    })
  }

  return (
    <>
      {/* Desktop View */}
      <Card className="hidden md:block">
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
                      <Button variant="ghost" className="h-8 w-8 p-0" disabled={isPending}>
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      {!message.read && (
                        <DropdownMenuItem onClick={() => handleMarkAsRead(message.id)} disabled={isPending}>
                          <MailOpen className="mr-2 h-4 w-4" />
                          Mark as read
                        </DropdownMenuItem>
                      )}
                      <DropdownMenuItem className="text-destructive" onClick={() => handleDelete(message.id)} disabled={isPending}>
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
      
      {/* Mobile View */}
      <div className="md:hidden space-y-4">
        {messages.map((message) => (
          <Card key={message.id} className={`p-4 ${!message.read ? "bg-muted/50" : ""}`}>
            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Badge variant={message.read ? "secondary" : "default"}>
                    {message.read ? "Read" : "Unread"}
                  </Badge>
                  <div className="font-medium">{message.name}</div>
                </div>
                 <div className="text-sm text-muted-foreground">{message.email}</div>
              </div>
               <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="h-8 w-8 p-0 -mt-1" disabled={isPending}>
                    <span className="sr-only">Open menu</span>
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {!message.read && (
                    <DropdownMenuItem onClick={() => handleMarkAsRead(message.id)} disabled={isPending}>
                      <MailOpen className="mr-2 h-4 w-4" />
                      Mark as read
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuItem className="text-destructive" onClick={() => handleDelete(message.id)} disabled={isPending}>
                    <Trash2 className="mr-2 h-4 w-4" />
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <p className="mt-4 text-sm text-foreground/90">{message.message}</p>
            <div className="text-xs text-muted-foreground mt-2">
               {formatDistanceToNow(new Date(message.createdAt), {
                addSuffix: true,
              })}
            </div>
          </Card>
        ))}
      </div>
    </>
  )
}
