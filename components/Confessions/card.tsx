import { Card as CardA, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
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
  date?: string
  author?: Author
}

interface ConfessionCardProps {
  confession?: Confession
}

const defaultConfession: Confession = {
  id: 1,
  title: "Lorem Ipsum Confession",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  date: new Date().toISOString(),
  author: {
    username: "anonymous",
    avatarUrl: "https://randomuser.me/api/portraits/men/75.jpg"
  }
}

export default function ConfessionCard({ confession = defaultConfession }: ConfessionCardProps) {
  const {
    title = defaultConfession.title,
    content = defaultConfession.content,
    date = defaultConfession.date,
    author = defaultConfession.author
  } = confession

  return (
    <CardA className="w-full max-w-md mx-auto bg-[#0a0a0a] text-gray-100 border-[0.5px] border-gray-500 shadow-lg">
      <CardHeader className="border-b border-gray-700">
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src={"https://static.vecteezy.com/system/resources/thumbnails/001/840/618/small/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg"} alt={author?.username} />
            <AvatarFallback>{author?.username?.slice(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium text-gray-300">@{author?.username}</p>
            <CardTitle className="text-xl font-semibold bg-gradient-to-tr from-orange-500 to-yellow-500 text-transparent bg-clip-text">{title}</CardTitle>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="flex items-start gap-2">
          <MessageCircle className="h-5 w-5 text-gray-400 mt-1 flex-shrink-0" />
          <p className="text-[#fafafa]">{content}</p>
        </div>
      </CardContent>
      <CardFooter className="text-sm text-gray-400 flex items-center gap-2">
        <Clock className="h-4 w-4" />
        <time dateTime={date}>
          {format(new Date(date || ""), "MMMM d, yyyy 'at' h:mm a")}
        </time>
      </CardFooter>
    </CardA>
  )
}