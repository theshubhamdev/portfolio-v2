import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: "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",
});

export default function hanlder(req, res) {
  const openai = new OpenAIApi(configuration);
  const response = openai.createCompletion({
    model: "text-davinci-003",
    prompt:
      `Human: ${req.message}\nAI: `,
    temperature: 0.9,
    max_tokens: 150,
    top_p: 1,
    frequency_penalty: 0.0,
    presence_penalty: 0.6,
    stop: [" Human:", " AI:"],
  });
  return response;
}
