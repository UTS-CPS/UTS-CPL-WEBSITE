"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { THEMES } from "@/components/CodeEditor";
import { ChevronDown } from "lucide-react";

interface ThemeSelectorProps {
  theme: keyof typeof THEMES;
  onSelect: (theme: keyof typeof THEMES) => void;
}

export function ThemeSelector({ theme, onSelect }: ThemeSelectorProps) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <span className="text-sm font-medium">Editor Theme:</span>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="h-8 bg-transparent">
              {theme}
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="center" className="w-[200px]">
            {Object.keys(THEMES).map((themeName) => (
              <DropdownMenuItem
                key={themeName}
                onClick={() => onSelect(themeName as keyof typeof THEMES)}
                className="cursor-pointer"
              >
                {themeName}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
