import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Plus } from "lucide-react";

export function NewProblems() {
  const problems = [
    "Jump Man",
    "We Come in Peace II",
    "We Come in Peace I",
    "Assault and Battery II",
    "Assault and Battery I",
    "Garbage Collection",
    "Holey Moley",
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-white">
            <Code className="h-5 w-5 text-purple-600" />
            <span>New problems</span>
          </div>
          <Button variant="ghost" size="sm">
            <Plus className="h-4 w-4" />
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {problems.map((problem, index) => (
          <Button
            key={index}
            variant="link"
            className="p-0 h-auto text-sm text-blue-600 hover:text-blue-800 justify-start w-full"
          >
            {problem}
          </Button>
        ))}
        <div className="pt-2 border-t border-slate-200">
          <Button
            variant="link"
            className="p-0 h-auto text-sm text-orange-600 hover:text-orange-800"
          >
            RSS / Atom
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
