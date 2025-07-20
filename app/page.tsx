import { Header } from "@/components/home/header";
import { NewsSection } from "@/components/home/news-section";
import { UpcomingContests } from "@/components/home/upcoming-contests";
import { CommentStream } from "@/components/home/comment-stream";
import { NewProblems } from "@/components/home/new-problems";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <NewsSection />
          </div>
          <div className="space-y-6">
            <UpcomingContests />
            <CommentStream />
            <NewProblems />
          </div>
        </div>
      </main>
    </div>
  );
}
