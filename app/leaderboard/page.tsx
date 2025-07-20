import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/home/header";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Trophy, Medal, Award, TrendingUp, Calendar } from "lucide-react";

export default function LeaderboardPage() {
  const leaderboard = [
    {
      rank: 1,
      username: "alice_coder",
      name: "Alice Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 2847,
      problemsSolved: 234,
      contestsWon: 12,
      lastActive: "2 hours ago",
      trend: "up",
      university: "UTS",
    },
    {
      rank: 2,
      username: "bob_dev",
      name: "Bob Smith",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 2756,
      problemsSolved: 198,
      contestsWon: 8,
      lastActive: "5 hours ago",
      trend: "up",
      university: "UTS",
    },
    {
      rank: 3,
      username: "charlie_prog",
      name: "Charlie Brown",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 2634,
      problemsSolved: 167,
      contestsWon: 6,
      lastActive: "1 day ago",
      trend: "down",
      university: "UTS",
    },
    {
      rank: 4,
      username: "diana_code",
      name: "Diana Wilson",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 2523,
      problemsSolved: 145,
      contestsWon: 4,
      lastActive: "3 hours ago",
      trend: "up",
      university: "UTS",
    },
    {
      rank: 5,
      username: "eve_hacker",
      name: "Eve Davis",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 2445,
      problemsSolved: 132,
      contestsWon: 3,
      lastActive: "6 hours ago",
      trend: "same",
      university: "UTS",
    },
    {
      rank: 6,
      username: "frank_algo",
      name: "Frank Miller",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 2367,
      problemsSolved: 118,
      contestsWon: 2,
      lastActive: "12 hours ago",
      trend: "up",
      university: "UTS",
    },
    {
      rank: 7,
      username: "grace_dev",
      name: "Grace Lee",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 2298,
      problemsSolved: 104,
      contestsWon: 1,
      lastActive: "1 day ago",
      trend: "down",
      university: "UTS",
    },
    {
      rank: 8,
      username: "henry_code",
      name: "Henry Zhang",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 2234,
      problemsSolved: 95,
      contestsWon: 1,
      lastActive: "2 days ago",
      trend: "same",
      university: "UTS",
    },
  ];

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Trophy className="h-5 w-5 text-yellow-600" />;
    if (rank === 2) return <Medal className="h-5 w-5 text-gray-600" />;
    if (rank === 3) return <Award className="h-5 w-5 text-orange-600" />;
    return <span className="text-lg font-bold text-slate-600">#{rank}</span>;
  };

  const getRatingColor = (rating: number) => {
    if (rating >= 2800) return "text-red-600 bg-red-50";
    if (rating >= 2400) return "text-orange-600 bg-orange-50";
    if (rating >= 2100) return "text-purple-600 bg-purple-50";
    if (rating >= 1900) return "text-blue-600 bg-blue-50";
    return "text-green-600 bg-green-50";
  };

  const getTrendIcon = (trend: string) => {
    if (trend === "up")
      return <TrendingUp className="h-4 w-4 text-green-600" />;
    if (trend === "down")
      return <TrendingUp className="h-4 w-4 text-red-600 rotate-180" />;
    return <div className="w-4 h-4 bg-gray-400 rounded-full"></div>;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">
            Leaderboard
          </h1>
          <p className="text-slate-600">
            Top competitive programmers in our community
          </p>
        </div>

        {/* Filters */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <Select>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Time Period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Time</SelectItem>
                  <SelectItem value="month">This Month</SelectItem>
                  <SelectItem value="week">This Week</SelectItem>
                  <SelectItem value="year">This Year</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rating">By Rating</SelectItem>
                  <SelectItem value="problems">By Problems Solved</SelectItem>
                  <SelectItem value="contests">By Contest Wins</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="University" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Universities</SelectItem>
                  <SelectItem value="uts">UTS Only</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Top 3 Podium */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {leaderboard.slice(0, 3).map((user, index) => (
            <Card
              key={user.rank}
              className={`text-center ${index === 0 ? "md:order-2 ring-2 ring-yellow-200" : index === 1 ? "md:order-1" : "md:order-3"}`}
            >
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  {getRankIcon(user.rank)}
                </div>
                <Avatar className="h-16 w-16 mx-auto mb-4">
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
                <h3 className="font-semibold text-lg text-white mb-1">
                  {user.name}
                </h3>
                <p className="text-slate-600 text-sm mb-3">@{user.username}</p>
                <div
                  className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getRatingColor(user.rating)}`}
                >
                  {user.rating}
                </div>
                <div className="mt-3 text-sm text-slate-600">
                  <div>{user.problemsSolved} problems solved</div>
                  <div>{user.contestsWon} contests won</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Full Leaderboard */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-blue-600" />
              Full Rankings
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50 border-b">
                  <tr>
                    <th className="text-left p-4 font-medium text-slate-700">
                      Rank
                    </th>
                    <th className="text-left p-4 font-medium text-slate-700">
                      User
                    </th>
                    <th className="text-left p-4 font-medium text-slate-700">
                      Rating
                    </th>
                    <th className="text-left p-4 font-medium text-slate-700">
                      Problems
                    </th>
                    <th className="text-left p-4 font-medium text-slate-700">
                      Contests Won
                    </th>
                    <th className="text-left p-4 font-medium text-slate-700">
                      Last Active
                    </th>
                    <th className="text-left p-4 font-medium text-slate-700">
                      Trend
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {leaderboard.map((user, index) => (
                    <tr
                      key={user.rank}
                      className="border-b hover:bg-slate-50 transition-colors"
                    >
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          {getRankIcon(user.rank)}
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <Avatar className="h-10 w-10">
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
                          <div>
                            <div className="font-medium text-slate-900">
                              {user.name}
                            </div>
                            <div className="text-sm text-slate-600">
                              @{user.username}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        <span
                          className={`inline-flex items-center px-2 py-1 rounded text-sm font-medium ${getRatingColor(user.rating)}`}
                        >
                          {user.rating}
                        </span>
                      </td>
                      <td className="p-4 font-medium">{user.problemsSolved}</td>
                      <td className="p-4 font-medium">{user.contestsWon}</td>
                      <td className="p-4 text-sm text-slate-600">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {user.lastActive}
                        </div>
                      </td>
                      <td className="p-4">{getTrendIcon(user.trend)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <Button variant="outline">Load More Rankings</Button>
        </div>
      </div>
    </div>
  );
}
