"use client";

import { useState, useEffect, useCallback } from "react";
import { io, type Socket } from "socket.io-client";
import {
  submitCode,
  checkServerHealth,
  type SubmissionResponse,
} from "../lib/judge";
import { LANGUAGES, type Language } from "@/lib/constants";

export function useCodeExecution() {
  const [output, setOutput] = useState<SubmissionResponse | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [socket, setSocket] = useState<Socket | null>(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const socketUrl =
      process.env.NEXT_PUBLIC_SOCKET_URL || "http://localhost:8080";
    const socketInstance = io(socketUrl, {
      transports: ["websocket"],
      reconnection: true,
      reconnectionAttempts: 5,
      reconnectionDelay: 1000,
    });

    socketInstance.on("connect", () => {
      console.log("Connected to WebSocket server");
      setIsConnected(true);
      setError(null);
    });

    socketInstance.on("submissionResult", (result: SubmissionResponse) => {
      console.log("Received result:", result);
      setOutput(result);
      setIsRunning(false);
    });

    socketInstance.on("disconnect", () => {
      console.log("Disconnected from WebSocket server");
      setIsConnected(false);
    });

    socketInstance.on("connect_error", (error) => {
      console.error("Socket connection error:", error);
      setError("Failed to connect to execution server");
      setIsConnected(false);
      setIsRunning(false);
    });

    setSocket(socketInstance);

    // Check server health on mount
    checkServerHealth().then((isHealthy) => {
      if (!isHealthy) {
        setError("Execution server is not available");
      }
    });

    return () => {
      socketInstance.disconnect();
    };
  }, []);

  const runCode = useCallback(
    async (code: string, language: Language) => {
      if (!code.trim()) {
        setError("Please enter some code to execute");
        return;
      }

      if (!isConnected) {
        setError("Not connected to execution server");
        return;
      }

      try {
        setIsRunning(true);
        setOutput(null);
        setError(null);

        const languageId = LANGUAGES[language];
        await submitCode(code, languageId);

        // The result will come through the WebSocket connection
      } catch (err) {
        console.error("Error running code:", err);
        setError(err instanceof Error ? err.message : "Failed to execute code");
        setIsRunning(false);
      }
    },
    [isConnected],
  );

  const stopExecution = useCallback(() => {
    setIsRunning(false);
    // In a real implementation, you might send a stop signal to the backend
  }, []);

  return {
    output,
    isRunning,
    error,
    isConnected,
    runCode,
    stopExecution,
  };
}
