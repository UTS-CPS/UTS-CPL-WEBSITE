import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Header } from "@/components/home/header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Users,
  Trophy,
  Calendar,
  Code,
  Target,
  Heart,
  BookOpen,
} from "lucide-react";

export default function AboutPage() {
  const stats = [
    { label: "Active Members", value: "500+", icon: Users },
    { label: "Contests Held", value: "50+", icon: Trophy },
    { label: "Years Running", value: "3", icon: Calendar },
    { label: "Problems Created", value: "200+", icon: Code },
  ];

  const team = [
    {
      name: "Prez",
      role: "President",
      year: "3rd Year Computer Science",
      bio: "hes cracked",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Vice Prez",
      role: "Vice President",
      year: "2nd Year Software Engineering",
      bio: "hes a chad",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Events",
      role: "Events Director",
      year: "4th Year Computer Science",
      bio: "nothing hes useless",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Treasurer",
      role: "Treasurer",
      year: "3rd Year Information Technology",
      bio: "spends our money",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Secretary",
      role: "Secretary",
      year: "3rd Year Information Technology",
      bio: "Takes notes",
      avatar: "/placeholder.svg?height=80&width=80",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Header />
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <Image
              src="/cps-logo.png"
              alt="UTS CPL Logo"
              width={64}
              height={64}
              className="rounded-lg"
            />
          </div>
          <h1 className="text-5xl font-bold text-slate-900 mb-4">
            About UTS CPL
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            The University of Technology Sydney Competitive Programming League
            is a vibrant community dedicated to fostering algorithmic thinking
            and problem-solving skills.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <Icon className="h-8 w-8 text-red-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-red-600" />
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white">
                To create an inclusive and supportive environment where students
                can develop their competitive programming skills, learn from
                each other, and prepare for technical interviews and programming
                competitions like ACM-ICPC, Google Code Jam, and more.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-red-600" />
                Our Values
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-white">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  <span>Collaborative learning and knowledge sharing</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  <span>Inclusive community for all skill levels</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  <span>Excellence in problem-solving</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  <span>Continuous improvement and growth</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* What We Do */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-green-600" />
              What We Do
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="bg-blue-100 rounded-full p-3 w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                  <Trophy className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Weekly Contests</h3>
                <p className="text-sm text-white">
                  Regular programming contests with problems ranging from
                  beginner to advanced levels
                </p>
              </div>
              <div className="text-center p-4">
                <div className="bg-green-100 rounded-full p-3 w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold mb-2">Study Groups</h3>
                <p className="text-sm text-white">
                  Collaborative learning sessions covering algorithms, data
                  structures, and problem-solving techniques
                </p>
              </div>
              <div className="text-center p-4">
                <div className="bg-purple-100 rounded-full p-3 w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                  <Code className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-semibold mb-2">Workshops</h3>
                <p className="text-sm text-white">
                  Technical workshops on advanced topics, interview preparation,
                  and industry insights
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Team */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-8">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <img
                    src={member.avatar || "/placeholder.svg"}
                    alt={member.name}
                    className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="font-semibold text-slate-900 mb-1">
                    {member.name}
                  </h3>
                  <Badge variant="secondary" className="mb-2">
                    {member.role}
                  </Badge>
                  <p className="text-sm text-white mb-3">{member.year}</p>
                  <p className="text-xs text-slate-500">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Card className="bg-slate-900 text-white">
          <CardContent className="p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Join UTS CPL?</h2>
            <p className="text-xl mb-6 text-blue-100">
              Whether you're a beginner or an experienced programmer, there's a
              place for you in our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                Join Our Discord
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-white border-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                Attend Next Contest
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
