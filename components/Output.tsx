"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { Play, StopCircle } from "lucide-react";
import { Button } from "../components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { LANGUAGES } from "@/lib/constants";
import { submitCode } from "@/lib/judge";
import type { SubmissionResponse } from "@/lib/judge";
import { io } from "socket.io-client";

interface OutputProps {
  editorRef: React.MutableRefObject<{ getValue: () => string } | null>;
  language: string;
}

const Output = ({ editorRef, language }: OutputProps) => {
  const [output, setOutput] = useState<SubmissionResponse | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [socket, setSocket] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Connect to WebSocket server
    const socketInstance = io("http://localhost:8080", {
      transports: ["websocket"],
      reconnection: true,
    });

    socketInstance.on("connect", () => {
      console.log("Connected to WebSocket server");
      setError(null);
    });

    socketInstance.on("submissionResult", (result) => {
      console.log("Received result:", result);
      setOutput(result);
      setIsRunning(false);
    });

    socketInstance.on("disconnect", () => {
      console.log("Disconnected from WebSocket server");
    });

    socketInstance.on("connect_error", (error: any) => {
      console.error("Socket connection error:", error);
      setError("Failed to connect to execution server");
      setIsRunning(false);
    });

    setSocket(socketInstance);

    // Cleanup on unmount
    return () => {
      socketInstance.disconnect();
    };
  }, []);

  const handleRun = async () => {
    if (!editorRef.current) {
      setError("Editor not ready");
      return;
    }

    try {
      setIsRunning(true);
      setOutput(null);
      setError(null);

      const code = editorRef.current.getValue();
      const response = await submitCode(
        code,
        LANGUAGES[language as keyof typeof LANGUAGES],
      );
      console.log("Submission sent:", response);
      // The backend will handle sending the result via WebSocket
    } catch (error) {
      console.error("Error submitting code:", error);
      setError("Failed to submit code for execution");
      setIsRunning(false);
    }
  };

  const handleStop = () => {
    // This would ideally send a signal to stop execution
    // For now, we'll just reset the UI state
    setIsRunning(false);
  };

  const getStatusBadge = () => {
    if (!output) return null;

    let variant: "default" | "success" | "warning" | "danger" | "info" =
      "default";
    let status = "Unknown";

    // Map status_id to human-readable status and color
    switch (output.status_id) {
      case 3:
        variant = "success";
        status = "Accepted";
        break;
      case 4:
        variant = "danger";
        status = "Wrong Answer";
        break;
      case 5:
        variant = "danger";
        status = "Time Limit Exceeded";
        break;
      case 6:
        variant = "danger";
        status = "Compilation Error";
        break;
      case 7:
        variant = "danger";
        status = "Runtime Error";
        break;
      case 8:
        variant = "warning";
        status = "Memory Limit Exceeded";
        break;
      default:
        variant = "info";
        status = `Status: ${output.status_id}`;
    }

    return <Badge variant={variant}>{status}</Badge>;
  };

  return (
    <div className="w-1/2 flex flex-col">
      <div className="flex items-center gap-2 mb-4">
        {isRunning ? (
          <Button
            variant="outline"
            size="sm"
            onClick={handleStop}
            className="gap-1"
          >
            <StopCircle className="h-4 w-4" />
            Stop
          </Button>
        ) : (
          <Button
            variant="outline"
            size="sm"
            onClick={handleRun}
            className="gap-1"
          >
            <Play className="h-4 w-4" />
            Run
          </Button>
        )}
        {getStatusBadge()}
      </div>

      <div className="flex-1 border border-border rounded-md bg-black text-white p-4 overflow-y-auto relative">
        {isRunning ? (
          <div className="flex flex-col items-center justify-center h-full">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white mb-2"></div>
            <p>Running your code...</p>
          </div>
        ) : error ? (
          <div className="text-red-400 p-2">
            <p className="font-bold">Error:</p>
            <p>{error}</p>
          </div>
        ) : output ? (
          <div className="flex flex-col gap-4">
            {output.stdout && (
              <div>
                <p className="font-bold mb-2">Output:</p>
                <pre className="bg-gray-900 p-2 rounded-md font-mono whitespace-pre-wrap">
                  {output.stdout}
                </pre>
              </div>
            )}

            {output.stderr && (
              <div>
                <p className="font-bold text-red-400 mb-2">Errors:</p>
                <pre className="bg-gray-900 p-2 rounded-md font-mono text-red-400 whitespace-pre-wrap">
                  {output.stderr}
                </pre>
              </div>
            )}

            <Separator />

            <div className="flex gap-4 text-sm">
              <span>Time: {output.time || "N/A"}</span>
              <span>
                Memory:{" "}
                {output.memory
                  ? (output.memory / 1024).toFixed(2) + " MB"
                  : "N/A"}
              </span>
            </div>
          </div>
        ) : (
          <p className="text-gray-500">Run your code to see the output here</p>
        )}
      </div>
    </div>
  );
};

export default Output;
