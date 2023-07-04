import openaiClient from "./api";

const generate = async (queryDescription) => {
  const response = await openaiClient.createCompletion({
    model: "text-davinci-003",
    prompt: `give some career guidance on :\n\n${queryDescription}`,
    max_tokens: 1,
    temperature: 0,
  });
  return response.data.choices[0].text;
};

export default generate;
