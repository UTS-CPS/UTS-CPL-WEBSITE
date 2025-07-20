import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/home/header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Filter, Clock, Users, CheckCircle } from "lucide-react";

export default function ProblemsPage() {
  const problems = [
    {
      id: "P001",
      title: "Two Sum",
      difficulty: "Easy",
      category: "Array",
      solvedBy: 1247,
      totalSubmissions: 2891,
      acceptanceRate: 43.1,
      timeLimit: "1s",
      memoryLimit: "256MB",
    },
    {
      id: "P002",
      title: "Binary Tree Traversal",
      difficulty: "Medium",
      category: "Tree",
      solvedBy: 892,
      totalSubmissions: 2156,
      acceptanceRate: 41.4,
      timeLimit: "2s",
      memoryLimit: "512MB",
    },
    {
      id: "P003",
      title: "Graph Shortest Path",
      difficulty: "Hard",
      category: "Graph",
      solvedBy: 234,
      totalSubmissions: 1023,
      acceptanceRate: 22.9,
      timeLimit: "3s",
      memoryLimit: "1GB",
    },
    {
      id: "P004",
      title: "Dynamic Programming Knapsack",
      difficulty: "Medium",
      category: "DP",
      solvedBy: 567,
      totalSubmissions: 1456,
      acceptanceRate: 38.9,
      timeLimit: "2s",
      memoryLimit: "512MB",
    },
    {
      id: "P005",
      title: "String Pattern Matching",
      difficulty: "Easy",
      category: "String",
      solvedBy: 1089,
      totalSubmissions: 1834,
      acceptanceRate: 59.4,
      timeLimit: "1s",
      memoryLimit: "256MB",
    },
    {
      id: "P006",
      title: "Advanced Data Structures",
      difficulty: "Hard",
      category: "Data Structure",
      solvedBy: 156,
      totalSubmissions: 789,
      acceptanceRate: 19.8,
      timeLimit: "4s",
      memoryLimit: "1GB",
    },
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "bg-green-100 text-green-800 border-green-200";
      case "Medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Hard":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Problems</h1>
          <p className="text-slate-600">
            Practice your competitive programming skills
          </p>
        </div>

        {/* Filters */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                  <Input placeholder="Search problems..." className="pl-10" />
                </div>
              </div>
              <Select>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Difficulty" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Difficulties</SelectItem>
                  <SelectItem value="easy">Easy</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="hard">Hard</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="array">Array</SelectItem>
                  <SelectItem value="tree">Tree</SelectItem>
                  <SelectItem value="graph">Graph</SelectItem>
                  <SelectItem value="dp">Dynamic Programming</SelectItem>
                  <SelectItem value="string">String</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Problems List */}
        <div className="space-y-4">
          {problems.map((problem) => (
            <Card
              key={problem.id}
              className="hover:shadow-md transition-shadow cursor-pointer"
            >
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-mono text-sm text-slate-500">
                        {problem.id}
                      </span>
                      <h3 className="text-xl font-semibold text-white">
                        {problem.title}
                      </h3>
                      <Badge className={getDifficultyColor(problem.difficulty)}>
                        {problem.difficulty}
                      </Badge>
                      <Badge variant="outline">{problem.category}</Badge>
                    </div>
                    <div className="flex items-center gap-6 text-sm text-slate-600">
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span>{problem.solvedBy} solved</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span>{problem.acceptanceRate}% acceptance</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{problem.timeLimit}</span>
                      </div>
                      <span>{problem.memoryLimit}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-right text-sm text-slate-600">
                      <div>{problem.totalSubmissions} submissions</div>
                    </div>
                    <Button>Solve</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
