import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MessageCircle, ExternalLink } from "lucide-react";

export function NewsSection() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-slate-900">News</h1>
        <Button variant="outline" size="sm">
          View All <ExternalLink className="ml-2 h-4 w-4" />
        </Button>
      </div>

      {/* Welcome Post */}
      <Card className="border-l-4 border-l-blue-500">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl text-white">Welcome :)</CardTitle>
            <Badge variant="secondary">Pinned</Badge>
          </div>
          <div className="flex items-center space-x-4 text-sm text-slate-600">
            <div className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>Dec. 31, 2024, 1:30 p.m.</span>
            </div>
            <div className="flex items-center space-x-1">
              <MessageCircle className="h-4 w-4" />
              <span>1 comment</span>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-white">
            Welcome to the University of Technology Sydney Competitive
            Programming League (UTS CPL)!
          </p>

          <div className="bg-slate-200 rounded-lg p-4 font-mono text-sm">
            <span className="text-blue-400">print</span>
            <span className="text-slate-600">(</span>
            <span className="text-green-400">
              'UTS Competitive Programming Club!'
            </span>
            <span className="text-slate-600">)</span>
          </div>

          <div className="space-y-2 text-white">
            <p>
              You can get started by checking out{" "}
              <Button variant="link" className="p-0 h-auto text-blue-600">
                our problems from previous competitions
              </Button>
              .
            </p>
            <p>
              You can also find our upcoming contests in the{" "}
              <Button variant="link" className="p-0 h-auto text-blue-600">
                contests tab
              </Button>
              .
            </p>
            <p className="text-sm">
              Thank you to our 2025 UTS CPL Sponsor Jane Street Capital :)
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Contest Announcement */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-white">UTS CPL #4</CardTitle>
          <div className="flex items-center space-x-4 text-sm text-white">
            <span>posted 10 days ago</span>
            <div className="flex items-center space-x-1">
              <MessageCircle className="h-4 w-4" />
              <span>0 comments</span>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-white">
            Get ready to reach for the stars in UTS CPL #4, running this
            Saturday!
          </p>

          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Badge variant="outline">Division A</Badge>
              <span className="text-sm text-white">
                July 12th | 10:30 AM – 4:00 PM | Basement, Ingkarni Wardli
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant="outline">Division B</Badge>
              <span className="text-sm text-white">
                July 12th | 1:00 PM – 3:00 PM | Basement, Ingkarni Wardli
                (Arrive at 12 for a pre-comp workshop!)
              </span>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-lg overflow-hidden">
            <img
              src="/placeholder.svg?height=300&width=600"
              alt="UTS CPL #4 - Lost in Space contest poster"
              className="w-full h-48 object-cover"
            />
          </div>
        </CardContent>
      </Card>

      {/* Previous Contest */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-white">UTS CPL #3</CardTitle>
          <div className="flex items-center space-x-4 text-sm text-white">
            <span>posted 53 days ago</span>
            <div className="flex items-center space-x-1">
              <MessageCircle className="h-4 w-4" />
              <span>0 comments</span>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-white">
            We're back! UTS CPL #3 is running this Saturday, so get your team
            together, and don't gamble on your submissions!
          </p>

          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Badge variant="outline">Division B</Badge>
              <span className="text-sm text-white">
                May 31st | 12:00 PM – 3:00 PM | Basement, Ingkarni Wardli
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant="outline">Division A</Badge>
              <span className="text-sm text-white">
                May 31st | 10:30 AM – 4:00 PM | Basement, Ingkarni Wardli
              </span>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-lg overflow-hidden">
            <img
              src="/placeholder.svg?height=300&width=600"
              alt="UTS CPL #3 contest poster"
              className="w-full h-48 object-cover"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
