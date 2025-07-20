import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/home/header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle, XCircle, Clock, Code, Calendar } from "lucide-react";

export default function SubmissionsPage() {
  const submissions = [
    {
      id: "S001",
      problem: "Two Sum",
      user: "alice_coder",
      language: "Python",
      status: "Accepted",
      runtime: "45ms",
      memory: "14.2MB",
      submittedAt: "2 hours ago",
      score: 100,
    },
    {
      id: "S002",
      problem: "Binary Tree Traversal",
      user: "bob_dev",
      language: "C++",
      status: "Wrong Answer",
      runtime: "23ms",
      memory: "8.1MB",
      submittedAt: "3 hours ago",
      score: 0,
    },
    {
      id: "S003",
      problem: "Graph Shortest Path",
      user: "charlie_prog",
      language: "Java",
      status: "Time Limit Exceeded",
      runtime: ">3000ms",
      memory: "45.6MB",
      submittedAt: "5 hours ago",
      score: 0,
    },
    {
      id: "S004",
      problem: "Dynamic Programming Knapsack",
      user: "diana_code",
      language: "Python",
      status: "Accepted",
      runtime: "156ms",
      memory: "22.4MB",
      submittedAt: "1 day ago",
      score: 100,
    },
    {
      id: "S005",
      problem: "String Pattern Matching",
      user: "eve_hacker",
      language: "C++",
      status: "Compilation Error",
      runtime: "-",
      memory: "-",
      submittedAt: "1 day ago",
      score: 0,
    },
    {
      id: "S006",
      problem: "Advanced Data Structures",
      user: "frank_algo",
      language: "Java",
      status: "Partial",
      runtime: "234ms",
      memory: "67.8MB",
      submittedAt: "2 days ago",
      score: 65,
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Accepted":
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case "Wrong Answer":
        return <XCircle className="h-4 w-4 text-red-600" />;
      case "Time Limit Exceeded":
        return <Clock className="h-4 w-4 text-yellow-600" />;
      case "Compilation Error":
        return <Code className="h-4 w-4 text-red-600" />;
      case "Partial":
        return <CheckCircle className="h-4 w-4 text-blue-600" />;
      default:
        return <XCircle className="h-4 w-4 text-gray-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Accepted":
        return "bg-green-100 text-green-800 border-green-200";
      case "Wrong Answer":
        return "bg-red-100 text-red-800 border-red-200";
      case "Time Limit Exceeded":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Compilation Error":
        return "bg-red-100 text-red-800 border-red-200";
      case "Partial":
        return "bg-blue-100 text-blue-800 border-blue-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">
            Submissions
          </h1>
          <p className="text-slate-600">
            Track your submission history and results
          </p>
        </div>

        {/* Filters */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <Select>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="accepted">Accepted</SelectItem>
                  <SelectItem value="wrong">Wrong Answer</SelectItem>
                  <SelectItem value="tle">Time Limit Exceeded</SelectItem>
                  <SelectItem value="ce">Compilation Error</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Languages</SelectItem>
                  <SelectItem value="python">Python</SelectItem>
                  <SelectItem value="cpp">C++</SelectItem>
                  <SelectItem value="java">Java</SelectItem>
                  <SelectItem value="javascript">JavaScript</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="User" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Users</SelectItem>
                  <SelectItem value="me">My Submissions</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Submissions List */}
        <div className="space-y-4">
          {submissions.map((submission) => (
            <Card
              key={submission.id}
              className="hover:shadow-md transition-shadow"
            >
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-mono text-sm text-white">
                        {submission.id}
                      </span>
                      <h3 className="text-lg font-semibold text-white">
                        {submission.problem}
                      </h3>
                      <Badge variant="outline">{submission.language}</Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-slate-600">
                      <span className="font-medium">{submission.user}</span>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{submission.submittedAt}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <div className="flex items-center gap-6 text-sm">
                      <div className="text-center">
                        <div className="text-slate-500">Runtime</div>
                        <div className="font-mono">{submission.runtime}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-slate-500">Memory</div>
                        <div className="font-mono">{submission.memory}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-slate-500">Score</div>
                        <div className="font-bold">{submission.score}%</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      {getStatusIcon(submission.status)}
                      <Badge className={getStatusColor(submission.status)}>
                        {submission.status}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button variant="outline">Load More Submissions</Button>
        </div>
      </div>
    </div>
  );
}
