import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Trophy } from "lucide-react";

export function UpcomingContests() {
  const contests = [
    {
      title: "Division A Round 5 2025",
      startTime: "27 days",
      timeLeft: "00:34:23",
    },
    {
      title: "Division A Round 6 2025",
      startTime: "48 days",
      timeLeft: "00:34:23",
    },
    {
      title: "Division A Round 7 2025",
      startTime: "76 days",
      timeLeft: "00:34:23",
    },
    {
      title: "Division A Round 8 2025",
      startTime: "96 days",
      timeLeft: "23:34:23",
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2 text-white">
          <Trophy className="h-5 w-5 text-blue-600" />
          <span>Upcoming contests</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {contests.map((contest, index) => (
          <div key={index} className="border-l-2 border-blue-200 pl-4 py-2">
            <h3 className="font-semibold text-blue-600 hover:text-blue-800 cursor-pointer transition-colors">
              {contest.title}
            </h3>
            <div className="flex items-center justify-between mt-1">
              <div className="flex items-center space-x-1 text-sm text-slate-600">
                <Calendar className="h-3 w-3" />
                <span>Starting in {contest.startTime}</span>
              </div>
              <Badge variant="secondary" className="text-xs">
                <Clock className="h-3 w-3 mr-1" />
                {contest.timeLeft}
              </Badge>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
