# Carly's Portfolio 

A full-stack personal portfolio website built to showcase my software development projects, UI/UX work, technical skills, and experience.

Rather than building the portfolio as a completely static website, I created a full-stack application with a React frontend, Express backend, MySQL database, and an AI-powered portfolio assistant.

## Features

- Responsive portfolio design for desktop and mobile
- Software development project showcase
- UI/UX project showcase
- Dynamic project and skill data retrieved from a MySQL database
- Interactive project cards and hover effects
- Scroll-based animations and parallax effects
- Custom cursor and visual effects
- Responsive navigation
- AI-powered portfolio chatbot
- Full-stack REST API
- Deployed frontend and backend

## AI Portfolio Assistant

The portfolio includes an interactive AI chatbot that allows visitors to ask questions about my:

- Projects
- Technical skills
- Experience
- Portfolio

The React frontend sends the conversation to my Express API, which communicates with a locally hosted Ollama language model.

The conversation history is limited before being sent to the model to keep requests lightweight and focused.

### Chat Architecture

React Client
→ Express API
→ Ollama
→ Express API
→ React Client

## Tech Stack

### Frontend

- React
- TypeScript
- Vite
- Tailwind CSS
- HTML
- CSS

### Backend

- Node.js
- Express.js
- JavaScript
- REST APIs

### Database

- MySQL
- Railway

### AI

- Ollama
- Local Large Language Model (LLM)

### Deployment

- Vercel
- Railway

## Project Structure

```text
portfolio/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   └── ...
│   ├── package.json
│   └── vite.config.ts
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── routes/
│   ├── package.json
│   └── server.js
│
└── .gitignore
