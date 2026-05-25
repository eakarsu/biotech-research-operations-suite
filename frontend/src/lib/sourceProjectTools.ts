export const sourceProjectTools = [
  {
    "id": "ai-monitorrealtimeaudi-source-workflow",
    "title": "AI Monitorrealtimeaudi Source Workflow",
    "category": "Source Project Coverage",
    "description": "Source-derived workflow coverage extracted from AIMonitorrealtimeaudi.",
    "defaultPrompt": "Use the extracted routes, APIs, prompts, and tool files from AIMonitorrealtimeaudi to identify missing merged-suite capabilities and next implementation steps.",
    "inputLabel": "AI Monitorrealtimeaudi source context",
    "outputLabel": "AI Monitorrealtimeaudi source analysis",
    "signals": [
      "server/routes/ai",
      "server/routes/maintenance",
      "server/routes/passenger-safety-agent",
      "server/routes/safety-coach-agent",
      "client/src/pages/AIToolsPage",
      "client/src/pages/GapAgentic"
    ]
  },
  {
    "id": "ai-monitorrealtimeaudi-ai-tools",
    "title": "AI Monitorrealtimeaudi AI Tools",
    "category": "Source AI Tools",
    "description": "AI/API/prompt coverage extracted from AIMonitorrealtimeaudi.",
    "defaultPrompt": "Review AIMonitorrealtimeaudi AI prompts, APIs, and tool files. Convert them into concrete AI cards, inputs, outputs, and audit actions for this merged suite.",
    "inputLabel": "AI Monitorrealtimeaudi AI prompt or tool context",
    "outputLabel": "AI Monitorrealtimeaudi AI tool response",
    "signals": [
      "server/routes/ai.js",
      "server/routes/maintenance.js",
      "server/routes/passenger-safety-agent.js",
      "server/routes/safety-coach-agent.js",
      "client/src/pages/AIToolsPage.js",
      "client/src/pages/GapAgentic.jsx"
    ]
  },
  {
    "id": "ai-monitorrealtimeaudi-ai-j615h1-exact-ai",
    "title": "AI Monitorrealtimeaudi: AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/ai.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI\" from AIMonitorrealtimeaudi. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI donor inputs",
    "outputLabel": "AI AI response",
    "signals": [
      "Captured At",
      "Claim Amount",
      "Claim Type",
      "Context",
      "Current Premium",
      "Description",
      "Driver Id",
      "Driver Id"
    ]
  },
  {
    "id": "ai-monitorrealtimeaudi-passenger-safety-agent-iublbm-exact-ai",
    "title": "AI Monitorrealtimeaudi: Passenger Safety Agent",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/passenger-safety-agent.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Passenger Safety Agent\" from AIMonitorrealtimeaudi. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Passenger Safety Agent donor inputs",
    "outputLabel": "Passenger Safety Agent AI response",
    "signals": [
      "server/routes/passenger-safety-agent.js"
    ]
  },
  {
    "id": "ai-monitorrealtimeaudi-safety-coach-agent-1ukj3c-exact-ai",
    "title": "AI Monitorrealtimeaudi: Safety Coach Agent",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/safety-coach-agent.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Safety Coach Agent\" from AIMonitorrealtimeaudi. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Safety Coach Agent donor inputs",
    "outputLabel": "Safety Coach Agent AI response",
    "signals": [
      "server/routes/safety-coach-agent.js"
    ]
  },
  {
    "id": "ai-monitorrealtimeaudi-ai-tools-page-uo1rbq-exact-ai",
    "title": "AI Monitorrealtimeaudi: AI Tools Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/AIToolsPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Tools Page\" from AIMonitorrealtimeaudi. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Tools Page donor inputs",
    "outputLabel": "AI Tools Page AI response",
    "signals": [
      "client/src/pages/AIToolsPage.js"
    ]
  },
  {
    "id": "ai-monitorrealtimeaudi-gap-agentic-amr2uz-exact-ai",
    "title": "AI Monitorrealtimeaudi: Gap Agentic",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/GapAgentic.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap Agentic\" from AIMonitorrealtimeaudi. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap Agentic donor inputs",
    "outputLabel": "Gap Agentic AI response",
    "signals": [
      "client/src/pages/GapAgentic.jsx"
    ]
  }
];
