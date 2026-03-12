'use server';
/**
 * @fileOverview An AI-powered tool that provides personalized style inspirations and fabric combination
 * suggestions based on client's event type, aesthetic preferences, and garment choices.
 *
 * - personalizedStyleAdvisor - A function that handles the personalized style advising process.
 * - PersonalizedStyleAdvisorInput - The input type for the personalizedStyleAdvisor function.
 * - PersonalizedStyleAdvisorOutput - The return type for the personalizedStyleAdvisor function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const PersonalizedStyleAdvisorInputSchema = z.object({
  eventType: z
    .string()
    .describe(
      'The type of event for which the garment is being selected (e.g., wedding, business meeting, gala, casual outing).' 
    ),
  aestheticPreferences: z
    .string()
    .describe(
      'The client\'s preferred aesthetic or style (e.g., classic, modern, avant-garde, minimalist, bohemian).' 
    ),
  garmentChoice: z
    .string()
    .describe(
      'The specific type of garment the client is interested in (e.g., blazer, tuxedo, sherwani, suit).' 
    ),
});
export type PersonalizedStyleAdvisorInput = z.infer<
  typeof PersonalizedStyleAdvisorInputSchema
>;

const PersonalizedStyleAdvisorOutputSchema = z.object({
  suitStyle: z
    .string()
    .describe(
      'Recommended suit style, considering the event, aesthetic, and garment choice.'
    ),
  colorPalette: z
    .string()
    .describe(
      'Recommended color palette for the outfit, including primary and accent colors.'
    ),
  fabricCombinations: z
    .string()
    .describe(
      'Recommended fabric combinations for the garment, considering durability, feel, and drape.'
    ),
  inspirationMessage: z
    .string()
    .describe(
      'A personalized message explaining the recommendations and offering styling tips.'
    ),
});
export type PersonalizedStyleAdvisorOutput = z.infer<
  typeof PersonalizedStyleAdvisorOutputSchema
>;

export async function personalizedStyleAdvisor(
  input: PersonalizedStyleAdvisorInput
): Promise<PersonalizedStyleAdvisorOutput> {
  return personalizedStyleAdvisorFlow(input);
}

const personalizedStyleAdvisorPrompt = ai.definePrompt({
  name: 'personalizedStyleAdvisorPrompt',
  input: { schema: PersonalizedStyleAdvisorInputSchema },
  output: { schema: PersonalizedStyleAdvisorOutputSchema },
  prompt: `You are an expert style advisor for MFK International, a luxury bespoke tailoring house. Your goal is to provide personalized recommendations for suit styles, color palettes, and fabric combinations based on a client's specific needs.

The client is planning for a "{{{eventType}}}" event.
Their aesthetic preference is "{{{aestheticPreferences}}}".
They are interested in a "{{{garmentChoice}}}".

Based on this information, provide comprehensive and sophisticated recommendations. Ensure your suggestions align with luxury bespoke tailoring standards.

Output your recommendations in a JSON object with the following fields:
- suitStyle: A detailed description of the recommended suit style.
- colorPalette: A sophisticated color palette suggestion.
- fabricCombinations: Elegant fabric combinations suitable for the garment and occasion.
- inspirationMessage: A personalized message offering styling tips and explaining your choices.`,
});

const personalizedStyleAdvisorFlow = ai.defineFlow(
  {
    name: 'personalizedStyleAdvisorFlow',
    inputSchema: PersonalizedStyleAdvisorInputSchema,
    outputSchema: PersonalizedStyleAdvisorOutputSchema,
  },
  async (input) => {
    const { output } = await personalizedStyleAdvisorPrompt(input);
    return output!;
  }
);
