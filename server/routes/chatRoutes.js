import express from "express";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { messages } = req.body;

    if (!Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({
        error: "Messages are required.",
      });
    }

    const safeMessages = messages.slice(-10).map(({ role, content }) => ({
      role,
      content: String(content).slice(0, 500),
    }));

    const ollamaResponse = await fetch(`${process.env.OLLAMA_URL}/api/chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: process.env.OLLAMA_MODEL,
        stream: false,
        messages: [
          {
            role: "system",
            content: `
            You are Aria's portfolio assistant.

Only answer questions about Aria's professional background.
Be friendly, professional, and concise.
Never invent information.
If the answer is unavailable, suggest contacting Aria.

ARIA'S INFORMATION:

Skills:
- React
- TypeScript
- JavaScript
- Tailwind CSS
- Node.js
- Express
- MySQL

Projects:
- Add Aria's projects here.

Experience:
- Add Aria's work and internship experience here.
            `,
          },
          ...safeMessages,
        ],
      }),
    });

    if (!ollamaResponse.ok) {
      throw new Error(`Ollama returned ${ollamaResponse.status}`);
    }

    const data = await ollamaResponse.json();

    return res.json({
      reply: data.message.content,
    });
  } catch (error) {
    console.error("Chat route error:", error);

    return res.status(500).json({
      error: error instanceof Error ? error.message : String(error),
    });
  }
});

export default router;
