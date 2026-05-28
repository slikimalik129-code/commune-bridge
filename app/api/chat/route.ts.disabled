import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {

  const body = await req.json();

  const completion = await openai.chat.completions.create({
    model: "gpt-4.1-mini",
    messages: [
      {
        role: "system",
        content:
          "You are COMMUNE Bridge AI, an advanced accessibility and communication assistant helping users communicate across languages and disabilities.",
      },
      {
        role: "user",
        content: body.message,
      },
    ],
  });

  return Response.json({
    reply: completion.choices[0].message.content,
  });
}