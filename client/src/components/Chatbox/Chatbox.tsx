import { useState } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const startingMessage: Message = {
  role: "assistant",
  content:
    "Hi there! ✨ I'm Carly's little helper. Ask me anything about her work, skills, or projects!",
};

const Chatbox = () => {
  const [active, setActive] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([startingMessage]);
  const [loading, setLoading] = useState(false);

  const API_URL = import.meta.env.VITE_API_URL;
  // const API_URL = "http://localhost:3000";

  const sendMessage = async () => {
    const question = input.trim();

    if (!question || loading) return;

    const userMessage: Message = {
      role: "user",
      content: question,
    };

    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/api/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          // Don't send the hardcoded greeting
          messages: updatedMessages.slice(1),
        }),
      });

      const responseText = await response.text();

      if (!response.ok) {
        throw new Error(responseText || `Backend returned ${response.status}`);
      }

      if (!responseText) {
        throw new Error("The backend returned an empty response.");
      }

      const data: { reply: string } = JSON.parse(responseText);

      const assistantMessage: Message = {
        role: "assistant",
        content: data.reply,
      };

      setMessages((previousMessages) => [
        ...previousMessages,
        assistantMessage,
      ]);
    } catch (error) {
      console.error("CHAT ERROR:", error);

      const errorMessage: Message = {
        role: "assistant",
        content:
          error instanceof Error ? error.message : "Unknown error occurred",
      };

      setMessages((previousMessages) => [...previousMessages, errorMessage]);
    } finally {
      // This always runs, whether the request succeeds or fails
      setLoading(false);
    }
  };

  return (
    <div className="h-auto w-auto">
      {/* Chat window */}
      <div
        className={`${
          active ? "flex" : "hidden"
        } fixed right-5 bottom-25 z-80 h-[60dvh] w-90 flex-col overflow-hidden rounded-2xl  max-h-150`}
      >
        {/* Header */}
        <div className="h-auto w-full bg-pink-200/10 backdrop-blur-2xl border border-[#342a38] rounded-t-2xl">
          <div className="p-5 text-white font-semibold">❤️ Ask Carly's Bot</div>
        </div>

        {/* Message area */}
        <div className="bg-[#120817]/20 backdrop-blur-2xl flex flex-1 flex-col overflow-y-auto pt-5 overflow-x-hidden wrap-break-word">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`mb-5 h-auto w-auto max-w-70 p-3 ${
                message.role === "assistant"
                  ? "text-white ml-5 self-start rounded-t-2xl rounded-br-2xl bg-[#120817] text-wrap"
                  : "mr-5 self-end rounded-t-2xl rounded-bl-2xl bg-pink-400 text-wrap"
              }`}
            >
              {message.content}
            </div>
          ))}

          {/* Temporary message shown while Ollama is responding */}
          {loading && (
            <div className="ml-5 mb-5 self-start rounded-t-2xl rounded-br-2xl bg-green-200 p-3">
              Thinking...
            </div>
          )}
        </div>

        {/* Input area */}
        <div className="h-auto w-full border border-[#2d1a36] backdrop-blur-2xl rounded-b-2xl bg-[#120817]/20">
          <form
            className="flex p-5"
            onSubmit={(event) => {
              event.preventDefault();
              sendMessage();
            }}
          >
            <input
              type="text"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask me anything..."
              maxLength={500}
              disabled={loading}
              className="text-white border-[#2d1a36] min-w-0 flex-1 rounded-full bg-black/30 px-3 disabled:opacity-60"
            />

            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="hover:scale-107 duration-100 easy-in ml-3 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-pink-400 disabled:cursor-not-allowed disabled:opacity-50"
              aria-label="Send message"
            >
              <span className="material-symbols-outlined">send</span>
            </button>
          </form>
        </div>
      </div>

      {/* Open/close button */}
      <button
        type="button"
        onClick={() => setActive((previous) => !previous)}
        className="hover:scale-107 duration-100 easy-in fixed right-5 bottom-5 z-90 flex h-15 w-15 cursor-pointer items-center justify-center rounded-full bg-pink-400 [box-shadow:0_0_20px_#b8476f]"
        aria-label={active ? "Close chat" : "Open chat"}
      >
        <span className="material-symbols-outlined">
          {active ? "close" : "chat_bubble"}
        </span>
      </button>
    </div>
  );
};

export default Chatbox;
