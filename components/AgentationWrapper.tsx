"use client";

import { useEffect, useState } from "react";

export default function AgentationWrapper() {
  const [AgentationComponent, setAgentationComponent] = useState<React.ComponentType<Record<string, unknown>> | null>(null);

  useEffect(() => {
    if (process.env.NODE_ENV !== "development") return;
    import("agentation").then((mod) => {
      setAgentationComponent(() => mod.Agentation);
    });
  }, []);

  if (process.env.NODE_ENV !== "development" || !AgentationComponent) return null;

  return (
    <AgentationComponent
      endpoint="http://localhost:4747"
      onSessionCreated={(sessionId: string) => {
        console.log("[Agentation] Session started:", sessionId);
      }}
    />
  );
}
