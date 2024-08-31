'use client'

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { format } from "date-fns"
import { Clock, MessageCircle } from "lucide-react"

interface Author {
  username?: string
  avatarUrl?: string
}

interface Confession {
  id?: number
  title?: string
  content?: string
  timestamp?: string
  author?: Author
}

interface ConfessionCardProps {
  confession?: Confession
}

const defaultConfession: Confession = {
  id: 1,
  title: "Lorem Ipsum Confession",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  timestamp: new Date().toISOString(),
  author: {
    username: "lorem_user",
    avatarUrl: "/placeholder.svg?height=40&width=40"
  }
}

export function AuthoredConfessionCard({ confession = defaultConfession }: ConfessionCardProps) {
  const {
    title = defaultConfession.title,
    content = defaultConfession.content,
    timestamp = defaultConfession.timestamp,
    author = defaultConfession.author
  } = confession

  return (
    <Card className="w-full max-w-md mx-auto bg-gray-800 text-gray-100 shadow-lg">
      <CardHeader className="border-b border-gray-700">
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src={author.avatarUrl} alt={author.username} />
            <AvatarFallback>{author.username?.slice(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium text-gray-300">@{author.username}</p>
            <CardTitle className="text-xl font-semibold text-blue-400">{title}</CardTitle>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="flex items-start gap-2">
          <MessageCircle className="h-5 w-5 text-gray-400 mt-1 flex-shrink-0" />
          <p className="text-gray-300">{content}</p>
        </div>
      </CardContent>
      <CardFooter className="text-sm text-gray-400 flex items-center gap-2">
        <Clock className="h-4 w-4" />
        <time dateTime={timestamp}>
          {format(new Date(timestamp), "MMMM d, yyyy 'at' h:mm a")}
        </time>
      </CardFooter>
    </Card>
  )
}