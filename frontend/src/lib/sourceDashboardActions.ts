export type SourceDashboardAction = {
  id: string;
  label: string;
  description: string;
  href: string;
  sourceProjects: string[];
  examples: string[];
  count: number;
};

export const sourceDashboardActions: SourceDashboardAction[] = [
  {
    "id": "ai-assistant",
    "label": "AI Assistant",
    "description": "Run source-derived AI assistant workflows and prompts.",
    "href": "/features/ai-tools",
    "sourceProjects": [
      "AIMonitorrealtimeaudi"
    ],
    "examples": [
      "client/src/pages/AIToolsPage",
      "client/src/pages/GapAgentic",
      "server/routes/ai",
      "server/routes/maintenance",
      "server/routes/passenger-safety-agent",
      "server/routes/safety-coach-agent"
    ],
    "count": 1
  }
];
