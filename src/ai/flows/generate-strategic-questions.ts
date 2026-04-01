'use server';
/**
 * @fileOverview A Genkit flow for generating personalized strategic questions for potential clients.
 *
 * - generateStrategicQuestions - A function that handles the generation of strategic questions.
 * - GenerateStrategicQuestionsInput - The input type for the generateStrategicQuestions function.
 * - GenerateStrategicQuestionsOutput - The return type for the generateStrategicQuestions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateStrategicQuestionsInputSchema = z.object({
  businessType: z
    .string()
    .describe('The type of business the client operates.'),
  challenges: z
    .string()
    .describe('The current challenges the client is facing.'),
});
export type GenerateStrategicQuestionsInput = z.infer<
  typeof GenerateStrategicQuestionsInputSchema
>;

const GenerateStrategicQuestionsOutputSchema = z
  .array(z.string())
  .describe('A list of strategic questions.');
export type GenerateStrategicQuestionsOutput = z.infer<
  typeof GenerateStrategicQuestionsOutputSchema
>;

export async function generateStrategicQuestions(
  input: GenerateStrategicQuestionsInput
): Promise<GenerateStrategicQuestionsOutput> {
  return generateStrategicQuestionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateStrategicQuestionsPrompt',
  input: {schema: GenerateStrategicQuestionsInputSchema},
  output: {schema: GenerateStrategicQuestionsOutputSchema},
  prompt: `You are Knewrix, an end-to-end digital growth partner for ambitious businesses.
Your goal is to provide value by helping potential clients think strategically about their growth.

Based on the client's business type and described challenges, generate a list of 5-7 highly strategic, thought-provoking questions.
These questions should encourage deeper engagement, help the client clarify their needs, and showcase Knewrix's premium, strategic, and results-driven approach.
Ensure the questions are open-ended and focus on uncovering underlying strategic opportunities or roadblocks.

Business Type: {{{businessType}}}
Challenges: {{{challenges}}}

Strategic Questions:`,
});

const generateStrategicQuestionsFlow = ai.defineFlow(
  {
    name: 'generateStrategicQuestionsFlow',
    inputSchema: GenerateStrategicQuestionsInputSchema,
    outputSchema: GenerateStrategicQuestionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
