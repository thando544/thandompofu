import { AnimatePresence, motion } from "motion/react";
import { Bot, Send, Sparkles, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import type { FormEvent } from "react";
import { useLocation } from "react-router-dom";
import {
  ASSISTANT_WEBHOOK_URL,
  buildAssistantKnowledge,
} from "../../data/assistantKnowledge";
import { getConsent, getOrCreateVisitorId } from "../../lib/cookies";
import { LogoMark } from "../ui/LogoMark";

type Message = {
  role: "assistant" | "visitor";
  text: string;
};

const starterPrompts = [
  "What kind of systems does Thando build?",
  "Show me his best projects.",
  "How can I contact him?",
];

export function FloatingAssistant() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const [hasVisitorMessage, setHasVisitorMessage] = useState(false);
  const location = useLocation();
  const endpoint =
    (import.meta.env.VITE_N8N_ASSISTANT_URL as string | undefined) ||
    ASSISTANT_WEBHOOK_URL;
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      text: "Hi, I am Thando's AI guide. Ask me about his projects, stack, architecture approach, or availability.",
    },
  ]);

  const visitorContext = useMemo(() => {
    const consent = getConsent();
    return {
      consent,
      visitorId: consent === "accepted" ? getOrCreateVisitorId() : "",
      sessionId: consent === "accepted" ? getOrCreateVisitorId() : "anonymous",
      path: location.pathname,
      referrer: document.referrer,
      userAgent: navigator.userAgent,
      timestamp: new Date().toISOString(),
    };
  }, [location.pathname]);

  const assistantKnowledge = useMemo(() => buildAssistantKnowledge(), []);

  useEffect(() => {
    if (!open) {
      return;
    }

    bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, sending, open]);

  async function submitMessage(text: string) {
    const clean = text.trim();
    if (!clean) {
      return;
    }

    setMessages((current) => [...current, { role: "visitor", text: clean }]);
    setHasVisitorMessage(true);
    setInput("");

    setSending(true);
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "sendMessage",
          message: clean,
          chatInput: clean,
          sessionId: visitorContext.sessionId,
          context: visitorContext,
          knowledge: assistantKnowledge,
          conversation: [...messages, { role: "visitor", text: clean }].slice(-8),
          source: "thandompofu.com-floating-assistant",
        }),
      });
      const data = (await response.json()) as {
        reply?: string;
        message?: string;
        output?: string;
        text?: string;
      };
      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          text:
            data.reply ||
            data.output ||
            data.text ||
            data.message ||
            "I received that. The workflow did not return a text reply yet.",
        },
      ]);
    } catch {
      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          text: "I could not reach the n8n workflow right now. The widget is still active, but the webhook needs to be online.",
        },
      ]);
    } finally {
      setSending(false);
    }
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void submitMessage(input);
  }

  return (
    <div className="fixed bottom-5 right-5 z-[85]">
      <AnimatePresence>
        {open ? (
          <motion.section
            className="assistant-panel mb-3 flex w-[min(92vw,390px)] flex-col"
            initial={{ opacity: 0, y: 18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.96 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-between border-b border-neutral-900 p-4">
              <div className="flex items-center gap-3">
                <span className="assistant-orb">
                  <Bot className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-sm font-medium text-white">Thando AI</p>
                  <p className="font-mono text-[11px] text-neutral-600">
                    n8n assistant / connected path
                  </p>
                </div>
              </div>
              <button
                type="button"
                aria-label="Close assistant"
                className="rounded p-1 text-neutral-500 transition hover:bg-neutral-900 hover:text-white"
                onClick={() => setOpen(false)}
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div
              ref={scrollRef}
              className="assistant-scroll min-h-0 flex-1 space-y-3 overflow-y-auto p-4"
            >
              {messages.map((message, index) => (
                <motion.div
                  key={`${message.role}-${index}`}
                  className={`assistant-message ${
                    message.role === "visitor"
                      ? "assistant-message-user"
                      : "assistant-message-bot"
                  }`}
                  initial={{ opacity: 0, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                >
                  {message.text}
                </motion.div>
              ))}
              {sending ? <TypingIndicator /> : null}
              <div ref={bottomRef} />
            </div>

            <div className="border-t border-neutral-900 p-3">
              {!hasVisitorMessage ? (
                <div className="mb-3 flex flex-wrap gap-2">
                  {starterPrompts.map((prompt) => (
                    <button
                      key={prompt}
                      type="button"
                      className="rounded-full border border-neutral-800 px-3 py-1.5 text-xs text-neutral-400 transition hover:border-neutral-600 hover:text-white"
                      onClick={() => void submitMessage(prompt)}
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              ) : null}
              <form onSubmit={onSubmit} className="flex items-center gap-2">
                <input
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  placeholder="Ask about Thando..."
                  className="min-w-0 flex-1 rounded-full border border-neutral-800 bg-black px-4 py-2 text-sm text-white outline-none transition placeholder:text-neutral-600 focus:border-neutral-600"
                />
                <button
                  type="submit"
                  aria-label="Send message"
                  className="btn-primary-contrast inline-flex h-10 w-10 items-center justify-center rounded-full"
                  disabled={sending}
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
          </motion.section>
        ) : null}
      </AnimatePresence>

      <button
        type="button"
        className="assistant-launch"
        aria-label="Open AI assistant"
        onClick={() => setOpen((value) => !value)}
      >
        <Sparkles className="h-4 w-4" />
        <span>Ask AI</span>
      </button>
    </div>
  );
}

function TypingIndicator() {
  return (
    <motion.div
      className="assistant-typing"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.2 }}
    >
      <span className="assistant-typing-logo">
        <LogoMark />
      </span>
      <span className="assistant-typing-copy">
        <span>Thando AI is thinking</span>
        <span className="assistant-typing-dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
      </span>
    </motion.div>
  );
}
