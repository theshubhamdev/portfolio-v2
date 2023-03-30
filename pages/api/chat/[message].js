import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: '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',
});

export default function hanlder(req, res) {
  const openai = new OpenAIApi(configuration);
  console.log(req)
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
    console.log(response);
//   res.status(200).json({ response })
  return response;
}
