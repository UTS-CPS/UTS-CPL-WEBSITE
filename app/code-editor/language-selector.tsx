"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LANGUAGES, type Language } from "@/lib/constants";
import { ChevronDown, Code } from "lucide-react";

interface LanguageSelectorProps {
  language: Language;
  onSelect: (language: Language) => void;
}

export function LanguageSelector({
  language,
  onSelect,
}: LanguageSelectorProps) {
  return (
    <div className="flex items-center gap-2">
      <Code className="h-4 w-4 text-muted-foreground" />
      <span className="text-sm font-medium">Language:</span>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" className="h-8 bg-transparent">
            {language}
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="start"
          className="w-48 max-h-80 overflow-y-auto"
        >
          {Object.keys(LANGUAGES).map((lang) => (
            <DropdownMenuItem
              key={lang}
              onClick={() => onSelect(lang as Language)}
              className="cursor-pointer"
            >
              {lang}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
