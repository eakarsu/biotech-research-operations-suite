import type { FeatureContext, FeatureDefinition, PageDefinition } from '@/lib/unifiedApp';
import type { FeatureEntitySet } from '@/lib/featureEntities';
import type { FeatureSurface } from '@/lib/featureSurfaces';

export const sourceCustomFeatureCatalog: FeatureDefinition[] = [
  {
    "title": "AI Monitorrealtimeaudi Source Feature",
    "href": "/features/source-ai-monitorrealtimeaudi",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in AIMonitorrealtimeaudi: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "6 AI, prompt, tool, or workflow files captured"
    ]
  }
];

export const sourceCustomFeatureFamilies: Array<{ name: string; features: string[] }> = [
  {
    "name": "Source Project Features",
    "features": [
      "AI Monitorrealtimeaudi Source Feature"
    ]
  }
];

export const sourceCustomPageRegistry: Record<string, PageDefinition> = {
  "source-ai-monitorrealtimeaudi": {
    "title": "AI Monitorrealtimeaudi Source Feature",
    "eyebrow": "Source AI Workflows",
    "subtitle": "Merged custom workflow coverage from AIMonitorrealtimeaudi, converted into a usable suite feature page.",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in AIMonitorrealtimeaudi: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "6 AI, prompt, tool, or workflow files captured"
    ],
    "metrics": [
      {
        "label": "Routes",
        "value": "0",
        "note": "Source pages mapped"
      },
      {
        "label": "APIs",
        "value": "0",
        "note": "Source endpoints mapped"
      },
      {
        "label": "AI/Tools",
        "value": "6",
        "note": "Prompt, agent, or tool files mapped"
      }
    ]
  }
};

export const sourceCustomFeatureContexts: Record<string, FeatureContext> = {
  "AI Monitorrealtimeaudi Source Feature": {
    "sourceOwners": [
      "AIMonitorrealtimeaudi"
    ],
    "operatingQueues": [
      "AI",
      "Maintenance",
      "Passenger Safety Agent",
      "Safety Coach Agent"
    ],
    "outputs": [
      "AI Monitorrealtimeaudi merged workflow register",
      "AI Monitorrealtimeaudi API and route coverage map",
      "AI Monitorrealtimeaudi AI/tool implementation queue"
    ],
    "relatedRoutes": [
      {
        "label": "All Features",
        "href": "/features"
      },
      {
        "label": "AI Tools",
        "href": "/features/ai-tools"
      },
      {
        "label": "Dashboard",
        "href": "/dashboard"
      }
    ]
  }
};

export const sourceCustomFeatureSurfaceBySlug: Record<string, FeatureSurface> = {
  "source-ai-monitorrealtimeaudi": {
    "workItems": [
      {
        "id": "source-ai-monitorrealtimeaudi-work-1",
        "item": "AI",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for server/routes/ai.js"
      },
      {
        "id": "source-ai-monitorrealtimeaudi-work-2",
        "item": "Maintenance",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for server/routes/maintenance.js"
      },
      {
        "id": "source-ai-monitorrealtimeaudi-work-3",
        "item": "Passenger Safety Agent",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for server/routes/passenger-safety-agent.js"
      },
      {
        "id": "source-ai-monitorrealtimeaudi-work-4",
        "item": "Safety Coach Agent",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for server/routes/safety-coach-agent.js"
      },
      {
        "id": "source-ai-monitorrealtimeaudi-work-5",
        "item": "AI Tools Page",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for client/src/pages/AIToolsPage.js"
      },
      {
        "id": "source-ai-monitorrealtimeaudi-work-6",
        "item": "Gap Agentic",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for client/src/pages/GapAgentic.jsx"
      }
    ],
    "quickActions": [
      "Run source AI workflow",
      "Create implementation task",
      "Export source coverage"
    ],
    "controlChecks": [
      {
        "id": "source-ai-monitorrealtimeaudi-check-routes",
        "label": "Source routes reviewed for donor login leakage",
        "done": false
      },
      {
        "id": "source-ai-monitorrealtimeaudi-check-api",
        "label": "API behavior mapped to merged suite permissions",
        "done": true
      },
      {
        "id": "source-ai-monitorrealtimeaudi-check-ai",
        "label": "AI prompts/tools connected to the unified AI workbench",
        "done": true
      },
      {
        "id": "source-ai-monitorrealtimeaudi-check-ownership",
        "label": "Feature owner and suite destination confirmed",
        "done": true
      }
    ],
    "activityLog": [
      {
        "id": "source-ai-monitorrealtimeaudi-log-1",
        "message": "Deep-merge feature generated from AIMonitorrealtimeaudi",
        "at": "2026-05-24 18:45"
      },
      {
        "id": "source-ai-monitorrealtimeaudi-log-2",
        "message": "12 source signals converted into merged workflow coverage",
        "at": "2026-05-24 18:45"
      }
    ]
  }
};

export const sourceCustomFeatureEntitiesBySlug: Record<string, FeatureEntitySet> = {
  "source-ai-monitorrealtimeaudi": {
    "title": "AI Monitorrealtimeaudi Source Records",
    "columns": [
      "Name",
      "Status",
      "Owner",
      "Amount",
      "Due Date",
      "Priority"
    ],
    "rows": [
      {
        "id": "source-ai-monitorrealtimeaudi-entity-1",
        "name": "AI",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "High"
      },
      {
        "id": "source-ai-monitorrealtimeaudi-entity-2",
        "name": "Maintenance",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-monitorrealtimeaudi-entity-3",
        "name": "Passenger Safety Agent",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-monitorrealtimeaudi-entity-4",
        "name": "Safety Coach Agent",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-monitorrealtimeaudi-entity-5",
        "name": "AI Tools Page",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      }
    ]
  }
};

export const sourceCustomFeatureLinksByProject: Record<string, string> = {
  "AIMonitorrealtimeaudi": "/features/source-ai-monitorrealtimeaudi"
};
