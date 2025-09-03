import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY || process.env.OPENAI_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
  dangerouslyAllowBrowser: true,
});

export async function POST(request: NextRequest) {
  try {
    const { scenario, language, location } = await request.json();

    const prompt = `Generate a legal script for citizens during a ${scenario} encounter with law enforcement. 

Requirements:
- Language: ${language === 'es' ? 'Spanish' : 'English'}
- Location context: ${location || 'United States'}
- Must be respectful and non-confrontational
- Should assert constitutional rights appropriately
- Keep it concise (2-3 sentences max)
- Focus on de-escalation while protecting rights

Scenario: ${scenario}

Important: This is for educational purposes only and not legal advice. Generate a respectful script that helps citizens communicate their rights clearly.`;

    const completion = await openai.chat.completions.create({
      model: "google/gemini-2.0-flash-001",
      messages: [
        {
          role: "system",
          content: "You are a legal education assistant helping citizens understand their rights. Always emphasize that this is educational content, not legal advice."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      max_tokens: 200,
      temperature: 0.3,
    });

    const scriptText = completion.choices[0]?.message?.content || '';

    return NextResponse.json({
      scriptId: crypto.randomUUID(),
      title: `${scenario} Script`,
      scriptText,
      language,
      scenario,
      createdAt: new Date(),
    });

  } catch (error) {
    console.error('Error generating script:', error);
    return NextResponse.json(
      { error: 'Failed to generate script' },
      { status: 500 }
    );
  }
}
