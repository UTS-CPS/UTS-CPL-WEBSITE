"use client";

import { useState, useRef, useEffect } from "react";
import { EditorControls } from "./editor-controls";
import { EditorPane } from "./editor-pane";
import { OutputPane } from "./output-pane";
import { CODE_SNIPPETS, type Language } from "@/lib/constants";

export function CodeEditor() {
  const editorRef = useRef<{ getValue: () => string } | null>(null);
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState<Language>("typescript");
  const [editorTheme, setEditorTheme] = useState("VS Code Dark");
  const [tabSize, setTabSize] = useState(2);
  const [vimMode, setVimMode] = useState(false);

  useEffect(() => {
    setCode(CODE_SNIPPETS[language]);
  }, [language]);

  return (
    <div className="space-y-6">
      <EditorControls
        language={language}
        onLanguageChange={setLanguage}
        editorTheme={editorTheme}
        onThemeChange={setEditorTheme}
        tabSize={tabSize}
        onTabSizeChange={setTabSize}
        vimMode={vimMode}
        onVimModeChange={setVimMode}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[75vh]">
        <EditorPane
          ref={editorRef}
          code={code}
          onCodeChange={setCode}
          language={language}
          theme={editorTheme}
          tabSize={tabSize}
          vimMode={vimMode}
        />
        <OutputPane editorRef={editorRef} language={language} />
      </div>
    </div>
  );
}
