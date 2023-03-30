import { Configuration, OpenAIApi } from 'openai';

export async function handler(message) {
    const configuration = new Configuration({
      apiKey: process.env.OPENAI,
    });
    const openai = new OpenAIApi(configuration);
    const response = openai.createCompletion({
      model: "text-davinci-003",
      prompt:
        `Human: ${message}\nAI: `,
      temperature: 0.9,
      max_tokens: 100,
      top_p: 1,
      frequency_penalty: 0.0,
      presence_penalty: 0.6,
      stop: [" Human:", " AI:"],
    });
    return response;
  }