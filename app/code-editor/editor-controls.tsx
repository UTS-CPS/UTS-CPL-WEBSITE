"use client";

import { LanguageSelector } from "./language-selector";
import { ThemeSelector } from "./theme-selector";
import { EditorSettings } from "./editor-settings";
import type { Language } from "@/lib/constants";

interface EditorControlsProps {
  language: Language;
  onLanguageChange: (language: Language) => void;
  editorTheme: string;
  onThemeChange: (theme: string) => void;
  tabSize: number;
  onTabSizeChange: (size: number) => void;
  vimMode: boolean;
  onVimModeChange: (enabled: boolean) => void;
}

export function EditorControls({
  language,
  onLanguageChange,
  editorTheme,
  onThemeChange,
  tabSize,
  onTabSizeChange,
  vimMode,
  onVimModeChange,
}: EditorControlsProps) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-card rounded-lg border">
      <div className="flex items-center gap-4">
        <LanguageSelector language={language} onSelect={onLanguageChange} />
        <ThemeSelector theme={editorTheme} onSelect={onThemeChange} />
      </div>
      <EditorSettings
        tabSize={tabSize}
        onChangeTabSize={onTabSizeChange}
        vimMode={vimMode}
        onToggleVimMode={onVimModeChange}
      />
    </div>
  );
}
