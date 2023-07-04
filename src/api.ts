import { Configuration, OpenAIApi } from "openai";
import dotenv from "dotenv";
dotenv.config();

const OpenAIApiKey = process.env.OPENAI_KEY;

if (!OpenAIApiKey) {
  console.error("OpenaiAPI is not set");
  process.exit(1);
}

const configuration = new Configuration({
  apiKey: OpenAIApiKey,
});
const openai = new OpenAIApi(configuration);

export default openai;
