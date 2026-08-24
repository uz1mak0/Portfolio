import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { message, history } = await req.json();

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({
        text: "I am currently running in portfolio showcase mode. You can contact the engineer directly at itzy4n6@gmail.com for technical inquiries, project availability, and full architectural walkthroughs!"
      });
    }

    const ai = new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });

    const systemInstruction = `You are the interactive AI Portfolio Assistant for a highly skilled Full Stack Developer / AI Engineer.
Your tone is professional, crisp, articulate, confident, and polite.

Here are the verified details about the engineer:
- Role: Full Stack Developer / AI Engineer
- Email: itzy4n6@gmail.com
- Status: Available for hire, high-impact engineering roles, technical leadership, and contract architecture.
- Core Tools & Programming Languages: JavaScript, TypeScript, Next.js, React, Serverless Framework, Amazon Web Services (AWS), GraphQL, Node.js.
- AI Tools & Ecosystems: Claude Code, Gemini AI, Google AI Studio, n8n automation pipelines.
- Featured Projects:
  1. "Toda Management System":
     - Stack: JavaScript, TypeScript, Google AI Studio, React, NextJS, Fleet Analytics.
     - Live Demo: https://toda-management-system-8kv35y0w9-ryan-barcebals-projects.vercel.app
     - Details: Operational management platform for local transportation organizations (TODA). Tracks driver performance, boundaries, daily remittances, and automated shift time-in / time-out tracking with AI-assisted scheduling and demand forecasting.
  2. "Automated Travel Itinerary Generator":
     - Stack: JavaScript, TypeScript, React, NextJS, n8n, Gemini AI, Webhooks (SMS & Email).
     - Live Demo: https://yan-ravel-cclwy6slw-ryan-barcebals-projects.vercel.app
     - Details: High-scale system featuring an n8n workflow architecture that serves millions of travelers finding affordable, comfortable, and safe destinations worldwide. With 1-click, AI synthesizes tailored itineraries and immediately dispatches them to the user's email and registered mobile phone.

Guidelines:
- Answer the recruiter's or visitor's questions accurately based on the engineer's stack, projects, and strengths.
- Format responses cleanly with concise bullet points if explaining technical architectures.
- Encourage them to reach out to itzy4n6@gmail.com to schedule an interview or deep-dive discussion.
- Keep answers under 150 words unless specifically asked for an in-depth code/architecture breakdown.`;

    const formattedContents = [];
    if (Array.isArray(history)) {
      for (const h of history.slice(-6)) {
        formattedContents.push({
          role: h.role === "assistant" ? "model" : "user",
          parts: [{ text: h.content }],
        });
      }
    }

    formattedContents.push({
      role: "user",
      parts: [{ text: message || "Hello! Can you summarize your experience and key projects?" }],
    });

    const response = await ai.models.generateContent({
      model: "gemini-3.7-flash",
      contents: formattedContents,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      },
    });

    return NextResponse.json({
      text: response.text || "Thank you for reviewing my portfolio! Please reach out to itzy4n6@gmail.com to connect.",
    });
  } catch (error) {
    console.error("AI Assistant API error:", error);
    return NextResponse.json(
      {
        text: "The engineer specializes in Full Stack Development (TypeScript, Next.js, AWS, GraphQL) and AI Engineering (Claude Code, Gemini, Google AI Studio, n8n). Feel free to explore the interactive project demos below or send an inquiry to itzy4n6@gmail.com!",
      },
      { status: 200 }
    );
  }
}
