import { Header } from "@/components/home/header";
import { CodeEditor } from "./code-editor-page";

export default function CodeEditorPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-6">
        <CodeEditor />
      </main>
    </div>
  );
}
