"use client";

import { Button } from "../components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import { LANGUAGES, type CODE_SNIPPETS } from "../lib/constants";
import { ChevronDown } from "lucide-react";

interface LanguageSelectorProps {
  language: keyof typeof CODE_SNIPPETS;
  onSelect: (language: keyof typeof CODE_SNIPPETS) => void;
}

const LanguageSelector = ({ language, onSelect }: LanguageSelectorProps) => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <span className="text-sm font-medium">Language:</span>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="h-8">
              {language}
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="start"
            className="w-[200px] max-h-[300px] overflow-y-auto"
          >
            {Object.keys(LANGUAGES).map((lang) => (
              <DropdownMenuItem
                key={lang}
                onClick={() => onSelect(lang as keyof typeof CODE_SNIPPETS)}
                className="cursor-pointer"
              >
                {lang}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default LanguageSelector;
