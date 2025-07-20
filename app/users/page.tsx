import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/home/header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, Trophy, Calendar, MapPin } from "lucide-react";

export default function UsersPage() {
  const users = [
    {
      id: 1,
      username: "alice_coder",
      name: "Alice Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      rank: 1,
      rating: 2847,
      problemsSolved: 234,
      contestsParticipated: 45,
      joinedDate: "Jan 2023",
      location: "Sydney, AU",
      university: "UTS",
      badges: ["Contest Winner", "Problem Setter"],
    },
    {
      id: 2,
      username: "bob_dev",
      name: "Bob Smith",
      avatar: "/placeholder.svg?height=40&width=40",
      rank: 2,
      rating: 2756,
      problemsSolved: 198,
      contestsParticipated: 38,
      joinedDate: "Mar 2023",
      location: "Melbourne, AU",
      university: "UTS",
      badges: ["Top Contributor"],
    },
    {
      id: 3,
      username: "charlie_prog",
      name: "Charlie Brown",
      avatar: "/placeholder.svg?height=40&width=40",
      rank: 3,
      rating: 2634,
      problemsSolved: 167,
      contestsParticipated: 42,
      joinedDate: "Feb 2023",
      location: "Brisbane, AU",
      university: "UTS",
      badges: ["Fast Solver"],
    },
    {
      id: 4,
      username: "diana_code",
      name: "Diana Wilson",
      avatar: "/placeholder.svg?height=40&width=40",
      rank: 4,
      rating: 2523,
      problemsSolved: 145,
      contestsParticipated: 29,
      joinedDate: "Apr 2023",
      location: "Perth, AU",
      university: "UTS",
      badges: ["Rising Star"],
    },
    {
      id: 5,
      username: "eve_hacker",
      name: "Eve Davis",
      avatar: "/placeholder.svg?height=40&width=40",
      rank: 5,
      rating: 2445,
      problemsSolved: 132,
      contestsParticipated: 31,
      joinedDate: "May 2023",
      location: "Adelaide, AU",
      university: "UTS",
      badges: ["Consistent Performer"],
    },
    {
      id: 6,
      username: "frank_algo",
      name: "Frank Miller",
      avatar: "/placeholder.svg?height=40&width=40",
      rank: 6,
      rating: 2367,
      problemsSolved: 118,
      contestsParticipated: 26,
      joinedDate: "Jun 2023",
      location: "Sydney, AU",
      university: "UTS",
      badges: ["Algorithm Expert"],
    },
  ];

  const getRatingColor = (rating: number) => {
    if (rating >= 2800) return "text-red-600";
    if (rating >= 2400) return "text-orange-600";
    if (rating >= 2100) return "text-purple-600";
    if (rating >= 1900) return "text-blue-600";
    return "text-green-600";
  };

  const getRankBadge = (rank: number) => {
    if (rank === 1) return "bg-yellow-100 text-yellow-800 border-yellow-200";
    if (rank === 2) return "bg-gray-100 text-gray-800 border-gray-200";
    if (rank === 3) return "bg-orange-100 text-orange-800 border-orange-200";
    return "bg-blue-100 text-blue-800 border-blue-200";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Users</h1>
          <p className="text-slate-600">
            Discover talented competitive programmers in our community
          </p>
        </div>

        {/* Search */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
              <Input placeholder="Search users..." className="pl-10" />
            </div>
          </CardContent>
        </Card>

        {/* Users List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {users.map((user) => (
            <Card
              key={user.id}
              className="hover:shadow-md transition-shadow cursor-pointer"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage
                      src={user.avatar || "/placeholder.svg"}
                      alt={user.name}
                    />
                    <AvatarFallback>
                      {user.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg font-semibold text-white truncate">
                        {user.name}
                      </h3>
                      <Badge className={getRankBadge(user.rank)}>
                        #{user.rank}
                      </Badge>
                    </div>

                    <p className="text-white text-sm mb-2">@{user.username}</p>

                    <div className="flex items-center gap-4 text-sm text-white mb-3">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        <span>{user.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>Joined {user.joinedDate}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-3">
                      <div className="text-center p-2 bg-slate-50 rounded">
                        <div
                          className={`text-lg font-bold ${getRatingColor(user.rating)}`}
                        >
                          {user.rating}
                        </div>
                        <div className="text-xs text-slate-600">Rating</div>
                      </div>
                      <div className="text-center p-2 bg-slate-50 rounded">
                        <div className="text-lg font-bold text-slate-900">
                          {user.problemsSolved}
                        </div>
                        <div className="text-xs text-slate-600">Problems</div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1 mb-3">
                      {user.badges.map((badge, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="text-xs"
                        >
                          {badge}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-sm text-slate-600">
                      <div className="flex items-center gap-1">
                        <Trophy className="h-3 w-3" />
                        <span>{user.contestsParticipated} contests</span>
                      </div>
                      <span className="text-blue-600 font-medium">
                        {user.university}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button variant="outline">Load More Users</Button>
        </div>
      </div>
    </div>
  );
}
