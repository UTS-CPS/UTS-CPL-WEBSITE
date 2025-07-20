"use client";

import type React from "react";

import { useState } from "react";
import { Settings } from "lucide-react";
import { Button } from "../components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../components/ui/popover";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { Switch } from "../components/ui/switch";

interface EditorSettingsProps {
  tabSize: number;
  onChangeTabSize: (size: number) => void;
  vimMode: boolean;
  onToggleVimMode: (enabled: boolean) => void;
}

const EditorSettings = ({
  tabSize,
  onChangeTabSize,
  vimMode,
  onToggleVimMode,
}: EditorSettingsProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleTabSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseInt(e.target.value);
    if (!isNaN(value) && value >= 1 && value <= 8) {
      onChangeTabSize(value);
    }
  };

  const handleVimModeToggle = (checked: boolean) => {
    onToggleVimMode(checked);
  };

  return (
    <div>
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" size="sm" className="h-8 gap-1">
            <Settings className="h-4 w-4" />
            <span>Settings</span>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <div className="grid gap-4">
            <div className="space-y-2">
              <h4 className="font-medium leading-none">Editor Settings</h4>
              <p className="text-sm text-muted-foreground">
                Customize your coding environment
              </p>
            </div>
            <div className="grid gap-2">
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="tab-size">Tab Size</Label>
                <Input
                  id="tab-size"
                  type="number"
                  min={1}
                  max={8}
                  value={tabSize}
                  onChange={handleTabSizeChange}
                  className="col-span-2 h-8"
                />
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="vim-mode">Vim Mode</Label>
                <div className="flex items-center space-x-2 col-span-2">
                  <Switch
                    id="vim-mode"
                    checked={vimMode}
                    onCheckedChange={handleVimModeToggle}
                  />
                  <Label
                    htmlFor="vim-mode"
                    className="text-sm text-muted-foreground"
                  >
                    {vimMode ? "Enabled" : "Disabled"}
                  </Label>
                </div>
              </div>
              {vimMode && (
                <p className="text-xs text-muted-foreground mt-2">
                  Vim mode is active. Use Vim keybindings to navigate.
                </p>
              )}
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default EditorSettings;
