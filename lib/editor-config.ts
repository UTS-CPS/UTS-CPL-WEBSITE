import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";
import { cpp } from "@codemirror/lang-cpp";
import { java } from "@codemirror/lang-java";
import { rust } from "@codemirror/lang-rust";
import { go } from "@codemirror/lang-go";

// Import themes
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

import type { Language } from "./constants";

export const EDITOR_THEMES = {
  "VS Code Dark": vscodeDark,
  "GitHub Dark": githubDark,
  "GitHub Light": githubLight,
  "Material Dark": materialDark,
  Dracula: dracula,
  Nord: nord,
  Okaidia: okaidia,
  Sublime: sublime,
};

const LANGUAGE_EXTENSIONS = {
  javascript: javascript(),
  typescript: javascript({ typescript: true }),
  python: python(),
  cpp: cpp(),
  c: cpp(),
  java: java(),
  rust: rust(),
  go: go(),
  // Fallbacks for languages without dedicated extensions
  csharp: javascript(),
  php: javascript(),
  ruby: javascript(),
  R: javascript(),
  lua: javascript(),
  objectivec: cpp(),
  vb: javascript(),
  fsharp: javascript(),
};

export function getLanguageExtension(language: Language) {
  return LANGUAGE_EXTENSIONS[language] || javascript();
}

export function getTheme(themeName: string) {
  return EDITOR_THEMES[themeName as keyof typeof EDITOR_THEMES] || vscodeDark;
}
