import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

// Initialize OpenAI with a placeholder API key for build time
// In production, this should be replaced with a real API key
const openai = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY || process.env.OPENAI_API_KEY || 'placeholder-key-for-build-time',
  baseURL: "https://openrouter.ai/api/v1",
  dangerouslyAllowBrowser: true,
});

export async function POST(request: NextRequest) {
  try {
    const { scenario, language, location } = await request.json();

    // Check if we have a valid API key (not the placeholder)
    const apiKey = process.env.OPENROUTER_API_KEY || process.env.OPENAI_API_KEY;
    let scriptText = '';
    
    if (apiKey && apiKey !== 'placeholder-key-for-build-time') {
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

      scriptText = completion.choices[0]?.message?.content || '';
    } else {
      // Fallback content when API key is not available
      scriptText = language === 'es' 
        ? `Este es un texto de ejemplo para un escenario de "${scenario}". En producción, se generaría contenido real utilizando la API de OpenAI.`
        : `This is sample text for a "${scenario}" scenario. In production, real content would be generated using the OpenAI API.`;
    }

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
