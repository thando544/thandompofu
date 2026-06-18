# Thando Mpofu Personal Website

Premium personal website for Thando Mpofu, built with React, TypeScript, Tailwind CSS, Motion, Lenis, and React Router.

## Commands

```bash
npm run dev
npm run build
npm run lint
```

## AI Assistant

The floating `Thando AI` widget posts to the n8n webhook configured in `src/data/assistantKnowledge.ts`.

Default webhook:

```txt
https://n8n.srv883957.hstgr.cloud/webhook/18b35d55-9147-4500-9930-028f058d2443/chat
```

You can override it with:

```env
VITE_N8N_ASSISTANT_URL=https://your-n8n-webhook-url
```

Payload sent to n8n:

```json
{
  "action": "sendMessage",
  "message": "visitor question",
  "chatInput": "visitor question",
  "sessionId": "visitor id or anonymous",
  "context": {
    "consent": "accepted",
    "visitorId": "uuid",
    "path": "/projects",
    "referrer": "",
    "timestamp": "..."
  },
  "knowledge": {
    "owner": {},
    "contact": [],
    "capabilities": [],
    "principles": [],
    "architecture": [],
    "stack": [],
    "projects": [],
    "assistantBehavior": {}
  },
  "conversation": [],
  "source": "thandompofu.com-floating-assistant"
}
```

The `knowledge` object is the clean context the n8n workflow should use to answer questions about Thando, his projects, stack, architecture style, availability, and contact options.
