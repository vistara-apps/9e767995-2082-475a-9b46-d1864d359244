import { LegalCard, Script } from '../types';

export const mockLegalCards: LegalCard[] = [
  {
    cardId: '1',
    title: 'Traffic Stop Rights',
    content: `# Your Rights During a Traffic Stop

## What You Must Do:
- Pull over safely and promptly
- Keep hands visible on steering wheel
- Provide license, registration, and insurance when requested

## What You DON'T Have to Do:
- Answer questions beyond identifying yourself
- Allow searches without a warrant (unless you consent)
- Exit the vehicle unless ordered by officer

## Important Reminders:
- Stay calm and polite
- Don't argue - save it for court
- Ask "Am I free to leave?" if unclear about detention`,
    languages: ['en', 'es'],
    locationContext: 'US',
    createdAt: new Date(),
  },
  {
    cardId: '2',
    title: 'Police Encounter Rights',
    content: `# Your Rights During Police Encounters

## Know Your Rights:
- You have the right to remain silent
- You have the right to refuse searches
- You have the right to ask if you're free to leave

## What to Say:
- "I'm going to remain silent"
- "I do not consent to searches"
- "Am I free to leave?"

## What NOT to Do:
- Don't run or resist
- Don't lie or provide false information
- Don't consent to searches unless required`,
    languages: ['en', 'es'],
    locationContext: 'US',
    createdAt: new Date(),
  },
];

export const mockScripts: Script[] = [
  {
    scriptId: '1',
    title: 'Traffic Stop Script',
    scriptText: 'Officer, I understand you stopped me. I\'m going to keep my hands visible and comply with your lawful orders. I\'m exercising my right to remain silent. I do not consent to any searches. Am I free to leave?',
    language: 'en',
    scenario: 'traffic stop',
    createdAt: new Date(),
  },
  {
    scriptId: '2',
    title: 'Traffic Stop Script (Spanish)',
    scriptText: 'Oficial, entiendo que me detuvo. Voy a mantener mis manos visibles y cumplir con sus órdenes legales. Estoy ejerciendo mi derecho a permanecer en silencio. No consiento ninguna búsqueda. ¿Soy libre de irme?',
    language: 'es',
    scenario: 'traffic stop',
    createdAt: new Date(),
  },
  {
    scriptId: '3',
    title: 'General Encounter Script',
    scriptText: 'Officer, I\'m exercising my right to remain silent. I do not consent to any searches. Unless I\'m under arrest, I\'d like to leave. If I am under arrest, I want to speak to a lawyer immediately.',
    language: 'en',
    scenario: 'general encounter',
    createdAt: new Date(),
  },
];
