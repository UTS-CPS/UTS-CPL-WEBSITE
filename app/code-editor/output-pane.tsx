"use client";

import type React from "react";
import { Play, StopCircle, Wifi, WifiOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useCodeExecution } from "@/hooks/use-code-execution";
import type { Language } from "@/lib/constants";

interface OutputPaneProps {
  editorRef: React.MutableRefObject<{ getValue: () => string } | null>;
  language: Language;
}

export function OutputPane({ editorRef, language }: OutputPaneProps) {
  const { output, isRunning, error, isConnected, runCode, stopExecution } =
    useCodeExecution();

  const handleRun = async () => {
    if (!editorRef.current) {
      return;
    }

    const code = editorRef.current.getValue();
    await runCode(code, language);
  };

  const getStatusBadge = () => {
    if (!output) return null;

    const statusMap = {
      3: { variant: "success" as const, label: "Accepted" },
      4: { variant: "destructive" as const, label: "Wrong Answer" },
      5: { variant: "destructive" as const, label: "Time Limit Exceeded" },
      6: { variant: "destructive" as const, label: "Compilation Error" },
      7: { variant: "destructive" as const, label: "Runtime Error" },
      8: { variant: "secondary" as const, label: "Memory Limit Exceeded" },
    };

    const status = statusMap[output.status_id as keyof typeof statusMap] || {
      variant: "outline" as const,
      label: `Status: ${output.status_id}`,
    };

    return <Badge variant={status.variant}>{status.label}</Badge>;
  };

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <h3 className="text-sm font-medium text-muted-foreground">Output</h3>
          {isConnected ? (
            <Wifi className="h-4 w-4 text-green-500" />
          ) : (
            <WifiOff className="h-4 w-4 text-red-500" />
          )}
        </div>
        <div className="flex items-center gap-2">
          {isRunning ? (
            <Button variant="outline" size="sm" onClick={stopExecution}>
              <StopCircle className="h-4 w-4 mr-2" />
              Stop
            </Button>
          ) : (
            <Button
              variant="outline"
              size="sm"
              onClick={handleRun}
              disabled={!isConnected}
            >
              <Play className="h-4 w-4 mr-2" />
              Run
            </Button>
          )}
          {getStatusBadge()}
        </div>
      </div>

      <div className="flex-1 border border-border rounded-md bg-black text-white p-4 overflow-y-auto font-mono text-sm">
        {isRunning ? (
          <div className="flex flex-col items-center justify-center h-full">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white mb-2" />
            <p>Running your code...</p>
          </div>
        ) : error ? (
          <div className="text-red-400">
            <p className="font-bold mb-2">Error:</p>
            <p>{error}</p>
            {!isConnected && (
              <p className="text-sm mt-2 text-gray-400">
                Check if the execution server is running on the configured URL.
              </p>
            )}
          </div>
        ) : output ? (
          <div className="space-y-4">
            {output.stdout && (
              <div>
                <p className="font-bold mb-2 text-green-400">Output:</p>
                <pre className="bg-gray-900 p-3 rounded whitespace-pre-wrap">
                  {output.stdout}
                </pre>
              </div>
            )}

            {output.stderr && (
              <div>
                <p className="font-bold mb-2 text-red-400">Errors:</p>
                <pre className="bg-gray-900 p-3 rounded text-red-400 whitespace-pre-wrap">
                  {output.stderr}
                </pre>
              </div>
            )}

            <Separator className="bg-gray-700" />

            <div className="flex gap-4 text-xs text-gray-400">
              <span>Time: {output.time || "N/A"}</span>
              <span>
                Memory:{" "}
                {output.memory
                  ? `${(output.memory / 1024).toFixed(2)} MB`
                  : "N/A"}
              </span>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full text-gray-500">
            <p>
              {isConnected
                ? "Run your code to see the output here"
                : "Connecting to execution server..."}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
