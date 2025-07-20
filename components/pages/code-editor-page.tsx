import { Header } from "@/components/layout/header";
import { CodeEditor } from "@/components/editor/code-editor";

export function CodeEditorPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-6">
        <CodeEditor />
      </main>
    </div>
  );
}
