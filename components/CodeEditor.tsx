"use client";

import { useRef, useState, useEffect } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";
import { cpp } from "@codemirror/lang-cpp";
import { java } from "@codemirror/lang-java";
import { rust } from "@codemirror/lang-rust";
import { go } from "@codemirror/lang-go";
import { vim } from "@replit/codemirror-vim";
import { autocompletion } from "@codemirror/autocomplete";
import { indentUnit } from "@codemirror/language";
import { EditorView } from "@codemirror/view";
import LanguageSelector from "./LanguageSelector";
import ThemeSelector from "./ThemeSelector";
import EditorSettings from "./EditorSettings";
import Output from "./Output";
import { CODE_SNIPPETS } from "@/lib/constants";
import { useTheme } from "./ThemeProvider";
import { ThemeToggle } from "./ThemeToggle";

// Import themes from @uiw/codemirror-themes
import {
  vscodeDark,
  githubDark,
  githubLight,
} from "@uiw/codemirror-themes-all";
import { dracula } from "@uiw/codemirror-theme-dracula";
import { materialDark } from "@uiw/codemirror-theme-material";
import { nord } from "@uiw/codemirror-theme-nord";
import { okaidia } from "@uiw/codemirror-theme-okaidia";
import { sublime } from "@uiw/codemirror-theme-sublime";

// Define available themes
export const THEMES = {
  "VS Code Dark": vscodeDark,
  "GitHub Dark": githubDark,
  "GitHub Light": githubLight,
  "Material Dark": materialDark,
  Dracula: dracula,
  Nord: nord,
  Okaidia: okaidia,
  Sublime: sublime,
};

// Define language extensions
const LANGUAGE_EXTENSIONS: Record<string, any> = {
  javascript: javascript(),
  typescript: javascript({ typescript: true }),
  python: python(),
  cpp: cpp(),
  c: cpp(),
  java: java(),
  rust: rust(),
  go: go(),
  php: javascript(), // Fallback for PHP
  ruby: javascript(), // Fallback for Ruby
  R: javascript(), // Fallback for R
  lua: javascript(), // Fallback for Lua
  objectivec: cpp(), // Use C++ for Objective-C
  vb: javascript(), // Fallback for VB
  fsharp: javascript(), // Fallback for F#
};

const CodeEditor = () => {
  const editorRef = useRef<{ getValue: () => string } | null>(null);
  const [value, setValue] = useState("");
  const [language, setLanguage] =
    useState<keyof typeof CODE_SNIPPETS>("typescript");
  const [theme, setTheme] = useState<keyof typeof THEMES>("VS Code Dark");
  const [tabSize, setTabSize] = useState(2);
  const [vimMode, setVimMode] = useState(false);
  const { theme: appTheme } = useTheme();

  // Set up extensions based on current settings
  const getExtensions = () => {
    const extensions = [
      LANGUAGE_EXTENSIONS[language] || javascript(),
      autocompletion(),
      indentUnit.of(" ".repeat(tabSize)),
      EditorView.lineWrapping,
    ];

    if (vimMode) {
      extensions.push(vim());
    }

    return extensions;
  };

  useEffect(() => {
    // Set initial code snippet when language changes
    setValue(CODE_SNIPPETS[language]);
  }, [language]);

  const onSelectLanguage = (lang: keyof typeof CODE_SNIPPETS) => {
    setLanguage(lang);
  };

  const onSelectTheme = (selectedTheme: keyof typeof THEMES) => {
    setTheme(selectedTheme);
  };

  const onChangeTabSize = (size: number) => {
    setTabSize(size);
  };

  const onToggleVimMode = (enabled: boolean) => {
    setVimMode(enabled);
  };

  const handleCreateEditor = (view: any) => {
    editorRef.current = {
      getValue: () => view.state.doc.toString(),
    };
    view.focus();
  };

  return (
    <div className="w-full">
      <div className="flex flex-col space-y-4">
        <div className="flex flex-row justify-between items-center">
          <div className="flex items-center gap-4">
            <LanguageSelector language={language} onSelect={onSelectLanguage} />
            <ThemeSelector theme={theme} onSelect={onSelectTheme} />
          </div>
          <div className="flex items-center gap-4">
            <EditorSettings
              tabSize={tabSize}
              onChangeTabSize={onChangeTabSize}
              vimMode={vimMode}
              onToggleVimMode={onToggleVimMode}
            />
            <ThemeToggle />
          </div>
        </div>

        <div className="flex gap-4 h-[75vh]">
          <div className="w-1/2">
            <CodeMirror
              value={value}
              height="75vh"
              theme={THEMES[theme]}
              extensions={getExtensions()}
              onChange={(val) => setValue(val)}
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
              className="border border-border rounded-md overflow-hidden"
            />
          </div>
          <Output editorRef={editorRef} language={language} />
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;
