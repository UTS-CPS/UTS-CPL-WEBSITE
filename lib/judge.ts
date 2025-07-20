export interface SubmissionResponse {
  stdout: string;
  stderr?: string;
  status_id: number;
  time: string;
  memory: number;
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";

export async function submitCode(
  code: string,
  languageId: number,
): Promise<SubmissionResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/submissions/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        source_code: code,
        language_id: languageId,
      }),
      // Next.js fetch enhancements
      cache: "no-store", // Don't cache submission requests
      signal: AbortSignal.timeout(30000), // 30 second timeout
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error submitting code:", error);

    if (error instanceof Error) {
      if (error.name === "AbortError") {
        throw new Error("Request timed out. Please try again.");
      }
      throw new Error(`Failed to submit code: ${error.message}`);
    }

    throw new Error("Failed to submit code for execution");
  }
}

// Optional: Add a health check function
export async function checkServerHealth(): Promise<boolean> {
  try {
    const response = await fetch(`${API_BASE_URL}/health`, {
      method: "GET",
      cache: "no-store",
      signal: AbortSignal.timeout(5000),
    });

    return response.ok;
  } catch {
    return false;
  }
}
