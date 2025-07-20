import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, ExternalLink } from "lucide-react";

export function CommentStream() {
  const comments = [
    { user: "Shutcapybara114", action: "Pizza Patrol" },
    { user: "extetele", action: "Division A Round 3 2025" },
    { user: "ZuxingWu", action: "Division A Round 3 2025" },
    { user: "Seng", action: "I Feel So Sigma" },
    { user: "tinnanhchoi", action: "UTS CPL #2" },
    { user: "Saadan", action: "UTS CPL #2" },
    { user: "Yourmaster", action: "Division A Round 1 2025" },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-white">
            <MessageSquare className="h-5 w-5 text-green-600" />
            <span>Comment stream</span>
          </div>
          <Button variant="ghost" size="sm">
            <ExternalLink className="h-4 w-4" />
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {comments.map((comment, index) => (
          <div
            key={index}
            className="flex items-center justify-between text-sm"
          >
            <span className="font-medium text-slate-700">{comment.user}</span>
            <Button
              variant="link"
              className="p-0 h-auto text-xs text-blue-600 hover:text-blue-800"
            >
              {comment.action}
            </Button>
          </div>
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
