"use client";

import { forwardRef, useImperativeHandle } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { getLanguageExtension, getTheme } from "@/lib/editor-config";
import { autocompletion } from "@codemirror/autocomplete";
import { indentUnit } from "@codemirror/language";
import { EditorView } from "@codemirror/view";
import { vim } from "@replit/codemirror-vim";
import type { Language } from "@/lib/constants";

interface EditorPaneProps {
  code: string;
  onCodeChange: (code: string) => void;
  language: Language;
  theme: string;
  tabSize: number;
  vimMode: boolean;
}

export const EditorPane = forwardRef<
  { getValue: () => string } | null,
  EditorPaneProps
>(({ code, onCodeChange, language, theme, tabSize, vimMode }, ref) => {
  const getExtensions = () => {
    const extensions = [
      getLanguageExtension(language),
      autocompletion(),
      indentUnit.of(" ".repeat(tabSize)),
      EditorView.lineWrapping,
    ];

    if (vimMode) {
      extensions.push(vim());
    }

    return extensions;
  };

  const handleCreateEditor = (view: any) => {
    const editorInstance = {
      getValue: () => view.state.doc.toString(),
    };

    if (ref) {
      if (typeof ref === "function") {
        ref(editorInstance);
      } else {
        ref.current = editorInstance;
      }
    }

    view.focus();
  };

  useImperativeHandle(ref, () => ({
    getValue: () => code,
  }));

  return (
    <div className="h-full">
      <div className="mb-2">
        <h3 className="text-sm font-medium text-muted-foreground">
          Code Editor
        </h3>
      </div>
      <CodeMirror
        value={code}
        height="100%"
        theme={getTheme(theme)}
        extensions={getExtensions()}
        onChange={onCodeChange}
        onCreateEditor={handleCreateEditor}
        basicSetup={{
          lineNumbers: true,
          highlightActiveLineGutter: true,
          highlightSpecialChars: true,
          foldGutter: true,
          drawSelection: true,
          dropCursor: true,
          allowMultipleSelections: true,
          indentOnInput: true,
          syntaxHighlighting: true,
          bracketMatching: true,
          closeBrackets: true,
          autocompletion: true,
          rectangularSelection: true,
          crosshairCursor: true,
          highlightActiveLine: true,
          highlightSelectionMatches: true,
          closeBracketsKeymap: true,
          searchKeymap: true,
          foldKeymap: true,
          completionKeymap: true,
          lintKeymap: true,
        }}
        className="border border-border rounded-md overflow-hidden h-full"
      />
    </div>
  );
});

EditorPane.displayName = "EditorPane";
